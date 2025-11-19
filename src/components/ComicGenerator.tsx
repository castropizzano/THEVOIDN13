import { useState, useRef } from "react";
import { Download, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { FeatureCard } from "@/components/FeatureCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export const ComicGenerator = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [customPrompt, setCustomPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

        const watermark = new Image();
        watermark.crossOrigin = "anonymous";
        
        watermark.onload = () => {
          const watermarkWidth = mainImage.width * 0.15;
          const watermarkHeight = (watermark.height / watermark.width) * watermarkWidth;
          const padding = 20;
          const x = mainImage.width - watermarkWidth - padding;
          const y = mainImage.height - watermarkHeight - padding;
          
          // Create temporary canvas to color watermark (Bible v13 technique)
          const tempCanvas = document.createElement('canvas');
          const tempCtx = tempCanvas.getContext('2d');
          if (!tempCtx) {
            resolve(canvas.toDataURL('image/png'));
            return;
          }
          
          tempCanvas.width = watermarkWidth;
          tempCanvas.height = watermarkHeight;
          
          // Draw watermark on temp canvas
          tempCtx.drawImage(watermark, 0, 0, watermarkWidth, watermarkHeight);
          
          // Apply THEVØIDN13 canonical red (#c40000)
          tempCtx.globalCompositeOperation = 'source-in';
          tempCtx.fillStyle = '#c40000';
          tempCtx.fillRect(0, 0, watermarkWidth, watermarkHeight);
          
          // Draw colored watermark on main canvas
          ctx.globalAlpha = 0.8;
          ctx.drawImage(tempCanvas, x, y);
          ctx.globalAlpha = 1.0;

          resolve(canvas.toDataURL('image/png'));
        };

        watermark.onerror = () => {
          console.warn('Watermark load failed, using text fallback');
          // Fallback: text watermark (Bible v13)
          ctx.font = 'bold 16px monospace';
          ctx.fillStyle = '#c40000';
          ctx.globalAlpha = 0.7;
          ctx.fillText('THEVØIDN13', mainImage.width - 150, mainImage.height - 20);
          ctx.globalAlpha = 1.0;
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
    if (!customPrompt.trim()) {
      toast({
        title: language === "pt" ? "Erro" : "Error",
        description: language === "pt" ? "Digite um prompt primeiro" : "Enter a prompt first",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-cinematic-still', {
        body: { prompt: customPrompt }
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
              ? "Sem créditos disponíveis para geração."
              : "No credits available for generation.",
            variant: "destructive",
          });
          return;
        }
        throw error;
      }

      if (data.image) {
        let finalImage = data.image;
        
        if (data.watermark) {
          finalImage = await applyWatermark(data.image, data.watermark);
        }
        
        setGeneratedImage(finalImage);
        toast({
          title: language === "pt" ? "Sucesso!" : "Success!",
          description: language === "pt" ? "Imagem gerada com marca d'água" : "Image generated with watermark",
        });
      } else {
        throw new Error('No image URL returned');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      toast({
        title: language === "pt" ? "Erro" : "Error",
        description: language === "pt" ? "Erro ao gerar imagem" : "Error generating image",
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

      <DialogContent className="max-w-6xl mx-auto max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm p-6 sm:p-8">
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
          <div className="space-y-2 pb-4 border-b border-primary/20">
            <div className="flex items-start gap-2">
              <Sparkles className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
              <div className="space-y-2 text-sm">
                <p className="text-foreground font-bold">
                  {language === "pt" ? "[EXPERIMENTAL] Gerador em fase de testes" : "[EXPERIMENTAL] Generator in testing phase"}
                </p>
                <p className="text-muted-foreground">
                  {language === "pt"
                    ? "Todas as imagens incluem marca d'água THEVØIDN13 (80% opacidade, inferior direito)."
                    : "All images include THEVØIDN13 watermark (80% opacity, bottom right)."}
                </p>
                <p className="text-xs text-muted-foreground">
                  {language === "pt"
                    ? "Parâmetros canônicos: 16:9 | modelo google/gemini-2.5-flash-image-preview"
                    : "Canonical parameters: 16:9 | google/gemini-2.5-flash-image-preview model"}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-mono text-primary block">
              {language === "pt" ? "[PROMPT] Digite sua cena:" : "[PROMPT] Enter your scene:"}
            </label>
            <Textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder={language === "pt" 
                ? "Descreva a cena cinematográfica que você quer gerar..."
                : "Describe the cinematic scene you want to generate..."}
              className="min-h-[200px] font-mono text-sm bg-background/50 border-primary/30 focus:border-primary resize-none"
              disabled={isGenerating}
            />
          </div>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !customPrompt.trim()}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono"
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <LoadingSpinner className="w-4 h-4" />
                {language === "pt" ? "GERANDO..." : "GENERATING..."}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {language === "pt" ? "> GENERATE()" : "> GENERATE()"}
              </span>
            )}
          </Button>

          {generatedImage && (
            <div className="space-y-4 pt-4 border-t border-primary/20">
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
                className="w-full font-mono border-primary/30 hover:bg-primary/10"
              >
                <Download className="w-4 h-4 mr-2" />
                {language === "pt" ? "BAIXAR IMAGEM" : "DOWNLOAD IMAGE"}
              </Button>
            </div>
          )}
        </div>

        <canvas ref={canvasRef} className="hidden" />
      </DialogContent>
    </Dialog>
  );
};
