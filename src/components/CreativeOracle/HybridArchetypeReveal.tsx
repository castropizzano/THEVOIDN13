import { useLanguage } from "@/contexts/LanguageContext";
import { hybridArchetypes } from "./data/hybridArchetypes";

interface HybridArchetypeRevealProps {
  dominantArchetype: string;
  secondaryArchetype: string;
  dominantScore: number;
  secondaryScore: number;
}

export const HybridArchetypeReveal = ({ 
  dominantArchetype, 
  secondaryArchetype,
  dominantScore,
  secondaryScore 
}: HybridArchetypeRevealProps) => {
  const { language } = useLanguage();

  // Check if scores are close enough to reveal hybrid (difference < 6 points)
  const scoreDifference = Math.abs(dominantScore - secondaryScore);
  const isHybrid = scoreDifference < 6;

  if (!isHybrid) return null;

  const hybridKey = `${dominantArchetype}-${secondaryArchetype}`;
  const hybrid = hybridArchetypes[hybridKey];

  if (!hybrid) return null;

  return (
    <div className="space-y-4 font-mono animate-scale-in">
      <div className="text-accent font-bold text-lg flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        [{language === "pt" ? "ARQUÉTIPO HÍBRIDO DETECTADO" : "HYBRID ARCHETYPE DETECTED"}]
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      </div>

      <div className="border border-accent/50 rounded-lg p-6 bg-accent/5 space-y-4">
        <div className="text-center space-y-2">
          <div className="text-2xl font-bold text-accent">
            {language === "pt" ? hybrid.name : hybrid.nameEn}
          </div>
          <div className="text-xs text-muted-foreground">
            {dominantArchetype.toUpperCase()} ({dominantScore}pts) + {secondaryArchetype.toUpperCase()} ({secondaryScore}pts)
          </div>
        </div>

        <div className="text-foreground/90 leading-relaxed">
          {language === "pt" ? hybrid.description : hybrid.descriptionEn}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2 border border-primary/20 rounded p-4 bg-background/30">
            <div className="text-accent text-sm font-bold">
              [{language === "pt" ? "SUPERPODER" : "SUPERPOWER"}]
            </div>
            <div className="text-sm text-foreground/80">
              {language === "pt" ? hybrid.superpower : hybrid.superpowerEn}
            </div>
          </div>

          <div className="space-y-2 border border-destructive/30 rounded p-4 bg-destructive/5">
            <div className="text-destructive text-sm font-bold">
              [{language === "pt" ? "RISCO" : "RISK"}]
            </div>
            <div className="text-sm text-foreground/80">
              {language === "pt" ? hybrid.risk : hybrid.riskEn}
            </div>
          </div>
        </div>

        <div className="space-y-2 border-t border-primary/20 pt-4">
          <div className="text-muted-foreground text-sm">
            [{language === "pt" ? "ARTISTAS REFERÊNCIA" : "REFERENCE ARTISTS"}]
          </div>
          <div className="text-sm text-foreground/80">
            {hybrid.artists.join(" • ")}
          </div>
        </div>

        <div className="border-t border-primary/20 pt-4">
          <div className="text-sm text-foreground/70 italic leading-relaxed border-l-2 border-accent/50 pl-4">
            {language === "pt" ? hybrid.advice : hybrid.adviceEn}
          </div>
        </div>
      </div>
    </div>
  );
};
