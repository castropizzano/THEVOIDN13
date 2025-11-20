import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Validation constants
const MAX_PROMPT_LENGTH = 500;
const MIN_PROMPT_LENGTH = 10;
const FORBIDDEN_PATTERNS = [
  /<script[^>]*>.*?<\/script>/gi,
  /javascript:/gi,
  /data:text\/html/gi
];

function validatePrompt(prompt: string): { valid: boolean; error?: string } {
  if (typeof prompt !== 'string') {
    return { valid: false, error: 'Prompt must be a string' };
  }
  
  const trimmedPrompt = prompt.trim();
  
  if (trimmedPrompt.length < MIN_PROMPT_LENGTH) {
    return { valid: false, error: `Prompt must be at least ${MIN_PROMPT_LENGTH} characters` };
  }
  
  if (trimmedPrompt.length > MAX_PROMPT_LENGTH) {
    return { valid: false, error: `Prompt must be less than ${MAX_PROMPT_LENGTH} characters` };
  }
  
  // Check for suspicious patterns
  for (const pattern of FORBIDDEN_PATTERNS) {
    if (pattern.test(trimmedPrompt)) {
      return { valid: false, error: 'Prompt contains invalid characters or patterns' };
    }
  }
  
  return { valid: true };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt } = await req.json();
    
    // Validate input FIRST
    const validation = validatePrompt(prompt);
    if (!validation.valid) {
      console.warn('Invalid prompt rejected:', validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }
    
    console.log('Generating still with validated prompt');

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
        temperature: 0.2,
        top_p: 0.5,
        messages: [
          {
            role: "user",
            content: `Create a cinematic still in 16:9 aspect ratio with the following description: ${prompt}

CRITICAL STYLE REQUIREMENTS (SHADOW INTERFACE BIBLE v13 CANONICAL):

MANDATORY STYLE:
- EXTREMELY DIRTY COMIC BOOK ART STYLE (MUITO SUJO)
- EXTREMELY HEAVY INKS (TINTA EXTREMAMENTE PESADA) 
- HIGH CONTRAST like Frank Miller's Sin City and Alan Moore's WATCHMEN
- VERY VISIBLE ANALOG PRINT GRAIN - heavy 35mm film grain texture
- ABSOLUTELY FORBIDDEN: clean 3D renders, digital look, video game aesthetics

CANONICAL COLOR PALETTE (USE EXACT HEX CODES):
- Background/Void: #1A1A1A (Shadow Black) - dominant
- Text/Echo: #E6E6E6 (Ice Gray) - use sparingly for specular light
- Accent/Impact: #c40000 (Deep Red) - use sparingly and strategically

ATMOSPHERE & DNA:
- Nocturnal, rainy, melancholic, introspective
- Visual references: Blade Runner + The Warriors + THX 1138 + Watchmen
- Dirty realism like Kids (1995) and Christiane F.
- Gritty urban Brazilian underground (São Paulo streets at night)
- Concrete, graffiti, shadows, rebellion, punk/skate culture

PHILOSOPHY:
- "Void as gestation" and "silence as refusal"
- A "safe place to disappear"
- Character exists to "absorb, not to react"

ABSOLUTELY FORBIDDEN:
- NO pastel colors, NO clean lines
- NO European comic style (Moebius/Jodorowsky)
- NO bright or saturated colors besides red accent (#c40000)
- NO text, words, or names in the image

Aspect ratio: 16:9 cinematic format.`
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

    // Load watermark from public assets
    // The watermark is served from the project's public directory
    const projectUrl = "https://77991fba-1759-4282-b7d4-1a8f89499483.lovableproject.com";
    const watermarkUrl = `${projectUrl}/images/thevoidn13-watermark.png`;
    let watermarkBase64 = "";
    
    try {
      const watermarkResponse = await fetch(watermarkUrl);
      if (watermarkResponse.ok) {
        const watermarkBlob = await watermarkResponse.blob();
        const watermarkArrayBuffer = await watermarkBlob.arrayBuffer();
        const bytes = new Uint8Array(watermarkArrayBuffer);
        let binary = '';
        const chunkSize = 8192;
        for (let i = 0; i < bytes.length; i += chunkSize) {
          const chunk = bytes.slice(i, i + chunkSize);
          binary += String.fromCharCode.apply(null, Array.from(chunk));
        }
        watermarkBase64 = btoa(binary);
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
