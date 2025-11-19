-- Fix newsletter_subscribers RLS policies
-- Drop the permissive authenticated INSERT policy and replace with proper restrictions
DROP POLICY IF EXISTS "Authenticated users can subscribe" ON newsletter_subscribers;

-- Only unauthenticated users can subscribe (public signup)
CREATE POLICY "Public can subscribe to newsletter"
ON newsletter_subscribers
FOR INSERT
TO anon
WITH CHECK (true);

-- Fix profiles DELETE policy
-- Allow users to delete their own profile or admins to delete any
CREATE POLICY "Users can delete their own profile"
ON profiles
FOR DELETE
USING (auth.uid() = id);

CREATE POLICY "Admins can delete any profile"
ON profiles
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));