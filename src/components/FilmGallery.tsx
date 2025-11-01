import { ExternalLink, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import bladeRunnerPoster from "@/assets/posters/blade-runner.jpg";
import kidsPoster from "@/assets/posters/kids.jpg";
import matrixPoster from "@/assets/posters/matrix.jpg";
import akiraPoster from "@/assets/posters/akira.jpg";
import fallenAngelsPoster from "@/assets/posters/fallen-angels.jpg";
import thx1138Poster from "@/assets/posters/thx1138.jpg";
import brazilPoster from "@/assets/posters/brazil.jpg";
import equilibriumPoster from "@/assets/posters/equilibrium.jpg";
import poster1984 from "@/assets/posters/1984.jpg";
import theWarriorsPoster from "@/assets/posters/the-warriors.jpg";
import christianeFPoster from "@/assets/posters/christiane-f.jpg";
import perfectDaysPoster from "@/assets/posters/perfect-days.jpg";
import backToTheFuturePoster from "@/assets/posters/back-to-the-future.jpg";
import backToTheFuture2Poster from "@/assets/posters/back-to-the-future-2.jpg";
import backToTheFuture3Poster from "@/assets/posters/back-to-the-future-3.jpg";
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

interface FilmReference {
  title: string;
  director: string;
  year: number;
  imdbId: string;
  posterUrl: string;
  description: string;
  objectPosition?: string;
  scale?: string;
}

const FilmGallery = () => {
  const films: FilmReference[] = [
    {
      title: "Blade Runner",
      director: "Ridley Scott",
      year: 1982,
      imdbId: "tt0083658",
      posterUrl: bladeRunnerPoster,
      description: "Neo noir e solidão coreografada"
    },
    {
      title: "Kids",
      director: "Larry Clark",
      year: 1995,
      imdbId: "tt0113540",
      posterUrl: kidsPoster,
      description: "Realismo sujo"
    },
    {
      title: "The Matrix",
      director: "The Wachowskis",
      year: 1999,
      imdbId: "tt0133093",
      posterUrl: matrixPoster,
      description: "Controle e realidade sintética"
    },
    {
      title: "Akira",
      director: "Katsuhiro Ōtomo",
      year: 1988,
      imdbId: "tt0094625",
      posterUrl: akiraPoster,
      description: "Energia reprimida"
    },
    {
      title: "Fallen Angels",
      director: "Wong Kar Wai",
      year: 1995,
      imdbId: "tt0112913",
      posterUrl: fallenAngelsPoster,
      description: "Atmosfera bebê-da-desesperança"
    },
    {
      title: "THX 1138",
      director: "George Lucas",
      year: 1971,
      imdbId: "tt0066434",
      posterUrl: thx1138Poster,
      description: "Despersonalização e controle",
      objectPosition: "center bottom",
      scale: "scale-110"
    },
    {
      title: "Brazil",
      director: "Terry Gilliam",
      year: 1985,
      imdbId: "tt0088846",
      posterUrl: brazilPoster,
      description: "Burocracia como pesadelo"
    },
    {
      title: "Equilibrium",
      director: "Kurt Wimmer",
      year: 2002,
      imdbId: "tt0238380",
      posterUrl: equilibriumPoster,
      description: "Supressão emocional"
    },
    {
      title: "The Warriors",
      director: "Walter Hill",
      year: 1979,
      imdbId: "tt0080120",
      posterUrl: theWarriorsPoster,
      description: "Deriva urbana",
      scale: "scale-110"
    },
    {
      title: "1984",
      director: "Michael Radford",
      year: 1984,
      imdbId: "tt0087803",
      posterUrl: poster1984,
      description: "Vigilância total",
      scale: "scale-110"
    },
    {
      title: "Christiane F.",
      director: "Uli Edel",
      year: 1981,
      imdbId: "tt0082176",
      posterUrl: christianeFPoster,
      description: "Deriva poética"
    },
    {
      title: "Perfect Days",
      director: "Wim Wenders",
      year: 2023,
      imdbId: "tt27503384",
      posterUrl: perfectDaysPoster,
      description: "Ritmo existencial"
    },
    {
      title: "Back to the Future",
      director: "Robert Zemeckis",
      year: 1985,
      imdbId: "tt0088763",
      posterUrl: backToTheFuturePoster,
      description: "Temporalidade",
      scale: "scale-110"
    },
    {
      title: "Back to the Future Part II",
      director: "Robert Zemeckis",
      year: 1989,
      imdbId: "tt0096874",
      posterUrl: backToTheFuture2Poster,
      description: "Temporalidade futura"
    },
    {
      title: "Back to the Future Part III",
      director: "Robert Zemeckis",
      year: 1990,
      imdbId: "tt0099088",
      posterUrl: backToTheFuture3Poster,
      description: "Temporalidade passada"
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
                <span className="text-sm">Sobre as Referências Cinematográficas</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">Sobre as Referências Cinematográficas</DialogTitle>
                <DialogDescription className="text-base leading-relaxed pt-4">
                  <p className="mb-4">
                    O visual do THEVØIDN13 é uma <strong>fusão do realismo sujo e da deriva poética</strong> 
                    encontrados em filmes como <em>Kids</em> e <em>Christiane F.</em>, com o neo noir 
                    e a solidão coreografada de <em>Blade Runner</em> e <em>Fallen Angels</em>.
                  </p>
                  <p className="mb-4">
                    A atmosfera bebe da despersonalização de <em>THX 1138</em>, do controle sintético 
                    de <em>The Matrix</em>, da energia reprimida de <em>Akira</em>, e da temporalidade 
                    de <em>Back to the Future</em>.
                  </p>
                  <p>
                    Cada filme contribuiu com uma camada visual, estética ou conceitual que 
                    moldou a linguagem do projeto — desde a textura granulada até os movimentos 
                    de câmera e a paleta de cores.
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
          {films.map((film) => (
            <TooltipProvider key={film.imdbId}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="group overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <a
                      href={`https://www.imdb.com/title/${film.imdbId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="aspect-[2/3] overflow-hidden bg-secondary/20 relative">
                        <img
                          src={film.posterUrl}
                          alt={`${film.title} poster`}
                          className={`w-full h-full object-cover transition-transform duration-300 ${film.scale || 'scale-100'} group-hover:scale-125`}
                          style={{ objectPosition: film.objectPosition || 'center' }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="p-3 bg-card">
                        <h3 className="font-semibold text-sm line-clamp-1">{film.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {film.director} ({film.year})
                        </p>
                      </div>
                    </a>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p className="font-semibold">{film.title}</p>
                  <p className="text-xs text-muted-foreground">{film.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmGallery;
