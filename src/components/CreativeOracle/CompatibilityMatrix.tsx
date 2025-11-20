import { useLanguage } from "@/contexts/LanguageContext";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const CompatibilityMatrix = () => {
  const { language } = useLanguage();

  const archetypes = ["SHADOW", "PUNK", "BUDDY", "GI"];

  const compatibility = {
    "SHADOW-SHADOW": { level: 2, example: "Lynch + Marker" },
    "SHADOW-PUNK": { level: 3, example: "Herzog + Anger" },
    "SHADOW-BUDDY": { level: 2, example: "Tarkovsky + Bergman" },
    "SHADOW-GI": { level: 1, example: "Lynch + Bresson" },
    "PUNK-SHADOW": { level: 3, example: "Godard + Marker" },
    "PUNK-PUNK": { level: 2, example: "Godard + Truffaut" },
    "PUNK-BUDDY": { level: 3, example: "Godard + Gorin" },
    "PUNK-GI": { level: 2, example: "Dogma 95 + Bresson" },
    "BUDDY-SHADOW": { level: 2, example: "Varda + Akerman" },
    "BUDDY-PUNK": { level: 3, example: "Cahiers Collective" },
    "BUDDY-BUDDY": { level: 2, example: "Varda + Demy" },
    "BUDDY-GI": { level: 3, example: "Pixar Brain Trust" },
    "GI-SHADOW": { level: 1, example: "Bresson + Lynch" },
    "GI-PUNK": { level: 2, example: "Ozu + Godard" },
    "GI-BUDDY": { level: 3, example: "Studio Ghibli" },
    "GI-GI": { level: 2, example: "Bresson + Ozu" },
  };

  const getCompatibilityLevel = (row: string, col: string) => {
    if (row === col) return { level: 0, label: "--", tooltip: language === "pt" ? "Mesmo arquétipo" : "Same archetype" };
    const key = `${row}-${col}`;
    const data = compatibility[key as keyof typeof compatibility];
    
    if (data.level === 3) {
      return { 
        level: 3, 
        label: "●●●", 
        color: "text-accent",
        tooltip: language === "pt" 
          ? `Sinergia natural. Exemplo: ${data.example}`
          : `Natural synergy. Example: ${data.example}`
      };
    }
    if (data.level === 2) {
      return { 
        level: 2, 
        label: "●●○", 
        color: "text-primary",
        tooltip: language === "pt"
          ? `Tensão produtiva. Exemplo: ${data.example}`
          : `Productive tension. Example: ${data.example}`
      };
    }
    return { 
      level: 1, 
      label: "●○○", 
      color: "text-muted-foreground",
      tooltip: language === "pt"
        ? `Conflito filosófico (pode ser fértil). Exemplo: ${data.example}`
        : `Philosophical conflict (can be fertile). Example: ${data.example}`
    };
  };

  return (
    <div className="space-y-4 font-mono">
      <div className="text-accent font-bold text-sm">
        [{language === "pt" ? "MATRIX DE COMPATIBILIDADE EM COLABORAÇÃO" : "COLLABORATION COMPATIBILITY MATRIX"}]
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-primary/30 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-background/50">
              <th className="p-3 text-left text-xs text-muted-foreground border-b border-r border-primary/20"></th>
              {archetypes.map((arch) => (
                <th key={arch} className="p-3 text-center text-xs font-bold text-accent border-b border-primary/20">
                  {arch}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {archetypes.map((rowArch, rowIdx) => (
              <tr key={rowArch} className="hover:bg-primary/5 transition-colors">
                <td className="p-3 text-xs font-bold text-accent border-r border-primary/20">
                  {rowArch}
                </td>
                {archetypes.map((colArch, colIdx) => {
                  const compat = getCompatibilityLevel(rowArch, colArch);
                  return (
                    <td 
                      key={colArch} 
                      className="p-3 text-center border-primary/10"
                      style={{ 
                        borderRight: colIdx < archetypes.length - 1 ? '1px solid hsl(var(--primary) / 0.1)' : 'none',
                        borderBottom: rowIdx < archetypes.length - 1 ? '1px solid hsl(var(--primary) / 0.1)' : 'none'
                      }}
                    >
                      <TooltipProvider>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <div className={`cursor-help text-sm ${compat.color || 'text-muted-foreground'} hover:scale-110 transition-transform`}>
                              {compat.label}
                            </div>
                          </TooltipTrigger>
                          {compat.tooltip && (
                            <TooltipContent 
                              side="top" 
                              className="bg-background/95 backdrop-blur-sm border-primary/30"
                            >
                              <div className="text-xs max-w-xs">
                                {compat.tooltip}
                              </div>
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="text-accent">●●●</span>
          <span>{language === "pt" ? "Sinergia natural" : "Natural synergy"}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-primary">●●○</span>
          <span>{language === "pt" ? "Tensão produtiva" : "Productive tension"}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground">●○○</span>
          <span>{language === "pt" ? "Conflito filosófico (pode ser fértil, mas difícil)" : "Philosophical conflict (can be fertile, but difficult)"}</span>
        </div>
      </div>
    </div>
  );
};
