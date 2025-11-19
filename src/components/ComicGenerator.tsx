import { useState, useRef, useEffect } from "react";
import { Download, Sparkles, Copy } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { FeatureCard } from "@/components/FeatureCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { LoadingSpinner } from "@/components/LoadingSpinner";

interface Prompt {
  id: string;
  title: string;
  prompt_text: string;
  category: string;
  description: string | null;
}

export const ComicGenerator = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"library" | "custom">("library");
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [customPrompt, setCustomPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (open && mode === "library") {
      loadPrompts();
    }
  }, [open, mode]);

  const loadPrompts = async () => {
    try {
      const { data, error } = await supabase
        .from('prompts')
        .select('*')
        .eq('is_active', true)
        .order('display_order');

      if (error) throw error;
      setPrompts(data || []);
    } catch (error) {
      console.error('Error loading prompts:', error);
      toast({
        title: language === "pt" ? "Erro" : "Error",
        description: language === "pt" ? "Erro ao carregar prompts" : "Error loading prompts",
        variant: "destructive",
      });
    }
  };

  const applyWatermark = (imageDataUrl: string, watermarkDataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const canvas = canvasRef.current;
      if (!canvas) {
        resolve(imageDataUrl);
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(imageDataUrl);
        return;
      }

      const mainImage = new Image();
      mainImage.crossOrigin = "anonymous";
      
      mainImage.onload = () => {
        canvas.width = mainImage.width;
        canvas.height = mainImage.height;
        
        ctx.drawImage(mainImage, 0, 0);

        const watermark = new Image();
        watermark.crossOrigin = "anonymous";
        
        watermark.onload = () => {
          const watermarkWidth = mainImage.width * 0.15;
          const watermarkHeight = (watermark.height / watermark.width) * watermarkWidth;
          const padding = 20;
          
          ctx.globalAlpha = 0.5;
          ctx.drawImage(
            watermark,
            mainImage.width - watermarkWidth - padding,
            mainImage.height - watermarkHeight - padding,
            watermarkWidth,
            watermarkHeight
          );
          ctx.globalAlpha = 1.0;

          resolve(canvas.toDataURL('image/png'));
        };

        watermark.onerror = () => {
          console.warn('Watermark load failed');
          resolve(canvas.toDataURL('image/png'));
        };

        watermark.src = watermarkDataUrl;
      };

      mainImage.onerror = () => {
        console.error('Image load failed');
        resolve(imageDataUrl);
      };

      mainImage.src = imageDataUrl;
    });
  };

  const handleGenerate = async () => {
    const promptToUse = mode === "library" 
      ? selectedPrompt?.prompt_text 
      : customPrompt;

    if (!promptToUse) {
      toast({
        title: language === "pt" ? "Erro" : "Error",
        description: language === "pt" 
          ? (mode === "library" ? "Selecione um prompt base" : "Digite um prompt personalizado")
          : (mode === "library" ? "Select a base prompt" : "Enter a custom prompt"),
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-cinematic-still', {
        body: { prompt: promptToUse }
      });

      if (error) {
        if (error.message?.includes('rate_limit')) {
          toast({
            title: language === "pt" ? "Limite Excedido" : "Rate Limit Exceeded",
            description: language === "pt" 
              ? "Muitas requisições. Aguarde um momento."
              : "Too many requests. Please wait a moment.",
            variant: "destructive",
          });
          return;
        }
        if (error.message?.includes('insufficient_credits')) {
          toast({
            title: language === "pt" ? "Créditos Insuficientes" : "Insufficient Credits",
            description: language === "pt"
              ? "Adicione créditos para continuar gerando imagens."
              : "Add credits to continue generating images.",
            variant: "destructive",
          });
          return;
        }
        throw error;
      }

      if (data?.image) {
        if (data.watermark) {
          const finalImage = await applyWatermark(data.image, data.watermark);
          setGeneratedImage(finalImage);
        } else {
          setGeneratedImage(data.image);
        }
        
        toast({
          title: language === "pt" ? "Sucesso!" : "Success!",
          description: language === "pt" ? "Still cinematográfico gerado" : "Cinematic still generated",
        });
      }
    } catch (error) {
      console.error('Error generating still:', error);
      toast({
        title: language === "pt" ? "Erro" : "Error",
        description: language === "pt" ? "Erro ao gerar still" : "Error generating still",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;

    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `thevoidn13-still-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: language === "pt" ? "Copiado!" : "Copied!",
      description: language === "pt" ? "Prompt copiado" : "Prompt copied",
    });
  };

  const groupedPrompts = prompts.reduce((acc, prompt) => {
    if (!acc[prompt.category]) {
      acc[prompt.category] = [];
    }
    acc[prompt.category].push(prompt);
    return acc;
  }, {} as Record<string, Prompt[]>);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)}>
        <FeatureCard
          title={language === "pt" ? "Gerador Experimental de Stills" : "Experimental Still Generator"}
          description={language === "pt" ? "Gerar stills cinematográficos" : "Generate cinematic stills"}
          buttonText={language === "pt" ? "Gerar Still" : "Generate Still"}
          onClick={() => setOpen(true)}
        />
      </div>

      <DialogContent className="max-w-6xl mx-auto max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm p-6 sm:p-8 [&>button]:top-4 [&>button]:right-4 [&>button]:bg-background">
        <DialogHeader className="border-b border-primary/30 pb-4 mb-6">
          <DialogTitle className="text-primary text-xl font-mono font-bold">
            CINEMATIC_STILL::GENERATOR <span className="text-muted-foreground text-sm">// PT / EN</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-mono text-sm">
            {language === "pt" 
              ? "// Gerador experimental de stills cinematográficos com IA" 
              : "// Experimental AI-powered cinematic still generator"}
          </DialogDescription>
        </DialogHeader>

        <div className="bg-black/90 border border-primary/30 rounded-lg p-6 sm:p-8 font-mono space-y-6">
          {/* Warning */}
          <div className="space-y-2 pb-4 border-b border-primary/20">
            <div className="flex items-start gap-2">
              <Sparkles className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
              <div className="space-y-2 text-sm">
                <p className="text-foreground font-bold">
                  {language === "pt" ? "[EXPERIMENTAL] Gerador em fase de testes" : "[EXPERIMENTAL] Generator in testing phase"}
                </p>
                <p className="text-muted-foreground">
                  {language === "pt"
                    ? "Todas as imagens incluem marca d'água THEVØIDN13 (50% opacidade, inferior direito)."
                    : "All images include THEVØIDN13 watermark (50% opacity, bottom right)."}
                </p>
                <p className="text-xs text-muted-foreground">
                  {language === "pt"
                    ? "Parâmetros canônicos: 16:9 | modelo google/gemini-2.5-flash-image-preview"
                    : "Canonical parameters: 16:9 | google/gemini-2.5-flash-image-preview model"}
                </p>
              </div>
            </div>
          </div>

          {/* Mode Tabs */}
          <Tabs value={mode} onValueChange={(v) => setMode(v as "library" | "custom")} className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 bg-background/50">
              <TabsTrigger value="library" className="font-mono">
                [LIBRARY] {language === "pt" ? "Biblioteca" : "Library"}
              </TabsTrigger>
              <TabsTrigger value="custom" className="font-mono">
                [CUSTOM] {language === "pt" ? "Personalizado" : "Custom"}
              </TabsTrigger>
            </TabsList>

            {/* Library Mode */}
            <TabsContent value="library" className="space-y-4">
              <div className="text-muted-foreground text-sm">
                {language === "pt" 
                  ? "├─ Selecione um prompt da biblioteca para gerar um still cinematográfico"
                  : "├─ Select a prompt from the library to generate a cinematic still"}
              </div>
              
              {Object.entries(groupedPrompts).map(([category, categoryPrompts]) => (
                <div key={category} className="space-y-3">
                  <div className="text-accent font-bold">
                    [{category.toUpperCase()}]
                  </div>
                  <div className="pl-4 space-y-2">
                    {categoryPrompts.map((prompt) => (
                      <div
                        key={prompt.id}
                        className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                          selectedPrompt?.id === prompt.id
                            ? 'border-primary bg-primary/10'
                            : 'border-primary/20 hover:border-primary/40 bg-background/50'
                        }`}
                        onClick={() => setSelectedPrompt(prompt)}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1 flex-1">
                            <div className="text-foreground font-semibold text-sm">
                              └─ {prompt.title}
                            </div>
                            {prompt.description && (
                              <div className="text-muted-foreground text-xs pl-4">
                                {prompt.description}
                              </div>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyPrompt(prompt.prompt_text);
                            }}
                            className="flex-shrink-0"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {/* Custom Mode */}
            <TabsContent value="custom" className="space-y-4">
              <div className="text-muted-foreground text-sm">
                {language === "pt"
                  ? "├─ Digite seu prompt personalizado para o gerador"
                  : "├─ Enter your custom prompt for the generator"}
              </div>
              <Textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder={language === "pt" 
                  ? "Ex: Uma cena noturna urbana retrofuturista, personagem mascarado sob neon vermelho..."
                  : "Ex: A retrofuturistic urban night scene, masked character under red neon..."}
                className="min-h-[120px] font-mono text-sm bg-background/50 border-primary/20"
              />
            </TabsContent>
          </Tabs>

          {/* Generate Button */}
          <div className="pt-4 flex gap-3">
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || (mode === "library" && !selectedPrompt) || (mode === "custom" && !customPrompt)}
              className="gap-2"
            >
              {isGenerating ? (
                <>
                  <LoadingSpinner />
                  {language === "pt" ? "Gerando..." : "Generating..."}
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  {language === "pt" ? "> GENERATE()" : "> GENERATE()"}
                </>
              )}
            </Button>
          </div>

          {/* Generated Image */}
          {generatedImage && (
            <div className="space-y-4 pt-4 border-t border-primary/20">
              <div className="text-accent font-bold">
                [OUTPUT] {language === "pt" ? "Still Gerado" : "Generated Still"}
              </div>
              <div className="relative rounded-lg overflow-hidden border border-primary/30">
                <img
                  src={generatedImage}
                  alt="Generated cinematic still"
                  className="w-full h-auto"
                />
              </div>
              <Button
                onClick={downloadImage}
                variant="outline"
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                {language === "pt" ? "> DOWNLOAD()" : "> DOWNLOAD()"}
              </Button>
            </div>
          )}
        </div>

        {/* Hidden canvas for watermark */}
        <canvas ref={canvasRef} className="hidden" />
      </DialogContent>
    </Dialog>
  );
};
