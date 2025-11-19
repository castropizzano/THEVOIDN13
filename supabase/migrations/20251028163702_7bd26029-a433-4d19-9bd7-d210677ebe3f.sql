-- Add explicit INSERT policy for profiles to make security model clear
-- This prevents unauthorized profile creation attempts (admins only)
-- Regular users create profiles via handle_new_user() trigger during signup
CREATE POLICY "Admins can insert profiles"
ON public.profiles
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));