import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Card } from './ui/card';
import voidFront from '@/assets/void-front.png';
import punkFront from '@/assets/punk-front.png';
import buddyFront from '@/assets/buddy-front.png';
import giFront from '@/assets/gi-front.png';

interface CreativeOracleProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Character = 'void' | 'punk' | 'buddy' | 'gi';

type Question = {
  character: Character;
  text: string;
  textEn: string;
  options: { text: string; textEn: string; archetype: string; value: number }[];
};

const characters = {
  void: { name: 'VOID', image: voidFront, description: 'A sombra que observa', descriptionEn: 'The shadow that observes' },
  punk: { name: 'PUNK', image: punkFront, description: 'O caos criativo', descriptionEn: 'Creative chaos' },
  buddy: { name: 'BUDDY', image: buddyFront, description: 'A conexão humana', descriptionEn: 'Human connection' },
  gi: { name: 'GI', image: giFront, description: 'A estrutura disciplinada', descriptionEn: 'Disciplined structure' },
};

const questions: Question[] = [
  {
    character: 'void',
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
    character: 'punk',
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
    character: 'buddy',
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
    character: 'gi',
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
    character: 'void',
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
    character: 'punk',
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
  
  const currentChar = started && currentQuestion < questions.length 
    ? questions[currentQuestion].character 
    : 'void';

  useEffect(() => {
    if (!open) {
      setStarted(false);
      setCurrentQuestion(0);
      setScores({ shadow: 0, punk: 0, buddy: 0, gi: 0 });
      setRevealed(false);
      setSelectedOption(null);
      setAnimatingOut(false);
    }
  }, [open]);

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
        <DialogContent className="max-w-3xl p-8 bg-background/95 backdrop-blur">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="heading-1 text-primary">ORÁCULO CRIATIVO</h2>
              <h3 className="heading-3 text-muted-foreground">CREATIVE ORACLE</h3>
            </div>
            
            <div className="space-y-4 max-w-xl mx-auto">
              <p className="body-large text-foreground">
                Uma jornada de autodescoberta através do processo criativo.
                Seis perguntas. Quatro arquétipos. Um caminho revelado.
              </p>
              <p className="body-base text-muted-foreground italic">
                A journey of self-discovery through the creative process.
                Six questions. Four archetypes. One path revealed.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              {Object.entries(characters).map(([key, char]) => (
                <div key={key} className="space-y-2">
                  <div className="aspect-square overflow-hidden rounded-lg border-2 border-primary/20">
                    <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="label-large text-primary">{char.name}</p>
                    <p className="label-small text-muted-foreground">{char.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button onClick={handleStart} size="lg" className="px-12">
              COMEÇAR / START
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (revealed) {
    const archetype = getDominantArchetype();
    const result = archetypes[archetype];
    
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl p-8 bg-background/95 backdrop-blur">
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="heading-1 text-primary">{result.name}</h2>
              <h3 className="heading-3 text-muted-foreground">{result.nameEn}</h3>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                <img 
                  src={characters[archetype === 'shadow' ? 'void' : archetype].image} 
                  alt={result.name}
                  className="relative w-full h-full object-cover rounded-lg border-2 border-primary"
                />
              </div>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-3">
                <p className="body-large text-foreground text-justify">
                  {result.description}
                </p>
                <p className="body-base text-muted-foreground text-justify italic">
                  {result.descriptionEn}
                </p>
              </div>

              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r space-y-2">
                <p className="body-base font-bold text-foreground">
                  {result.message}
                </p>
                <p className="body-small text-muted-foreground italic">
                  {result.messageEn}
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <p className="label-base text-muted-foreground">Distribuição dos arquétipos / Archetype distribution:</p>
                <div className="space-y-2">
                  {Object.entries(scores).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-3">
                      <span className="label-small text-foreground w-20">{archetypes[key as keyof typeof archetypes].name.split(' ')[1]}</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-1000"
                          style={{ width: `${(value / Math.max(...Object.values(scores))) * 100}%` }}
                        />
                      </div>
                      <span className="label-small text-muted-foreground w-8 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button onClick={handleReset} variant="outline">
                REFAZER / RESTART
              </Button>
              <Button onClick={() => onOpenChange(false)}>
                FECHAR / CLOSE
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const question = questions[currentQuestion];
  const character = characters[currentChar];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-8 bg-background/95 backdrop-blur">
        <div className={`space-y-8 transition-all duration-500 ${animatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-8 rounded-full transition-all ${
                    idx === currentQuestion ? 'bg-primary' : idx < currentQuestion ? 'bg-primary/50' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <p className="label-base text-muted-foreground">
              {currentQuestion + 1} / {questions.length}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 relative flex-shrink-0">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
              <img 
                src={character.image} 
                alt={character.name}
                className="relative w-full h-full object-cover rounded-lg border-2 border-primary/50"
              />
            </div>

            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="heading-3 text-primary">{character.name}</h3>
                  <span className="label-small text-muted-foreground">— {character.description}</span>
                </div>
                <p className="label-small text-muted-foreground italic">{character.descriptionEn}</p>
              </div>

              <div className="space-y-3">
                <p className="body-large text-foreground font-medium">
                  {question.text}
                </p>
                <p className="body-base text-muted-foreground italic">
                  {question.textEn}
                </p>
              </div>

              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.archetype, option.value)}
                    className="w-full text-left p-4 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <p className="body-base text-foreground group-hover:text-primary transition-colors">
                      {option.text}
                    </p>
                    <p className="body-small text-muted-foreground italic mt-1">
                      {option.textEn}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
