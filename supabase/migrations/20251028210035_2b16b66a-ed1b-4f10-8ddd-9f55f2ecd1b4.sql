-- Criar tabela para seções dinâmicas das páginas
CREATE TABLE IF NOT EXISTS public.page_sections (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page text NOT NULL,
  section_title text NOT NULL,
  section_key text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  is_visible boolean DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(page, section_key)
);

-- Criar tabela para conteúdos das seções
CREATE TABLE IF NOT EXISTS public.section_contents (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id uuid NOT NULL REFERENCES public.page_sections(id) ON DELETE CASCADE,
  content_type text NOT NULL CHECK (content_type IN ('text', 'image', 'video', 'embed')),
  content_data jsonb NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.page_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.section_contents ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para page_sections
CREATE POLICY "Anyone can view visible sections"
  ON public.page_sections FOR SELECT
  USING (is_visible = true OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert sections"
  ON public.page_sections FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update sections"
  ON public.page_sections FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete sections"
  ON public.page_sections FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Políticas RLS para section_contents
CREATE POLICY "Anyone can view section contents"
  ON public.section_contents FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.page_sections 
      WHERE page_sections.id = section_contents.section_id 
      AND (page_sections.is_visible = true OR has_role(auth.uid(), 'admin'::app_role))
    )
  );

CREATE POLICY "Admins can insert contents"
  ON public.section_contents FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update contents"
  ON public.section_contents FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete contents"
  ON public.section_contents FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Trigger para atualizar updated_at
CREATE TRIGGER update_page_sections_updated_at
  BEFORE UPDATE ON public.page_sections
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_section_contents_updated_at
  BEFORE UPDATE ON public.section_contents
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Inserir seções exemplo para as páginas existentes
INSERT INTO public.page_sections (page, section_title, section_key, display_order, is_visible) VALUES
('home', 'Hero Principal', 'hero', 1, true),
('home', 'Introdução', 'introduction', 2, true),
('home', 'Galeria de Imagens', 'gallery', 3, true),
('autor', 'Perfil do Autor', 'profile', 1, true),
('videos', 'Portfolio de Vídeos', 'portfolio', 1, true)
ON CONFLICT (page, section_key) DO NOTHING;