import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Sparkles, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import watermarkLogo from "@/assets/thevoidn13-watermark.png";

interface Prompt {
  id: string;
  category: string;
  title: string;
  prompt_text: string;
}

const scriptSchema = z.string()
  .trim()
  .min(10, "Roteiro muito curto (mín. 10 caracteres) / Script too short (min 10 chars)")
  .max(2000, "Roteiro muito longo (máx. 2000 caracteres) / Script too long (max 2000 chars)");

export const ComicGenerator = () => {
  const [script, setScript] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [selectedPromptId, setSelectedPromptId] = useState<string>("");
  const [systemPrompt, setSystemPrompt] = useState<string>("");

  useEffect(() => {
    fetchPrompts();
  }, []);

  const fetchPrompts = async () => {
    try {
      // Fetch system prompt (bible)
      const { data: systemData } = await supabase
        .from('prompts')
        .select('*')
        .eq('category', 'system')
        .eq('is_active', true)
        .single();
      
      if (systemData) {
        setSystemPrompt(systemData.prompt_text);
      }

      // Fetch scene prompts for user selection
      const { data: sceneData } = await supabase
        .from('prompts')
        .select('*')
        .eq('category', 'scene')
        .eq('is_active', true)
        .order('display_order');

      if (sceneData) {
        setPrompts(sceneData);
        if (sceneData.length > 0) {
          setSelectedPromptId(sceneData[0].id);
          setScript(sceneData[0].prompt_text);
        }
      }
    } catch (error) {
      console.error('Error fetching prompts:', error);
      toast.error('Erro ao carregar prompts / Error loading prompts');
    }
  };

  const handleGenerate = async () => {
    // Validate input
    const validation = scriptSchema.safeParse(script);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    if (!systemPrompt) {
      toast.error("System prompt não carregado / System prompt not loaded");
      return;
    }

    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      // Combine system prompt with user script
      const fullPrompt = `${systemPrompt}\n\n---\n\n${validation.data}`;

      const { data, error } = await supabase.functions.invoke("generate-comic-panel", {
        body: { 
          script: fullPrompt,
          aspectRatio: "16:9"
        }
      });

      if (error) throw error;

      if (data?.imageUrl) {
        const processed = await postProcessTo16x9WithWatermark(data.imageUrl);
        setGeneratedImage(processed);
        toast.success("Still gerado! / Still generated!");
      } else {
        throw new Error("No image generated");
      }
    } catch (error: any) {
      if (error.message?.includes("Rate limit")) {
        toast.error("Limite de requisições excedido / Rate limit exceeded");
      } else if (error.message?.includes("Payment required")) {
        toast.error("Créditos insuficientes / Insufficient credits");
      } else {
        toast.error(error.message || "Erro ao gerar still / Error generating still");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `thevoidn13-still-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePromptChange = (promptId: string) => {
    setSelectedPromptId(promptId);
    const selected = prompts.find(p => p.id === promptId);
    if (selected) {
      setScript(selected.prompt_text);
      toast.info(`Prompt "${selected.title}" carregado / Prompt loaded`);
    }
  };

  return (
    <Card className="w-full border-2 border-primary/30 bg-card/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Sparkles className="w-5 h-5" />
          Gerador Experimental de Still
        </CardTitle>
        <CardDescription>
          Still Generator — Powered by Nano Banana (Gemini 2.5 Flash Image)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Selecionar Prompt Base / Select Base Prompt
          </label>
          <Select value={selectedPromptId} onValueChange={handlePromptChange}>
            <SelectTrigger>
              <SelectValue placeholder="Escolha um prompt da biblioteca / Choose from library" />
            </SelectTrigger>
            <SelectContent>
              {prompts.map((prompt) => (
                <SelectItem key={prompt.id} value={prompt.id}>
                  {prompt.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Roteiro da Cena / Scene Script
          </label>
          <Textarea
            placeholder="Edite o prompt selecionado ou crie seu próprio roteiro usando as diretrizes THEVØIDN13..."
            value={script}
            onChange={(e) => setScript(e.target.value)}
            className="min-h-[200px] font-mono text-sm"
            disabled={isGenerating}
          />
        </div>

        <Button
          onClick={handleGenerate}
          disabled={isGenerating || !script.trim()}
          className="w-full"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Gerando... / Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Gerar Still / Generate Still
            </>
          )}
        </Button>

        {generatedImage && (
          <div className="space-y-4 animate-in fade-in-50 duration-500">
            <div className="relative rounded-lg overflow-hidden border-2 border-primary/50">
              <img
                src={generatedImage}
                alt="Generated still from THEVØIDN13"
                className="w-full h-auto"
              />
            </div>
            <Button
              onClick={handleDownload}
              variant="outline"
              className="w-full"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        )}

      <div className="pt-4 border-t border-border space-y-2">
        <p className="text-xs text-muted-foreground">
          <span className="font-medium">Nota Experimental:</span> Este gerador usa a Shadow Interface Bible v13 
          como system prompt base, combinada com os prompts oficiais da biblioteca do projeto. 
        </p>
        <p className="text-xs text-muted-foreground">
          Todas as imagens são geradas em <strong>aspect ratio 16:9 horizontal</strong>, 
          ocupando todo o espaço disponível e recebem automaticamente a marca d'água oficial 
          THEVØIDN13 em 50% de transparência no canto inferior direito.
        </p>
        <p className="text-xs text-muted-foreground">
          A consistência visual é garantida pelos parâmetros canônicos: Temperature 0.2, Top P 0.5, 
          estilo dirty comic book art com heavy inks e analog print grain.
        </p>
      </div>
      </CardContent>
    </Card>
  );
};

// Post-process: enforce 16:9 and add 50% watermark
async function postProcessTo16x9WithWatermark(imageUrl: string): Promise<string> {
  const img = await loadImage(imageUrl);
  const wm = await loadImage(watermarkLogo);

  const width = 1920;
  const height = 1080;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return imageUrl;

  // Fill background (matte) using theme background approximation (black matte)
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);

  // Draw image with cover to fill 16:9
  const scale = Math.max(width / img.width, height / img.height);
  const drawW = img.width * scale;
  const drawH = img.height * scale;
  const dx = (width - drawW) / 2;
  const dy = (height - drawH) / 2;
  ctx.drawImage(img, dx, dy, drawW, drawH);

  // Watermark bottom-right at ~18% width, keep aspect
  const padding = Math.round(width * 0.02);
  const wmTargetW = Math.round(width * 0.18);
  const ratio = wm.height / wm.width;
  const wmTargetH = Math.round(wmTargetW * ratio);

  ctx.globalAlpha = 0.5; // 50% transparency
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(wm, width - wmTargetW - padding, height - wmTargetH - padding, wmTargetW, wmTargetH);
  ctx.globalAlpha = 1;

  return canvas.toDataURL('image/png');
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

