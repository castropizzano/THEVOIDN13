import { BookOpen, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442239711i/472331.jpg",
      description: "Ética ambígua e o mecanismo de cidade",
      context: "A arquitetura ética e o questionamento do heroísmo"
    },
    {
      title: "The Sandman",
      author: "Neil Gaiman",
      year: 1989,
      coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1355564900i/23754.jpg",
      description: "Mitologia pessoal e arquitetura do sonho",
      context: "A construção de universos oníricos e simbólicos"
    },
    {
      title: "Black Hole",
      author: "Charles Burns",
      year: 1995,
      coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388199803i/381033.jpg",
      description: "Alienação e metamorfose corporal",
      context: "O corpo como texto de transformação e isolamento"
    }
  ];

  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  DNA CONCEITUAL
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  CONCEPTUAL DNA — Quadrinhos que estruturam a narrativa
                </p>
              </div>
            </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <Info className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">DNA Conceitual dos Quadrinhos</DialogTitle>
                <DialogDescription className="text-base leading-relaxed pt-4">
                  <p className="mb-4">
                    A arquitetura conceitual do THEVØIDN13 absorve a <strong>ética ambígua 
                    e o mecanismo de cidade</strong> de <em>Watchmen</em>, a <strong>mitologia 
                    pessoal e arquitetura do sonho</strong> de <em>The Sandman</em>, e a <strong>alienação 
                    e metamorfose corporal</strong> de <em>Black Hole</em>.
                  </p>
                  <p className="mb-4">
                    Estes três quadrinhos formam o <strong>DNA conceitual</strong> do projeto, 
                    fornecendo estruturas narrativas, visuais e simbólicas que permeiam 
                    desde a construção dos personagens até a atmosfera geral.
                  </p>
                  <p>
                    <em>Watchmen</em> traz o questionamento ético e a desconstrução do herói. 
                    <em>The Sandman</em> constrói universos oníricos e mitológicos. 
                    <em>Black Hole</em> explora a transformação do corpo como metáfora 
                    de isolamento e alienação social.
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

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
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
