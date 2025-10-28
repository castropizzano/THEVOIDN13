-- Create prompts table for THEVOIDN13 prompt library
CREATE TABLE public.prompts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL, -- 'character', 'scene', 'system'
  title TEXT NOT NULL,
  description TEXT,
  prompt_text TEXT NOT NULL,
  parameters JSONB, -- stores AR, seed, stylize, chaos, etc.
  tags TEXT[],
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.prompts ENABLE ROW LEVEL SECURITY;

-- Public can view active prompts
CREATE POLICY "Anyone can view active prompts"
ON public.prompts
FOR SELECT
USING (is_active = true);

-- Only authenticated users can manage prompts (admin)
CREATE POLICY "Authenticated users can insert prompts"
ON public.prompts
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update prompts"
ON public.prompts
FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete prompts"
ON public.prompts
FOR DELETE
TO authenticated
USING (true);

-- Create trigger for updated_at
CREATE TRIGGER update_prompts_updated_at
BEFORE UPDATE ON public.prompts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial THEVOIDN13 prompts
INSERT INTO public.prompts (category, title, description, prompt_text, parameters, tags, display_order) VALUES
-- SYSTEM INSTRUCTIONS
('system', 'Nano Banana System Instructions', 'Core aesthetic and technical parameters for all THEVOIDN13 generations', 
'Aesthetic is non-negotiable: Cinematic, Neo-Noir, High Contrast, Dark Aesthetic. Apply heavy 35mm film grain and a grimy, gritty texture. Lighting must be low-key with dominant dark blue-grey/charcoal tones, occasionally cut by a faint red/neon light. Focus on shadows as language and Jungian shadow concepts. The style must be highly consistent across all generated subjects.',
'{"seed": 131313, "stylize_range": [50, 150], "chaos": 5, "lighting": "low-key, urban-night, wet-alley, purple-blue neon", "color_palette": ["#0C0C0C", "#323A46", "#DADADA", "#A32424"]}'::jsonb,
ARRAY['system', 'aesthetic', 'parameters'],
1),

-- CHARACTER PROMPTS
('character', 'PUNK (Protagonist)', 'Main character without mask - full body character sheet', 
'PUNK (Protagonist), full body shot, standing up straight, facing the camera, character sheet pose. Wearing a green military parka, black hoodie, and a red baseball cap. CRITICAL DETAIL: Tattoos are present on the neck, hands, and arms. Absolutely NO TATTOOS are on the face or head. Visual Aesthetic: Highly detailed cinematic graphic novel art, high contrast, gritty line art, dark shadows. The background is a clean, solid, dark blue-grey. Based on the loaded reference images for appearance and style.',
'{"ar": "3:4", "seed": 131313, "stylize": 50, "chaos": 5, "version": 6}'::jsonb,
ARRAY['character', 'punk', 'protagonist'],
2),

('character', 'THEVOIDN13 (Masked Alter Ego)', 'Protagonist wearing the white expressionless mask', 
'THE VOID N.13 persona, full body shot, standing up straight, facing the camera, character sheet pose. The black hoodie cap MUST BE UP, covering the head. CRITICAL: The military parka jacket must be WIDE OPEN, FULLY REVEALING the black hoodie underneath. The face is covered by the expressionless white mask, with a slightly reduced size to fit natural facial proportion under the hood. The mask is weathered with black markings. Skin visible on neck/hands (with tattoos) must be natural human skin tone. Aesthetic: Ultra High Contrast, cinematic graphic novel, heavy shadows, grimy texture. Lighting must be dark, moody, and diffused. Isolated on a solid, dark blue-grey background. DO NOT include any text, logos, or numbers.',
'{"ar": "3:4", "seed": 131313, "stylize": 50, "chaos": 5, "version": 6}'::jsonb,
ARRAY['character', 'thevoidn13', 'mask', 'alter-ego'],
3),

('character', 'GI (Gisele)', 'Protagonist''s wife - determined and introspective', 
'GI (Gisele, protagonist''s wife) full body shot, standing up straight, facing the camera, character sheet pose. CRITICAL: The character must be noticeably shorter than Punk. Maintain the determined, serious, and introspective expression. Based on the loaded reference images for her facial features and style. Wearing a dark jacket over a PURPLE hoodie. CRITICAL: Her hands must have NO TATTOOS. Her pants must be dark, unripped, and a slim-fit style. Aesthetic must be consistent with the loaded Punk asset (Ultra High Contrast, cinematic graphic novel, heavy shadows). Isolated on a solid, dark blue-grey background. DO NOT include any text, logos, or numbers.',
'{"ar": "3:4", "seed": 131313, "stylize": 75, "version": 6}'::jsonb,
ARRAY['character', 'gi', 'gisele'],
4),

('character', 'BUDDY (Jack Russell Terrier)', 'Companion with heterochromia wearing yellow raincoat', 
'BUDDY, small Jack Russell Terrier with one blue eye and one brown eye (heterochromia), full body shot, character sheet pose. Wearing a yellow raincoat. Realistic fur, soft urban lighting, reflections on wet ground, neo-noir film aesthetic, 35mm grain. The yellow raincoat is an emotional mark. Cinematic illustration style, high contrast, gritty texture. Isolated on a solid, dark blue-grey background.',
'{"ar": "3:4", "seed": 131313, "stylize": 75, "version": 6}'::jsonb,
ARRAY['character', 'buddy', 'dog', 'jack-russell'],
5),

-- SCENE PROMPTS
('scene', 'Poster Principal', 'Main poster composition with THE VOID N.13 in wet alley', 
'Cinematic alley at night, wet pavement reflecting red neon light, THEVOIDN13 standing center, rain and fog, red typography THE VOID N.13 integrated into background, high contrast, 35mm film grain, dark blue-gray ambience. Neo-noir atmosphere, low-key lighting, shadows as language, gritty texture.',
'{"ar": "16:9", "seed": 131313, "stylize": 150, "version": 6}'::jsonb,
ARRAY['scene', 'poster', 'alley', 'rain'],
6),

('scene', 'Fire Sequence', 'Dramatic night scene with burning car', 
'Cinematic rain scene at night, car on fire, flames illuminating smoke, man holding small dog in yellow raincoat, woman running in fear, wet reflections, high contrast, orange vs blue tones, neo-noir atmosphere, 35mm film grain. High emotional intensity, dramatic lighting, gritty texture.',
'{"ar": "16:9", "seed": 131313, "stylize": 150, "version": 6}'::jsonb,
ARRAY['scene', 'fire', 'dramatic', 'rain'],
7),

('scene', 'Balcony Sequence', 'Introspective moment with floating mask', 
'Cinematic night balcony scene, man sitting in rain, whiskey glass on table, floating white mask with red eyes behind him, background blurred neon city lights, 35mm film grain, gritty reflections, moody neo-noir tone. Introspective mood, Jungian shadow symbolism.',
'{"ar": "16:9", "seed": 131313, "stylize": 150, "version": 6}'::jsonb,
ARRAY['scene', 'balcony', 'introspective', 'mask'],
8),

('scene', 'Garage Sequence', 'Collaborative moment repairing car', 
'Cinematic garage scene, man and woman repairing red car, small Jack Russell with yellow raincoat watching, neon reflections on wet floor, ambient fluorescent light, gritty cinematic tone, 35mm film grain. Collaborative atmosphere, urban setting, realistic details.',
'{"ar": "16:9", "seed": 131313, "stylize": 125, "version": 6}'::jsonb,
ARRAY['scene', 'garage', 'collaboration', 'car'],
9);