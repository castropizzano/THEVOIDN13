import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Save, Trash2, ArrowUp, ArrowDown, Eye, EyeOff, Image, Video, Type, Code } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface PageSection {
  id: string;
  page: string;
  section_title: string;
  section_key: string;
  display_order: number;
  is_visible: boolean;
}

interface SectionContent {
  id: string;
  section_id: string;
  content_type: "text" | "image" | "video" | "embed";
  content_data: any;
  display_order: number;
}

interface ContentItemProps {
  content: SectionContent;
  onUpdate: (data: any) => void;
  onDelete: () => void;
}

interface AddContentFormProps {
  type: string;
  onSave: (data: any) => void;
  onCancel: () => void;
}

const PAGES = [
  { value: "home", label: "Página Inicial" },
  { value: "autor", label: "Autor" },
  { value: "videos", label: "Vídeos" },
  { value: "dissertacao", label: "Dissertação" },
];

const CONTENT_TYPES = [
  { value: "text", label: "Texto", icon: Type },
  { value: "image", label: "Imagem", icon: Image },
  { value: "video", label: "Vídeo", icon: Video },
  { value: "embed", label: "Código Embed", icon: Code },
];

const SectionManager = () => {
  const [sections, setSections] = useState<PageSection[]>([]);
  const [contents, setContents] = useState<Record<string, SectionContent[]>>({});
  const [selectedPage, setSelectedPage] = useState("home");
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ type: "section" | "content", id: string } | null>(null);
  const [newSection, setNewSection] = useState({ title: "", key: "" });
  const [newContent, setNewContent] = useState<{ sectionId: string, type: string } | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, [selectedPage]);

  const fetchData = async () => {
    try {
      // Buscar seções
      const { data: sectionsData, error: sectionsError } = await supabase
        .from("page_sections")
        .select("*")
        .eq("page", selectedPage)
        .order("display_order", { ascending: true });

      if (sectionsError) throw sectionsError;
      setSections(sectionsData || []);

      // Buscar conteúdos de todas as seções
      if (sectionsData && sectionsData.length > 0) {
        const sectionIds = sectionsData.map(s => s.id);
        const { data: contentsData, error: contentsError } = await supabase
          .from("section_contents")
          .select("*")
          .in("section_id", sectionIds)
          .order("display_order", { ascending: true });

        if (contentsError) throw contentsError;

        // Organizar conteúdos por seção
        const contentsBySection: Record<string, SectionContent[]> = {};
        (contentsData || []).forEach((content) => {
          if (!contentsBySection[content.section_id]) {
            contentsBySection[content.section_id] = [];
          }
          contentsBySection[content.section_id].push(content as SectionContent);
        });
        setContents(contentsBySection);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      toast({
        title: "Erro ao carregar",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createSection = async () => {
    if (!newSection.title || !newSection.key) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha título e chave da seção",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.from("page_sections").insert({
        page: selectedPage,
        section_title: newSection.title,
        section_key: newSection.key,
        display_order: sections.length,
        is_visible: true,
      });

      if (error) throw error;
      toast({ title: "Seção criada com sucesso!" });
      setNewSection({ title: "", key: "" });
      fetchData();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      toast({
        title: "Erro ao criar seção",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const toggleSectionVisibility = async (section: PageSection) => {
    try {
      const { error } = await supabase
        .from("page_sections")
        .update({ is_visible: !section.is_visible })
        .eq("id", section.id);

      if (error) throw error;
      fetchData();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      toast({
        title: "Erro",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const moveSection = async (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= sections.length) return;

    const newSections = [...sections];
    [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];

    try {
      await Promise.all([
        supabase.from("page_sections").update({ display_order: index }).eq("id", newSections[index].id),
        supabase.from("page_sections").update({ display_order: newIndex }).eq("id", newSections[newIndex].id),
      ]);
      fetchData();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      toast({
        title: "Erro",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const deleteItem = async () => {
    if (!itemToDelete) return;

    try {
      if (itemToDelete.type === "section") {
        const { error } = await supabase.from("page_sections").delete().eq("id", itemToDelete.id);
        if (error) throw error;
        toast({ title: "Seção excluída" });
      } else {
        const { error } = await supabase.from("section_contents").delete().eq("id", itemToDelete.id);
        if (error) throw error;
        toast({ title: "Conteúdo excluído" });
      }
      fetchData();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      toast({
        title: "Erro ao excluir",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  const addContent = async (sectionId: string, type: string, data: any) => {
    try {
      const sectionContents = contents[sectionId] || [];
      const { error } = await supabase.from("section_contents").insert({
        section_id: sectionId,
        content_type: type,
        content_data: data as any,
        display_order: sectionContents.length,
      } as any);

      if (error) throw error;
      toast({ title: "Conteúdo adicionado!" });
      setNewContent(null);
      fetchData();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      toast({
        title: "Erro ao adicionar conteúdo",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const updateContent = async (contentId: string, data: any) => {
    try {
      const { error } = await supabase
        .from("section_contents")
        .update({ content_data: data as any })
        .eq("id", contentId);

      if (error) throw error;
      toast({ title: "Conteúdo atualizado!" });
      fetchData();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      toast({
        title: "Erro ao atualizar",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Carregando seções...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Seções das Páginas</CardTitle>
          <CardDescription>
            Crie, edite e organize seções e seus conteúdos (texto, imagem, vídeo, embed)
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Seletor de Página */}
          <div className="mb-6">
            <Label>Selecione a Página</Label>
            <Tabs value={selectedPage} onValueChange={setSelectedPage} className="w-full mt-2">
              <TabsList className="grid w-full grid-cols-4">
                {PAGES.map((page) => (
                  <TabsTrigger key={page.value} value={page.value}>
                    {page.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Criar Nova Seção */}
          <Card className="mb-6 border-2 border-dashed">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Nova Seção
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Título da Seção</Label>
                  <Input
                    placeholder="Ex: Hero Principal"
                    value={newSection.title}
                    onChange={(e) => setNewSection({ ...newSection, title: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Chave Única (sem espaços)</Label>
                  <Input
                    placeholder="Ex: hero_principal"
                    value={newSection.key}
                    onChange={(e) => setNewSection({ ...newSection, key: e.target.value.toLowerCase().replace(/\s/g, "_") })}
                  />
                </div>
              </div>
              <Button onClick={createSection} className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Criar Seção
              </Button>
            </CardContent>
          </Card>

          {/* Lista de Seções */}
          <div className="space-y-4">
            {sections.map((section, index) => (
              <Card key={section.id} className={!section.is_visible ? "opacity-50" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => moveSection(index, "up")}
                          disabled={index === 0}
                        >
                          <ArrowUp className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => moveSection(index, "down")}
                          disabled={index === sections.length - 1}
                        >
                          <ArrowDown className="w-4 h-4" />
                        </Button>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{section.section_title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{section.section_key}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleSectionVisibility(section)}
                      >
                        {section.is_visible ? (
                          <Eye className="w-4 h-4" />
                        ) : (
                          <EyeOff className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          setItemToDelete({ type: "section", id: section.id });
                          setDeleteDialogOpen(true);
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Conteúdos da Seção */}
                  {contents[section.id]?.map((content) => (
                    <ContentItem
                      key={content.id}
                      content={content}
                      onUpdate={(data) => updateContent(content.id, data)}
                      onDelete={() => {
                        setItemToDelete({ type: "content", id: content.id });
                        setDeleteDialogOpen(true);
                      }}
                    />
                  ))}

                  {/* Adicionar Novo Conteúdo */}
                  {newContent?.sectionId === section.id ? (
                    <AddContentForm
                      type={newContent.type}
                      onSave={(data) => addContent(section.id, newContent.type, data)}
                      onCancel={() => setNewContent(null)}
                    />
                  ) : (
                    <div className="grid grid-cols-4 gap-2">
                      {CONTENT_TYPES.map((type) => {
                        const Icon = type.icon;
                        return (
                          <Button
                            key={type.value}
                            variant="outline"
                            size="sm"
                            onClick={() => setNewContent({ sectionId: section.id, type: type.value })}
                            className="flex items-center gap-2"
                          >
                            <Icon className="w-4 h-4" />
                            {type.label}
                          </Button>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dialog de Confirmação de Exclusão */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este {itemToDelete?.type === "section" ? "seção" : "conteúdo"}? 
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={deleteItem} className="bg-destructive text-destructive-foreground">
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

// Componente para renderizar item de conteúdo
const ContentItem = ({ content, onUpdate, onDelete }: ContentItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(content.content_data);

  const handleSave = () => {
    onUpdate(editData);
    setIsEditing(false);
  };

  return (
    <Card className="border-l-4 border-l-primary/30">
      <CardContent className="pt-4 space-y-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium capitalize">{content.content_type}</span>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Cancelar" : "Editar"}
            </Button>
            <Button size="sm" variant="ghost" onClick={onDelete}>
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        </div>

        {isEditing ? (
          <div className="space-y-2">
            {content.content_type === "text" && (
              <>
                <Textarea
                  value={editData.text_pt || ""}
                  onChange={(e) => setEditData({ ...editData, text_pt: e.target.value })}
                  placeholder="Texto em Português"
                  rows={4}
                />
                <Textarea
                  value={editData.text_en || ""}
                  onChange={(e) => setEditData({ ...editData, text_en: e.target.value })}
                  placeholder="Text in English"
                  rows={4}
                />
              </>
            )}
            {content.content_type === "image" && (
              <>
                <Input
                  value={editData.url || ""}
                  onChange={(e) => setEditData({ ...editData, url: e.target.value })}
                  placeholder="URL da imagem"
                />
                <Input
                  value={editData.alt || ""}
                  onChange={(e) => setEditData({ ...editData, alt: e.target.value })}
                  placeholder="Texto alternativo"
                />
              </>
            )}
            {content.content_type === "video" && (
              <Input
                value={editData.url || ""}
                onChange={(e) => setEditData({ ...editData, url: e.target.value })}
                placeholder="URL do vídeo (YouTube, Vimeo, etc)"
              />
            )}
            {content.content_type === "embed" && (
              <Textarea
                value={editData.code || ""}
                onChange={(e) => setEditData({ ...editData, code: e.target.value })}
                placeholder="Código embed (iframe, etc)"
                rows={6}
              />
            )}
            <Button onClick={handleSave} size="sm" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Salvar
            </Button>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">
            {content.content_type === "text" && <p className="line-clamp-2">{editData.text_pt}</p>}
            {content.content_type === "image" && <p>{editData.url}</p>}
            {content.content_type === "video" && <p>{editData.url}</p>}
            {content.content_type === "embed" && <p className="font-mono text-xs">Código embed configurado</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Componente para adicionar novo conteúdo
const AddContentForm = ({ type, onSave, onCancel }: AddContentFormProps) => {
  const [data, setData] = useState<Record<string, string>>({});

  return (
    <Card className="border-2 border-dashed">
      <CardContent className="pt-4 space-y-2">
        <h4 className="font-medium capitalize">Novo {type}</h4>
        {type === "text" && (
          <>
            <Textarea
              placeholder="Texto em Português"
              onChange={(e) => setData({ ...data, text_pt: e.target.value })}
              rows={4}
            />
            <Textarea
              placeholder="Text in English"
              onChange={(e) => setData({ ...data, text_en: e.target.value })}
              rows={4}
            />
          </>
        )}
        {type === "image" && (
          <>
            <Input
              placeholder="URL da imagem"
              onChange={(e) => setData({ ...data, url: e.target.value })}
            />
            <Input
              placeholder="Texto alternativo"
              onChange={(e) => setData({ ...data, alt: e.target.value })}
            />
          </>
        )}
        {type === "video" && (
          <Input
            placeholder="URL do vídeo"
            onChange={(e) => setData({ ...data, url: e.target.value })}
          />
        )}
        {type === "embed" && (
          <Textarea
            placeholder="Código embed"
            onChange={(e) => setData({ ...data, code: e.target.value })}
            rows={6}
          />
        )}
        <div className="flex gap-2">
          <Button onClick={() => onSave(data)} className="flex-1">
            <Save className="w-4 h-4 mr-2" />
            Adicionar
          </Button>
          <Button onClick={onCancel} variant="outline" className="flex-1">
            Cancelar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionManager;