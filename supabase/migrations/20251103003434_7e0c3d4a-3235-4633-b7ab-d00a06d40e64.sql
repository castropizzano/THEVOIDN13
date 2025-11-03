-- Create analytics tables for memorial engagement tracking

-- Page views tracking
CREATE TABLE public.page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  user_agent TEXT,
  session_id TEXT,
  visitor_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_page_views_path ON public.page_views(page_path);
CREATE INDEX idx_page_views_created_at ON public.page_views(created_at DESC);
CREATE INDEX idx_page_views_session ON public.page_views(session_id);

-- Section engagement tracking
CREATE TABLE public.section_engagement (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_name TEXT NOT NULL,
  action_type TEXT NOT NULL, -- 'view', 'scroll', 'interact'
  duration_seconds INTEGER,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_section_engagement_section ON public.section_engagement(section_name);
CREATE INDEX idx_section_engagement_created_at ON public.section_engagement(created_at DESC);

-- Search queries tracking
CREATE TABLE public.search_queries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query TEXT NOT NULL,
  results_count INTEGER,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_search_queries_created_at ON public.search_queries(created_at DESC);

-- Enable RLS (public analytics, no auth required)
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.section_engagement ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.search_queries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for tracking
CREATE POLICY "Allow anonymous page view inserts"
  ON public.page_views
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous section engagement inserts"
  ON public.section_engagement
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous search query inserts"
  ON public.search_queries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Admin can view all analytics
CREATE POLICY "Admins can view page views"
  ON public.page_views
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view section engagement"
  ON public.section_engagement
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view search queries"
  ON public.search_queries
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));