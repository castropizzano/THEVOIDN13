import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useLanguage } from "@/contexts/LanguageContext";
import { FeatureCard } from "@/components/FeatureCard";

export const ComicGenerator = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <FeatureCard
          title={language === "pt" ? "Gerador de Stills Cinematográficos" : "Cinematic Stills Generator"}
          description={language === "pt" ? "Gerar imagens cinemáticas usando IA" : "Generate cinematic images using AI"}
          buttonText={language === "pt" ? "Abrir Gerador" : "Launch Generator"}
          onClick={() => setOpen(!open)}
        />
      </div>
      
      {open && (
        <div className="mt-6">
          <Alert variant="default" className="border-primary/30">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="bible-body">
              {language === "pt" ? (
                <>
                  <strong>Recurso Desabilitado:</strong> O Gerador de Stills foi desabilitado nesta versão estática do memorial. 
                  Esta ferramenta anteriormente permitia gerar imagens cinematográficas usando IA, mas requer backend para funcionar.
                </>
              ) : (
                <>
                  <strong>Feature Disabled:</strong> The Still Generator has been disabled in this static version of the memorial. 
                  This tool previously allowed generating cinematic images using AI, but requires a backend to function.
                </>
              )}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};
