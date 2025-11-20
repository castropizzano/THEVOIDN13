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
      // ============= STYLE-FIRST FOUNDATION v2.1.1 =============
      // LAYER 1: STYLE FOUNDATION (always applied)
      const STYLE_FOUNDATION = `[GRAPHIC NOVEL ILLUSTRATION — MANDATORY STYLE]
This is a COMIC BOOK / GRAPHIC NOVEL panel illustration, NOT a photograph.

VISUAL STYLE REQUIREMENTS:
- Hand-drawn aesthetic with visible black ink outlines on ALL elements
- Bold cel-shading with flat color blocks (Western comic book style)
- Heavy inks with varying line weight (thick outlines, thin details)
- Ben-day dots and halftone patterns in midtones/shadows
- Paper grain texture overlay (printed comic book aesthetic)
- NO photorealism, NO 3D render, NO photography aesthetic whatsoever

LINEWORK SPECS:
- Bold black ink outlines defining all shapes and forms
- Varying thickness for depth (thick foreground, thin background)
- Visible brush strokes and ink textures
- Cross-hatching for shadows and texture depth`;

      // LAYER 2: COLOR PALETTE (always applied)
      const COLOR_PALETTE = `THEVØIDN13 NOIR PALETTE (CEL-SHADED):
- Primary Black: #1A1A1A (solid ink blacks with Ben-day dots in midtones)
- Ghost Gray: #E6E6E6 (flat color blocks with subtle halftone patterns)
- Synthetic Red: #C40000 (bold comic book red for dramatic accents only)
- Void White: #FFFFFF (stark white highlights, NO gradients)

COMIC LIGHTING SIGNATURE:
- Cold neon: #0066CC (illustrated blue glow effects, NOT photographic)
- Warm backlight: #FF4400 (illustrated orange rim lighting)
- Technique: High contrast chiaroscuro with stark blacks
- Reflections: Illustrated mirror puddles with hatching (comic book water rendering)`;

      // LAYER 3: ENVIRONMENT & MOOD (always applied)
      const ENVIRONMENT_MOOD = `THEVØIDN13 VISUAL ATMOSPHERE (ILLUSTRATED):
Brazilian urban decay setting drawn as comic book panels:
- Brutalist concrete with bold ink outlines and texture hatching
- Wet asphalt streets with illustrated puddles showing reflections
- Graffiti-stained walls with hand-drawn street art details
- Flickering neon signs in Portuguese (illustrated glow effects)
- Rain/moisture: Comic book water rendering (NOT photorealistic)

MOOD REQUIREMENTS:
- Neo-noir isolation atmosphere (Watchmen-style urban panel)
- Heavy shadows with stark contrast (noir comic lighting)
- Urban decay aesthetic but NOT dystopian sci-fi
- Wet surfaces with illustrated reflections (NOT photographic specular)
- Atmospheric depth: Illustrated background blur with visible linework`;

      // LAYER 4: ARTISTIC REFERENCES (always applied)
      const ARTISTIC_REFERENCES = `STYLE REFERENCES (COMIC BOOK ONLY):
Match the visual aesthetic of these graphic novels:
- Watchmen (Dave Gibbons) — gritty urban realism, heavy inks, noir mood
- Batman: The Dark Knight Returns (Frank Miller) — bold shadows, stark contrast
- Sin City (Frank Miller) — high contrast blacks/whites with color accents
- Akira manga (Katsuhiro Otomo) — detailed urban decay illustrations

STYLE SYNTHESIS:
Combine Watchmen's gritty panel composition + THEVØIDN13's noir aesthetic:
- Heavy inks with visible linework on all elements
- Flat cel-shading with strategic comic book gradients
- Urban isolation mood with rain-soaked streets
- Neon glow rendered as illustrated light effects (NOT lens flare)
- Hand-drawn aesthetic with digital coloring (modern graphic novel standard)`;

      // ============= FINAL PROMPT STRUCTURE (LINEAR) =============
      const detailedPrompt = `
${STYLE_FOUNDATION}

${COLOR_PALETTE}

${ENVIRONMENT_MOOD}

${ARTISTIC_REFERENCES}

[USER SCENE DESCRIPTION — PRIMARY CONTENT]
${trimmedPrompt}

[FINAL STYLE ENFORCEMENT]
Render the above scene as a GRAPHIC NOVEL PANEL maintaining:
- THEVØIDN13 visual style (linework, noir palette, urban mood)
- Bold ink outlines and cel-shading on all elements
- Paper grain texture and comic book aesthetic
- Allow ANY content the user described
- Preserve noir/urban atmosphere regardless of scene subject
- NO photorealism, NO 3D rendering, NO photography aesthetic
`;

      console.log('Generating THEVØIDN13 comic book panel with STYLE-FIRST FOUNDATION v2.1.1...');
      console.log('Prompt length:', detailedPrompt.length, 'chars');

      // Generate comic book style image using Pollinations.AI
      const pollinationsUrl = new URL('https://image.pollinations.ai/prompt/' + encodeURIComponent(detailedPrompt));
      pollinationsUrl.searchParams.set('width', '1024');
      pollinationsUrl.searchParams.set('height', '1024');
      pollinationsUrl.searchParams.set('model', 'flux');
      pollinationsUrl.searchParams.set('nologo', 'true');
      pollinationsUrl.searchParams.set('enhance', 'false');
      pollinationsUrl.searchParams.set('negative_prompt', 
        'photorealistic, 3D render, photograph, photography, camera, lens, DSLR, Canon, Nikon, Sony, bokeh, depth of field blur, lens flare, chromatic aberration, realistic lighting, ray tracing, path tracing, global illumination, CGI, Unreal Engine, Blender, octane render, digital painting, smooth gradients, airbrush, soft shading, anime style, manga shading, kawaii, chibi, bright cheerful colors, vibrant saturated HDR, daylight sunny smiling, cinematic color grading, film grain photographic, 35mm photography, Kodak Portra, ARRI Alexa, RED camera, anamorphic, clean futuristic sci-fi, facial features on mask, eyes on mask, mouth on mask'
      );

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
