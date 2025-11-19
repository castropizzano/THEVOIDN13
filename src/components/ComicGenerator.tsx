import { useState, useRef, useEffect } from "react";
import { AlertCircle, Download, Sparkles } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { FeatureCard } from "@/components/FeatureCard";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useTranslation } from "@/hooks/useTranslation";

interface Prompt {
  id: string;
  title: string;
  prompt_text: string;
  category: string;
}

export const ComicGenerator = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"library" | "custom">("library");
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [customPrompt, setCustomPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (open) {
      loadPrompts();
    }
  }, [open]);

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
        title: t("error"),
        description: t("errorLoadingPrompts"),
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
        
        // Draw main image
        ctx.drawImage(mainImage, 0, 0);

        // Draw watermark with 50% opacity in bottom right
        const watermark = new Image();
        watermark.crossOrigin = "anonymous";
        
        watermark.onload = () => {
          const watermarkWidth = mainImage.width * 0.15; // 15% of image width
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
          console.warn('Watermark load failed, using image without watermark');
          resolve(canvas.toDataURL('image/png'));
        };

        watermark.src = watermarkDataUrl;
      };

      mainImage.onerror = () => {
        console.error('Main image load failed');
        resolve(imageDataUrl);
      };

      mainImage.src = imageDataUrl;
    });
  };

  const generateStill = async () => {
    const promptToUse = mode === "library" 
      ? selectedPrompt?.prompt_text 
      : customPrompt;

    if (!promptToUse) {
      toast({
        title: t("error"),
        description: mode === "library" ? t("selectBasePrompt") : t("customPromptPlaceholder"),
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
            title: t("error"),
            description: t("rateLimitExceeded"),
            variant: "destructive",
          });
          return;
        }
        if (error.message?.includes('insufficient_credits')) {
          toast({
            title: t("error"),
            description: t("insufficientCredits"),
            variant: "destructive",
          });
          return;
        }
        throw error;
      }

      if (data?.image) {
        // Apply watermark if available
        if (data.watermark) {
          const finalImage = await applyWatermark(data.image, data.watermark);
          setGeneratedImage(finalImage);
        } else {
          setGeneratedImage(data.image);
        }
        
        toast({
          title: t("success"),
          description: t("stillGenerated"),
        });
      }
    } catch (error) {
      console.error('Error generating still:', error);
      toast({
        title: t("error"),
        description: t("errorGeneratingStill"),
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

  const groupedPrompts = prompts.reduce((acc, prompt) => {
    if (!acc[prompt.category]) {
      acc[prompt.category] = [];
    }
    acc[prompt.category].push(prompt);
    return acc;
  }, {} as Record<string, Prompt[]>);

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <FeatureCard
          title={t("stillGenerator")}
          description={t("stillGeneratorDesc")}
          buttonText={t("clickToGenerate")}
          onClick={() => setOpen(!open)}
        />
      </div>
      
      {open && (
        <div className="mt-6 space-y-6">
          <Alert className="border-primary/30">
            <Sparkles className="h-4 w-4" />
            <AlertDescription className="bible-body">
              <div className="space-y-2">
                <p><strong>{t("experimentalGenerator")}</strong></p>
                <p className="text-sm">{t("allImagesNote")}</p>
                <p className="text-sm text-muted-foreground">{t("canonicalParams")}</p>
              </div>
            </AlertDescription>
          </Alert>

          <Tabs value={mode} onValueChange={(v) => setMode(v as "library" | "custom")} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="library">{t("library")}</TabsTrigger>
              <TabsTrigger value="custom">{t("custom")}</TabsTrigger>
            </TabsList>

            <TabsContent value="library" className="space-y-4">
              <p className="text-sm text-muted-foreground bible-body">{t("libraryMode")}</p>
              
              <div className="space-y-4">
                {Object.entries(groupedPrompts).map(([category, categoryPrompts]) => (
                  <div key={category} className="space-y-2">
                    <h4 className="bible-subtitle text-primary">{category}</h4>
                    <div className="grid gap-2">
                      {categoryPrompts.map((prompt) => (
                        <Button
                          key={prompt.id}
                          variant={selectedPrompt?.id === prompt.id ? "default" : "outline"}
                          className="justify-start text-left h-auto py-3"
                          onClick={() => setSelectedPrompt(prompt)}
                        >
                          <div className="flex flex-col items-start">
                            <span className="font-medium">{prompt.title}</span>
                            <span className="text-xs text-muted-foreground line-clamp-2">
                              {prompt.prompt_text}
                            </span>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {selectedPrompt && (
                <div className="p-4 border border-primary/20 rounded-lg bg-background/50">
                  <p className="text-sm font-medium mb-2">{t("selectedPrompt")}</p>
                  <p className="text-sm text-muted-foreground bible-body">{selectedPrompt.prompt_text}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="custom" className="space-y-4">
              <p className="text-sm text-muted-foreground bible-body">{t("customMode")}</p>
              
              <Textarea
                placeholder={t("customPromptPlaceholder")}
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                className="min-h-[150px] bible-body"
              />
              
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-xs bible-body">
                  {t("customPromptNote")}
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>

          <Button
            onClick={generateStill}
            disabled={isGenerating || (mode === "library" && !selectedPrompt) || (mode === "custom" && !customPrompt)}
            className="w-full"
            size="lg"
          >
            {isGenerating ? (
              <><LoadingSpinner size="sm" className="mr-2" /> {t("generating")}</>
            ) : (
              <><Sparkles className="mr-2 h-4 w-4" /> {t("generateStill")}</>
            )}
          </Button>

          {generatedImage && (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-primary/20">
                <img 
                  src={generatedImage} 
                  alt="Generated cinematic still" 
                  className="w-full h-auto"
                />
              </div>
              
              <Button
                onClick={downloadImage}
                variant="outline"
                className="w-full"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" /> {t("downloadStill")}
              </Button>
            </div>
          )}

          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
      )}
    </div>
  );
};
