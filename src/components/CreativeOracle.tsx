import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

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
];

const archetypes = {
  shadow: {
    name: "SHADOW (A Sombra)",
    nameEn: "SHADOW (The Shadow)",
    description: "Você é o criador introspectivo, que mergulha nas profundezas do eu para extrair verdades ocultas. Seu processo é solitário mas profundo, transformando a escuridão interior em luz criativa.",
    descriptionEn: "You are the introspective creator, diving into the depths of the self to extract hidden truths. Your process is solitary but profound, transforming inner darkness into creative light.",
    message: "O vazio não é ausência. É o espaço onde a verdade nasce.",
    messageEn: "The void is not absence. It's the space where truth is born.",
  },
  punk: {
    name: "PUNK (O Criador)",
    nameEn: "PUNK (The Creator)",
    description: "Você é o revolucionário impulsivo, que cria para destruir e reconstruir. Seu impulso vem da rejeição ao establishment e do desejo ardente de transformação radical.",
    descriptionEn: "You are the impulsive revolutionary, who creates to destroy and rebuild. Your impulse comes from rejecting the establishment and the burning desire for radical transformation.",
    message: "Criar é quebrar. Toda obra verdadeira é um ato de rebelião.",
    messageEn: "To create is to break. Every true work is an act of rebellion.",
  },
  buddy: {
    name: "BUDDY (O Companheiro)",
    nameEn: "BUDDY (The Companion)",
    description: "Você é o colaborador conectado, que encontra força na comunidade e no compartilhamento. Seu trabalho nasce do diálogo, da troca, da energia coletiva.",
    descriptionEn: "You are the connected collaborator, who finds strength in community and sharing. Your work is born from dialogue, exchange, collective energy.",
    message: "Sozinho vamos rápido. Juntos, criamos o impossível.",
    messageEn: "Alone we go fast. Together, we create the impossible.",
  },
  gi: {
    name: "GI (A Presença)",
    nameEn: "GI (The Presence)",
    description: "Você é o executor disciplinado, que encontra liberdade na estrutura e maestria na repetição. Seu caminho é o da excelência técnica e da presença plena.",
    descriptionEn: "You are the disciplined executor, who finds freedom in structure and mastery in repetition. Your path is technical excellence and full presence.",
    message: "A forma liberta. A disciplina é o caminho para a verdadeira expressão.",
    messageEn: "Form liberates. Discipline is the path to true expression.",
  },
};

export const CreativeOracle = ({ open, onOpenChange }: CreativeOracleProps) => {
  const { language } = useLanguage();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ shadow: 0, punk: 0, buddy: 0, gi: 0 });
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

  const handleAnswer = (archetype: string, value: number) => {
    setScores(prev => ({
      ...prev,
      [archetype]: prev[archetype as keyof typeof prev] + value
    }));

    if (currentQuestion < questions.length - 1) {
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

  const handleStart = () => {
    setStarted(true);
  };

  const handleReset = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setScores({ shadow: 0, punk: 0, buddy: 0, gi: 0 });
    setShowResults(false);
  };

  const getProgressBar = (value: number, max: number = 18) => {
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
                    <p>Seis perguntas. Suas respostas revelam seu arquétipo criativo dominante: Shadow, Punk, Buddy ou GI. Cada um representa uma forma única de ver e transformar o mundo através da criatividade.</p>
                  ) : (
                    <p>Six questions. Your answers reveal your dominant creative archetype: Shadow, Punk, Buddy or GI. Each represents a unique way of seeing and transforming the world through creativity.</p>
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
                  CREATIVE_ORACLE::QUESTION_{currentQuestion + 1}/6
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
                <div className="text-muted-foreground text-sm">[PROGRESS] {getProgressBar(currentQuestion + 1, 6)} {getProgressPercentage()}%</div>
              </div>
            </div>
          )}

          {showResults && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-accent font-bold text-lg">
                CREATIVE_ORACLE::SCAN_COMPLETE
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
                      └─ Score: {scores[getDominantArchetype()]}/18 pts
                    </div>
                  </div>
                </div>

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
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
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
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
