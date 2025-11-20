import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Network, ArrowRight, Zap, AlertTriangle, Lightbulb } from "lucide-react";
import { processStages } from "./data/processStages";

interface OracleMindMapIntegrationProps {
  archetypeScores: Record<string, number>;
  processScores: Record<string, number>;
  dominantArchetype: string;
}

export const OracleMindMapIntegration = ({ 
  archetypeScores, 
  processScores, 
  dominantArchetype 
}: OracleMindMapIntegrationProps) => {
  const { language } = useLanguage();

  const archetypeNames: Record<string, { pt: string; en: string }> = {
    shadow: { pt: "SHADOW (Introspectivo)", en: "SHADOW (Introspective)" },
    punk: { pt: "PUNK (Transgressor)", en: "PUNK (Transgressor)" },
    buddy: { pt: "BUDDY (Colaborativo)", en: "BUDDY (Collaborative)" },
    gi: { pt: "GI (Disciplinado)", en: "GI (Disciplined)" }
  };

  // Encontrar etapa mais forte e mais fraca
  const sortedProcess = Object.entries(processScores).sort((a, b) => b[1] - a[1]);
  const strongestStage = sortedProcess[0][0];
  const weakestStage = sortedProcess[sortedProcess.length - 1][0];

  // Mapear IDs para dados completos
  const getStageData = (stageId: string) => {
    return processStages.find(s => s.id === stageId);
  };

  const strongestData = getStageData(strongestStage);
  const weakestData = getStageData(weakestStage);

  // Gerar conexões do arquétipo com as etapas
  const generateArchetypeConnections = () => {
    return processStages.map(stage => {
      const archetypeConnection = stage.archetypeConnection[dominantArchetype as keyof typeof stage.archetypeConnection];
      const archetypeConnectionEn = stage.archetypeConnection[`${dominantArchetype}En` as keyof typeof stage.archetypeConnection];
      const score = processScores[stage.id] || 0;
      
      return {
        stage,
        connection: language === 'pt' ? archetypeConnection : archetypeConnectionEn,
        score,
        strength: score > 70 ? 'strong' : score > 40 ? 'moderate' : 'weak'
      };
    });
  };

  const connections = generateArchetypeConnections();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-primary/30 pb-6">
        <div className="flex items-center justify-center gap-3">
          <Network className="h-8 w-8 text-accent animate-pulse" />
          <h3 className="text-2xl font-bold text-primary font-mono">
            {language === 'pt' ? 'MAPA MENTAL PERSONALIZADO' : 'PERSONALIZED MIND MAP'}
          </h3>
        </div>
        <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto">
          {language === 'pt' 
            ? '// Seu perfil criativo mapeado nas 5 etapas do processo artístico THEVØIDN13'
            : '// Your creative profile mapped to the 5 stages of THEVØIDN13 artistic process'}
        </p>
      </div>

      {/* Arquétipo Dominante */}
      <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
          <h4 className="text-accent font-bold font-mono text-lg">
            {language === 'pt' ? 'ARQUÉTIPO DOMINANTE' : 'DOMINANT ARCHETYPE'}
          </h4>
        </div>
        <div className="text-2xl font-bold text-primary font-mono">
          {language === 'pt' ? archetypeNames[dominantArchetype]?.pt : archetypeNames[dominantArchetype]?.en}
        </div>
        <div className="text-muted-foreground font-mono text-sm">
          SCORE: {archetypeScores[dominantArchetype]}% // 
          {language === 'pt' 
            ? 'Este é seu modo operacional criativo primário'
            : 'This is your primary creative operational mode'}
        </div>
      </div>

      {/* Conexões com Etapas do Processo */}
      <div className="space-y-4">
        <h4 className="text-primary font-bold font-mono text-lg border-b border-primary/30 pb-2">
          {language === 'pt' 
            ? '// CONEXÕES: Arquétipo → Etapas do Processo'
            : '// CONNECTIONS: Archetype → Process Stages'}
        </h4>

        {connections.map((conn, idx) => (
          <div 
            key={conn.stage.id}
            className={`border rounded-lg p-4 space-y-3 transition-all ${
              conn.strength === 'strong' 
                ? 'bg-green-500/10 border-green-500/30' 
                : conn.strength === 'moderate'
                ? 'bg-yellow-500/10 border-yellow-500/30'
                : 'bg-red-500/10 border-red-500/30'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  {conn.strength === 'strong' && <Zap className="h-5 w-5 text-green-500" />}
                  {conn.strength === 'moderate' && <Lightbulb className="h-5 w-5 text-yellow-500" />}
                  {conn.strength === 'weak' && <AlertTriangle className="h-5 w-5 text-red-500" />}
                  <h5 className="font-bold font-mono text-primary">
                    {language === 'pt' ? conn.stage.title : conn.stage.titleEn}
                  </h5>
                </div>
                <p className="text-sm text-muted-foreground font-mono">
                  {conn.connection}
                </p>
              </div>
              <div className="text-right space-y-1">
                <div className={`text-2xl font-bold font-mono ${
                  conn.strength === 'strong' ? 'text-green-500' :
                  conn.strength === 'moderate' ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  {conn.score}%
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  {conn.strength === 'strong' && (language === 'pt' ? 'FORTE' : 'STRONG')}
                  {conn.strength === 'moderate' && (language === 'pt' ? 'MODERADO' : 'MODERATE')}
                  {conn.strength === 'weak' && (language === 'pt' ? 'FRACO' : 'WEAK')}
                </div>
              </div>
            </div>

            {/* Barra de progresso */}
            <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${
                  conn.strength === 'strong' ? 'bg-green-500' :
                  conn.strength === 'moderate' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${conn.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Análise: Zona de Força */}
      {strongestData && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 space-y-3">
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-green-500" />
            <h4 className="text-green-500 font-bold font-mono text-lg">
              {language === 'pt' ? 'ZONA DE FORÇA' : 'STRENGTH ZONE'}
            </h4>
          </div>
          <div className="space-y-2">
            <div className="text-primary font-bold font-mono">
              {language === 'pt' ? strongestData.title : strongestData.titleEn}
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              {language === 'pt' 
                ? `Sua conexão mais forte com ${archetypeNames[dominantArchetype]?.pt}. Esta é sua zona de conforto criativo — use-a como âncora.`
                : `Your strongest connection with ${archetypeNames[dominantArchetype]?.en}. This is your creative comfort zone — use it as anchor.`}
            </p>
          </div>
        </div>
      )}

      {/* Análise: Zona de Crescimento */}
      {weakestData && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 space-y-3">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h4 className="text-red-500 font-bold font-mono text-lg">
              {language === 'pt' ? 'ZONA DE CRESCIMENTO' : 'GROWTH ZONE'}
            </h4>
          </div>
          <div className="space-y-2">
            <div className="text-primary font-bold font-mono">
              {language === 'pt' ? weakestData.title : weakestData.titleEn}
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              {language === 'pt' 
                ? `Sua conexão mais fraca. Esta é sua fronteira criativa — aqui está o maior potencial de evolução.`
                : `Your weakest connection. This is your creative frontier — here lies the greatest potential for evolution.`}
            </p>
          </div>
        </div>
      )}

      {/* CTA para Mind Map completo */}
      <div className="text-center pt-6 border-t border-primary/30">
        <p className="text-muted-foreground font-mono text-sm mb-4">
          {language === 'pt' 
            ? '// Explore o mapa completo do processo criativo THEVØIDN13'
            : '// Explore the complete THEVØIDN13 creative process map'}
        </p>
        <Button
          onClick={() => {
            // Scroll para o Mind Map na página Index
            const mindMapSection = document.querySelector('[data-mindmap]');
            if (mindMapSection) {
              mindMapSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }}
          variant="outline"
          className="gap-2 font-mono"
        >
          <Network className="h-4 w-4" />
          {language === 'pt' ? 'Explorar Mind Map Completo' : 'Explore Full Mind Map'}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};