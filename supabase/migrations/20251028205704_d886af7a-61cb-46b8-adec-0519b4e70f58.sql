-- Inserir ou atualizar conteúdos editáveis (usando ON CONFLICT para evitar duplicatas)
INSERT INTO public.content_settings (page, section, content_key, content_pt, content_en, content_type, display_order) VALUES
-- Home - Hero Section
('home', 'Hero', 'hero_title', 'THEVOIDN13', 'THEVOIDN13', 'text', 1),
('home', 'Hero', 'hero_subtitle', 'Memorial Digital de Arte, Código e Consciência', 'Digital Memorial of Art, Code and Consciousness', 'text', 2),

-- Home - Introduction
('home', 'Introdução', 'intro_paragraph_1', 'Uma coleção de fragmentos visuais, sonoros e textuais que exploram a co-criação entre humano e máquina. Este memorial digital não é apenas sobre arte — é sobre consciência, processo e o que emerge quando código encontra intuição.', 'A collection of visual, sonic and textual fragments exploring human-machine co-creation. This digital memorial is not just about art — it is about consciousness, process and what emerges when code meets intuition.', 'paragraph', 3),

-- Home - Methodology
('home', 'Metodologia', 'method_title', 'O PROCESSO CRIATIVO', 'THE CREATIVE PROCESS', 'text', 4),
('home', 'Metodologia', 'method_paragraph', 'Cada elemento visual neste memorial foi gerado através de diálogo direto com sistemas de IA. Não apenas prompts isolados, mas conversas iterativas onde cada imagem informa a próxima, construindo uma narrativa visual coerente.', 'Each visual element in this memorial was generated through direct dialogue with AI systems. Not just isolated prompts, but iterative conversations where each image informs the next, building a coherent visual narrative.', 'paragraph', 5),

-- Home - Aesthetic Principles
('home', 'Estética', 'aesthetic_title', 'PRINCÍPIOS ESTÉTICOS', 'AESTHETIC PRINCIPLES', 'text', 6),
('home', 'Estética', 'aesthetic_paragraph', 'A estética do THEVOIDN13 emerge da intersecção entre fotografia urbana, cinema noir, e arte digital. Tons de cinza, vermelho e preto dominam a paleta, criando uma atmosfera de tensão contemplativa.', 'The aesthetic of THEVOIDN13 emerges from the intersection of urban photography, noir cinema, and digital art. Shades of gray, red and black dominate the palette, creating an atmosphere of contemplative tension.', 'paragraph', 7),

-- Autor
('autor', 'Bio', 'author_name', 'Castro Pizzano', 'Castro Pizzano', 'text', 1),
('autor', 'Bio', 'author_title', 'Artista Visual & Designer', 'Visual Artist & Designer', 'text', 2),
('autor', 'Bio', 'author_bio', 'Designer e artista visual explorando a intersecção entre código, consciência e criação. Fundador da CasaTrezeStudio®, desenvolve projetos que questionam os limites entre humano e máquina na produção artística contemporânea.', 'Designer and visual artist exploring the intersection between code, consciousness and creation. Founder of CasaTrezeStudio®, develops projects that question the boundaries between human and machine in contemporary artistic production.', 'paragraph', 3),

-- Vídeos
('videos', 'Portfolio', 'portfolio_title', 'PORTFOLIO AUDIOVISUAL', 'AUDIOVISUAL PORTFOLIO', 'text', 1),
('videos', 'Portfolio', 'portfolio_intro', 'Uma coleção de trabalhos que atravessam design, cinema e videoarte. Cada projeto é um experimento em linguagem visual, onde a estética encontra a narrativa.', 'A collection of works that traverse design, cinema and video art. Each project is an experiment in visual language, where aesthetics meets narrative.', 'paragraph', 2)
ON CONFLICT (page, section, content_key) 
DO UPDATE SET 
  content_pt = EXCLUDED.content_pt,
  content_en = EXCLUDED.content_en,
  content_type = EXCLUDED.content_type,
  display_order = EXCLUDED.display_order,
  updated_at = now();

-- Inserir ou atualizar assets de mídia principais
INSERT INTO public.media_assets (asset_key, asset_type, file_url, alt_text_pt, alt_text_en, is_visible, display_order) VALUES
('hero_main', 'image', '/assets/castro-hero-new.png', 'Retrato artístico de Castro Pizzano', 'Artistic portrait of Castro Pizzano', true, 1),
('void_mask', 'image', '/assets/mask-void.png', 'Máscara conceitual do THEVOIDN13', 'Conceptual mask of THEVOIDN13', true, 2),
('meditation_scene', 'image', '/assets/meditation-scene.png', 'Cena de meditação urbana', 'Urban meditation scene', true, 3),
('void_street', 'image', '/assets/void-street.png', 'Rua urbana noturna', 'Nocturnal urban street', true, 4),
('lowmovie_hero', 'image', '/assets/lowmovie-hero-new.png', 'Imagem hero do projeto LOWMOVIE', 'LOWMOVIE project hero image', true, 5),
('podcast_thumbnail', 'image', '/assets/podcast-thumbnail.png', 'Thumbnail do podcast THEVOIDN13', 'THEVOIDN13 podcast thumbnail', true, 6)
ON CONFLICT (asset_key) 
DO UPDATE SET 
  asset_type = EXCLUDED.asset_type,
  file_url = EXCLUDED.file_url,
  alt_text_pt = EXCLUDED.alt_text_pt,
  alt_text_en = EXCLUDED.alt_text_en,
  is_visible = EXCLUDED.is_visible,
  display_order = EXCLUDED.display_order,
  updated_at = now();