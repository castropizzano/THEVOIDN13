import { useState, useRef } from "react";
import { Download, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { FeatureCard } from "@/components/FeatureCard";
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
          
          // Get image data to detect white pixels
          const imageData = tempCtx.getImageData(0, 0, watermarkWidth, watermarkHeight);
          const data = imageData.data;
          
          // Convert white/bright pixels to THEVØIDN13 canonical red (#c40000 = rgb(196,0,0))
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const brightness = (r + g + b) / 3;
            
            // If pixel is bright (white or light gray), make it red
            if (brightness > 128) {
              data[i] = 196;     // R
              data[i + 1] = 0;   // G
              data[i + 2] = 0;   // B
              // Keep original alpha
            } else {
              // Make dark pixels transparent
              data[i + 3] = 0;
            }
          }
          
          tempCtx.putImageData(imageData, 0, 0);
          
          // Draw colored watermark on main canvas at 80% opacity
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
          ctx.globalAlpha = 0.8;
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
    const trimmedPrompt = customPrompt.trim();
    
    // Validation
    if (trimmedPrompt.length < 10) {
      toast({
        title: language === "pt" ? "Prompt muito curto" : "Prompt too short",
        description: language === "pt" 
          ? "Digite pelo menos 10 caracteres para descrever a cena"
          : "Enter at least 10 characters to describe the scene",
        variant: "destructive",
      });
      return;
    }

    if (trimmedPrompt.length > 500) {
      toast({
        title: language === "pt" ? "Prompt muito longo" : "Prompt too long",
        description: language === "pt"
          ? "Máximo 500 caracteres. Seja mais conciso."
          : "Maximum 500 characters. Be more concise.",
        variant: "destructive",
      });
      return;
    }

    // Local rate limiting (10 seconds cooldown)
    const COOLDOWN_MS = 10000;
    const lastGenTime = sessionStorage.getItem('lastGeneration');
    if (lastGenTime && Date.now() - parseInt(lastGenTime) < COOLDOWN_MS) {
      const waitSeconds = Math.ceil((parseInt(lastGenTime) + COOLDOWN_MS - Date.now()) / 1000);
      toast({
        title: language === "pt" ? "Aguarde..." : "Wait...",
        description: language === "pt"
          ? `Aguarde ${waitSeconds} segundos antes de gerar outra imagem`
          : `Wait ${waitSeconds} seconds before generating another image`,
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      // HERO VISUAL REINFORCEMENT - Match hero-rain-wide.png aesthetic EXACTLY
      const HERO_VISUAL_REINFORCEMENT = `[CRITICAL VISUAL CALIBRATION — MATCH hero-rain-wide.png EXACTLY]
- Mask finish: MATTE white plastic (NO shine, NO reflection, pure #FFFFFF)
- Hood texture: Weathered olive-green military fabric (visible wrinkles/stitching)
- Neon intensity: DIM atmospheric glow (luminosity 30-40%, NOT 80-100%)
- Color temperature balance: 60% cold teal (#0066CC shadows) + 40% warm orange (#FF6B35 highlights)
- Film grain: 35mm Kodak Vision3 500T aesthetic (subtle noise, NOT digital clean)
- Depth of field: f/2.8 equivalent (subject sharp, background defocus)
- Wet asphalt reflections: MIRROR neon colors with 50% opacity
- Atmospheric haze: Visible volumetric fog between subject and background
- Mood calibration: Taxi Driver (1976) meets Blade Runner 2049 — LONELY, NOT EPIC`;

      // THEVØIDN13 Shadow Interface Bible v13 - Canonical Cinematic Prompt
      const THEVOIDN13_STYLE = `THEVØIDN13 UNIVERSE — Shadow Interface Bible v13 EXACT PROTOCOL:

MANDATORY CHARACTER: White expressionless mask (completely smooth, NO eyes, NO mouth, NO features, pure matte white plastic). Oversized olive-green military parka with hood up, OR black/charcoal tactical wear with weathered textures.

CANONICAL COLOR PALETTE (EXACT):
- Background: Preto Sombra #1A1A1A (deep shadow black)
- Highlights: Branco Vazio #FFFFFF (void white, sparingly)
- Midtones: Cinza Fantasma #E6E6E6 (ghost gray)
- Accent: Vermelho Sintético #C40000 (synthetic blood red, minimal use)

LIGHTING SIGNATURE:
- Primary: Cold blue neon (#0066CC, dim, atmospheric)
- Secondary: Warm red/orange backlight (#FF4400, harsh, dramatic)
- Technique: High contrast chiaroscuro, deep blacks, volumetric fog, wet surface reflections

ENVIRONMENT:
Brazilian urban decay, brutalist concrete architecture, wet asphalt streets, graffiti-stained walls, industrial warehouses, empty parking lots at night, chain-link fences, flickering neon signs in Portuguese.

CINEMATOGRAPHY:
- Camera: 35mm film aesthetic, slight grain texture, analog imperfections
- Composition: Rule of thirds, off-center subject, cinematic widescreen framing
- Focus: Deep focus with atmospheric haze, bokeh in background neon
- Color Science: Desaturated teal-orange grading (Blade Runner 2049 style)

MOOD: Neo-noir, dystopian, melancholic isolation, urban anonymity, liminal spaces, nocturnal solitude.

ARTISTIC REFERENCES: Blade Runner 2049 (Roger Deakins), Akira (Katsuhiro Otomo), Christiane F. (1981 film), The Machinist, Taxi Driver, Ghost in the Shell (1995).

TECHNICAL: Ultra high-resolution digital still, 1024x1024, photorealistic rendering, cinematic color grading, film grain overlay, professional photography quality.

ABSOLUTE REQUIREMENTS: 
- Mask MUST be completely featureless (no eyes, no expression)
- Neon must be DIM and atmospheric (not bright or cheerful)
- MUST include wet surfaces with reflections
- MUST feel lonely, isolated, urban decay
- NO bright colors except accent red
- NO happy or optimistic elements`;
      
      const detailedPrompt = `${THEVOIDN13_STYLE}\n\n${HERO_VISUAL_REINFORCEMENT}\n\nSCENE DESCRIPTION: ${trimmedPrompt}`;

      console.log('Generating THEVØIDN13 cinematic still with canonical parameters...');
      console.log('Prompt length:', detailedPrompt.length, 'chars');

      // Generate image using Pollinations.AI with exact canonical parameters
      const pollinationsUrl = new URL('https://image.pollinations.ai/prompt/' + encodeURIComponent(detailedPrompt));
      pollinationsUrl.searchParams.set('width', '1024');
      pollinationsUrl.searchParams.set('height', '1024');
      pollinationsUrl.searchParams.set('model', 'flux');
      pollinationsUrl.searchParams.set('nologo', 'true');
      pollinationsUrl.searchParams.set('enhance', 'false'); // Disable to maintain exact style control
      pollinationsUrl.searchParams.set('negative_prompt', 'bright colors, cheerful, happy, daylight, smiling, facial features on mask, eyes on mask, colorful, vibrant, clean environment, modern, futuristic technology, anime style, cartoon');

      const response = await fetch(pollinationsUrl.toString());

      if (!response.ok) {
        throw new Error(`Pollinations API error: ${response.status}`);
      }

      const imageBlob = await response.blob();

      // Convert blob to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result as string;
        
        // Apply watermark
        try {
          const watermarkUrl = '/images/thevoidn13-watermark.png';
          const watermarkedImage = await applyWatermark(base64Image, watermarkUrl);
          setGeneratedImage(watermarkedImage);
        } catch (watermarkError) {
          console.warn('Watermark failed, using original image:', watermarkError);
          setGeneratedImage(base64Image);
        }

        // Update rate limit
        sessionStorage.setItem('lastGeneration', Date.now().toString());

        toast({
          title: language === "pt" ? "Imagem Gerada!" : "Image Generated!",
          description: language === "pt" 
            ? "Still cinematográfico criado com sucesso"
            : "Cinematic still created successfully",
        });

        setIsGenerating(false);
      };

      reader.onerror = () => {
        throw new Error('Failed to read image blob');
      };

      reader.readAsDataURL(imageBlob);

    } catch (error: any) {
      console.error('Generation error:', error);
      toast({
        title: language === "pt" ? "Erro na Geração" : "Generation Error",
        description: error.message || (language === "pt"
          ? "Falha ao gerar imagem. Tente novamente."
          : "Failed to generate image. Try again."),
        variant: "destructive",
      });
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
                    ? "Parâmetros canônicos: 1024x1024 | modelo flux.1-schnell via Puter.js (gratuito e ilimitado)"
                    : "Canonical parameters: 1024x1024 | flux.1-schnell model via Puter.js (free & unlimited)"}
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
              maxLength={500}
              placeholder={language === "pt" 
                ? "Descreva a cena cinematográfica que você quer gerar..."
                : "Describe the cinematic scene you want to generate..."}
              className="min-h-[200px] font-mono text-sm bg-background/50 border-primary/30 focus:border-primary resize-none"
              disabled={isGenerating}
            />
            <p className="text-xs text-muted-foreground font-mono">
              {customPrompt.length}/500 {language === "pt" ? "caracteres" : "characters"}
            </p>
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
