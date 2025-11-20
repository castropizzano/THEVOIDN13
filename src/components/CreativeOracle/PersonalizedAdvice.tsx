import { useLanguage } from "@/contexts/LanguageContext";
import { personalizedAdviceMatrix } from "./data/personalizedAdvice";

interface PersonalizedAdviceProps {
  dominantArchetype: string;
  weakestStage: string;
}

export const PersonalizedAdvice = ({ dominantArchetype, weakestStage }: PersonalizedAdviceProps) => {
  const { language } = useLanguage();
  
  const adviceKey = `${dominantArchetype}_${weakestStage}`;
  const advice = personalizedAdviceMatrix[adviceKey];

  if (!advice) return null;

  return (
    <div className="space-y-4 font-mono animate-fade-in">
      <div className="text-accent font-bold text-sm flex items-center gap-2">
        <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
        [{language === "pt" ? "CONSELHO DOS MESTRES INVISÍVEIS" : "ADVICE FROM INVISIBLE MASTERS"}]
        <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
      </div>

      <div className="border border-primary/30 rounded-lg p-6 bg-background/30 space-y-4">
        <div className="text-sm text-foreground/90 leading-relaxed">
          {language === "pt" ? advice.message : advice.messageEn}
        </div>

        <div className="border-t border-primary/20 pt-4">
          <div className="text-xs text-muted-foreground italic border-l-2 border-accent/50 pl-3">
            {language === "pt" ? advice.reference : advice.referenceEn}
          </div>
        </div>
      </div>
    </div>
  );
};
