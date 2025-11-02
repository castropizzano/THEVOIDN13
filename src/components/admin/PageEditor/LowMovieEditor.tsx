import { SectionCard } from "./SectionCard";
import { FieldGroup } from "./FieldGroup";

export const LowMovieEditor = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="bible-title mb-2">Página: LowMovie™ (Dissertação)</h2>
        <p className="text-muted-foreground">
          Edite os conteúdos na ordem exata em que aparecem na página pública
        </p>
      </div>

      <SectionCard title="Hero LowMovie" sectionNumber={1}>
        <FieldGroup
          page="lowmovie"
          section="hero"
          fields={[
            { key: "imagem_hero_desktop", label: "Imagem Hero Desktop", type: "url" },
            { key: "imagem_hero_mobile", label: "Imagem Hero Mobile", type: "url" },
          ]}
        />
      </SectionCard>

      <SectionCard title="Título Dissertação" sectionNumber={2}>
        <FieldGroup
          page="lowmovie"
          section="titulo"
          fields={[
            { key: "titulo_principal", label: "Título Principal", type: "text", bilingual: true },
            { key: "subtitulo", label: "Subtítulo", type: "text", bilingual: true },
          ]}
        />
      </SectionCard>

      <SectionCard title="Processos Matriciais" sectionNumber={3}>
        <FieldGroup
          page="lowmovie"
          section="processos_matriciais"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
            { key: "descricao", label: "Descrição", type: "textarea", bilingual: true },
          ]}
        />
      </SectionCard>

      <SectionCard title="Timeline do Projeto" sectionNumber={4}>
        <FieldGroup
          page="lowmovie"
          section="timeline"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
          ]}
        />
        <p className="text-sm text-muted-foreground mt-4">
          Nota: Os eventos da timeline são gerenciados via componente Timeline
        </p>
      </SectionCard>

      <SectionCard title="Música Tema" sectionNumber={5}>
        <FieldGroup
          page="lowmovie"
          section="musica"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
            { key: "audio_url", label: "URL do Áudio", type: "url" },
          ]}
        />
      </SectionCard>

      <SectionCard title="Podcast/Áudio Projeto" sectionNumber={6}>
        <FieldGroup
          page="lowmovie"
          section="podcast"
          fields={[
            { key: "audio_podcast_url", label: "URL do Podcast", type: "url" },
            { key: "titulo", label: "Título", type: "text", bilingual: true },
          ]}
        />
      </SectionCard>
    </div>
  );
};
