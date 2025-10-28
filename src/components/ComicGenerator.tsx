import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const EXAMPLE_SCRIPT = `CENA 1 — O CAMINHO FRIO
Tattooed man with black cap (no hood), green military jacket, oversized black t-shirt, black sweatpants and black Vans sneakers walks beside a short-haired woman in dark jacket and jeans at night. Between them, a small Jack Russell puppy in a yellow raincoat trots along the wet street. Empty urban alley, amber streetlights reflecting on soaked asphalt, blue mist drifting through distant buildings, soft rain haze.`;

export const ComicGenerator = () => {
  const [script, setScript] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!script.trim()) {
      toast.error("Por favor, insira um roteiro / Please enter a script");
      return;
    }

    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      const { data, error } = await supabase.functions.invoke("generate-comic-panel", {
        body: { script: script.trim() }
      });

      if (error) throw error;

      if (data?.imageUrl) {
        setGeneratedImage(data.imageUrl);
        toast.success("Tirinha gerada! / Comic panel generated!");
      } else {
        throw new Error("No image generated");
      }
    } catch (error: any) {
      console.error("Error generating comic:", error);
      toast.error(error.message || "Erro ao gerar tirinha / Error generating comic panel");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `thevoidn13-panel-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const loadExample = () => {
    setScript(EXAMPLE_SCRIPT);
    toast.info("Roteiro de exemplo carregado / Example script loaded");
  };

  return (
    <Card className="w-full border-2 border-primary/30 bg-card/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Sparkles className="w-5 h-5" />
          Gerador Experimental de Tirinhas
        </CardTitle>
        <CardDescription>
          Comic Panel Generator — Powered by Nano Banana (Gemini 2.5 Flash Image)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">
              Roteiro da Cena / Scene Script
            </label>
            <Button
              variant="ghost"
              size="sm"
              onClick={loadExample}
              className="text-xs"
            >
              Carregar Exemplo / Load Example
            </Button>
          </div>
          <Textarea
            placeholder="Descreva a cena usando o estilo THEVOIDN13: Neo-noir atmosphere, analog 35 mm grain, ink texture and painterly lighting..."
            value={script}
            onChange={(e) => setScript(e.target.value)}
            className="min-h-[150px] font-mono text-sm"
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
              Gerar Tirinha / Generate Panel
            </>
          )}
        </Button>

        {generatedImage && (
          <div className="space-y-4 animate-in fade-in-50 duration-500">
            <div className="relative rounded-lg overflow-hidden border-2 border-primary/50">
              <img
                src={generatedImage}
                alt="Generated comic panel"
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

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Nota Experimental:</span> Este gerador usa prompts mestres do projeto THEVOIDN13 
            combinados com roteiros criativos para produzir arte visual neo-noir no estilo do universo. 
            A consistência visual é mantida através dos parâmetros definidos na Shadow Interface Bible.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
