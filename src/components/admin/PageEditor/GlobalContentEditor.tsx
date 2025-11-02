import { SectionCard } from "./SectionCard";
import { FieldGroup } from "./FieldGroup";
import { PromptManager } from "@/components/admin/PromptManager";

export const GlobalContentEditor = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="bible-title mb-2">Conteúdo Global</h2>
        <p className="text-muted-foreground">
          Elementos que aparecem em todas as páginas do site
        </p>
      </div>

      <SectionCard title="Header / Navegação" sectionNumber={1}>
        <FieldGroup
          page="global"
          section="header"
          fields={[
            { key: "logo_text", label: "Texto do Logo", type: "text" },
            { key: "menu_item_1", label: "Menu Item 1", type: "text" },
            { key: "menu_item_2", label: "Menu Item 2", type: "text" },
            { key: "menu_item_3", label: "Menu Item 3", type: "text" },
          ]}
        />
      </SectionCard>

      <SectionCard title="Footer" sectionNumber={2}>
        <FieldGroup
          page="global"
          section="footer"
          fields={[
            { key: "texto_copyright", label: "Texto Copyright", type: "text" },
            { key: "link_github", label: "Link GitHub", type: "url" },
            { key: "link_instagram", label: "Link Instagram", type: "url" },
          ]}
        />
      </SectionCard>

      <SectionCard title="Prompts / Creative Oracle" sectionNumber={3}>
        <p className="text-muted-foreground mb-4">
          Gerencie os prompts do Creative Oracle
        </p>
        <PromptManager />
      </SectionCard>
    </div>
  );
};
