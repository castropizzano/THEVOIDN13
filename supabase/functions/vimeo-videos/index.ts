import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://thevoidn13.lovableproject.com',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const vimeoToken = Deno.env.get('VIMEO_ACCESS_TOKEN');
    
    if (!vimeoToken) {
      console.error('[VIMEO] Configuration error: Access token not found');
      return new Response(
        JSON.stringify({ error: 'Unable to load videos' }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Fetching videos from Vimeo API...');

    // Fetch user's videos from Vimeo API
    const response = await fetch('https://api.vimeo.com/me/videos?per_page=50&sort=date', {
      headers: {
        'Authorization': `Bearer ${vimeoToken}`,
        'Accept': 'application/vnd.vimeo.*+json;version=3.4',
      },
    });

    if (!response.ok) {
      console.error('[VIMEO] API request failed:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('[VIMEO] Response details:', errorText);
      return new Response(
        JSON.stringify({ error: 'Unable to load videos' }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log(`Successfully fetched ${data.data?.length || 0} videos`);

    // Transform the data to a simpler format
    const videos = data.data.map((video: any) => ({
      id: video.uri.split('/').pop(),
      name: video.name,
      description: video.description,
      duration: video.duration,
      link: video.link,
      embedUrl: video.player_embed_url,
      thumbnail: video.pictures?.sizes?.[video.pictures.sizes.length - 1]?.link || '',
      createdTime: video.created_time,
      width: video.width,
      height: video.height,
    }));

    return new Response(
      JSON.stringify({ videos }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('[VIMEO] Function error:', error);
    const errorDetails = error instanceof Error ? error.message : 'Unknown error';
    console.error('[VIMEO] Error details:', errorDetails);
    return new Response(
      JSON.stringify({ error: 'Unable to load videos' }),
      { 
        status: 503, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
