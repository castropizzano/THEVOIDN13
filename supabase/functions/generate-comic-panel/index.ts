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
    const { script, aspectRatio = "16:9" } = await req.json();
    
    // Enhanced server-side validation
    if (!script || typeof script !== 'string') {
      return new Response(
        JSON.stringify({ error: "Script is required and must be a string" }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    const trimmedScript = script.trim();
    
    // Enforce strict length limits (increased to accommodate system prompt + scene prompt)
    if (trimmedScript.length < 10) {
      return new Response(
        JSON.stringify({ error: "Script too short (minimum 10 characters)" }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    if (trimmedScript.length > 10000) {
      return new Response(
        JSON.stringify({ error: "Script too long (maximum 10000 characters)" }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Log generation request for monitoring
    console.log(`THEVØIDN13 still generation requested. Script length: ${trimmedScript.length} chars, aspect ratio: ${aspectRatio}`);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // The script already contains the full prompt (system + scene)
    // Just add critical reminders
    const finalPrompt = `${trimmedScript}

CRITICAL REMINDERS:
- Aspect ratio MUST be ${aspectRatio} (horizontal/landscape)
- DO NOT add any text, titles, captions, numbers, or logos in the image
- Pure visual storytelling only
- Watermark will be applied downstream`;

    console.log("Generating THEVØIDN13 still with Nano Banana (Gemini 2.5 Flash Image Preview)...");
    
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-image-preview',
        messages: [
          {
            role: 'user',
            content: finalPrompt
          }
        ],
        modalities: ['image', 'text']
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        throw new Error("Rate limit exceeded. Please try again later.");
      }
      if (response.status === 402) {
        throw new Error("Payment required. Please add credits to your workspace.");
      }
      
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageUrl) {
      throw new Error("No image generated");
    }

    console.log("THEVØIDN13 still generated successfully");

    return new Response(
      JSON.stringify({ imageUrl }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error) {
    console.error('Error in generate-comic-panel:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});
