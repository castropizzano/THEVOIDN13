import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { processStages, ProcessStage } from "./data/processStages";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const LearnMode = () => {
  const { language } = useLanguage();
  const [currentStage, setCurrentStage] = useState(0);
  const stage = processStages[currentStage];

  const nextStage = () => {
    if (currentStage < processStages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  return (
    <div className="space-y-6 font-mono">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={prevStage}
          disabled={currentStage === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          {language === "pt" ? "Anterior" : "Previous"}
        </Button>
        <div className="text-muted-foreground text-sm">
          {currentStage + 1} / {processStages.length}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={nextStage}
          disabled={currentStage === processStages.length - 1}
          className="gap-2"
        >
          {language === "pt" ? "Próximo" : "Next"}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-6 border border-primary/30 rounded-lg p-6 bg-black/50">
        <div className="text-accent font-bold text-xl">
          {language === "pt" ? stage.title : stage.titleEn}
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed">
          {language === "pt" ? stage.description : stage.descriptionEn}
        </div>

        <div className="border-t border-primary/20 pt-4">
          <div className="text-muted-foreground text-sm mb-2">
            [{language === "pt" ? "REFERÊNCIA TEÓRICA" : "THEORETICAL REFERENCE"}]
          </div>
          <div className="text-foreground/80 italic pl-4 border-l-2 border-primary/40">
            {language === "pt" ? stage.theoreticalRef : stage.theoreticalRefEn}
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-muted-foreground text-sm">
            [{language === "pt" ? "EXEMPLOS HISTÓRICOS" : "HISTORICAL EXAMPLES"}]
          </div>
          {stage.historicalExamples.map((example, idx) => (
            <div key={idx} className="pl-4 space-y-2 border-l border-primary/30">
              <div className="font-bold text-accent">{example.artist}</div>
              <div className="text-sm text-muted-foreground">{example.work}</div>
              <div className="text-foreground/80">
                {language === "pt" ? example.insight : example.insightEn}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-t border-primary/20 pt-4">
          <div className="text-muted-foreground text-sm">
            [{language === "pt" ? "CONEXÃO COM ARQUÉTIPOS" : "ARCHETYPE CONNECTION"}]
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-background/50 rounded border border-primary/20">
              <div className="text-accent font-bold text-sm mb-1">SHADOW</div>
              <div className="text-xs text-foreground/80">
                {language === "pt" ? stage.archetypeConnection.shadow : stage.archetypeConnection.shadowEn}
              </div>
            </div>
            <div className="p-3 bg-background/50 rounded border border-primary/20">
              <div className="text-accent font-bold text-sm mb-1">PUNK</div>
              <div className="text-xs text-foreground/80">
                {language === "pt" ? stage.archetypeConnection.punk : stage.archetypeConnection.punkEn}
              </div>
            </div>
            <div className="p-3 bg-background/50 rounded border border-primary/20">
              <div className="text-accent font-bold text-sm mb-1">BUDDY</div>
              <div className="text-xs text-foreground/80">
                {language === "pt" ? stage.archetypeConnection.buddy : stage.archetypeConnection.buddyEn}
              </div>
            </div>
            <div className="p-3 bg-background/50 rounded border border-primary/20">
              <div className="text-accent font-bold text-sm mb-1">GI</div>
              <div className="text-xs text-foreground/80">
                {language === "pt" ? stage.archetypeConnection.gi : stage.archetypeConnection.giEn}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
