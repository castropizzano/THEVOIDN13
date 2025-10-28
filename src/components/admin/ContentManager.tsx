import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Plus } from "lucide-react";

interface ContentSetting {
  id: string;
  page: string;
  section: string;
  content_key: string;
  content_pt: string;
  content_en: string;
  content_type: string;
  display_order: number;
}

const ContentManager = () => {
  const [contents, setContents] = useState<ContentSetting[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const { data, error } = await supabase
        .from('content_settings')
        .select('*')
        .order('page', { ascending: true })
        .order('display_order', { ascending: true });

      if (error) throw error;
      setContents(data || []);
    } catch (error: any) {
      toast({
        title: "Erro ao carregar conteúdos",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (content: ContentSetting) => {
    try {
      const { error } = await supabase
        .from('content_settings')
        .update({
          content_pt: content.content_pt,
          content_en: content.content_en,
        })
        .eq('id', content.id);

      if (error) throw error;

      toast({
        title: "Conteúdo atualizado",
        description: "As alterações foram salvas com sucesso.",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao atualizar",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const groupedContents = contents.reduce((acc, content) => {
    if (!acc[content.page]) {
      acc[content.page] = [];
    }
    acc[content.page].push(content);
    return acc;
  }, {} as Record<string, ContentSetting[]>);

  if (loading) {
    return <div>Carregando...</div>;
  }

  // Mapear páginas para URLs
  const pageUrls: Record<string, string> = {
    home: "/",
    dissertacao: "/dissertacao",
    autor: "/autor",
    videos: "/videos"
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Textos do Site</CardTitle>
          <CardDescription>
            Edite os textos em português e inglês para cada seção do site. Use as abas para navegar entre as páginas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={Object.keys(groupedContents)[0] || "home"} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {Object.keys(groupedContents).map((page) => (
                <TabsTrigger key={page} value={page} className="capitalize">
                  {page === "home" ? "Início" : page}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(groupedContents).map(([page, pageContents]) => (
              <TabsContent key={page} value={page} className="space-y-6">
                {/* Link para visualizar a página */}
                {pageUrls[page] && (
                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Visualizar como ficará no site:
                    </p>
                    <a
                      href={pageUrls[page]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-2"
                    >
                      Ver página {page === "home" ? "inicial" : page}
                      <Plus className="w-3 h-3 rotate-45" />
                    </a>
                  </div>
                )}

                <div className="grid gap-6">
                  {pageContents.map((content) => (
                    <Card key={content.id} className="border-l-4 border-l-primary/30">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-base">{content.section}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                              {content.content_key} • {content.content_type === 'paragraph' ? 'Parágrafo' : 'Texto curto'}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="flex items-center gap-2">
                              🇧🇷 Português
                            </Label>
                            {content.content_type === 'paragraph' ? (
                              <Textarea
                                value={content.content_pt}
                                onChange={(e) => {
                                  const updated = contents.map((c) =>
                                    c.id === content.id ? { ...c, content_pt: e.target.value } : c
                                  );
                                  setContents(updated);
                                }}
                                rows={6}
                                className="font-mono text-sm"
                              />
                            ) : (
                              <Input
                                value={content.content_pt}
                                onChange={(e) => {
                                  const updated = contents.map((c) =>
                                    c.id === content.id ? { ...c, content_pt: e.target.value } : c
                                  );
                                  setContents(updated);
                                }}
                                className="font-mono text-sm"
                              />
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label className="flex items-center gap-2">
                              🇺🇸 English
                            </Label>
                            {content.content_type === 'paragraph' ? (
                              <Textarea
                                value={content.content_en}
                                onChange={(e) => {
                                  const updated = contents.map((c) =>
                                    c.id === content.id ? { ...c, content_en: e.target.value } : c
                                  );
                                  setContents(updated);
                                }}
                                rows={6}
                                className="font-mono text-sm"
                              />
                            ) : (
                              <Input
                                value={content.content_en}
                                onChange={(e) => {
                                  const updated = contents.map((c) =>
                                    c.id === content.id ? { ...c, content_en: e.target.value } : c
                                  );
                                  setContents(updated);
                                }}
                                className="font-mono text-sm"
                              />
                            )}
                          </div>
                        </div>

                        <Button 
                          onClick={() => updateContent(content)} 
                          className="w-full"
                          size="sm"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Salvar Alterações
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentManager;
