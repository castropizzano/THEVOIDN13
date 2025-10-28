import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MASTER_PROMPT_BASE = `Cinematic still illustration in the visual style of "THEVØIDN13" neo-noir project.
Style: Neo-noir atmosphere, analog 35mm grain, ink texture and painterly lighting.
Lighting: Low key with cyan-blue + deep red + muted amber tones.
Visual: High contrast, strong shadows, film grain texture, illustration style.
Color Palette: Deep void black (#0C0C0C), blood trauma red (#A32424), urban haze blue (#657C8C).
Mood: Introspective, mysterious, cinematic framing with clean linework and balanced chiaroscuro.
Aspect ratio: Cinema widescreen 16:9 format MANDATORY (1920x1080 or 1280x720).
CRITICAL: DO NOT generate any text, titles, captions, numbers, or logos in the image.`;

const WATERMARK_INSTRUCTIONS = `
CRITICAL: Image MUST be in 16:9 cinema aspect ratio (1920x1080 or 1280x720).
CRITICAL: Do NOT add any text, scene numbers, titles, captions, glyphs, or logos. No typography. Pure visual storytelling only.
Note: Watermark is applied downstream by the application.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { script } = await req.json();
    
    // Server-side validation
    if (!script || typeof script !== 'string') {
      return new Response(
        JSON.stringify({ error: "Script is required and must be a string" }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    const trimmedScript = script.trim();
    
    if (trimmedScript.length < 10) {
      return new Response(
        JSON.stringify({ error: "Script too short (minimum 10 characters)" }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    if (trimmedScript.length > 2000) {
      return new Response(
        JSON.stringify({ error: "Script too long (maximum 2000 characters)" }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Validate characters (allow common characters including Portuguese)
    const validCharPattern = /^[\w\s.,!?'"\-—()áéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇ]+$/;
    if (!validCharPattern.test(trimmedScript)) {
      return new Response(
        JSON.stringify({ error: "Script contains invalid characters" }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Combine master prompt with user script and watermark instructions
    const fullPrompt = `${MASTER_PROMPT_BASE}\n\n${WATERMARK_INSTRUCTIONS}\n\nScene: ${trimmedScript}`;

    console.log("Generating comic panel with Nano Banana...");
    
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
            content: fullPrompt
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

    console.log("Comic panel generated successfully");

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
