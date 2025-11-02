import { SectionCard } from "./SectionCard";
import { FieldGroup } from "./FieldGroup";
import VideoManager from "@/components/admin/VideoManager";

export const VideosEditor = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="bible-title mb-2">Página: Vídeos</h2>
        <p className="text-muted-foreground">
          Edite os conteúdos na ordem exata em que aparecem na página pública
        </p>
      </div>

      <SectionCard title="Hero Vídeos" sectionNumber={1}>
        <FieldGroup
          page="videos"
          section="hero"
          fields={[
            { key: "imagem_hero_desktop", label: "Imagem Hero Desktop", type: "url" },
            { key: "imagem_hero_mobile", label: "Imagem Hero Mobile", type: "url" },
          ]}
        />
      </SectionCard>

      <SectionCard title="Título da Galeria" sectionNumber={2}>
        <FieldGroup
          page="videos"
          section="titulo"
          fields={[
            { key: "titulo", label: "Título", type: "text", bilingual: true },
            { key: "descricao", label: "Descrição", type: "textarea", bilingual: true },
          ]}
        />
      </SectionCard>

      <SectionCard title="Gerenciador de Vídeos" sectionNumber={3}>
        <p className="text-muted-foreground mb-4">
          Gerencie os vídeos do Vimeo que aparecem na galeria
        </p>
        <VideoManager />
      </SectionCard>
    </div>
  );
};
