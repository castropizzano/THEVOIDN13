-- Add unique constraint for newsletter email addresses (case-insensitive)
CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_newsletter_email 
ON public.newsletter_subscribers (LOWER(email));

-- Add email format validation constraint
ALTER TABLE public.newsletter_subscribers
ADD CONSTRAINT valid_email_format 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');