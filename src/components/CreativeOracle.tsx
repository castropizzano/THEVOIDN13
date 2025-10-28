import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Volume2, VolumeX } from 'lucide-react';
import voidCityFront from '@/assets/void-city-front.png';
import voidCityBack from '@/assets/void-city-back.png';

interface CreativeOracleProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Question = {
  text: string;
  textEn: string;
  options: { text: string; textEn: string; archetype: string; value: number }[];
};

const voidGuide = { 
  name: 'THEVØIDN13', 
  imageFront: voidCityFront,
  imageBack: voidCityBack,
  description: 'A sombra que observa e questiona', 
  descriptionEn: 'The shadow that observes and questions' 
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

  if (!started) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-6xl p-0 bg-black border-2 border-destructive/30 overflow-hidden">
          <DialogTitle className="sr-only">Oráculo Criativo</DialogTitle>
          <DialogDescription className="sr-only">
            Descubra seu arquétipo criativo dominante através de seis perguntas
          </DialogDescription>
          
          <div className="relative min-h-[600px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={voidGuide.imageBack} 
                alt="City"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-0 w-full">
              {/* Character Side */}
              <div className="relative flex items-end justify-center p-8">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-destructive/10 blur-3xl"></div>
                  <img 
                    src={voidGuide.imageFront} 
                    alt={voidGuide.name}
                    className="relative w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="flex flex-col justify-center p-12 space-y-8">
                <div className="space-y-3">
                  <h2 className="text-6xl font-bold text-destructive tracking-tight">
                    ORÁCULO<br/>CRIATIVO
                  </h2>
                  <h3 className="text-2xl text-muted-foreground/60 italic font-light tracking-wide">
                    CREATIVE ORACLE
                  </h3>
                </div>

                <div className="h-px bg-gradient-to-r from-destructive/50 to-transparent"></div>

                <div className="space-y-4">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {voidGuide.name} te guiará por seis perguntas sobre seu processo criativo.
                    Não existe resposta certa. Apenas verdades que você ainda não disse em voz alta.
                  </p>
                  <p className="text-base text-muted-foreground/70 italic leading-relaxed">
                    {voidGuide.name} will guide you through six questions about your creative process.
                    There are no right answers. Only truths you haven't spoken aloud yet.
                  </p>
                </div>

                <Button 
                  onClick={handleStart} 
                  size="lg" 
                  className="w-full bg-destructive hover:bg-destructive/90 text-white font-bold text-lg py-6"
                >
                  COMEÇAR / START
                </Button>
              </div>
            </div>
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

  if (revealed) {
    const archetype = getDominantArchetype();
    const result = archetypes[archetype];
    
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 bg-black border-2 border-destructive/30">
          <DialogTitle className="sr-only">Resultado do Oráculo Criativo</DialogTitle>
          <DialogDescription className="sr-only">
            Seu arquétipo criativo dominante foi revelado
          </DialogDescription>
          
          <div className="relative">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
              <img 
                src={voidGuide.imageBack} 
                alt="City"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 space-y-6">
              {/* Audio Control */}
              <button
                onClick={toggleAudio}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-20"
              >
                {audioMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>

              <div className="text-center space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold text-destructive tracking-tight">{result.name}</h2>
                <h3 className="text-xl md:text-2xl text-muted-foreground/60 italic font-light">{result.nameEn}</h3>
              </div>

              <div className="flex justify-center">
                <div className="w-60 h-[350px] md:w-80 md:h-[450px] relative">
                  <div className="absolute inset-0 bg-destructive/10 blur-2xl"></div>
                  <img 
                    src={voidGuide.imageFront} 
                    alt={result.name}
                    className="relative w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="space-y-3 bg-black/40 p-6 rounded-lg border border-destructive/20">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  {result.description}
                </p>
                <p className="text-sm md:text-base text-muted-foreground/80 italic leading-relaxed">
                  {result.descriptionEn}
                </p>
              </div>

              <div className="p-6 bg-destructive/10 border-l-4 border-destructive rounded-r space-y-2">
                <p className="text-sm md:text-base font-bold text-foreground">
                  {result.message}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground italic">
                  {result.messageEn}
                </p>
              </div>

              <div className="pt-4 space-y-3 bg-black/40 p-6 rounded-lg border border-destructive/20">
                <p className="text-xs md:text-sm text-muted-foreground/70 uppercase tracking-wider">
                  Distribuição dos arquétipos / Archetype distribution
                </p>
                <div className="space-y-3">
                  {Object.entries(scores).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4">
                      <span className="text-xs md:text-sm text-foreground w-24 md:w-32 uppercase tracking-wide">
                        {archetypes[key as keyof typeof archetypes].name.split(' ').pop()}
                      </span>
                      <div className="flex-1 h-3 bg-muted/20 rounded-full overflow-hidden border border-destructive/20">
                        <div 
                          className="h-full bg-gradient-to-r from-destructive to-destructive/60 transition-all duration-1000"
                          style={{ width: `${(value / Math.max(...Object.values(scores))) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs md:text-sm text-muted-foreground/70 w-12 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button 
                onClick={handleReset} 
                variant="outline" 
                className="border-destructive/30 text-foreground hover:bg-destructive/10"
              >
                REFAZER / RESTART
              </Button>
              <Button 
                onClick={() => onOpenChange(false)}
                className="bg-destructive hover:bg-destructive/90"
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
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0 bg-black border-2 border-destructive/30">
        <DialogTitle className="sr-only">Oráculo Criativo - Pergunta {currentQuestion + 1}</DialogTitle>
        <DialogDescription className="sr-only">
          {question.textEn}
        </DialogDescription>
        
        <div className="relative">
          {/* Background */}
          <div className="absolute inset-0">
            <img 
              src={voidGuide.imageBack} 
              alt="City"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
          </div>

          <div className="relative z-10">
            {/* Audio Control */}
            <button
              onClick={toggleAudio}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-20"
            >
              {audioMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            <div className={`transition-all duration-500 ${animatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {/* Progress Bar */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {questions.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 w-12 rounded-full transition-all ${
                          idx === currentQuestion ? 'bg-destructive' : idx < currentQuestion ? 'bg-destructive/50' : 'bg-muted/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground/70 uppercase tracking-wider">
                    {currentQuestion + 1} / {questions.length}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-[400px_1fr] gap-0 min-h-[600px]">
                {/* Character Side */}
                <div className="relative flex items-end justify-center p-6">
                  <div className="relative w-full">
                    <div className="absolute inset-0 bg-destructive/10 blur-2xl"></div>
                    <img 
                      src={voidGuide.imageFront} 
                      alt={voidGuide.name}
                      className="relative w-full h-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Questions Side */}
                <div className="flex flex-col justify-center p-12 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-destructive tracking-tight">{voidGuide.name}</h3>
                    <p className="text-sm text-muted-foreground/60 italic">{voidGuide.description}</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-destructive/50 to-transparent"></div>

                  <div className="space-y-4">
                    <p className="text-xl text-foreground font-medium leading-relaxed">
                      {question.text}
                    </p>
                    <p className="text-base text-muted-foreground/70 italic leading-relaxed">
                      {question.textEn}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {question.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option.archetype, option.value)}
                        className="w-full text-left p-4 rounded-lg bg-black/40 border border-destructive/20 hover:border-destructive hover:bg-destructive/10 transition-all group"
                      >
                        <p className="text-base text-foreground group-hover:text-destructive transition-colors">
                          {option.text}
                        </p>
                        <p className="text-sm text-muted-foreground/60 italic mt-1">
                          {option.textEn}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
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
