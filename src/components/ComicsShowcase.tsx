import { Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import watchmenCover from "@/assets/comics/watchmen.jpg";
import sandmanCover from "@/assets/comics/sandman.jpg";
import blackHoleCover from "@/assets/comics/black-hole.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ComicReference {
  title: string;
  author: string;
  year: number;
  coverUrl: string;
  description: string;
  context: string;
}

const ComicsShowcase = () => {
  const comics: ComicReference[] = [
    {
      title: "Watchmen",
      author: "Alan Moore & Dave Gibbons",
      year: 1986,
      coverUrl: watchmenCover,
      description: "Ética ambígua e o mecanismo de cidade",
      context: "A arquitetura ética e o questionamento do heroísmo"
    },
    {
      title: "The Sandman",
      author: "Neil Gaiman",
      year: 1989,
      coverUrl: sandmanCover,
      description: "Mitologia pessoal e arquitetura do sonho",
      context: "A construção de universos oníricos e simbólicos"
    },
    {
      title: "Black Hole",
      author: "Charles Burns",
      year: 1995,
      coverUrl: blackHoleCover,
      description: "Alienação e metamorfose corporal",
      context: "O corpo como texto de transformação e isolamento"
    }
  ];

  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm p-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start gap-2 mb-8">
                <Info className="w-4 h-4" />
                <span className="text-sm">DNA Conceitual dos Quadrinhos</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">
                  DNA Conceitual dos Quadrinhos
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  Três obras que estruturam a arquitetura narrativa e visual do projeto:
                </p>
                <ul className="space-y-4">
                  <li>
                    <strong>Watchmen (1986)</strong> — Alan Moore & Dave Gibbons<br />
                    Ética ambígua e o mecanismo de cidade
                  </li>
                  <li>
                    <strong>The Sandman (1989)</strong> — Neil Gaiman<br />
                    Mitologia pessoal e arquitetura do sonho
                  </li>
                  <li>
                    <strong>Black Hole (1995)</strong> — Charles Burns<br />
                    Alienação e metamorfose corporal
                  </li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comics.map((comic) => (
            <TooltipProvider key={comic.title}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="group overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="aspect-[2/3] overflow-hidden bg-secondary/20 relative">
                      <img
                        src={comic.coverUrl}
                        alt={`${comic.title} cover`}
                        className="w-full h-full object-cover object-center scale-110 transition-transform duration-300 group-hover:scale-125"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 bg-card">
                      <h3 className="font-bold text-lg mb-2">{comic.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {comic.author} ({comic.year})
                      </p>
                      <p className="text-sm italic text-primary/80">
                        {comic.description}
                      </p>
                    </div>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p className="font-semibold">{comic.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{comic.context}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        <div className="mt-8 p-6 bg-secondary/10 rounded-lg border border-primary/10">
          <p className="text-sm text-center text-muted-foreground leading-relaxed">
            Estes três quadrinhos formam a <strong className="text-foreground">tríade conceitual</strong> que 
            estrutura o universo narrativo do THEVØIDN13. Cada um contribui com camadas 
            distintas: <em>Watchmen</em> com a ética, <em>The Sandman</em> com a mitologia, 
            e <em>Black Hole</em> com a metamorfose corporal e o isolamento.
          </p>
        </div>
        </Card>
      </div>
    </section>
  );
};

export default ComicsShowcase;
