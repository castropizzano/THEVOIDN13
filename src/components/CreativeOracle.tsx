/**
 * CreativeOracle Component
 * 
 * An interactive archetype identification system based on THEVØIDN13 methodology.
 * Users answer 6 contextualized questions to discover their dominant creative archetype.
 * 
 * Features:
 * - Multi-archetype scoring system (Shadow, Punk, Buddy, GI)
 * - Process stage analysis (observation, cocreation, documentation, reflection, expansion)
 * - Radar chart visualization
 * - Hybrid archetype detection
 * - PDF export of results
 * - Bilingual support (PT/EN)
 * - Background audio (Shadow in the Dark)
 * 
 * Architecture:
 * - Questions are stored in contextualizedQuestions data file
 * - Each answer updates archetype scores and process scores
 * - Results show dominant/secondary archetypes with personalized advice
 * - Learn mode provides archetype theory without taking the quiz
 * 
 * @see docs/CREATIVE_ORACLE.md for detailed technical documentation
 */
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Download, Info } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/contexts/LanguageContext";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { LearnMode } from "./CreativeOracle/LearnMode";
import { ProcessAnalysis } from "./CreativeOracle/ProcessAnalysis";
import { ProcessTimeline } from "./CreativeOracle/ProcessTimeline";
import { CompatibilityMatrix } from "./CreativeOracle/CompatibilityMatrix";
import { HybridArchetypeReveal } from "./CreativeOracle/HybridArchetypeReveal";
import { ContextualQuote } from "./CreativeOracle/ContextualQuote";
import { PersonalizedAdvice } from "./CreativeOracle/PersonalizedAdvice";
import { contextualizedQuestions } from "./CreativeOracle/data/contextualizedQuestions";
import { hybridArchetypes } from "./CreativeOracle/data/hybridArchetypes";

/**
 * Props for CreativeOracle dialog component
 */
interface CreativeOracleProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Question structure for the archetype quiz
 * Each question has 4 options, each associated with an archetype and score value
 */
type Question = {
  text: string;      // Portuguese text
  textEn: string;    // English text
  options: Array<{
    text: string;         // Portuguese option text
    textEn: string;       // English option text
    archetype: string;    // Associated archetype (shadow, punk, buddy, gi)
    value: number;        // Score value (1-3)
  }>;
};

/**
 * Archetype definitions
 * Contains all data for the 4 creative archetypes used in THEVØIDN13 methodology:
 * - SHADOW: Introspective creator, works alone, deep authenticity
 * - PUNK: Impulsive revolutionary, breaks to rebuild, raw energy
 * - BUDDY: Connected collaborator, finds strength in community
 * - GI: Disciplined executor, masters technique through repetition
 */
const archetypes = {
  shadow: {
    name: "SHADOW (A Sombra)",
    nameEn: "SHADOW (The Shadow)",
    description: "Você é o criador introspectivo, que mergulha nas profundezas do eu para extrair verdades ocultas. Seu processo é solitário mas profundo, transformando a escuridão interior em luz criativa.",
    descriptionEn: "You are the introspective creator, diving into the depths of the self to extract hidden truths. Your process is solitary but profound, transforming inner darkness into creative light.",
    message: "O vazio não é ausência. É o espaço onde a verdade nasce.",
    messageEn: "The void is not absence. It's the space where truth is born.",
    strengths: ["Autenticidade profunda", "Introspecção intensa", "Trabalho solitário produtivo"],
    strengthsEn: ["Deep authenticity", "Intense introspection", "Productive solitary work"],
    challenges: ["Isolamento excessivo", "Dificuldade em compartilhar processo", "Perfeccionismo paralisante"],
    challengesEn: ["Excessive isolation", "Difficulty sharing process", "Paralyzing perfectionism"],
    recommendations: ["Documente seu processo interno", "Crie rituais de imersão criativa", "Estabeleça pontos de compartilhamento"],
    recommendationsEn: ["Document your internal process", "Create creative immersion rituals", "Establish sharing points"],
  },
  punk: {
    name: "PUNK (O Criador)",
    nameEn: "PUNK (The Creator)",
    description: "Você é o revolucionário impulsivo, que cria para destruir e reconstruir. Seu impulso vem da rejeição ao establishment e do desejo ardente de transformação radical.",
    descriptionEn: "You are the impulsive revolutionary, who creates to destroy and rebuild. Your impulse comes from rejecting the establishment and the burning desire for radical transformation.",
    message: "Criar é quebrar. Toda obra verdadeira é um ato de rebelião.",
    messageEn: "To create is to break. Every true work is an act of rebellion.",
    strengths: ["Coragem de inovar", "Energia transformadora", "Autenticidade bruta"],
    strengthsEn: ["Courage to innovate", "Transformative energy", "Raw authenticity"],
    challenges: ["Impaciência com processos", "Risco de autossabotagem", "Dificuldade com refinamento"],
    challengesEn: ["Impatience with processes", "Risk of self-sabotage", "Difficulty with refinement"],
    recommendations: ["Canalize urgência em projetos curtos", "Alterne entre destruição e construção", "Documente suas revoluções"],
    recommendationsEn: ["Channel urgency into short projects", "Alternate between destruction and construction", "Document your revolutions"],
  },
  buddy: {
    name: "BUDDY (O Companheiro)",
    nameEn: "BUDDY (The Companion)",
    description: "Você é o colaborador conectado, que encontra força na comunidade e no compartilhamento. Seu trabalho nasce do diálogo, da troca, da energia coletiva.",
    descriptionEn: "You are the connected collaborator, who finds strength in community and sharing. Your work is born from dialogue, exchange, collective energy.",
    message: "Sozinho vamos rápido. Juntos, criamos o impossível.",
    messageEn: "Alone we go fast. Together, we create the impossible.",
    strengths: ["Empatia profunda", "Facilidade de colaboração", "Energia coletiva"],
    strengthsEn: ["Deep empathy", "Collaboration facility", "Collective energy"],
    challenges: ["Dependência de validação externa", "Dificuldade com solidão criativa", "Diluição de visão pessoal"],
    challengesEn: ["Dependence on external validation", "Difficulty with creative solitude", "Dilution of personal vision"],
    recommendations: ["Reserve tempo para trabalho solo", "Cultive sua voz autoral", "Escolha colaborações estratégicas"],
    recommendationsEn: ["Reserve time for solo work", "Cultivate your authorial voice", "Choose strategic collaborations"],
  },
  gi: {
    name: "GI (A Presença)",
    nameEn: "GI (The Presence)",
    description: "Você é o executor disciplinado, que encontra liberdade na estrutura e maestria na repetição. Seu caminho é o da excelência técnica e da presença plena.",
    descriptionEn: "You are the disciplined executor, who finds freedom in structure and mastery in repetition. Your path is technical excellence and full presence.",
    message: "A forma liberta. A disciplina é o caminho para a verdadeira expressão.",
    messageEn: "Form liberates. Discipline is the path to true expression.",
    strengths: ["Disciplina consistente", "Maestria técnica", "Presença plena"],
    strengthsEn: ["Consistent discipline", "Technical mastery", "Full presence"],
    challenges: ["Rigidez excessiva", "Medo de experimentação", "Perfeccionismo técnico"],
    challengesEn: ["Excessive rigidity", "Fear of experimentation", "Technical perfectionism"],
    recommendations: ["Incorpore experimentação controlada", "Questione suas estruturas", "Permita imperfeições intencionais"],
    recommendationsEn: ["Incorporate controlled experimentation", "Question your structures", "Allow intentional imperfections"],
  },
};

/**
 * SectionHeader Component
 * Reusable header with title and tooltip for bilingual context
 * Used throughout results display to explain sections
 */
const SectionHeader = ({ 
  title, 
  tooltipPt, 
  tooltipEn 
}: { 
  title: string; 
  tooltipPt: string; 
  tooltipEn: string;
}) => {
  const { language } = useLanguage();
  
  return (
    <div className="flex items-center gap-2 text-accent font-bold text-lg">
      <span>{title}</span>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="h-4 w-4 text-primary/60 hover:text-primary cursor-help" />
          </TooltipTrigger>
          <TooltipContent 
            className="max-w-xs bg-black/95 border-primary/30 text-sm font-mono"
            side="right"
          >
            <p>{language === 'pt' ? tooltipPt : tooltipEn}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export const CreativeOracle = ({ open, onOpenChange }: CreativeOracleProps) => {
  const { language } = useLanguage();
  
  // UI state
  const [mode, setMode] = useState<"journey" | "knowledge">("journey");  // Toggle between quiz and learn mode
  const [started, setStarted] = useState(false);                         // Quiz started flag
  const [currentQuestion, setCurrentQuestion] = useState(0);             // Current question index (0-5)
  const [showResults, setShowResults] = useState(false);                 // Show results screen
  
  // Quiz data
  const [answers, setAnswers] = useState<number[]>([]);                  // Array of answer values (1-3)
  const [scores, setScores] = useState({ shadow: 0, punk: 0, buddy: 0, gi: 0 });  // Archetype scores
  const [processScores, setProcessScores] = useState({                   // Process stage scores
    observation: 0, 
    cocreation: 0, 
    documentation: 0, 
    reflection: 0, 
    expansion: 0 
  });
  
  // Audio control
  const [isMuted, setIsMuted] = useState(false);
  const [audio] = useState(() => new Audio("/audio/Shadow_In_The_Dark.mp3"));
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      setStarted(false);
      setCurrentQuestion(0);
      setAnswers([]);
      setScores({ shadow: 0, punk: 0, buddy: 0, gi: 0 });
      setProcessScores({ observation: 0, cocreation: 0, documentation: 0, reflection: 0, expansion: 0 });
      setShowResults(false);
      setMode("journey");
      audio.pause();
      audio.currentTime = 0;
    }
  }, [open, audio]);

  useEffect(() => {
    if (started && !isMuted) {
      audio.loop = true;
      audio.volume = 0.3;
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [started, isMuted, audio]);

  /**
   * Handles user answer selection
   * Updates archetype scores, process scores, and advances to next question
   * Shows results screen when all questions are answered
   * 
   * @param archetype - The archetype key (shadow, punk, buddy, gi)
   * @param value - Score value (1-3)
   * @param processWeight - Optional object with process stage weights
   */
  const handleAnswer = (archetype: string, value: number, processWeight?: any) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    setScores(prev => ({
      ...prev,
      [archetype]: prev[archetype as keyof typeof prev] + value
    }));

    if (processWeight) {
      setProcessScores(prev => ({
        observation: prev.observation + (processWeight.observation || 0),
        cocreation: prev.cocreation + (processWeight.cocreation || 0),
        documentation: prev.documentation + (processWeight.documentation || 0),
        reflection: prev.reflection + (processWeight.reflection || 0),
        expansion: prev.expansion + (processWeight.expansion || 0),
      }));
    }

    if (currentQuestion < contextualizedQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
      // Scroll to results after state update
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  /**
   * Returns the archetype with the highest score
   * Used to determine primary creative archetype
   */
  const getDominantArchetype = () => {
    const entries = Object.entries(scores) as [keyof typeof archetypes, number][];
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  };

  /**
   * Returns the archetype with the second highest score
   * Used for hybrid archetype detection
   */
  const getSecondaryArchetype = () => {
    const entries = Object.entries(scores) as [keyof typeof archetypes, number][];
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    return sorted[1]?.[0];
  };

  const handleStart = () => {
    setStarted(true);
  };

  const handleReset = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setScores({ shadow: 0, punk: 0, buddy: 0, gi: 0 });
    setProcessScores({ observation: 0, cocreation: 0, documentation: 0, reflection: 0, expansion: 0 });
    setShowResults(false);
    setMode("journey");
  };

  /**
   * Exports quiz results as a formatted text file
   * Includes archetype info, scores, strengths, challenges, and recommendations
   * Format: THEVØIDN13 ASCII-style with box drawing characters
   */
  const handleExportPDF = () => {
    const dominant = getDominantArchetype();
    const secondary = getSecondaryArchetype();
    const archetype = archetypes[dominant];
    const secondaryArchetypeData = secondary ? archetypes[secondary] : null;
    
    const printContent = `
CREATIVE_ORACLE::SCAN_RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THEVØIDN13 ARTISTIC MEMORIAL
Shadow Interface Bible v13

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[DOMINANT_ARCHETYPE]
${language === 'pt' ? archetype.name : archetype.nameEn}
Score: ${scores[dominant]}/${contextualizedQuestions.length * 3} pts

[DESCRIPTION]
${language === 'pt' ? archetype.description : archetype.descriptionEn}

[MESSAGE]
"${language === 'pt' ? archetype.message : archetype.messageEn}"

${secondaryArchetypeData ? `
[SECONDARY_ARCHETYPE]
${language === 'pt' ? secondaryArchetypeData.name : secondaryArchetypeData.nameEn}
Score: ${scores[secondary!]}/${contextualizedQuestions.length * 3} pts
` : ''}

[SCORE_BREAKDOWN]
├─ SHADOW: ${scores.shadow} pts
├─ PUNK:   ${scores.punk} pts
├─ BUDDY:  ${scores.buddy} pts
└─ GI:     ${scores.gi} pts

[STRENGTHS]
${(language === 'pt' ? archetype.strengths : archetype.strengthsEn).map((s, i) => `├─ ${s}`).join('\n')}

[CHALLENGES]
${(language === 'pt' ? archetype.challenges : archetype.challengesEn).map((c, i) => `├─ ${c}`).join('\n')}

[RECOMMENDATIONS]
${(language === 'pt' ? archetype.recommendations : archetype.recommendationsEn).map((r, i) => `├─ ${r}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THEVØIDN13.DEV
Generated: ${new Date().toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}
    `.trim();

    // Create blob and download
    const blob = new Blob([printContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `thevoidn13_oracle_${dominant}_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getProgressBar = (value: number, max: number = 30) => {
    const filled = Math.round((value / max) * 16);
    return '█'.repeat(filled) + '░'.repeat(16 - filled);
  };

  const getProgressPercentage = () => {
    return Math.round(((currentQuestion + 1) / contextualizedQuestions.length) * 100);
  };

  const getBreadcrumb = () => {
    if (!started && !showResults) return language === 'pt' ? 'INÍCIO' : 'START';
    if (started && !showResults) return `${language === 'pt' ? 'EM PROGRESSO' : 'IN PROGRESS'} (${currentQuestion + 1}/${contextualizedQuestions.length})`;
    return language === 'pt' ? 'RESULTADOS' : 'RESULTS';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl mx-auto max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm p-6 sm:p-8">
        <DialogHeader className="border-b border-primary/30 pb-4 mb-6">
          <DialogTitle className="text-primary text-xl font-mono font-bold">
            CREATIVE_ORACLE::ARCHETYPE_SCAN <span className="text-muted-foreground text-sm">// PT / EN</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-mono text-sm">
            {language === "pt" 
              ? "// Sistema de identificação de arquétipos criativos" 
              : "// Creative archetype identification system"}
          </DialogDescription>
          <div className="text-accent text-sm font-mono font-bold mt-2">
            [STATUS] {getBreadcrumb()}
          </div>
        </DialogHeader>

        <Tabs value={mode} onValueChange={(v) => setMode(v as typeof mode)} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="journey">{language === "pt" ? "JORNADA" : "JOURNEY"}</TabsTrigger>
            <TabsTrigger value="knowledge">{language === "pt" ? "CONHECIMENTO" : "KNOWLEDGE"}</TabsTrigger>
          </TabsList>

          <TabsContent value="knowledge">
            <LearnMode />
          </TabsContent>

          <TabsContent value="journey">
            <div className="bg-black/90 border border-primary/30 rounded-lg p-6 sm:p-8 font-mono space-y-6">
              {!started && !showResults && (
            <div className="space-y-8">
              <div className="text-accent font-bold text-lg">
                [STATUS] INITIALIZING...
              </div>

              <div className="space-y-4 text-foreground border-l-2 border-primary/40 pl-4 py-2">
                <div className="text-primary font-bold">[{language === "pt" ? "SOBRE A JORNADA" : "ABOUT THE JOURNEY"}]</div>
                <div className="space-y-3 text-sm leading-relaxed">
                  {language === "pt" ? (
                    <>
                      <p>Este oráculo é uma ferramenta de autoconhecimento criativo baseada na metodologia THEVØIDN13.</p>
                      <p>Você responderá <span className="text-primary font-bold">6 perguntas</span> sobre seu processo criativo. Não há respostas certas ou erradas — cada escolha revela algo sobre como você pensa, cria e transforma ideias.</p>
                      <p className="text-muted-foreground italic">Ao final, você descobrirá:</p>
                      <div className="pl-4 space-y-1 text-muted-foreground">
                        <div>├─ Seu arquétipo criativo dominante (SHADOW, PUNK, BUDDY ou GI)</div>
                        <div>├─ Análise personalizada com forças e desafios</div>
                        <div>├─ Recomendações práticas para desenvolver seu processo</div>
                        <div>└─ Mapeamento visual do seu perfil criativo</div>
                      </div>
                      <p className="text-accent text-xs pt-2">A jornada leva cerca de 3-5 minutos. Responda com honestidade e intuição.</p>
                    </>
                  ) : (
                    <>
                      <p>This oracle is a creative self-knowledge tool based on THEVØIDN13 methodology.</p>
                      <p>You'll answer <span className="text-primary font-bold">6 questions</span> about your creative process. There are no right or wrong answers — each choice reveals something about how you think, create and transform ideas.</p>
                      <p className="text-muted-foreground italic">At the end, you'll discover:</p>
                      <div className="pl-4 space-y-1 text-muted-foreground">
                        <div>├─ Your dominant creative archetype (SHADOW, PUNK, BUDDY or GI)</div>
                        <div>├─ Personalized analysis with strengths and challenges</div>
                        <div>├─ Practical recommendations to develop your process</div>
                        <div>└─ Visual mapping of your creative profile</div>
                      </div>
                      <p className="text-accent text-xs pt-2">The journey takes about 3-5 minutes. Answer honestly and intuitively.</p>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-muted-foreground">[ARCHETYPES_MAP]</div>
                <div className="pl-4 space-y-2 text-sm">
                  <div>├─ <span className="text-primary">SHADOW</span> {language === "pt" ? "(A Sombra)" : "(The Shadow)"} - {language === "pt" ? "O criador introspectivo" : "The introspective creator"}</div>
                  <div>├─ <span className="text-primary">PUNK</span> {language === "pt" ? "(O Criador)" : "(The Creator)"} - {language === "pt" ? "O revolucionário impulsivo" : "The impulsive revolutionary"}</div>
                  <div>├─ <span className="text-primary">BUDDY</span> {language === "pt" ? "(O Companheiro)" : "(The Companion)"} - {language === "pt" ? "O colaborador conectado" : "The connected collaborator"}</div>
                  <div>└─ <span className="text-primary">GI</span> {language === "pt" ? "(A Presença)" : "(The Presence)"} - {language === "pt" ? "O executor disciplinado" : "The disciplined executor"}</div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={handleStart}
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  &gt; START_SCAN()
                </Button>
              </div>
            </div>
          )}

          {started && !showResults && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center justify-between">
                <div className="text-accent font-bold text-lg">
                  CREATIVE_ORACLE::QUESTION_{currentQuestion + 1}/{contextualizedQuestions.length}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className="gap-2"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  [AUDIO: {isMuted ? 'OFF' : 'ON'}]
                </Button>
              </div>

              <div className="space-y-6">
                <div className="border border-primary/20 rounded-lg p-4 bg-background/30 space-y-3">
                  <div className="text-accent text-sm font-bold">
                    [{language === "pt" ? contextualizedQuestions[currentQuestion].pedagogicalContext.concept : contextualizedQuestions[currentQuestion].pedagogicalContext.conceptEn}]
                  </div>
                  <div className="text-foreground/70 text-sm leading-relaxed">
                    {language === "pt" ? contextualizedQuestions[currentQuestion].pedagogicalContext.explanation : contextualizedQuestions[currentQuestion].pedagogicalContext.explanationEn}
                  </div>
                  <div className="text-muted-foreground text-xs italic border-l-2 border-primary/40 pl-3">
                    {language === "pt" ? contextualizedQuestions[currentQuestion].pedagogicalContext.theoreticalRef : contextualizedQuestions[currentQuestion].pedagogicalContext.theoreticalRefEn}
                  </div>
                </div>

                <ContextualQuote questionIndex={currentQuestion} />

                <div className="space-y-2 pb-4 border-b border-primary/20">
                  <div className="text-foreground font-semibold text-lg">
                    [Q] {language === "pt" ? contextualizedQuestions[currentQuestion].text : contextualizedQuestions[currentQuestion].textEn}
                  </div>
                </div>

                <div className="space-y-3 pl-4">
                  {contextualizedQuestions[currentQuestion].options.map((option, idx) => (
                    <div key={idx}>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left h-auto py-3"
                        onClick={() => handleAnswer(option.archetype, option.value, option.processWeight)}
                      >
                        <div className="space-y-1">
                          <div>├─ [{String.fromCharCode(65 + idx)}] {language === "pt" ? option.text : option.textEn}</div>
                        </div>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <div className="text-muted-foreground text-sm">[PROGRESS] {getProgressBar(currentQuestion + 1, contextualizedQuestions.length)} {getProgressPercentage()}%</div>
              </div>
            </div>
          )}

          {showResults && (
            <div ref={resultsRef} className="space-y-8 animate-fade-in">
              <div className="text-accent font-bold text-lg">
                CREATIVE_ORACLE::SCAN_COMPLETE
              </div>
              
              {/* Radar Chart Visualization */}
              <div className="space-y-3 bg-black/50 border border-primary/30 rounded-lg p-6">
                <SectionHeader 
                  title={language === "pt" ? "[DISTRIBUIÇÃO_ARQUÉTIPOS]" : "[ARCHETYPE_DISTRIBUTION]"}
                  tooltipPt="Visualização gráfica da sua distribuição entre os 4 arquétipos criativos. Quanto maior a área em cada ponta, mais forte é aquele arquétipo em você."
                  tooltipEn="Graphic visualization of your distribution across 4 creative archetypes. The larger the area at each corner, the stronger that archetype is in you."
                />
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={[
                    {
                      archetype: 'SHADOW',
                      score: scores.shadow,
                      fullMark: contextualizedQuestions.length * 3,
                    },
                    {
                      archetype: 'PUNK',
                      score: scores.punk,
                      fullMark: contextualizedQuestions.length * 3,
                    },
                    {
                      archetype: 'BUDDY',
                      score: scores.buddy,
                      fullMark: contextualizedQuestions.length * 3,
                    },
                    {
                      archetype: 'GI',
                      score: scores.gi,
                      fullMark: contextualizedQuestions.length * 3,
                    },
                  ]}>
                    <PolarGrid stroke="hsl(var(--primary) / 0.3)" />
                    <PolarAngleAxis 
                      dataKey="archetype" 
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12, fontFamily: 'monospace' }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, contextualizedQuestions.length * 3]}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                    />
                    <Radar 
                      name="Score" 
                      dataKey="score" 
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary))" 
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="text-center text-xs text-muted-foreground pt-2">
                  {language === 'pt' 
                    ? 'Distribuição visual dos scores entre arquétipos' 
                    : 'Visual distribution of scores across archetypes'}
                </div>
              </div>

              <HybridArchetypeReveal 
                dominantArchetype={getDominantArchetype()}
                secondaryArchetype={getSecondaryArchetype()!}
                dominantScore={scores[getDominantArchetype()]}
                secondaryScore={scores[getSecondaryArchetype()!]}
              />

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-muted-foreground">[DOMINANT_ARCHETYPE]</div>
                  <div className="pl-4 space-y-1">
                    <div className="text-primary text-xl font-bold">
                      {language === "pt" 
                        ? archetypes[getDominantArchetype()].name
                        : archetypes[getDominantArchetype()].nameEn}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      └─ Score: {scores[getDominantArchetype()]}/{contextualizedQuestions.length * 3} pts
                    </div>
                  </div>
                </div>

                {getSecondaryArchetype() && (
                  <div className="space-y-2">
                    <div className="text-muted-foreground">[SECONDARY_ARCHETYPE]</div>
                    <div className="pl-4 space-y-1">
                      <div className="text-accent font-bold">
                        {language === "pt" 
                          ? archetypes[getSecondaryArchetype()!].name
                          : archetypes[getSecondaryArchetype()!].nameEn}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        └─ Score: {scores[getSecondaryArchetype()!]}/{contextualizedQuestions.length * 3} pts
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="text-muted-foreground">[DESCRIPTION]</div>
                  <div className="pl-4 text-foreground text-sm">
                    {language === "pt"
                      ? archetypes[getDominantArchetype()].description
                      : archetypes[getDominantArchetype()].descriptionEn}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-muted-foreground">[MESSAGE]</div>
                  <div className="pl-4 text-primary italic">
                    "{language === "pt"
                      ? archetypes[getDominantArchetype()].message
                      : archetypes[getDominantArchetype()].messageEn}"
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-muted-foreground">[SCORE_BREAKDOWN]</div>
                  <div className="pl-4 space-y-2 text-sm font-mono">
                    <div>├─ SHADOW: {getProgressBar(scores.shadow)} {scores.shadow} pts</div>
                    <div>├─ PUNK:   {getProgressBar(scores.punk)} {scores.punk} pts</div>
                    <div>├─ BUDDY:  {getProgressBar(scores.buddy)} {scores.buddy} pts</div>
                    <div>└─ GI:     {getProgressBar(scores.gi)} {scores.gi} pts</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-muted-foreground">[STRENGTHS]</div>
                  <div className="pl-4 space-y-1 text-sm">
                    {(language === 'pt' 
                      ? archetypes[getDominantArchetype()].strengths 
                      : archetypes[getDominantArchetype()].strengthsEn
                    ).map((strength, idx) => (
                      <div key={idx} className="text-foreground">├─ {strength}</div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-muted-foreground">[CHALLENGES]</div>
                  <div className="pl-4 space-y-1 text-sm">
                    {(language === 'pt' 
                      ? archetypes[getDominantArchetype()].challenges 
                      : archetypes[getDominantArchetype()].challengesEn
                    ).map((challenge, idx) => (
                      <div key={idx} className="text-foreground">├─ {challenge}</div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-muted-foreground">[RECOMMENDATIONS]</div>
                  <div className="pl-4 space-y-1 text-sm">
                    {(language === 'pt' 
                      ? archetypes[getDominantArchetype()].recommendations 
                      : archetypes[getDominantArchetype()].recommendationsEn
                    ).map((rec, idx) => (
                      <div key={idx} className="text-primary">├─ {rec}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process Timeline */}
              <div className="space-y-3 pt-8 border-t border-primary/30">
                <SectionHeader 
                  title={language === "pt" ? "[LINHA_TEMPORAL_PROCESSO]" : "[PROCESS_TIMELINE]"}
                  tooltipPt="Linha do tempo das 5 etapas do processo criativo THEVØIDN13. Mostra em qual etapa você é mais forte e onde pode crescer."
                  tooltipEn="Timeline of the 5 stages of THEVØIDN13 creative process. Shows which stage you're strongest at and where you can grow."
                />
                <ProcessTimeline processScores={processScores} />
              </div>
              
              {/* Compatibility Matrix */}
              <div className="space-y-3">
                <SectionHeader 
                  title={language === "pt" ? "[MATRIZ_COMPATIBILIDADE]" : "[COMPATIBILITY_MATRIX]"}
                  tooltipPt="Matriz de compatibilidade entre arquétipos. Mostra como seu arquétipo se relaciona com outros perfis criativos em trabalhos colaborativos."
                  tooltipEn="Compatibility matrix between archetypes. Shows how your archetype relates to other creative profiles in collaborative work."
                />
                <CompatibilityMatrix />
              </div>

              {/* Process Analysis */}
              <div className="space-y-3">
                <SectionHeader 
                  title={language === "pt" ? "[ANÁLISE_PROCESSO]" : "[PROCESS_ANALYSIS]"}
                  tooltipPt="Análise detalhada do seu desempenho em cada etapa do processo criativo. Identifica padrões e tendências no seu workflow."
                  tooltipEn="Detailed analysis of your performance at each stage of the creative process. Identifies patterns and trends in your workflow."
                />
                <ProcessAnalysis processScores={processScores} dominantArchetype={getDominantArchetype()} />
              </div>
              
              {/* Personalized Advice */}
              <div className="space-y-3">
                <SectionHeader 
                  title={language === "pt" ? "[CONSELHO_PERSONALIZADO]" : "[PERSONALIZED_ADVICE]"}
                  tooltipPt="Conselhos personalizados baseados no seu arquétipo dominante e na sua etapa mais fraca. Dicas práticas para equilibrar seu processo criativo."
                  tooltipEn="Personalized advice based on your dominant archetype and weakest stage. Practical tips to balance your creative process."
                />
                <PersonalizedAdvice 
                  dominantArchetype={getDominantArchetype()}
                  weakestStage={Object.entries(processScores).sort((a, b) => a[1] - b[1])[0][0]}
                />
              </div>

              {/* Action Buttons - Final da jornada */}
              <div className="space-y-4 pt-8 border-t-2 border-primary/50">
                <div className="text-center text-muted-foreground text-sm font-mono">
                  {language === 'pt' 
                    ? '// Fim da análise. Escolha sua próxima ação:'
                    : '// Analysis complete. Choose your next action:'}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={handleExportPDF}
                    variant="outline"
                    className="gap-2 font-mono"
                    size="lg"
                  >
                    <Download className="h-4 w-4" />
                    &gt; EXPORT_RESULTS()
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="font-mono"
                    size="lg"
                  >
                    &gt; RESTART_SCAN()
                  </Button>
                  <Button
                    onClick={() => setMode('knowledge')}
                    variant="outline"
                    className="font-mono"
                    size="lg"
                  >
                    &gt; VER_CONHECIMENTO()
                  </Button>
                  <Button
                    onClick={() => onOpenChange(false)}
                    variant="default"
                    className="font-mono"
                    size="lg"
                  >
                    &gt; CLOSE()
                  </Button>
                </div>
              </div>
            </div>
          )}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
