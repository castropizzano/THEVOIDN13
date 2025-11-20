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
      // CRITICAL: COMIC BOOK / GRAPHIC NOVEL STYLE OVERRIDE
      const COMIC_STYLE_OVERRIDE = `[ABSOLUTE PRIORITY — GRAPHIC NOVEL / COMIC BOOK AESTHETIC]
CRITICAL: This MUST be a COMIC BOOK / GRAPHIC NOVEL illustration, NOT a photograph, NOT realistic.

MANDATORY COMIC STYLE:
- Illustrated artwork with visible ink linework (bold black outlines, varying thickness)
- Hand-drawn aesthetic with WATCHMEN graphic novel influence
- Cel-shaded coloring with flat color blocks and strategic gradients
- Comic book panel composition with dynamic angles
- Ben-day dots texture in shadows (subtle halftone patterns)
- Heavy shadows with stark contrast (noir comic book lighting)
- Visible brush strokes and ink textures
- Paper grain texture overlay (like printed comic pages)
- NO photorealism, NO 3D rendering, NO digital photography look

ARTISTIC REFERENCES FOR COMIC STYLE:
- Watchmen (Dave Gibbons) — gritty urban realism in comic form
- Batman: The Dark Knight Returns (Frank Miller) — noir shadows, bold inks
- Sin City (Frank Miller) — high contrast black/white/color accents
- Akira manga panels (Katsuhiro Otomo) — detailed urban decay illustrations
- The Killing Joke — atmospheric comic book lighting`;

      // HERO VISUAL REINFORCEMENT - Match hero-rain-wide.png aesthetic in COMIC STYLE
      const HERO_VISUAL_REINFORCEMENT = `[MATCH hero-rain-wide.png BUT AS COMIC BOOK ILLUSTRATION]
- Mask finish: MATTE white in comic book style (bold black outlines defining edges)
- Hood texture: Illustrated olive-green military fabric with ink hatching for wrinkles
- Neon intensity: DIM atmospheric glow rendered as comic book light effects (30-40% luminosity)
- Color temperature: 60% cold teal shadows + 40% warm orange highlights (flat cel-shading)
- Comic grain: Printed comic book paper texture (NOT film grain, NOT digital noise)
- Depth of field: Comic panel focus (sharp subject, illustrated background blur with line work)
- Wet asphalt reflections: Illustrated puddles with mirror effects (comic book water rendering)
- Atmospheric haze: Volumetric fog drawn with gradient washes and ink textures
- Mood: Lonely urban scene as GRAPHIC NOVEL panel — Watchmen meets THEVØIDN13
- Linework: Visible black ink outlines on ALL elements (character, buildings, rain, puddles)`;

      // THEVØIDN13 Shadow Interface Bible v13 - COMIC BOOK VERSION
      const THEVOIDN13_STYLE = `THEVØIDN13 UNIVERSE — Shadow Interface Bible v13 COMIC BOOK PROTOCOL:

CRITICAL OVERRIDE: THIS IS A GRAPHIC NOVEL / COMIC BOOK ILLUSTRATION, NOT A PHOTOGRAPH.

MANDATORY CHARACTER (COMIC STYLE):
- White expressionless mask with bold black ink outlines (completely smooth, NO eyes, NO mouth, pure matte white)
- Oversized olive-green military parka with hood up, drawn with heavy ink lines and hatching for texture
- OR black/charcoal tactical wear with weathered fabric illustrated with cross-hatching

CANONICAL COLOR PALETTE (CEL-SHADED COMIC STYLE):
- Background: Deep shadow black #1A1A1A (solid ink blacks with Ben-day dots in midtones)
- Highlights: Void white #FFFFFF (stark white areas, no gradients)
- Midtones: Ghost gray #E6E6E6 (flat color blocks with halftone patterns)
- Accent: Synthetic red #C40000 (bold comic book red, minimal use for dramatic effect)

COMIC LIGHTING SIGNATURE:
- Primary: Cold blue neon (#0066CC) rendered as glowing comic book light effects
- Secondary: Warm red/orange (#FF4400) backlight as illustrated rim lighting
- Technique: High contrast chiaroscuro with stark blacks, cel-shading, Ben-day dots in shadows
- Wet surface reflections illustrated with mirror puddles and hatching

ENVIRONMENT (ILLUSTRATED):
- Brazilian urban decay drawn as detailed comic panels
- Brutalist concrete with bold ink outlines and texture hatching
- Wet asphalt streets with illustrated puddles showing reflections
- Graffiti-stained walls with hand-drawn street art
- Flickering neon signs in Portuguese (illustrated glow effects)

COMIC CINEMATOGRAPHY:
- Panel composition: Rule of thirds, off-center subject, dynamic angles
- Ink linework: Bold black outlines, varying thickness for depth
- Coloring: Flat cel-shading with strategic gradients (NO photorealistic lighting)
- Texture: Visible paper grain, Ben-day dots, ink splatters for atmosphere
- Focus: Comic panel depth with illustrated background blur

MOOD: Neo-noir GRAPHIC NOVEL — urban isolation illustrated as Watchmen-style panel

ARTISTIC REFERENCES (COMIC BOOK ONLY):
- Watchmen (Dave Gibbons) — gritty urban panels, heavy inks
- Batman: The Dark Knight Returns (Frank Miller) — noir shadows
- Sin City (Frank Miller) — high contrast illustration
- Akira manga (Katsuhiro Otomo) — detailed urban decay drawings

TECHNICAL SPECIFICATIONS:
- Format: 1024x1024 comic book illustration panel
- Style: Hand-drawn aesthetic with digital coloring (like modern graphic novels)
- Texture: Printed comic book paper grain overlay
- Linework: Visible black ink outlines on ALL elements
- Shading: Cel-shading with strategic halftone dots

ABSOLUTE COMIC REQUIREMENTS:
- MUST look like a graphic novel panel (NOT a photograph)
- MUST have visible black ink outlines defining all shapes
- MUST use flat color blocks with cel-shading (NO photorealistic gradients)
- Mask MUST be completely featureless (no eyes, no expression) with bold black outline
- Neon MUST be illustrated glow effects (NOT photographic light)
- MUST include illustrated wet surfaces with comic book reflections
- MUST feel like Watchmen urban panel — lonely, isolated, noir
- NO photorealism, NO 3D rendering, NO photography aesthetic
- NO bright cheerful colors except dramatic red accent
- NO anime style, NO manga shading (Western comic book style only)`;
      
      const detailedPrompt = `${COMIC_STYLE_OVERRIDE}\n\n${THEVOIDN13_STYLE}\n\n${HERO_VISUAL_REINFORCEMENT}\n\nSCENE DESCRIPTION: ${trimmedPrompt}\n\n[FINAL REINFORCEMENT: This is a COMIC BOOK / GRAPHIC NOVEL illustration with visible ink linework and cel-shading. NOT a photograph. Style reference: Watchmen graphic novel meets THEVØIDN13 aesthetic.]`;

      console.log('Generating THEVØIDN13 comic book panel with graphic novel style...');
      console.log('Prompt length:', detailedPrompt.length, 'chars');

      // Generate comic book style image using Pollinations.AI
      const pollinationsUrl = new URL('https://image.pollinations.ai/prompt/' + encodeURIComponent(detailedPrompt));
      pollinationsUrl.searchParams.set('width', '1024');
      pollinationsUrl.searchParams.set('height', '1024');
      pollinationsUrl.searchParams.set('model', 'flux');
      pollinationsUrl.searchParams.set('nologo', 'true');
      pollinationsUrl.searchParams.set('enhance', 'false'); // Disable to maintain comic style control
      pollinationsUrl.searchParams.set('negative_prompt', 'photorealistic, 3D render, photograph, photography, camera, lens, DSLR, bokeh, depth of field blur, realistic lighting, ray tracing, CGI, digital art, smooth gradients, airbrush, soft shading, anime style, manga shading, bright colors, cheerful, happy, daylight, smiling, facial features on mask, eyes on mask, mouth on mask, clean environment, futuristic technology, sci-fi, neon cyberpunk, vibrant colors, saturated, HDR, lens flare, cinematic color grading, film grain, 35mm photography, Kodak Portra, digital noise, ARRI Alexa, RED camera');

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
          title: language === "pt" ? "Painel de HQ Gerado!" : "Comic Panel Generated!",
          description: language === "pt" 
            ? "Painel de graphic novel no estilo THEVØIDN13 x Watchmen criado com sucesso"
            : "Graphic novel panel in THEVØIDN13 x Watchmen style created successfully",
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
          title={language === "pt" ? "Gerador Experimental de Still" : "Experimental Still Generator"}
          description={language === "pt" ? "Co-criação humano-máquina em tempo real" : "Real-time human-machine co-creation"}
          buttonText={language === "pt" ? "Gerar Still" : "Generate Still"}
          onClick={() => setOpen(true)}
        />
      </div>

      <DialogContent className="max-w-6xl mx-auto max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm p-6 sm:p-8">
        <DialogHeader className="border-b border-primary/30 pb-4 mb-6">
          <DialogTitle className="text-primary text-xl font-mono font-bold">
            COMIC_PANEL::GENERATOR <span className="text-muted-foreground text-sm">// PT / EN</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-mono text-sm">
            {language === "pt" 
              ? "// Gerador experimental de painéis de graphic novel" 
              : "// Experimental graphic novel panel generator"}
          </DialogDescription>
        </DialogHeader>

        <div className="bg-black/90 border border-primary/30 rounded-lg p-6 sm:p-8 font-mono space-y-6">
          <div className="space-y-2 pb-4 border-b border-primary/20">
            <div className="flex items-start gap-2">
              <Sparkles className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
              <div className="space-y-2 text-sm">
                <p className="text-foreground font-bold">
                  {language === "pt" ? "[GERADOR EXPERIMENTAL DE STILL]" : "[EXPERIMENTAL STILL GENERATOR]"}
                </p>
                <p className="text-muted-foreground">
                  {language === "pt"
                    ? "Co-criação humano-máquina em tempo real. Propulsado por flux.1-schnell via Pollinations.AI, o gerador traduz ruído em painel de HQ — onde a máquina sonha o que o criador intui. Laboratório experimental para testar, tensionar e expandir a estética THEVØIDN13. Cada imagem é única, irreplicável e marcada com a assinatura digital do projeto."
                    : "Real-time human-machine co-creation. Powered by flux.1-schnell via Pollinations.AI, the generator translates noise into comic panels — where the machine dreams what the creator intuits. Experimental lab to test, tension and expand the THEVØIDN13 aesthetic. Each image is unique, unrepeatable and marked with the project's digital signature."}
                </p>
                <p className="text-xs text-muted-foreground">
                  {language === "pt"
                    ? "Parâmetros: 1024x1024 | flux.1-schnell via Pollinations.AI | Marca d'água: 80% opacidade"
                    : "Parameters: 1024x1024 | flux.1-schnell via Pollinations.AI | Watermark: 80% opacity"}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-mono text-primary block">
              {language === "pt" ? "[PROMPT] Descreva o painel de HQ:" : "[PROMPT] Describe the comic panel:"}
            </label>
            <Textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              maxLength={500}
              placeholder={language === "pt" 
                ? "Descreva a cena do painel de graphic novel que você quer gerar..."
                : "Describe the graphic novel panel scene you want to generate..."}
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
                  alt="Generated comic book panel" 
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
