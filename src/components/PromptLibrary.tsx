import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useLanguage } from "@/contexts/LanguageContext";
import { FeatureCard } from "@/components/FeatureCard";

export const PromptLibrary = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

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

      <DialogContent className="max-w-3xl bg-black/95 border-primary/30">
        <DialogHeader className="border-b border-primary/30 pb-4">
          <DialogTitle className="text-primary text-xl font-mono font-bold">
            PROMPT_LIBRARY::THEVØIDN13
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-mono text-sm">
            // {language === "pt" ? "Acessar prompts de IA" : "Access AI prompts"}
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <Alert variant="default" className="border-primary/30">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="bible-body">
              {language === "pt" ? (
                <>
                  <strong>Recurso Desabilitado:</strong> A Biblioteca de Prompts foi desabilitada nesta versão estática do memorial. 
                  Esta ferramenta anteriormente fornecia acesso a prompts de IA para geração de conteúdo visual, mas requer banco de dados para funcionar.
                </>
              ) : (
                <>
                  <strong>Feature Disabled:</strong> The Prompt Library has been disabled in this static version of the memorial. 
                  This tool previously provided access to AI prompts for visual content generation, but requires a database to function.
                </>
              )}
            </AlertDescription>
          </Alert>
        </div>
      </DialogContent>
    </Dialog>
  );
};
