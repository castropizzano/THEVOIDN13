-- Add rate limiting function for contact messages
CREATE OR REPLACE FUNCTION public.check_contact_rate_limit(_email text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  RETURN (
    SELECT COUNT(*) 
    FROM public.contact_messages 
    WHERE email = _email 
    AND created_at > NOW() - INTERVAL '1 hour'
  ) < 3;
END;
$$;

-- Drop existing policy
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON public.contact_messages;

-- Create new policy with rate limiting
CREATE POLICY "Allow rate-limited contact message inserts"
ON public.contact_messages
FOR INSERT
WITH CHECK (check_contact_rate_limit(email));