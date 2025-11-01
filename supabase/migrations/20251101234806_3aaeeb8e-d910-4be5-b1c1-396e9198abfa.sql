
-- Remove IP address and user agent columns from newsletter_subscribers
-- This enhances privacy and GDPR/LGPD compliance

ALTER TABLE public.newsletter_subscribers 
DROP COLUMN IF EXISTS ip_address;

ALTER TABLE public.newsletter_subscribers 
DROP COLUMN IF EXISTS user_agent;

-- Add comment explaining privacy-first approach
COMMENT ON TABLE public.newsletter_subscribers IS 'Newsletter subscribers table - privacy-first design without IP tracking';
