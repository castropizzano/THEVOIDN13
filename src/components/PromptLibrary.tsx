import { useState, useEffect } from "react";
import { Copy, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { FeatureCard } from "@/components/FeatureCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface Prompt {
  id: string;
  title: string;
  description: string | null;
  prompt_text: string;
  category: string;
  tags: string[] | null;
  display_order: number | null;
}

export const PromptLibrary = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      fetchPrompts();
    }
  }, [open]);

  const fetchPrompts = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await supabase
        .from('prompts')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (fetchError) throw fetchError;
      setPrompts(data || []);
    } catch (err) {
      console.error('Error fetching prompts:', err);
      setError(language === 'pt' ? 'Erro ao carregar prompts' : 'Error loading prompts');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string, title: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: language === 'pt' ? 'Prompt copiado!' : 'Prompt copied!',
        description: title,
      });
    } catch (err) {
      toast({
        title: language === 'pt' ? 'Erro ao copiar' : 'Copy failed',
        variant: "destructive",
      });
    }
  };

  const groupedPrompts = prompts.reduce((acc, prompt) => {
    if (!acc[prompt.category]) {
      acc[prompt.category] = [];
    }
    acc[prompt.category].push(prompt);
    return acc;
  }, {} as Record<string, Prompt[]>);

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, { pt: string; en: string }> = {
      system: { pt: 'Sistema', en: 'System' },
      character: { pt: 'Personagens', en: 'Characters' },
      scene: { pt: 'Cenas', en: 'Scenes' },
      style: { pt: 'Estilo', en: 'Style' },
    };
    return labels[category]?.[language] || category.toUpperCase();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)}>
        <FeatureCard
          title={language === "pt" ? "Biblioteca de Prompts" : "Prompt Library"}
          description={language === "pt" ? "Acessar prompts de IA" : "Access AI prompts"}
          buttonText={language === "pt" ? "Expandir Prompts" : "Expand Prompts"}
          onClick={() => setOpen(true)}
        />
      </div>

      <DialogContent className="max-w-6xl mx-auto max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm p-6 sm:p-8 [&>button]:top-4 [&>button]:right-4 [&>button]:bg-background [&>button]:hover:bg-accent">
        <DialogHeader className="border-b border-primary/30 pb-4 mb-6">
          <DialogTitle className="text-primary text-xl font-mono font-bold">
            PROMPT_LIBRARY::THEVØIDN13 <span className="text-muted-foreground text-sm">// PT / EN</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-mono text-sm">
            {language === "pt" ? "// Biblioteca de prompts para geração de stills cinematográficos" : "// Prompt library for cinematic still generation"}
          </DialogDescription>
        </DialogHeader>

        <div className="bg-black/90 border border-primary/30 rounded-lg p-6 sm:p-8 font-mono">
          {loading && (
            <div className="flex items-center justify-center gap-3 py-12 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>{language === 'pt' ? '[LOADING] Carregando prompts...' : '[LOADING] Loading prompts...'}</span>
            </div>
          )}

          {error && (
            <div className="text-destructive py-4">
              [ERROR] {error}
            </div>
          )}

          {!loading && !error && prompts.length === 0 && (
            <div className="text-muted-foreground py-12 text-center">
              {language === 'pt' ? '[EMPTY] Nenhum prompt disponível' : '[EMPTY] No prompts available'}
            </div>
          )}

          {!loading && !error && prompts.length > 0 && (
            <div className="space-y-8">
              {Object.entries(groupedPrompts).map(([category, categoryPrompts]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-accent font-bold text-lg tracking-wide">
                    [{category.toUpperCase()}] {getCategoryLabel(category)}
                  </h3>
                  <div className="space-y-6 pl-4 border-l-2 border-primary/20">
                    {categoryPrompts.map((prompt) => (
                      <div key={prompt.id} className="space-y-2">
                        <div className="text-foreground font-semibold">
                          └─ {prompt.title}
                        </div>
                        {prompt.description && (
                          <div className="text-muted-foreground text-sm pl-4">
                            {prompt.description}
                          </div>
                        )}
                        {prompt.tags && prompt.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 pl-4">
                            {prompt.tags.map((tag, idx) => (
                              <span key={idx} className="text-xs text-primary/70 bg-primary/10 px-2 py-1 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="pl-4 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(prompt.prompt_text, prompt.title)}
                            className="gap-2"
                          >
                            <Copy className="h-3 w-3" />
                            {language === 'pt' ? '[Copiar Prompt]' : '[Copy Prompt]'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
