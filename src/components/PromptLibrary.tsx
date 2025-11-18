import { useState, useEffect } from "react";
import { Copy, FileCode, Palette, Camera } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { useTranslation } from "@/hooks/useTranslation";
import { FeatureCard } from "@/components/FeatureCard";

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
  const { t } = useTranslation();
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
      toast.error(t("errorLoadPrompts"));
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string, title: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${t("copiedPrompt")} "${title}"`);
    } catch (error) {
      toast.error(t("errorCopyPrompt"));
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
      <div onClick={() => setOpen(true)}>
        <FeatureCard
          title={t("promptLibraryTitle")}
          description={t("promptsAccess")}
          buttonText={t("expandPrompts")}
          onClick={() => setOpen(true)}
        />
      </div>

      <DialogContent className="max-w-5xl max-h-[85vh] bg-black/95 border-primary/30">
        <DialogHeader className="border-b border-primary/30 pb-4">
          <DialogTitle className="text-primary text-xl font-mono font-bold">
            PROMPT_LIBRARY::THEVØIDN13
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-mono text-sm">
            // {t("promptsAccess")}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="system" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-background/50 border border-primary/20">
            <TabsTrigger value="system" className="flex items-center gap-2 font-mono data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <FileCode className="w-4 h-4" />
              [SYSTEM]
            </TabsTrigger>
            <TabsTrigger value="characters" className="flex items-center gap-2 font-mono data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Palette className="w-4 h-4" />
              [CHARACTERS]
            </TabsTrigger>
            <TabsTrigger value="scenes" className="flex items-center gap-2 font-mono data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Camera className="w-4 h-4" />
              [SCENES]
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[60vh] mt-4">
            <TabsContent value="system" className="space-y-3">
              {systemPrompts.map((prompt, index) => (
                <div key={prompt.id} className="bg-background/30 border border-primary/30 rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="text-accent font-mono font-bold text-sm mb-1">
                        [{String(index + 1).padStart(2, '0')}] {prompt.title.toUpperCase()}
                      </div>
                      <div className="text-muted-foreground font-mono text-xs">
                        // {prompt.description}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(prompt.prompt_text, prompt.title)}
                      className="hover:bg-primary/20 hover:text-primary"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-3 bg-black/50 border border-primary/20 rounded font-mono text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed">
                    {prompt.prompt_text}
                  </div>
                  {prompt.parameters && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {prompt.parameters.seed && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">seed: {prompt.parameters.seed}</Badge>
                      )}
                      {prompt.parameters.stylize_range && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">
                          stylize: {prompt.parameters.stylize_range[0]}-{prompt.parameters.stylize_range[1]}
                        </Badge>
                      )}
                      {prompt.parameters.chaos && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">chaos: {prompt.parameters.chaos}</Badge>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="characters" className="space-y-3">
              {characterPrompts.map((prompt, index) => (
                <div key={prompt.id} className="bg-background/30 border border-primary/30 rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="text-accent font-mono font-bold text-sm mb-1">
                        [{String(index + 1).padStart(2, '0')}] {prompt.title.toUpperCase()}
                      </div>
                      <div className="text-muted-foreground font-mono text-xs">
                        // {prompt.description}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(prompt.prompt_text, prompt.title)}
                      className="hover:bg-primary/20 hover:text-primary"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  {prompt.tags && prompt.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {prompt.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="font-mono text-xs border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="p-3 bg-black/50 border border-primary/20 rounded font-mono text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed">
                    {prompt.prompt_text}
                  </div>
                  {prompt.parameters && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {prompt.parameters.ar && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">ar: {prompt.parameters.ar}</Badge>
                      )}
                      {prompt.parameters.seed && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">seed: {prompt.parameters.seed}</Badge>
                      )}
                      {prompt.parameters.stylize && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">stylize: {prompt.parameters.stylize}</Badge>
                      )}
                      {prompt.parameters.chaos && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">chaos: {prompt.parameters.chaos}</Badge>
                      )}
                      {prompt.parameters.version && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">v{prompt.parameters.version}</Badge>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="scenes" className="space-y-3">
              {scenePrompts.map((prompt, index) => (
                <div key={prompt.id} className="bg-background/30 border border-primary/30 rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="text-accent font-mono font-bold text-sm mb-1">
                        [{String(index + 1).padStart(2, '0')}] {prompt.title.toUpperCase()}
                      </div>
                      <div className="text-muted-foreground font-mono text-xs">
                        // {prompt.description}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(prompt.prompt_text, prompt.title)}
                      className="hover:bg-primary/20 hover:text-primary"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  {prompt.tags && prompt.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {prompt.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="font-mono text-xs border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="p-3 bg-black/50 border border-primary/20 rounded font-mono text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed">
                    {prompt.prompt_text}
                  </div>
                  {prompt.parameters && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {prompt.parameters.ar && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">ar: {prompt.parameters.ar}</Badge>
                      )}
                      {prompt.parameters.seed && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">seed: {prompt.parameters.seed}</Badge>
                      )}
                      {prompt.parameters.stylize && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">stylize: {prompt.parameters.stylize}</Badge>
                      )}
                      {prompt.parameters.version && (
                        <Badge variant="outline" className="font-mono text-xs border-primary/30">v{prompt.parameters.version}</Badge>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
