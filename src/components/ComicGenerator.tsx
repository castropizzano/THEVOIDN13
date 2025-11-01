import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
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

// Validation for custom prompts only (library prompts are pre-validated)
const customScriptSchema = z.string()
  .trim()
  .min(50, "Descrição muito curta (mín. 50 caracteres) / Description too short (min 50 chars)")
  .max(1500, "Descrição muito longa (máx. 1500 caracteres) / Description too long (max 1500 chars)");

export const ComicGenerator = () => {
  const [script, setScript] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [selectedPromptId, setSelectedPromptId] = useState<string>("");
  const [systemPrompt, setSystemPrompt] = useState<string>("");
  const [promptMode, setPromptMode] = useState<"library" | "custom">("library");
  const [customScript, setCustomScript] = useState("");

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
      toast.error('Erro ao carregar prompts / Error loading prompts');
    }
  };

  const handleGenerate = async () => {
    // Validate only custom scripts (library prompts are pre-validated)
    if (promptMode === "custom") {
      const validation = customScriptSchema.safeParse(customScript);
      if (!validation.success) {
        toast.error(validation.error.errors[0].message);
        return;
      }
    }

    if (!systemPrompt) {
      toast.error("System prompt não carregado / System prompt not loaded");
      return;
    }

    // Use the appropriate script
    const scriptToUse = promptMode === "library" ? script : customScript;

    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      // For custom mode, combine system prompt with custom script
      // For library mode, the script already includes the full scene prompt
      const fullPrompt = promptMode === "custom" 
        ? `${systemPrompt}\n\n---\n\n${scriptToUse}`
        : `${systemPrompt}\n\n---\n\n${scriptToUse}`;

      const { data, error } = await supabase.functions.invoke("generate-comic-panel", {
        body: { 
          script: fullPrompt,
          aspectRatio: "16:9"
        }
      });

      if (error) {
        throw error;
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      if (data?.imageUrl) {
        const processed = await postProcessTo16x9WithWatermark(data.imageUrl);
        setGeneratedImage(processed);
        toast.success("Still gerado! / Still generated!");
      } else {
        throw new Error("No image generated - empty response");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      
      if (errorMessage.includes("Rate limit") || errorMessage.includes("429")) {
        toast.error("Limite de requisições excedido. Tente novamente em alguns segundos. / Rate limit exceeded. Try again in a few seconds.");
      } else if (errorMessage.includes("Payment required") || errorMessage.includes("402")) {
        toast.error("Créditos insuficientes. Adicione créditos ao workspace. / Insufficient credits. Add credits to workspace.");
      } else if (errorMessage.includes("Script too")) {
        toast.error(errorMessage);
      } else {
        toast.error(`Erro ao gerar still: ${errorMessage} / Error generating still`);
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
        <CardTitle className="title text-primary">
          Gerador Experimental de Still
        </CardTitle>
        <CardDescription className="lang-pill">
          Still Generator — Powered by Nano Banana (Gemini 2.5 Flash Image)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs value={promptMode} onValueChange={(v) => setPromptMode(v as "library" | "custom")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="library" className="subtitle">
              Biblioteca / Library
            </TabsTrigger>
            <TabsTrigger value="custom" className="subtitle">
              Personalizado / Custom
            </TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="space-y-4 mt-4">
            <div className="space-y-2">
              <label className="subtitle">
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
              <label className="subtitle">
                Prompt Selecionado / Selected Prompt
              </label>
              <Textarea
                placeholder="Selecione um prompt da biblioteca acima..."
                value={script}
                onChange={(e) => setScript(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
                disabled={isGenerating}
              />
              <p className="body-small text-muted-foreground">
                Você pode editar o prompt selecionado ou usá-lo como está / You can edit the selected prompt or use it as is
              </p>
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4 mt-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="subtitle">
                  Criar Prompt Personalizado / Create Custom Prompt
                </label>
                <span className={`lang-pill ${
                  customScript.length < 50 
                    ? 'text-destructive' 
                    : customScript.length > 1500 
                    ? 'text-destructive' 
                    : ''
                }`}>
                  {customScript.length}/1500
                </span>
              </div>
              <Textarea
                placeholder="Descreva sua cena seguindo o estilo THEVØIDN13. As System Instructions (Shadow Interface Bible v13) serão aplicadas automaticamente..."
                value={customScript}
                onChange={(e) => setCustomScript(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
                disabled={isGenerating}
              />
              <div className="space-y-1">
                <p className="body-small text-muted-foreground">
                  <strong>⚠️ Limites / Limits:</strong> Mínimo 50 caracteres / Minimum 50 chars • Máximo 1500 caracteres / Maximum 1500 chars
                </p>
                <p className="body-small text-muted-foreground">
                  <strong>Dica:</strong> Descreva a cena, personagens, iluminação e atmosfera. 
                  As regras canônicas do universo THEVØIDN13 serão automaticamente aplicadas.
                </p>
                <p className="body-small text-muted-foreground">
                  <strong>Tip:</strong> Describe the scene, characters, lighting and atmosphere. 
                  The canonical THEVØIDN13 universe rules will be automatically applied.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Button
          onClick={handleGenerate}
          disabled={
            isGenerating || 
            (promptMode === "library" && !script.trim()) ||
            (promptMode === "custom" && !customScript.trim())
          }
          className="w-full subtitle"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Gerando... / Generating...
            </>
          ) : (
            "Gerar Still / Generate Still"
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
              className="w-full subtitle"
            >
              Download
            </Button>
          </div>
        )}

      <div className="pt-4 border-t border-border space-y-2">
        <p className="body-small text-muted-foreground">
          <span className="font-medium">Nota Experimental:</span> Este gerador usa a Shadow Interface Bible v13 
          como system prompt base, aplicada automaticamente a {promptMode === "library" ? "todos os prompts da biblioteca" : "prompts personalizados"}.
        </p>
        <p className="body-small text-muted-foreground">
          <strong>Modo Biblioteca:</strong> Use prompts oficiais pré-configurados para máxima fidelidade visual. 
          <strong className="ml-1">Modo Personalizado:</strong> Crie suas próprias cenas mantendo as diretrizes canônicas do universo.
        </p>
        <p className="body-small text-muted-foreground">
          Todas as imagens são geradas em <strong>aspect ratio 16:9 horizontal</strong>, 
          preservando todo o conteúdo sem cortes e recebem automaticamente a marca d'água oficial 
          THEVØIDN13 em 50% de transparência no canto inferior direito.
        </p>
        <p className="body-small text-muted-foreground">
          Parâmetros canônicos: Temperature 0.2, Top P 0.5, 
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

  // Fill background (matte) - using pure black for canvas matte background
  // This is intentional as it's a technical requirement for image composition
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);

  // Draw image with CONTAIN to preserve full content without cropping
  const scale = Math.min(width / img.width, height / img.height);
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

