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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Textos do Site</CardTitle>
          <CardDescription>
            Edite os textos em português e inglês para cada seção do site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={Object.keys(groupedContents)[0] || "home"} className="w-full">
            <TabsList>
              {Object.keys(groupedContents).map((page) => (
                <TabsTrigger key={page} value={page} className="capitalize">
                  {page}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(groupedContents).map(([page, pageContents]) => (
              <TabsContent key={page} value={page} className="space-y-6">
                {pageContents.map((content) => (
                  <Card key={content.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{content.section} - {content.content_key}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Português</Label>
                        {content.content_type === 'paragraph' ? (
                          <Textarea
                            value={content.content_pt}
                            onChange={(e) => {
                              const updated = contents.map((c) =>
                                c.id === content.id ? { ...c, content_pt: e.target.value } : c
                              );
                              setContents(updated);
                            }}
                            rows={5}
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
                          />
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label>English</Label>
                        {content.content_type === 'paragraph' ? (
                          <Textarea
                            value={content.content_en}
                            onChange={(e) => {
                              const updated = contents.map((c) =>
                                c.id === content.id ? { ...c, content_en: e.target.value } : c
                              );
                              setContents(updated);
                            }}
                            rows={5}
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
                          />
                        )}
                      </div>

                      <Button onClick={() => updateContent(content)} className="w-full">
                        <Save className="w-4 h-4 mr-2" />
                        Salvar
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentManager;
