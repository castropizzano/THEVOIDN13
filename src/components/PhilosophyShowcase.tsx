import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BookOpen, Code2, Music, Sparkles, Zap } from "lucide-react";
import { BilingualContent } from "./BilingualSection";

interface PhilosophyReference {
  title: string;
  author: string;
  year: string;
  description: string;
  context: string;
  link: string;
  icon: any;
  gradient: string;
}

export default function PhilosophyShowcase() {
  const philosophies: PhilosophyReference[] = [
    {
      title: "The Way of Code",
      author: "Rick Rubin",
      year: "2024",
      description: "Filosofia criativa que conecta o Tao Te Ching com desenvolvimento de software, propondo que código seja tratado como arte contemplativa.",
      context: "Metodologia de não-ação criativa (Wu Wei) aplicada à programação",
      link: "https://www.thewayofcode.com/",
      icon: BookOpen,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Vibe Coding",
      author: "Rick Rubin",
      year: "2024",
      description: "Abordagem intuitiva de programação mediada por IA, onde o desenvolvedor atua como diretor criativo ao invés de executor técnico.",
      context: "Democratização do acesso ao desenvolvimento via ferramentas de IA",
      link: "https://www.thewayofcode.com/",
      icon: Sparkles,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Punk Rock of Coding",
      author: "Rick Rubin",
      year: "2024",
      description: "IA como movimento revolucionário no desenvolvimento: acessível, rebelde, democratizante. Paralelo com o punk rock dos anos 70.",
      context: "Resistência criativa contra elitismo técnico e barreiras de entrada",
      link: "https://www.thewayofcode.com/",
      icon: Zap,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Lovable",
      author: "Meta-Referência",
      year: "2024",
      description: "Ferramenta de co-criação humano-IA que materializa os princípios de vibe coding e resistência criativa. Este site foi construído com ela.",
      context: "Praxis concreta da filosofia punk rock do código",
      link: "https://lovable.dev/",
      icon: Code2,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Tao Te Ching",
      author: "Lao Tzu",
      year: "~400 AC",
      description: "Texto fundacional do Taoísmo sobre fluxo, não-ação criativa (Wu Wei) e harmonia com processos naturais. Base filosófica de The Way of Code.",
      context: "Sabedoria ancestral sobre criatividade sem esforço forçado",
      link: "https://en.wikipedia.org/wiki/Tao_Te_Ching",
      icon: Music,
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section className="space-y-8">
      <BilingualContent
        portugueseContent={
          <>
            <h3 className="bible-subtitle">FILOSOFIA & METODOLOGIA</h3>
            <p className="text-muted-foreground mt-4">
              Referências conceituais que estruturam a abordagem criativa e metodológica do projeto. 
              Da sabedoria ancestral do Tao Te Ching à revolução contemporânea do vibe coding, 
              essas filosofias informam tanto o processo quanto o produto.
            </p>
          </>
        }
        englishContent={
          <>
            <h3 className="bible-subtitle">PHILOSOPHY & METHODOLOGY</h3>
            <p className="text-muted-foreground mt-4">
              Conceptual references that structure the project's creative and methodological approach. 
              From the ancestral wisdom of Tao Te Ching to the contemporary revolution of vibe coding, 
              these philosophies inform both process and product.
            </p>
          </>
        }
      />

      <div className="flex justify-center mb-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="gap-2">
              <BookOpen className="h-4 w-4" />
              <BilingualContent
                portugueseContent={<>Sobre as Referências Filosóficas</>}
                englishContent={<>About Philosophical References</>}
              />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="bible-subtitle">
                <BilingualContent
                  portugueseContent={<>DNA Filosófico do Projeto</>}
                  englishContent={<>Philosophical DNA of the Project</>}
                />
              </DialogTitle>
              <DialogDescription className="text-left space-y-4 pt-4">
                <BilingualContent
                  portugueseContent={
                    <>
                      <p>
                        As filosofias apresentadas aqui não são apenas inspirações abstratas—elas representam 
                        a estrutura metodológica e ética que sustenta todo o projeto THEVØIDN13.
                      </p>
                      <p className="mt-4">
                        <strong>The Way of Code</strong> e o conceito de <strong>Vibe Coding</strong>, 
                        propostos por Rick Rubin, articulam uma abordagem contemplativa ao desenvolvimento 
                        mediado por IA. Em vez de domínio técnico absoluto, prioriza-se visão criativa e 
                        intuição direcional—o desenvolvedor como curador, não como executor.
                      </p>
                      <p className="mt-4">
                        O <strong>Punk Rock of Coding</strong> é o manifesto político implícito: 
                        assim como o punk democratizou a música nos anos 70 ("three chords and the truth"), 
                        a IA democratiza o desenvolvimento. Resistência contra elitismo técnico, 
                        acessibilidade radical, faça-você-mesmo expandido para faça-com-IA.
                      </p>
                      <p className="mt-4">
                        <strong>Lovable</strong> aparece aqui como meta-referência: é a ferramenta 
                        que materializou essas filosofias. Este site inteiro foi construído através 
                        de co-criação humano-IA, validando empiricamente os princípios de vibe coding.
                      </p>
                      <p className="mt-4">
                        Por fim, o <strong>Tao Te Ching</strong> fornece o substrato filosófico milenar: 
                        Wu Wei (não-ação criativa), fluxo natural dos processos, harmonia entre intenção 
                        e execução. O código como caminho, não como destino.
                      </p>
                    </>
                  }
                  englishContent={
                    <>
                      <p>
                        The philosophies presented here are not mere abstract inspirations—they represent 
                        the methodological and ethical framework that sustains the entire THEVØIDN13 project.
                      </p>
                      <p className="mt-4">
                        <strong>The Way of Code</strong> and the concept of <strong>Vibe Coding</strong>, 
                        proposed by Rick Rubin, articulate a contemplative approach to AI-mediated development. 
                        Instead of absolute technical mastery, creative vision and directional intuition are 
                        prioritized—the developer as curator, not executor.
                      </p>
                      <p className="mt-4">
                        <strong>Punk Rock of Coding</strong> is the implicit political manifesto: 
                        just as punk democratized music in the 70s ("three chords and the truth"), 
                        AI democratizes development. Resistance against technical elitism, 
                        radical accessibility, DIY expanded to do-it-with-AI.
                      </p>
                      <p className="mt-4">
                        <strong>Lovable</strong> appears here as meta-reference: it's the tool 
                        that materialized these philosophies. This entire website was built through 
                        human-AI co-creation, empirically validating vibe coding principles.
                      </p>
                      <p className="mt-4">
                        Finally, the <strong>Tao Te Ching</strong> provides the ancient philosophical substrate: 
                        Wu Wei (creative non-action), natural flow of processes, harmony between intention 
                        and execution. Code as path, not destination.
                      </p>
                    </>
                  }
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {philosophies.map((phil, index) => {
          const IconComponent = phil.icon;
          return (
            <a
              key={index}
              href={phil.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className={`h-2 bg-gradient-to-r ${phil.gradient}`} />
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${phil.gradient} bg-opacity-10`}>
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {phil.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {phil.author} • {phil.year}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm leading-relaxed">
                    {phil.description}
                  </p>
                  
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs text-muted-foreground italic">
                      {phil.context}
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          );
        })}
      </div>

      <BilingualContent
        portugueseContent={
          <p className="text-sm text-muted-foreground text-center mt-8 italic">
            Estas filosofias não são externas ao projeto—elas são o projeto. 
            Metodologia performada, não apenas citada.
          </p>
        }
        englishContent={
          <p className="text-sm text-muted-foreground text-center mt-8 italic">
            These philosophies are not external to the project—they are the project. 
            Methodology performed, not merely cited.
          </p>
        }
      />
    </section>
  );
}
