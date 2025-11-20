import { useLanguage } from "@/contexts/LanguageContext";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ProcessTimelineProps {
  processScores: {
    observation: number;
    cocreation: number;
    documentation: number;
    reflection: number;
    expansion: number;
  };
}

export const ProcessTimeline = ({ processScores }: ProcessTimelineProps) => {
  const { language } = useLanguage();

  const stages = [
    { 
      id: "observation", 
      name: language === "pt" ? "OBSERVAÇÃO" : "OBSERVATION",
      description: language === "pt" 
        ? "Captura do invisível. Treinar o olhar para ver além da superfície."
        : "Capturing the invisible. Training the eye to see beyond the surface.",
      example: "Lynch / Marker"
    },
    { 
      id: "cocreation", 
      name: language === "pt" ? "CO-CRIAÇÃO" : "CO-CREATION",
      description: language === "pt"
        ? "Diálogo com fantasmas, referências e contradições internas."
        : "Dialogue with ghosts, references and internal contradictions.",
      example: "Godard / Cahiers"
    },
    { 
      id: "documentation", 
      name: language === "pt" ? "DOCUMENTAÇÃO" : "DOCUMENTATION",
      description: language === "pt"
        ? "Transformar o efêmero em matéria. Cristalizar o processo."
        : "Transform the ephemeral into matter. Crystallize the process.",
      example: "Kiefer / Marker"
    },
    { 
      id: "reflection", 
      name: language === "pt" ? "REFLEXÃO" : "REFLECTION",
      description: language === "pt"
        ? "Digerir o processo e extrair significado. Coragem para olhar sem autoindulgência."
        : "Digest the process and extract meaning. Courage to look without self-indulgence.",
      example: "Bresson / Beckett"
    },
    { 
      id: "expansion", 
      name: language === "pt" ? "EXPANSÃO" : "EXPANSION",
      description: language === "pt"
        ? "Deixar a obra respirar no mundo. Menor controle, maior vulnerabilidade."
        : "Let the work breathe in the world. Least control, greatest vulnerability.",
      example: "Herzog / Varda"
    },
  ];

  const maxScore = Math.max(...Object.values(processScores));
  const minScore = Math.min(...Object.values(processScores));

  const getStageStatus = (score: number) => {
    if (score === maxScore) return "strong";
    if (score === minScore) return "weak";
    return "medium";
  };

  return (
    <div className="space-y-4 font-mono">
      <div className="text-accent font-bold text-sm">
        [{language === "pt" ? "TIMELINE PROCESSUAL" : "PROCESSUAL TIMELINE"}]
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-primary/20" />

        {/* Stages */}
        <div className="grid grid-cols-5 gap-2 relative">
          {stages.map((stage) => {
            const score = processScores[stage.id as keyof typeof processScores];
            const status = getStageStatus(score);
            const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

            return (
              <TooltipProvider key={stage.id}>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center cursor-help animate-fade-in">
                      {/* Stage circle */}
                      <div 
                        className={`
                          w-16 h-16 rounded-full border-2 flex items-center justify-center
                          transition-all duration-300 hover:scale-110
                          ${status === "strong" ? "bg-accent/20 border-accent shadow-lg shadow-accent/50" : ""}
                          ${status === "weak" ? "bg-destructive/20 border-destructive shadow-lg shadow-destructive/50" : ""}
                          ${status === "medium" ? "bg-primary/10 border-primary/50" : ""}
                        `}
                      >
                        <div className="text-center">
                          <div className={`
                            text-lg font-bold
                            ${status === "strong" ? "text-accent" : ""}
                            ${status === "weak" ? "text-destructive" : ""}
                            ${status === "medium" ? "text-primary" : ""}
                          `}>
                            {percentage}%
                          </div>
                          {status === "strong" && <div className="text-xs text-accent">★</div>}
                          {status === "weak" && <div className="text-xs text-destructive">⚠</div>}
                        </div>
                      </div>

                      {/* Stage name */}
                      <div className="mt-3 text-xs text-center text-muted-foreground max-w-[80px]">
                        {stage.name}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="bottom" 
                    className="max-w-xs bg-background/95 backdrop-blur-sm border-primary/30 p-4"
                  >
                    <div className="space-y-2">
                      <div className="font-bold text-accent text-sm">{stage.name}</div>
                      <div className="text-xs text-foreground/80 leading-relaxed">
                        {stage.description}
                      </div>
                      <div className="text-xs text-muted-foreground italic pt-2 border-t border-primary/20">
                        {language === "pt" ? "Referências:" : "References:"} {stage.example}
                      </div>
                      <div className="text-xs pt-1">
                        <span className={`font-mono ${
                          status === "strong" ? "text-accent" : 
                          status === "weak" ? "text-destructive" : 
                          "text-primary"
                        }`}>
                          Score: {score} / {maxScore}
                        </span>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent/20 border border-accent" />
            <span>{language === "pt" ? "Forte" : "Strong"} ★</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/10 border border-primary/50" />
            <span>{language === "pt" ? "Médio" : "Medium"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/20 border border-destructive" />
            <span>{language === "pt" ? "Fraco" : "Weak"} ⚠</span>
          </div>
        </div>
      </div>
    </div>
  );
};
