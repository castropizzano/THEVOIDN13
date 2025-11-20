import { useState, useEffect } from "react";
import { Copy, Loader2, Eye, ChevronDown, ChevronUp } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { FeatureCard } from "@/components/FeatureCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  const [expandedPrompts, setExpandedPrompts] = useState<Set<string>>(new Set());

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

  const togglePromptExpansion = (promptId: string) => {
    setExpandedPrompts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(promptId)) {
        newSet.delete(promptId);
      } else {
        newSet.add(promptId);
      }
      return newSet;
    });
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

      <DialogContent className="max-w-6xl mx-auto max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm p-6 sm:p-8">
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
                    {categoryPrompts.map((prompt) => {
                      const isExpanded = expandedPrompts.has(prompt.id);
                      return (
                        <div key={prompt.id} className="space-y-2 border border-primary/10 rounded-lg p-4 bg-background/50 hover:bg-background/70 transition-colors">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 space-y-2">
                              <div className="text-foreground font-semibold flex items-center gap-2">
                                └─ {prompt.title}
                                <HoverCard>
                                  <HoverCardTrigger asChild>
                                    <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                      <Eye className="h-3 w-3 text-muted-foreground" />
                                    </Button>
                                  </HoverCardTrigger>
                                  <HoverCardContent className="w-96 bg-background/95 backdrop-blur-sm border-primary/30">
                                    <div className="space-y-2">
                                      <p className="text-xs text-primary font-mono">
                                        {language === 'pt' ? '// PREVIEW DO PROMPT' : '// PROMPT PREVIEW'}
                                      </p>
                                      <p className="text-xs text-muted-foreground font-mono leading-relaxed max-h-48 overflow-y-auto">
                                        {prompt.prompt_text.substring(0, 300)}
                                        {prompt.prompt_text.length > 300 && '...'}
                                      </p>
                                      <p className="text-xs text-muted-foreground">
                                        {prompt.prompt_text.length} {language === 'pt' ? 'caracteres' : 'characters'}
                                      </p>
                                    </div>
                                  </HoverCardContent>
                                </HoverCard>
                              </div>
                              {prompt.description && (
                                <div className="text-muted-foreground text-sm">
                                  {prompt.description}
                                </div>
                              )}
                              {prompt.tags && prompt.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {prompt.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs text-primary/70 bg-primary/10 px-2 py-1 rounded">
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Expandable prompt text */}
                          <div className="pt-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => togglePromptExpansion(prompt.id)}
                              className="gap-2 text-xs text-muted-foreground hover:text-foreground"
                            >
                              {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                              {language === 'pt' ? (isExpanded ? 'Ocultar Prompt' : 'Ver Prompt Completo') : (isExpanded ? 'Hide Prompt' : 'View Full Prompt')}
                            </Button>
                            
                            {isExpanded && (
                              <div className="mt-3 p-4 bg-black/40 border border-primary/20 rounded-lg">
                                <p className="text-xs text-primary/70 font-mono mb-2">
                                  {language === 'pt' ? '// TEXTO COMPLETO DO PROMPT:' : '// FULL PROMPT TEXT:'}
                                </p>
                                <p className="text-sm text-muted-foreground font-mono leading-relaxed whitespace-pre-wrap max-h-64 overflow-y-auto">
                                  {prompt.prompt_text}
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  {prompt.prompt_text.length} {language === 'pt' ? 'caracteres' : 'characters'}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Action buttons */}
                          <div className="pt-2 flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(prompt.prompt_text, prompt.title)}
                              className="gap-2"
                            >
                              <Copy className="h-3 w-3" />
                              {language === 'pt' ? '[Copiar]' : '[Copy]'}
                            </Button>
                          </div>
                        </div>
                      );
                    })}
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
