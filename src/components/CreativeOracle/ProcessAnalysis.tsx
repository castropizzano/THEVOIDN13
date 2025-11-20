import { useLanguage } from "@/contexts/LanguageContext";
import { exerciseLibrary } from "./data/exercises";

interface ProcessAnalysisProps {
  processScores: {
    observation: number;
    cocreation: number;
    documentation: number;
    reflection: number;
    expansion: number;
  };
  dominantArchetype: string;
}

export const ProcessAnalysis = ({ processScores, dominantArchetype }: ProcessAnalysisProps) => {
  const { language } = useLanguage();

  const stages = [
    { id: "observation", name: language === "pt" ? "OBSERVAÇÃO" : "OBSERVATION" },
    { id: "cocreation", name: language === "pt" ? "CO-CRIAÇÃO" : "CO-CREATION" },
    { id: "documentation", name: language === "pt" ? "DOCUMENTAÇÃO" : "DOCUMENTATION" },
    { id: "reflection", name: language === "pt" ? "REFLEXÃO" : "REFLECTION" },
    { id: "expansion", name: language === "pt" ? "EXPANSÃO" : "EXPANSION" },
  ];

  const maxScore = Math.max(...Object.values(processScores));
  const minScore = Math.min(...Object.values(processScores));
  const weakestStage = Object.entries(processScores).sort((a, b) => a[1] - b[1])[0][0];

  const getProgressBar = (value: number, max: number) => {
    const percentage = Math.round((value / max) * 100);
    const filled = Math.round((percentage / 100) * 20);
    return { bar: '█'.repeat(filled) + '░'.repeat(20 - filled), percentage };
  };

  const exerciseKey = `${dominantArchetype}_${weakestStage}`;
  const relevantExercises = exerciseLibrary[exerciseKey] || [];

  return (
    <div className="space-y-6 font-mono">
      <div className="text-accent font-bold text-lg">
        [{language === "pt" ? "CARTOGRAFIA PROCESSUAL" : "PROCESSUAL CARTOGRAPHY"}]
      </div>

      <div className="space-y-2 border border-primary/30 rounded-lg p-4 bg-black/50">
        {stages.map((stage) => {
          const score = processScores[stage.id as keyof typeof processScores];
          const { bar, percentage } = getProgressBar(score, maxScore);
          const isWeak = score === minScore;
          
          return (
            <div key={stage.id} className="flex items-center gap-3">
              <div className="w-32 text-sm text-muted-foreground">{stage.name}</div>
              <div className="flex-1 font-mono text-xs">
                <span className={isWeak ? "text-destructive" : "text-accent"}>{bar}</span>
              </div>
              <div className="w-16 text-right text-sm">
                {percentage}% {isWeak && <span className="text-destructive">⚠️</span>}
              </div>
            </div>
          );
        })}
      </div>

      {relevantExercises.length > 0 && (
        <div className="space-y-4">
          <div className="text-accent font-bold">
            [{language === "pt" ? "EXERCÍCIOS SUGERIDOS" : "SUGGESTED EXERCISES"}]
          </div>
          {relevantExercises.map((exercise, idx) => (
            <div key={idx} className="border border-primary/30 rounded-lg p-4 bg-black/30 space-y-3">
              <div className="flex items-start justify-between">
                <div className="font-bold text-foreground">
                  {language === "pt" ? exercise.title : exercise.titleEn}
                </div>
                <div className="text-xs text-muted-foreground">
                  {language === "pt" ? exercise.duration : exercise.durationEn}
                </div>
              </div>
              
              <div className="text-sm text-foreground/80">
                {language === "pt" ? exercise.description : exercise.descriptionEn}
              </div>

              <div className="text-xs text-muted-foreground">
                <span className="font-bold">{language === "pt" ? "Materiais:" : "Materials:"}</span>{" "}
                {(language === "pt" ? exercise.materials : exercise.materialsEn).join(", ")}
              </div>

              <div className="text-xs text-foreground/70 italic border-l-2 border-primary/40 pl-3">
                {language === "pt" ? exercise.artistReference : exercise.artistReferenceEn}
              </div>

              <div className="text-xs text-accent">
                <span className="font-bold">{language === "pt" ? "Resultado esperado:" : "Expected outcome:"}</span>{" "}
                {language === "pt" ? exercise.expectedOutcome : exercise.expectedOutcomeEn}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
