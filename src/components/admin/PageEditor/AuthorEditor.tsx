import { SectionCard } from "./SectionCard";
import { FieldGroup } from "./FieldGroup";

export const AuthorEditor = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="bible-title mb-2">Página: Author (Autor)</h2>
        <p className="text-muted-foreground">
          Edite os conteúdos na ordem exata em que aparecem na página pública
        </p>
      </div>

      <SectionCard title="Hero Author" sectionNumber={1}>
        <FieldGroup
          page="author"
          section="hero"
          fields={[
            { key: "imagem_hero_desktop", label: "Imagem Hero Desktop", type: "url" },
            { key: "imagem_hero_mobile", label: "Imagem Hero Mobile", type: "url" },
          ]}
        />
      </SectionCard>

      <SectionCard title="Nome e Identificação" sectionNumber={2}>
        <FieldGroup
          page="author"
          section="identificacao"
          fields={[
            { key: "nome_completo", label: "Nome Completo", type: "text" },
            { key: "nome_artistico", label: "Nome Artístico", type: "text" },
            { key: "subtitulo", label: "Subtítulo", type: "text" },
          ]}
        />
      </SectionCard>

      <SectionCard title="Quem Fala e De Onde Falo" sectionNumber={3}>
        <FieldGroup
          page="author"
          section="biografia"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
            { key: "biografia", label: "Biografia Completa", type: "textarea", bilingual: true },
          ]}
        />
      </SectionCard>

      <SectionCard title="Habilidades Técnicas" sectionNumber={4}>
        <FieldGroup
          page="author"
          section="habilidades"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
          ]}
        />
        <p className="text-sm text-muted-foreground mt-4">
          Nota: Lista de habilidades gerenciada via componente dedicado
        </p>
      </SectionCard>

      <SectionCard title="Formação Acadêmica" sectionNumber={5}>
        <FieldGroup
          page="author"
          section="formacao"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
          ]}
        />
        <p className="text-sm text-muted-foreground mt-4">
          Nota: Lista de formações gerenciada via componente dedicado
        </p>
      </SectionCard>
    </div>
  );
};
