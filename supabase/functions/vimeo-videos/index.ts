import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
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

    console.log('Fetching all videos from Vimeo API...');

    // Fetch ALL user's videos with pagination
    let allVideos: any[] = [];
    let page = 1;
    let hasMore = true;
    const perPage = 100; // Maximum allowed by Vimeo API

    while (hasMore) {
      const response = await fetch(`https://api.vimeo.com/me/videos?per_page=${perPage}&page=${page}&sort=date`, {
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
      allVideos = allVideos.concat(data.data || []);
      
      console.log(`Fetched page ${page}: ${data.data?.length || 0} videos (Total: ${allVideos.length})`);
      
      // Check if there are more pages
      hasMore = data.paging?.next !== null && data.data?.length === perPage;
      page++;
      
      // Safety limit to prevent infinite loops
      if (page > 10) {
        console.log('Reached maximum page limit (10 pages, 1000 videos)');
        hasMore = false;
      }
    }

    console.log(`Successfully fetched total of ${allVideos.length} videos`);

    // Transform the data to a simpler format
    const videos = allVideos.map((video: any) => ({
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
