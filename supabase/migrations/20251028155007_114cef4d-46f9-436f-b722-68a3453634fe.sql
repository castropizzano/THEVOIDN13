-- Drop existing over-permissive policies on prompts table
DROP POLICY IF EXISTS "Authenticated users can insert prompts" ON public.prompts;
DROP POLICY IF EXISTS "Authenticated users can update prompts" ON public.prompts;
DROP POLICY IF EXISTS "Authenticated users can delete prompts" ON public.prompts;

-- Create admin-only policies for prompts table
CREATE POLICY "Admins can insert prompts" 
ON public.prompts 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update prompts" 
ON public.prompts 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete prompts" 
ON public.prompts 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));