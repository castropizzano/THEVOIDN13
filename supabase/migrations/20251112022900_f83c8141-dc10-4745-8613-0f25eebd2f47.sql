-- Add server-side rate limiting for analytics tables

-- Function to check page view rate limit (max 10 views per session per minute)
CREATE OR REPLACE FUNCTION public.check_page_view_rate_limit(_session_id text)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN (
    SELECT COUNT(*) 
    FROM public.page_views 
    WHERE session_id = _session_id 
    AND created_at > NOW() - INTERVAL '1 minute'
  ) < 10;
END;
$$;

-- Function to check search query rate limit (max 20 searches per session per minute)
CREATE OR REPLACE FUNCTION public.check_search_rate_limit(_session_id text)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN (
    SELECT COUNT(*) 
    FROM public.search_queries 
    WHERE session_id = _session_id 
    AND created_at > NOW() - INTERVAL '1 minute'
  ) < 20;
END;
$$;

-- Function to check section engagement rate limit (max 30 engagements per session per minute)
CREATE OR REPLACE FUNCTION public.check_engagement_rate_limit(_session_id text)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN (
    SELECT COUNT(*) 
    FROM public.section_engagement 
    WHERE session_id = _session_id 
    AND created_at > NOW() - INTERVAL '1 minute'
  ) < 30;
END;
$$;

-- Update RLS policy for page_views to include rate limiting
DROP POLICY IF EXISTS "Allow anonymous page view inserts" ON public.page_views;
CREATE POLICY "Allow rate-limited page view inserts" 
ON public.page_views 
FOR INSERT 
WITH CHECK (public.check_page_view_rate_limit(session_id));

-- Update RLS policy for search_queries to include rate limiting
DROP POLICY IF EXISTS "Allow anonymous search query inserts" ON public.search_queries;
CREATE POLICY "Allow rate-limited search query inserts" 
ON public.search_queries 
FOR INSERT 
WITH CHECK (public.check_search_rate_limit(session_id));

-- Update RLS policy for section_engagement to include rate limiting
DROP POLICY IF EXISTS "Allow anonymous section engagement inserts" ON public.section_engagement;
CREATE POLICY "Allow rate-limited section engagement inserts" 
ON public.section_engagement 
FOR INSERT 
WITH CHECK (public.check_engagement_rate_limit(session_id));