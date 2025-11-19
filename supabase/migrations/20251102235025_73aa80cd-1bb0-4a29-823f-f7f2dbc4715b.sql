-- Add unique constraint to prevent duplicate newsletter subscriptions
ALTER TABLE public.newsletter_subscribers 
ADD CONSTRAINT newsletter_subscribers_email_unique UNIQUE (email);

-- Add index for better query performance
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email 
ON public.newsletter_subscribers(email);