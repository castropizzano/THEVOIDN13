import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Volume2, VolumeX } from 'lucide-react';

interface CreativeOracleProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Question = {
  text: string;
  textEn: string;
  options: { text: string; textEn: string; archetype: string; value: number }[];
};

const questions: Question[] = [
  {
    text: 'Quando você cria, de onde vem o impulso inicial?',
    textEn: 'When you create, where does the initial impulse come from?',
    options: [
      { text: 'Do vazio interior, do que não consigo nomear', textEn: 'From the inner void, from what I cannot name', archetype: 'shadow', value: 3 },
      { text: 'Da necessidade de expressar algo urgente', textEn: 'From the need to express something urgent', archetype: 'punk', value: 2 },
      { text: 'Do desejo de conectar com outras pessoas', textEn: 'From the desire to connect with others', archetype: 'buddy', value: 1 },
      { text: 'De um método ou técnica que domino', textEn: 'From a method or technique I master', archetype: 'gi', value: 0 },
    ],
  },
  {
    text: 'O que você faz quando o processo criativo trava?',
    textEn: 'What do you do when the creative process gets stuck?',
    options: [
      { text: 'Destruo tudo e recomeço do zero', textEn: 'I destroy everything and start over', archetype: 'punk', value: 3 },
      { text: 'Mergulho no desconforto até encontrar algo', textEn: 'I dive into discomfort until I find something', archetype: 'shadow', value: 2 },
      { text: 'Busco referências e conversas inspiradoras', textEn: 'I seek references and inspiring conversations', archetype: 'buddy', value: 1 },
      { text: 'Volto ao básico, aos fundamentos', textEn: 'I return to basics, to fundamentals', archetype: 'gi', value: 0 },
    ],
  },
  {
    text: 'Como você sabe que um trabalho está terminado?',
    textEn: 'How do you know when a work is finished?',
    options: [
      { text: 'Quando ressoa com outras pessoas', textEn: 'When it resonates with others', archetype: 'buddy', value: 3 },
      { text: 'Quando atinge os critérios técnicos', textEn: 'When it meets technical criteria', archetype: 'gi', value: 2 },
      { text: 'Quando não aguento mais olhar pra ele', textEn: "When I can't stand looking at it anymore", archetype: 'punk', value: 1 },
      { text: 'Quando ele me revela algo sobre mim', textEn: 'When it reveals something about myself', archetype: 'shadow', value: 0 },
    ],
  },
  {
    text: 'Qual é a parte mais importante do processo criativo?',
    textEn: 'What is the most important part of the creative process?',
    options: [
      { text: 'A disciplina e a repetição diária', textEn: 'Discipline and daily repetition', archetype: 'gi', value: 3 },
      { text: 'O espaço de silêncio e contemplação', textEn: 'The space of silence and contemplation', archetype: 'shadow', value: 2 },
      { text: 'A experimentação sem medo de errar', textEn: 'Experimentation without fear of failure', archetype: 'punk', value: 1 },
      { text: 'O feedback e a troca com os outros', textEn: 'Feedback and exchange with others', archetype: 'buddy', value: 0 },
    ],
  },
  {
    text: 'O que você mais teme no ato de criar?',
    textEn: 'What do you fear most in the act of creating?',
    options: [
      { text: 'Descobrir partes de mim que preferia ignorar', textEn: 'Discovering parts of myself I preferred to ignore', archetype: 'shadow', value: 3 },
      { text: 'Perder o controle e não conseguir executar', textEn: 'Losing control and failing to execute', archetype: 'gi', value: 2 },
      { text: 'Ser incompreendido ou rejeitado', textEn: 'Being misunderstood or rejected', archetype: 'buddy', value: 1 },
      { text: 'Não ser radical o suficiente', textEn: 'Not being radical enough', archetype: 'punk', value: 0 },
    ],
  },
  {
    text: 'Onde você encontra sua identidade criativa?',
    textEn: 'Where do you find your creative identity?',
    options: [
      { text: 'Na ruptura com o que é esperado', textEn: 'In breaking with what is expected', archetype: 'punk', value: 3 },
      { text: 'No domínio técnico e na maestria', textEn: 'In technical mastery and craftsmanship', archetype: 'gi', value: 2 },
      { text: 'No diálogo com minha comunidade', textEn: 'In dialogue with my community', archetype: 'buddy', value: 1 },
      { text: 'No encontro com o desconhecido em mim', textEn: 'In encountering the unknown within me', archetype: 'shadow', value: 0 },
    ],
  },
];

const archetypes = {
  shadow: {
    name: 'O ALQUIMISTA DAS SOMBRAS',
    nameEn: 'THE SHADOW ALCHEMIST',
    description: 'Seu processo criativo mergulha no inconsciente. Você não busca respostas prontas — você desce ao vazio e deixa que ele fale através de você. Sua criação é transmutação.',
    descriptionEn: 'Your creative process dives into the unconscious. You don\'t seek ready answers — you descend into the void and let it speak through you. Your creation is transmutation.',
    message: 'A sombra não é ausência de luz. É potência não nomeada. Continue descendo.',
    messageEn: 'Shadow is not absence of light. It is unnamed power. Keep descending.',
  },
  punk: {
    name: 'O ICONOCLASTA',
    nameEn: 'THE ICONOCLAST',
    description: 'Seu processo é ruptura. Você cria destruindo o que veio antes, recusando fórmulas, negando conforto. Sua arte é manifesto em movimento.',
    descriptionEn: 'Your process is rupture. You create by destroying what came before, refusing formulas, denying comfort. Your art is a manifesto in motion.',
    message: 'O caos não é falta de ordem. É ordem ainda não reconhecida. Continue quebrando.',
    messageEn: 'Chaos is not lack of order. It is order not yet recognized. Keep breaking.',
  },
  buddy: {
    name: 'O TECELÃO DE REDES',
    nameEn: 'THE NETWORK WEAVER',
    description: 'Seu processo é relacional. Você cria no diálogo, na troca, na ressonância com o outro. Sua obra só existe porque existe escuta.',
    descriptionEn: 'Your process is relational. You create in dialogue, in exchange, in resonance with others. Your work exists only because there is listening.',
    message: 'A conexão não é fraqueza. É força multiplicada. Continue tecendo.',
    messageEn: 'Connection is not weakness. It is multiplied strength. Keep weaving.',
  },
  gi: {
    name: 'O ARQUITETO DO MÉTODO',
    nameEn: 'THE METHOD ARCHITECT',
    description: 'Seu processo é estrutura. Você constrói com rigor, disciplina, repetição consciente. Sua criação é forma refinada pelo tempo.',
    descriptionEn: 'Your process is structure. You build with rigor, discipline, conscious repetition. Your creation is form refined by time.',
    message: 'A disciplina não é prisão. É liberdade através da forma. Continue construindo.',
    messageEn: 'Discipline is not prison. It is freedom through form. Keep building.',
  },
};

export const CreativeOracle = ({ open, onOpenChange }: CreativeOracleProps) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ shadow: 0, punk: 0, buddy: 0, gi: 0 });
  const [revealed, setRevealed] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [animatingOut, setAnimatingOut] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!open) {
      setStarted(false);
      setCurrentQuestion(0);
      setScores({ shadow: 0, punk: 0, buddy: 0, gi: 0 });
      setRevealed(false);
      setSelectedOption(null);
      setAnimatingOut(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [open]);

  useEffect(() => {
    if (started && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [started]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setAudioMuted(!audioMuted);
    }
  };

  const handleAnswer = (archetype: string, value: number) => {
    setScores(prev => ({
      ...prev,
      [archetype]: prev[archetype as keyof typeof prev] + value,
    }));
    
    setAnimatingOut(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(null);
        setAnimatingOut(false);
      } else {
        setRevealed(true);
        setAnimatingOut(false);
      }
    }, 600);
  };

  const getDominantArchetype = () => {
    const entries = Object.entries(scores) as [keyof typeof scores, number][];
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
    setRevealed(false);
    setSelectedOption(null);
    setAnimatingOut(false);
  };

  // Initial screen
  if (!started) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl bg-background border-2 border-primary/30">
          <DialogTitle className="sr-only">Oráculo Criativo</DialogTitle>
          <DialogDescription className="sr-only">
            Descubra seu arquétipo criativo dominante através de seis perguntas
          </DialogDescription>
          
          <div className="space-y-8 p-8">
            <div className="pb-6 border-b border-primary/20">
              <h2 className="title text-primary tracking-tight text-left mb-2">
                ORÁCULO CRIATIVO
              </h2>
              <p className="lang-pill text-left">
                Creative Oracle
              </p>
            </div>

            <div className="space-y-4 text-left">
              <p className="body-base text-foreground/90">
                Seis perguntas sobre seu processo criativo. Não existe resposta certa. 
                Apenas verdades que você ainda não disse em voz alta.
              </p>
              <p className="body-small text-muted-foreground/70 italic">
                Six questions about your creative process. There are no right answers. 
                Only truths you haven't spoken aloud yet.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="grid grid-cols-4 gap-2 text-left lang-pill">
                <div>Sombras</div>
                <div>Ruptura</div>
                <div>Conexão</div>
                <div>Método</div>
              </div>
              <div className="grid grid-cols-4 gap-2 text-left lang-pill opacity-60">
                <div>Shadow</div>
                <div>Rupture</div>
                <div>Connection</div>
                <div>Method</div>
              </div>
              
              {/* Category descriptions */}
              <div className="pt-4 space-y-4 border-t border-border/30">
                <div className="space-y-1 text-left">
                  <p className="body-small text-foreground/80">
                    <strong className="text-primary">Sombras:</strong> O inconsciente como matéria-prima criativa
                  </p>
                  <p className="body-small text-muted-foreground/60 italic">
                    <strong>Shadow:</strong> The unconscious as creative raw material
                  </p>
                </div>
                
                <div className="space-y-1 text-left">
                  <p className="body-small text-foreground/80">
                    <strong className="text-primary">Ruptura:</strong> Destruição como gesto criativo
                  </p>
                  <p className="body-small text-muted-foreground/60 italic">
                    <strong>Rupture:</strong> Destruction as creative gesture
                  </p>
                </div>
                
                <div className="space-y-1 text-left">
                  <p className="body-small text-foreground/80">
                    <strong className="text-primary">Conexão:</strong> A criação como diálogo e escuta
                  </p>
                  <p className="body-small text-muted-foreground/60 italic">
                    <strong>Connection:</strong> Creation as dialogue and listening
                  </p>
                </div>
                
                <div className="space-y-1 text-left">
                  <p className="body-small text-foreground/80">
                    <strong className="text-primary">Método:</strong> Disciplina e rigor como estrutura
                  </p>
                  <p className="body-small text-muted-foreground/60 italic">
                    <strong>Method:</strong> Discipline and rigor as structure
                  </p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleStart} 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground subtitle py-6"
            >
              COMEÇAR / START
            </Button>
          </div>

          {/* Hidden audio element */}
          <audio 
            ref={audioRef} 
            loop 
            src="/audio/Shadow_In_The_Dark.mp3"
            className="hidden"
          />
        </DialogContent>
      </Dialog>
    );
  }

  // Results screen
  if (revealed) {
    const archetype = getDominantArchetype();
    const result = archetypes[archetype];
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-2 border-primary/30">
          <DialogTitle className="sr-only">Resultado do Oráculo Criativo</DialogTitle>
          <DialogDescription className="sr-only">
            Seu arquétipo criativo dominante foi revelado
          </DialogDescription>
          
          <div className="space-y-8 p-8">
            {/* Audio Control - moved to top-left */}
            <button
              onClick={toggleAudio}
              className="absolute top-4 left-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-20"
              aria-label="Toggle audio"
            >
              {audioMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            {/* Header */}
            <div className="text-left space-y-2 pb-6 border-b border-primary/20">
              <h2 className="title text-primary tracking-tight uppercase">{result.name}</h2>
              <p className="subtitle text-muted-foreground/60 italic">{result.nameEn}</p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div className="space-y-3 p-6 rounded-lg border border-primary/20 bg-card/50 text-left">
                <p className="body-base text-foreground">
                  {result.description}
                </p>
                <p className="body-small text-muted-foreground/80 italic">
                  {result.descriptionEn}
                </p>
              </div>

              <div className="p-5 bg-primary/10 border-l-4 border-primary rounded-r space-y-2 text-left">
                <p className="body-small font-bold text-foreground">
                  {result.message}
                </p>
                <p className="body-small text-muted-foreground italic">
                  {result.messageEn}
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="space-y-4 pt-4">
              <div className="text-left">
                <p className="lang-pill mb-4">
                  Distribuição dos Arquétipos / Archetype Distribution
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {Object.entries(scores).map(([key, value]) => {
                  const percentage = totalScore > 0 ? Math.round((value / totalScore) * 100) : 0;
                  const archetypeName = archetypes[key as keyof typeof archetypes].name.split(' ').pop() || key;
                  const isDominant = key === archetype;
                  
                  return (
                    <div 
                      key={key} 
                      className={`p-4 rounded-lg border transition-all ${
                        isDominant 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border bg-card/30'
                      }`}
                    >
                      <div className="text-center space-y-2">
                        <p className="title text-primary">
                          {percentage}%
                        </p>
                        <p className="lang-pill text-foreground/80">
                          {archetypeName}
                        </p>
                        <div className="pt-2">
                          <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary transition-all duration-1000"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                        <p className="lang-pill">
                          {value} pts
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Archetype Descriptions */}
              <div className="pt-6 space-y-4 border-t border-border/30">
                <p className="lang-pill mb-4">
                  Entenda os Arquétipos / Understanding the Archetypes
                </p>
                
                <div className="space-y-1 text-left">
                  <p className="body-small text-foreground/80">
                    <strong className="text-primary">Sombras:</strong> O inconsciente como matéria-prima criativa
                  </p>
                  <p className="body-small text-muted-foreground/60 italic">
                    <strong>Shadow:</strong> The unconscious as creative raw material
                  </p>
                </div>
                
                <div className="space-y-1 text-left">
                  <p className="body-small text-foreground/80">
                    <strong className="text-primary">Ruptura:</strong> Destruição como gesto criativo
                  </p>
                  <p className="body-small text-muted-foreground/60 italic">
                    <strong>Rupture:</strong> Destruction as creative gesture
                  </p>
                </div>
                
                <div className="space-y-1 text-left">
                  <p className="body-small text-foreground/80">
                    <strong className="text-primary">Conexão:</strong> A criação como diálogo e escuta
                  </p>
                  <p className="body-small text-muted-foreground/60 italic">
                    <strong>Connection:</strong> Creation as dialogue and listening
                  </p>
                </div>
                
                <div className="space-y-1 text-left">
                  <p className="body-small text-foreground/80">
                    <strong className="text-primary">Método:</strong> Disciplina e rigor como estrutura
                  </p>
                  <p className="body-small text-muted-foreground/60 italic">
                    <strong>Method:</strong> Discipline and rigor as structure
                  </p>
                </div>
              </div>

              {/* Total Score */}
              <div className="text-left pt-4 border-t border-border">
                <p className="lang-pill">
                  Pontuação Total / Total Score: <span className="subtitle text-foreground/70">{totalScore}</span>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-start gap-4 pt-6">
              <Button 
                onClick={handleReset} 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10 subtitle"
              >
                REFAZER / RESTART
              </Button>
              <Button 
                onClick={() => onOpenChange(false)}
                className="bg-primary hover:bg-primary/90 subtitle"
              >
                FECHAR / CLOSE
              </Button>
            </div>
          </div>

          <audio 
            ref={audioRef} 
            loop 
            src="/audio/Shadow_In_The_Dark.mp3"
            className="hidden"
          />
        </DialogContent>
      </Dialog>
    );
  }

  // Questions screen
  const question = questions[currentQuestion];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background border-2 border-primary/30">
        <DialogTitle className="sr-only">Oráculo Criativo - Pergunta {currentQuestion + 1}</DialogTitle>
        <DialogDescription className="sr-only">
          {question.textEn}
        </DialogDescription>
        
        <div className="space-y-6 p-8">
          {/* Audio Control - moved to top-left */}
          <button
            onClick={toggleAudio}
            className="absolute top-4 left-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-20"
            aria-label="Toggle audio"
          >
            {audioMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          <div className={`transition-all duration-500 ${animatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {/* Progress Bar */}
            <div className="pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 w-12 rounded-full transition-all ${
                        idx === currentQuestion ? 'bg-primary' : idx < currentQuestion ? 'bg-primary/50' : 'bg-muted/30'
                      }`}
                    />
                  ))}
                </div>
                <p className="lang-pill">
                  {currentQuestion + 1} / {questions.length}
                </p>
              </div>
            </div>

            {/* Question */}
            <div className="space-y-6">
              <div className="space-y-3 text-left pb-4 border-b border-primary/20">
                <p className="body-base text-foreground">
                  {question.text}
                </p>
                <p className="body-small text-muted-foreground/70 italic">
                  {question.textEn}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.archetype, option.value)}
                    className="w-full text-left p-5 rounded-lg border border-border bg-card/30 hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <p className="body-base text-foreground group-hover:text-primary transition-colors">
                      {option.text}
                    </p>
                    <p className="body-small text-muted-foreground/60 italic mt-1">
                      {option.textEn}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <audio 
          ref={audioRef} 
          loop 
          src="/audio/Shadow_In_The_Dark.mp3"
          className="hidden"
        />
      </DialogContent>
    </Dialog>
  );
};