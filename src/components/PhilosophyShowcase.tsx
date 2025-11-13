import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BilingualContent } from "./BilingualSection";

interface PhilosophyReference {
  title: string;
  author: string;
  year: string;
  description: string;
  context: string;
  link: string;
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
      gradient: "from-primary to-accent"
    },
    {
      title: "Vibe Coding",
      author: "Rick Rubin",
      year: "2024",
      description: "Abordagem intuitiva de programação mediada por IA, onde o desenvolvedor atua como diretor criativo ao invés de executor técnico.",
      context: "Democratização do acesso ao desenvolvimento via ferramentas de IA",
      link: "https://www.thewayofcode.com/",
      gradient: "from-primary/80 to-primary"
    },
    {
      title: "Punk Rock of Coding",
      author: "Rick Rubin",
      year: "2024",
      description: "IA como movimento revolucionário no desenvolvimento: acessível, rebelde, democratizante. Paralelo com o punk rock dos anos 70.",
      context: "Resistência criativa contra elitismo técnico e barreiras de entrada",
      link: "https://www.thewayofcode.com/",
      gradient: "from-accent to-destructive"
    },
    {
      title: "Lovable",
      author: "Meta-Referência",
      year: "2024",
      description: "Ferramenta de co-criação humano-IA que materializa os princípios de vibe coding e resistência criativa. Este site foi construído com ela.",
      context: "Praxis concreta da filosofia punk rock do código",
      link: "https://lovable.dev/",
      gradient: "from-secondary to-muted"
    },
    {
      title: "Tao Te Ching",
      author: "Lao Tzu",
      year: "~400 AC",
      description: "Texto fundacional do Taoísmo sobre fluxo, não-ação criativa (Wu Wei) e harmonia com processos naturais. Base filosófica de The Way of Code.",
      context: "Sabedoria ancestral sobre criatividade sem esforço forçado",
      link: "https://en.wikipedia.org/wiki/Tao_Te_Ching",
      gradient: "from-muted to-secondary"
    },
    {
      title: "Process Art",
      author: "Metodologia",
      year: "1960-2024",
      description: "Arte como processo performativo documentado, não apenas produto final. O caminho criativo é a obra—cada decisão, iteração e transformação tem valor artístico.",
      context: "Documentação performática do desenvolvimento como arte conceitual",
      link: "https://en.wikipedia.org/wiki/Process_art",
      gradient: "from-accent/70 to-primary/60"
    }
  ];

  return (
    <section className="space-y-8">
      <BilingualContent
        portugueseContent={
          <>
            <h3 className="bible-subtitle text-left">FILOSOFIA & METODOLOGIA</h3>
            <p className="text-muted-foreground text-left mt-4 text-base leading-relaxed max-w-none">
              Referências conceituais que estruturam a abordagem criativa e metodológica do projeto. 
              Da sabedoria ancestral do Tao Te Ching à revolução contemporânea do vibe coding, 
              essas filosofias informam tanto o processo quanto o produto.
            </p>
          </>
        }
        englishContent={
          <>
            <h3 className="bible-subtitle text-left">PHILOSOPHY & METHODOLOGY</h3>
            <p className="text-muted-foreground text-left mt-4 text-base leading-relaxed max-w-none">
              Conceptual references that structure the project's creative and methodological approach. 
              From the ancestral wisdom of Tao Te Ching to the contemporary revolution of vibe coding, 
              these philosophies inform both process and product.
            </p>
          </>
        }
      />

      <div className="mb-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <BilingualContent
                portugueseContent="Sobre as Referências Filosóficas"
                englishContent="About Philosophical References"
              />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-left">
                <BilingualContent
                  portugueseContent="Sobre as Referências Filosóficas"
                  englishContent="About Philosophical References"
                />
              </DialogTitle>
              <DialogDescription className="text-left">
                <BilingualContent
                  portugueseContent={
                    <div className="space-y-4 text-left mt-4">
                      <p className="leading-relaxed italic text-base max-w-none">
                        Estas filosofias não são externas ao projeto—elas são o projeto. Metodologia performada, não apenas citada.
                      </p>
                    </div>
                  }
                  englishContent={
                    <div className="space-y-4 text-left mt-4">
                      <p className="leading-relaxed italic text-base max-w-none">
                        These philosophies are not external to the project—they are the project. Methodology performed, not merely cited.
                      </p>
                    </div>
                  }
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {philosophies.map((phil, index) => (
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
                <div>
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {phil.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {phil.author} • {phil.year}
                  </p>
                </div>
                
                <p className="text-base leading-relaxed max-w-none">
                  {phil.description}
                </p>
                
                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-muted-foreground italic max-w-none">
                    {phil.context}
                  </p>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>

      <BilingualContent
        portugueseContent={
          <p className="text-sm text-muted-foreground text-left mt-8 italic max-w-none">
            Estas filosofias não são externas ao projeto—elas são o projeto. 
            Metodologia performada, não apenas citada.
          </p>
        }
        englishContent={
          <p className="text-sm text-muted-foreground text-left mt-8 italic max-w-none">
            These philosophies are not external to the project—they are the project. 
            Methodology performed, not merely cited.
          </p>
        }
      />
    </section>
  );
}
