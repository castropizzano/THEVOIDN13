import { useState, useEffect } from "react";
import { Volume2, VolumeX, Download } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { LearnMode } from "./CreativeOracle/LearnMode";
import { ProcessAnalysis } from "./CreativeOracle/ProcessAnalysis";
import { contextualizedQuestions } from "./CreativeOracle/data/contextualizedQuestions";
import { hybridArchetypes } from "./CreativeOracle/data/hybridArchetypes";

interface CreativeOracleProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Question = {
  text: string;
  textEn: string;
  options: Array<{
    text: string;
    textEn: string;
    archetype: string;
    value: number;
  }>;
};

const questions: Question[] = [
  {
    text: "Quando você cria, de onde vem o impulso inicial?",
    textEn: "When you create, where does the initial impulse come from?",
    options: [
      { text: "Do vazio interior, da sombra", textEn: "From the inner void, the shadow", archetype: "shadow", value: 3 },
      { text: "Da necessidade urgente de quebrar o sistema", textEn: "From urgent need to break the system", archetype: "punk", value: 2 },
      { text: "Do desejo de conectar com outros", textEn: "From desire to connect with others", archetype: "buddy", value: 1 },
      { text: "De um método técnico estabelecido", textEn: "From an established technical method", archetype: "gi", value: 0 },
    ],
  },
  {
    text: "Como você encara o erro no processo criativo?",
    textEn: "How do you face mistakes in the creative process?",
    options: [
      { text: "Como parte da exploração do desconhecido", textEn: "As part of exploring the unknown", archetype: "shadow", value: 3 },
      { text: "Como combustível para algo novo", textEn: "As fuel for something new", archetype: "punk", value: 2 },
      { text: "Como oportunidade de aprender junto", textEn: "As opportunity to learn together", archetype: "buddy", value: 1 },
      { text: "Como algo a ser evitado com planejamento", textEn: "As something to avoid with planning", archetype: "gi", value: 0 },
    ],
  },
  {
    text: "O que te motiva a continuar criando?",
    textEn: "What motivates you to keep creating?",
    options: [
      { text: "A busca por autenticidade profunda", textEn: "The search for deep authenticity", archetype: "shadow", value: 3 },
      { text: "O desejo de transformar a cultura", textEn: "The desire to transform culture", archetype: "punk", value: 2 },
      { text: "A alegria da colaboração", textEn: "The joy of collaboration", archetype: "buddy", value: 1 },
      { text: "A satisfação da execução perfeita", textEn: "The satisfaction of perfect execution", archetype: "gi", value: 0 },
    ],
  },
  {
    text: "Como você lida com a solidão criativa?",
    textEn: "How do you deal with creative solitude?",
    options: [
      { text: "É onde encontro clareza", textEn: "It's where I find clarity", archetype: "shadow", value: 3 },
      { text: "É um sacrifício necessário", textEn: "It's a necessary sacrifice", archetype: "punk", value: 2 },
      { text: "Prefiro criar em comunidade", textEn: "I prefer to create in community", archetype: "buddy", value: 1 },
      { text: "É parte da disciplina", textEn: "It's part of discipline", archetype: "gi", value: 0 },
    ],
  },
  {
    text: "Qual é sua relação com o tempo?",
    textEn: "What's your relationship with time?",
    options: [
      { text: "Flui quando estou imerso", textEn: "It flows when I'm immersed", archetype: "shadow", value: 3 },
      { text: "É sempre urgente, sempre agora", textEn: "It's always urgent, always now", archetype: "punk", value: 2 },
      { text: "É compartilhado com outros", textEn: "It's shared with others", archetype: "buddy", value: 1 },
      { text: "É estruturado e otimizado", textEn: "It's structured and optimized", archetype: "gi", value: 0 },
    ],
  },
  {
    text: "O que você busca no seu trabalho criativo?",
    textEn: "What do you seek in your creative work?",
    options: [
      { text: "Verdade interior e expressão autêntica", textEn: "Inner truth and authentic expression", archetype: "shadow", value: 3 },
      { text: "Impacto cultural e mudança social", textEn: "Cultural impact and social change", archetype: "punk", value: 2 },
      { text: "Conexão humana e empatia", textEn: "Human connection and empathy", archetype: "buddy", value: 1 },
      { text: "Excelência técnica e maestria", textEn: "Technical excellence and mastery", archetype: "gi", value: 0 },
    ],
  },
  {
    text: "Como você se relaciona com referências e influências?",
    textEn: "How do you relate to references and influences?",
    options: [
      { text: "Absorvo e transformo em algo pessoal", textEn: "I absorb and transform into something personal", archetype: "shadow", value: 3 },
      { text: "Uso para subverter e ressignificar", textEn: "I use to subvert and reframe", archetype: "punk", value: 2 },
      { text: "Compartilho e discuto com outros", textEn: "I share and discuss with others", archetype: "buddy", value: 1 },
      { text: "Estudo metodicamente para dominar", textEn: "I study methodically to master", archetype: "gi", value: 0 },
    ],
  },
  {
    text: "O que significa 'sucesso' no seu processo criativo?",
    textEn: "What does 'success' mean in your creative process?",
    options: [
      { text: "Alcançar um estado de verdade pessoal", textEn: "Reaching a state of personal truth", archetype: "shadow", value: 3 },
      { text: "Provocar mudança ou reação intensa", textEn: "Provoking change or intense reaction", archetype: "punk", value: 2 },
      { text: "Criar algo que ressoe com outros", textEn: "Creating something that resonates with others", archetype: "buddy", value: 1 },
      { text: "Atingir perfeição técnica visível", textEn: "Achieving visible technical perfection", archetype: "gi", value: 0 },
    ],
  },
  {
    text: "Como você lida com bloqueios criativos?",
    textEn: "How do you deal with creative blocks?",
    options: [
      { text: "Mergulho mais fundo no silêncio", textEn: "I dive deeper into silence", archetype: "shadow", value: 3 },
      { text: "Quebro a rotina radicalmente", textEn: "I break the routine radically", archetype: "punk", value: 2 },
      { text: "Busco conversas e novas perspectivas", textEn: "I seek conversations and new perspectives", archetype: "buddy", value: 1 },
      { text: "Retorno aos fundamentos e técnicas", textEn: "I return to fundamentals and techniques", archetype: "gi", value: 0 },
    ],
  },
  {
    text: "Qual sua relação com o imperfeito e o inacabado?",
    textEn: "What's your relationship with the imperfect and unfinished?",
    options: [
      { text: "É onde a verdade realmente vive", textEn: "It's where truth really lives", archetype: "shadow", value: 3 },
      { text: "É mais autêntico que o polido", textEn: "It's more authentic than polished", archetype: "punk", value: 2 },
      { text: "É parte da jornada compartilhada", textEn: "It's part of the shared journey", archetype: "buddy", value: 1 },
      { text: "É um estágio a ser superado", textEn: "It's a stage to be overcome", archetype: "gi", value: 0 },
    ],
  },
];

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

export const CreativeOracle = ({ open, onOpenChange }: CreativeOracleProps) => {
  const { language } = useLanguage();
  const [mode, setMode] = useState<"learn" | "scan">("scan");
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ shadow: 0, punk: 0, buddy: 0, gi: 0 });
  const [processScores, setProcessScores] = useState({ observation: 0, cocreation: 0, documentation: 0, reflection: 0, expansion: 0 });
  const [showResults, setShowResults] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audio] = useState(() => new Audio("/audio/Shadow_In_The_Dark.mp3"));

  useEffect(() => {
    if (!open) {
      setStarted(false);
      setCurrentQuestion(0);
      setScores({ shadow: 0, punk: 0, buddy: 0, gi: 0 });
      setShowResults(false);
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

  const handleAnswer = (archetype: string, value: number, processWeight?: any) => {
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
    }
  };

  const getDominantArchetype = () => {
    const entries = Object.entries(scores) as [keyof typeof archetypes, number][];
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  };

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
    setScores({ shadow: 0, punk: 0, buddy: 0, gi: 0 });
    setProcessScores({ observation: 0, cocreation: 0, documentation: 0, reflection: 0, expansion: 0 });
    setShowResults(false);
    setMode("scan");
  };

  const handleExportPDF = () => {
    const dominant = getDominantArchetype();
    const secondary = getSecondaryArchetype();
    const archetype = archetypes[dominant];
    const secondaryArchetypeData = secondary ? archetypes[secondary] : null;
    
    const printContent = `
CREATIVE_ORACLE::SCAN_RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THEVØIDN13 ARTISTIC MEMORIAL
Shadow Interface Bible v13

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[DOMINANT_ARCHETYPE]
${language === 'pt' ? archetype.name : archetype.nameEn}
Score: ${scores[dominant]}/${questions.length * 3} pts

[DESCRIPTION]
${language === 'pt' ? archetype.description : archetype.descriptionEn}

[MESSAGE]
"${language === 'pt' ? archetype.message : archetype.messageEn}"

${secondaryArchetypeData ? `
[SECONDARY_ARCHETYPE]
${language === 'pt' ? secondaryArchetypeData.name : secondaryArchetypeData.nameEn}
Score: ${scores[secondary!]}/${questions.length * 3} pts
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
    return Math.round(((currentQuestion + 1) / questions.length) * 100);
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
        </DialogHeader>

        <Tabs value={mode} onValueChange={(v) => setMode(v as "learn" | "scan")} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="scan">{language === "pt" ? "SCAN" : "SCAN"}</TabsTrigger>
            <TabsTrigger value="learn">{language === "pt" ? "LEARN" : "LEARN"}</TabsTrigger>
          </TabsList>

          <TabsContent value="learn">
            <LearnMode />
          </TabsContent>

          <TabsContent value="scan">
            <div className="bg-black/90 border border-primary/30 rounded-lg p-6 sm:p-8 font-mono space-y-6">
              {!started && !showResults && (
            <div className="space-y-8">
              <div className="text-accent font-bold text-lg">
                [STATUS] INITIALIZING...
              </div>

              <div className="space-y-4 text-foreground">
                <div className="text-muted-foreground">[DESCRIPTION]</div>
                <div className="pl-4 space-y-2">
                  {language === "pt" ? (
                    <p>Dez perguntas. Suas respostas revelam seu arquétipo criativo dominante e secundário: Shadow, Punk, Buddy ou GI. Cada um representa uma forma única de ver e transformar o mundo através da criatividade. Ao final, você receberá análise detalhada com forças, desafios e recomendações personalizadas.</p>
                  ) : (
                    <p>Ten questions. Your answers reveal your dominant and secondary creative archetypes: Shadow, Punk, Buddy or GI. Each represents a unique way of seeing and transforming the world through creativity. At the end, you'll receive detailed analysis with strengths, challenges and personalized recommendations.</p>
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
                  CREATIVE_ORACLE::QUESTION_{currentQuestion + 1}/{questions.length}
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

              <div className="space-y-4">
                <div className="space-y-2 pb-4 border-b border-primary/20">
                  <div className="text-foreground font-semibold">
                    [Q] {questions[currentQuestion].text}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    [Q] {questions[currentQuestion].textEn}
                  </div>
                </div>

                <div className="space-y-3 pl-4">
                  {questions[currentQuestion].options.map((option, idx) => (
                    <div key={idx}>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left h-auto py-3"
                        onClick={() => handleAnswer(option.archetype, option.value)}
                      >
                        <div className="space-y-1">
                          <div>├─ [{String.fromCharCode(65 + idx)}] {option.text} → {option.archetype.toUpperCase()} (+{option.value})</div>
                          <div className="text-muted-foreground text-xs pl-6">{option.textEn}</div>
                        </div>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <div className="text-muted-foreground text-sm">[PROGRESS] {getProgressBar(currentQuestion + 1, questions.length)} {getProgressPercentage()}%</div>
              </div>
            </div>
          )}

          {showResults && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-accent font-bold text-lg">
                CREATIVE_ORACLE::SCAN_COMPLETE
              </div>

              {/* Radar Chart Visualization */}
              <div className="space-y-3 bg-black/50 border border-primary/30 rounded-lg p-6">
                <div className="text-muted-foreground text-sm mb-4">
                  [ARCHETYPE_DISTRIBUTION_CHART]
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={[
                    {
                      archetype: 'SHADOW',
                      score: scores.shadow,
                      fullMark: questions.length * 3,
                    },
                    {
                      archetype: 'PUNK',
                      score: scores.punk,
                      fullMark: questions.length * 3,
                    },
                    {
                      archetype: 'BUDDY',
                      score: scores.buddy,
                      fullMark: questions.length * 3,
                    },
                    {
                      archetype: 'GI',
                      score: scores.gi,
                      fullMark: questions.length * 3,
                    },
                  ]}>
                    <PolarGrid stroke="hsl(var(--primary) / 0.3)" />
                    <PolarAngleAxis 
                      dataKey="archetype" 
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12, fontFamily: 'monospace' }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, questions.length * 3]}
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
                      └─ Score: {scores[getDominantArchetype()]}/{questions.length * 3} pts
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
                        └─ Score: {scores[getSecondaryArchetype()!]}/{questions.length * 3} pts
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

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  onClick={handleExportPDF}
                  variant="outline"
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  &gt; EXPORT_RESULTS()
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                >
                  &gt; RESTART_SCAN()
                </Button>
                <Button
                  onClick={() => onOpenChange(false)}
                  variant="outline"
                >
                  &gt; CLOSE()
                </Button>
              </div>

              <ProcessAnalysis processScores={processScores} dominantArchetype={getDominantArchetype()} />
            </div>
          )}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
