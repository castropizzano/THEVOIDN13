import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();
    console.log('Generating still with prompt:', prompt);

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY not configured");
    }

    // Generate image with Lovable AI
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview",
        messages: [
          {
            role: "user",
            content: `Create a cinematic still in 16:9 aspect ratio with the following description: ${prompt}. 
            
Style: dirty comic book art with heavy inks, analog print grain, gritty urban atmosphere, noir aesthetic.`
          }
        ],
        modalities: ["image", "text"]
      })
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "rate_limit" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "insufficient_credits" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    console.log('AI response received');
    console.log('Full response data:', JSON.stringify(data, null, 2));
    
    // Check if we have choices
    if (!data.choices || data.choices.length === 0) {
      console.error('No choices in response');
      throw new Error("No choices in AI response");
    }
    
    // Check message structure
    const message = data.choices[0]?.message;
    console.log('Message structure:', JSON.stringify(message, null, 2));
    
    // Try to get image from different possible paths
    let generatedImageUrl = null;
    
    // Path 1: Standard structure
    if (message?.images?.[0]?.image_url?.url) {
      generatedImageUrl = message.images[0].image_url.url;
    }
    // Path 2: Direct content
    else if (message?.content && typeof message.content === 'string' && message.content.includes('data:image')) {
      generatedImageUrl = message.content;
    }
    // Path 3: Check if image is in a different format
    else if (message?.images?.[0]) {
      console.log('Image object found:', JSON.stringify(message.images[0], null, 2));
      generatedImageUrl = message.images[0].url || message.images[0].image_url || message.images[0];
    }
    
    if (!generatedImageUrl) {
      console.error('No image URL found in response');
      throw new Error("No image generated - check logs for response structure");
    }
    
    console.log('Image URL extracted successfully');

    // Load watermark from assets
    const watermarkUrl = "https://mkigpkfahuqkqxocsyjn.supabase.co/storage/v1/object/public/assets/thevoidn13-watermark.png";
    let watermarkBase64 = "";
    
    try {
      const watermarkResponse = await fetch(watermarkUrl);
      if (watermarkResponse.ok) {
        const watermarkBlob = await watermarkResponse.blob();
        const watermarkArrayBuffer = await watermarkBlob.arrayBuffer();
        watermarkBase64 = btoa(String.fromCharCode(...new Uint8Array(watermarkArrayBuffer)));
        console.log('Watermark loaded');
      } else {
        console.warn('Watermark not found, proceeding without it');
      }
    } catch (error) {
      console.error('Error loading watermark:', error);
    }

    // Return both the generated image and watermark info
    return new Response(
      JSON.stringify({ 
        image: generatedImageUrl,
        watermark: watermarkBase64 ? `data:image/png;base64,${watermarkBase64}` : null
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in generate-cinematic-still:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
