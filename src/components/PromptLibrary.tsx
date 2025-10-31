import { useState, useEffect } from "react";
import { Copy, FileCode, Palette, Camera } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

interface Prompt {
  id: string;
  category: string;
  title: string;
  description: string;
  prompt_text: string;
  parameters: any;
  tags: string[];
  display_order: number;
}

export const PromptLibrary = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchPrompts();
  }, []);

  const fetchPrompts = async () => {
    try {
      const { data, error } = await supabase
        .from('prompts')
        .select('*')
        .eq('is_active', true)
        .order('display_order');

      if (error) throw error;
      setPrompts(data || []);
    } catch (error) {
      console.error('Error fetching prompts:', error);
      toast.error('Erro ao carregar prompts');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string, title: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`Prompt "${title}" copiado!`);
    } catch (error) {
      toast.error('Erro ao copiar prompt');
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'system':
        return <FileCode className="w-4 h-4" />;
      case 'character':
        return <Palette className="w-4 h-4" />;
      case 'scene':
        return <Camera className="w-4 h-4" />;
      default:
        return <FileCode className="w-4 h-4" />;
    }
  };

  const systemPrompts = prompts.filter(p => p.category === 'system');
  const characterPrompts = prompts.filter(p => p.category === 'character');
  const scenePrompts = prompts.filter(p => p.category === 'scene');

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:border-primary transition-all hover:shadow-lg bg-card/50 backdrop-blur-sm">
          <CardHeader className="border-l-4 border-l-primary">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <FileCode className="w-6 h-6 text-primary" />
                  Biblioteca de Prompts
                </CardTitle>
                <CardDescription>
                  Prompt Library
                </CardDescription>
              </div>
              <Badge variant="outline" className="text-xs">
                {prompts.length} prompts
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Acesse os prompts desenvolvidos para o projeto THEVØIDN13, criados de forma experimental e em constante atualização. Cada entrada reflete o processo de construção visual e narrativa do universo.
            </p>
            <p className="text-sm text-muted-foreground">
              Access the prompts developed for THEVØIDN13, built experimentally and in continuous evolution. Each entry reflects the visual and narrative construction process of the universe.
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-5xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <FileCode className="w-6 h-6 text-primary" />
            Biblioteca de Prompts THEVØIDN13
          </DialogTitle>
          <DialogDescription>
            Templates padronizados para geração de imagens com estética Neo-Noir
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="system" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="system" className="flex items-center gap-2">
              <FileCode className="w-4 h-4" />
              Sistema
            </TabsTrigger>
            <TabsTrigger value="characters" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Personagens
            </TabsTrigger>
            <TabsTrigger value="scenes" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Cenas
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[60vh] mt-4">
            <TabsContent value="system" className="space-y-4">
              {systemPrompts.map((prompt) => (
                <Card key={prompt.id} className="relative">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {getCategoryIcon(prompt.category)}
                          {prompt.title}
                        </CardTitle>
                        <CardDescription>{prompt.description}</CardDescription>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(prompt.prompt_text, prompt.title)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-muted rounded-md font-mono text-sm whitespace-pre-wrap">
                      {prompt.prompt_text}
                    </div>
                    {prompt.parameters && (
                      <div className="flex flex-wrap gap-2">
                        {prompt.parameters.seed && (
                          <Badge variant="secondary">Seed: {prompt.parameters.seed}</Badge>
                        )}
                        {prompt.parameters.stylize_range && (
                          <Badge variant="secondary">
                            Stylize: {prompt.parameters.stylize_range[0]}-{prompt.parameters.stylize_range[1]}
                          </Badge>
                        )}
                        {prompt.parameters.chaos && (
                          <Badge variant="secondary">Chaos: {prompt.parameters.chaos}</Badge>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="characters" className="space-y-4">
              {characterPrompts.map((prompt) => (
                <Card key={prompt.id} className="relative">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {getCategoryIcon(prompt.category)}
                          {prompt.title}
                        </CardTitle>
                        <CardDescription>{prompt.description}</CardDescription>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(prompt.prompt_text, prompt.title)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {prompt.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-muted rounded-md font-mono text-sm whitespace-pre-wrap">
                      {prompt.prompt_text}
                    </div>
                    {prompt.parameters && (
                      <div className="flex flex-wrap gap-2">
                        {prompt.parameters.ar && (
                          <Badge variant="secondary">AR: {prompt.parameters.ar}</Badge>
                        )}
                        {prompt.parameters.seed && (
                          <Badge variant="secondary">Seed: {prompt.parameters.seed}</Badge>
                        )}
                        {prompt.parameters.stylize && (
                          <Badge variant="secondary">Stylize: {prompt.parameters.stylize}</Badge>
                        )}
                        {prompt.parameters.chaos && (
                          <Badge variant="secondary">Chaos: {prompt.parameters.chaos}</Badge>
                        )}
                        {prompt.parameters.version && (
                          <Badge variant="secondary">V{prompt.parameters.version}</Badge>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="scenes" className="space-y-4">
              {scenePrompts.map((prompt) => (
                <Card key={prompt.id} className="relative">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {getCategoryIcon(prompt.category)}
                          {prompt.title}
                        </CardTitle>
                        <CardDescription>{prompt.description}</CardDescription>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(prompt.prompt_text, prompt.title)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {prompt.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-muted rounded-md font-mono text-sm whitespace-pre-wrap">
                      {prompt.prompt_text}
                    </div>
                    {prompt.parameters && (
                      <div className="flex flex-wrap gap-2">
                        {prompt.parameters.ar && (
                          <Badge variant="secondary">AR: {prompt.parameters.ar}</Badge>
                        )}
                        {prompt.parameters.seed && (
                          <Badge variant="secondary">Seed: {prompt.parameters.seed}</Badge>
                        )}
                        {prompt.parameters.stylize && (
                          <Badge variant="secondary">Stylize: {prompt.parameters.stylize}</Badge>
                        )}
                        {prompt.parameters.version && (
                          <Badge variant="secondary">V{prompt.parameters.version}</Badge>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
