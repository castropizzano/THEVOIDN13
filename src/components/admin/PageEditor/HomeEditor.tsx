import { SectionCard } from "./SectionCard";
import { FieldGroup } from "./FieldGroup";

export const HomeEditor = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="bible-title mb-2">Página: Home (Index)</h2>
        <p className="text-muted-foreground">
          Edite os conteúdos na ordem exata em que aparecem na página pública
        </p>
      </div>

      <SectionCard title="Hero Principal" sectionNumber={1}>
        <FieldGroup
          page="home"
          section="hero_principal"
          fields={[
            { key: "imagem_hero_desktop", label: "Imagem Hero Desktop", type: "url" },
            { key: "imagem_hero_mobile", label: "Imagem Hero Mobile", type: "url" },
            { key: "alt_text_hero", label: "Texto Alternativo", type: "text" },
          ]}
        />
      </SectionCard>

      <SectionCard title="Subtítulo Bilíngue" sectionNumber={2}>
        <FieldGroup
          page="home"
          section="subtitulo"
          fields={[
            { key: "subtitulo", label: "Subtítulo", type: "text", bilingual: true },
          ]}
        />
      </SectionCard>

      <SectionCard title="Vídeo Introdutório" sectionNumber={3}>
        <FieldGroup
          page="home"
          section="video_intro"
          fields={[
            { key: "video_intro_url", label: "URL do Vídeo", type: "url" },
            { key: "video_poster", label: "Imagem Poster", type: "url" },
          ]}
        />
      </SectionCard>

      <SectionCard title="Início da Transmissão" sectionNumber={4}>
        <FieldGroup
          page="home"
          section="inicio_transmissao"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
            { key: "corpo", label: "Corpo do Texto", type: "textarea", bilingual: true },
          ]}
        />
      </SectionCard>

      <SectionCard title="Áudio Manifesto" sectionNumber={5}>
        <FieldGroup
          page="home"
          section="audio_manifesto"
          fields={[
            { key: "audio_url_pt", label: "URL Áudio (PT)", type: "url" },
            { key: "audio_url_en", label: "URL Áudio (EN)", type: "url" },
            { key: "titulo_audio", label: "Título do Áudio", type: "text", bilingual: true },
          ]}
        />
      </SectionCard>

      <SectionCard title="Entidade THEVØIDN13" sectionNumber={6}>
        <FieldGroup
          page="home"
          section="entidade_void"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
            { key: "descricao", label: "Descrição", type: "textarea", bilingual: true },
            { key: "imagem_void_city", label: "Imagem Void City", type: "url" },
          ]}
        />
      </SectionCard>

      <SectionCard title="Creative Oracle" sectionNumber={7}>
        <FieldGroup
          page="home"
          section="creative_oracle"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
            { key: "descricao", label: "Descrição", type: "textarea", bilingual: true },
            { key: "botao_texto", label: "Texto do Botão", type: "text", bilingual: true },
          ]}
        />
      </SectionCard>

      <SectionCard title="Paradoxos Existenciais" sectionNumber={8}>
        <FieldGroup
          page="home"
          section="paradoxos"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
            { key: "imagem_paradox", label: "Imagem Paradox", type: "url" },
            { key: "imagem_fall", label: "Imagem Fall", type: "url" },
          ]}
        />
      </SectionCard>

      <SectionCard title="Repositório GitHub" sectionNumber={9}>
        <FieldGroup
          page="home"
          section="repositorio"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
            { key: "link_github", label: "Link GitHub", type: "url" },
            { key: "descricao", label: "Descrição", type: "textarea", bilingual: true },
          ]}
        />
      </SectionCard>

      <SectionCard title="Prototype Nº13" sectionNumber={10}>
        <FieldGroup
          page="home"
          section="prototype"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
            { key: "imagem_action_figure", label: "Imagem Action Figure", type: "url" },
            { key: "descricao", label: "Descrição", type: "textarea", bilingual: true },
          ]}
        />
      </SectionCard>
    </div>
  );
};
