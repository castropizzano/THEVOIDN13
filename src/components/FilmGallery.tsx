import { Film, ExternalLink, Info } from "lucide-react";
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

interface FilmReference {
  title: string;
  director: string;
  year: number;
  imdbId: string;
  posterUrl: string;
  description: string;
}

const FilmGallery = () => {
  const films: FilmReference[] = [
    {
      title: "Blade Runner",
      director: "Ridley Scott",
      year: 1982,
      imdbId: "tt0083658",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      description: "Neo noir e solidão coreografada"
    },
    {
      title: "Kids",
      director: "Larry Clark",
      year: 1995,
      imdbId: "tt0113540",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BOGNhMGMzN2YtNjcxMS00ZWMzLWI4NzYtZTJkMGNkYWFjZWYyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      description: "Realismo sujo"
    },
    {
      title: "The Matrix",
      director: "The Wachowskis",
      year: 1999,
      imdbId: "tt0133093",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      description: "Controle e realidade sintética"
    },
    {
      title: "Akira",
      director: "Katsuhiro Ōtomo",
      year: 1988,
      imdbId: "tt0094625",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRhZGY1XkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_SX300.jpg",
      description: "Energia reprimida"
    },
    {
      title: "Fallen Angels",
      director: "Wong Kar Wai",
      year: 1995,
      imdbId: "tt0112913",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYjdkZGRjNmQtOGRjNS00ZmI1LTk1MzUtNGM0NGNiYTVkOGU3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      description: "Atmosfera bebê-da-desesperança"
    },
    {
      title: "THX 1138",
      director: "George Lucas",
      year: 1971,
      imdbId: "tt0066434",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYTE3N2Q0ZjItNTY2My00MDRlLTgxZDYtZjQ1ZGJhNjExMDNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      description: "Despersonalização e controle"
    },
    {
      title: "Brazil",
      director: "Terry Gilliam",
      year: 1985,
      imdbId: "tt0088846",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BODExZmE2ZWItYTIzOC00MzI1LTgyNTktNDVjMjk4NzMwNjZjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      description: "Burocracia como pesadelo"
    },
    {
      title: "Equilibrium",
      director: "Kurt Wimmer",
      year: 2002,
      imdbId: "tt0238380",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTkwNDY2ODIzMV5BMl5BanBnXkFtZTYwNTc2NDM3._V1_SX300.jpg",
      description: "Supressão emocional"
    },
    {
      title: "The Warriors",
      director: "Walter Hill",
      year: 1979,
      imdbId: "tt0080120",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzA1OTUxNjQyNV5BMl5BanBnXkFtZTgwMjU1ODAyNzE@._V1_SX300.jpg",
      description: "Deriva urbana"
    },
    {
      title: "1984",
      director: "Michael Radford",
      year: 1984,
      imdbId: "tt0087803",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDU0ZGQ0MjItODlkNS00ZWVlLWE1YzQtYmI0YTlkNWNhMTQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      description: "Vigilância total"
    },
    {
      title: "Christiane F.",
      director: "Uli Edel",
      year: 1981,
      imdbId: "tt0082176",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTQxNjg5OTYwMl5BMl5BanBnXkFtZTgwNjk3Mjk2MTE@._V1_SX300.jpg",
      description: "Deriva poética"
    },
    {
      title: "Perfect Days",
      director: "Wim Wenders",
      year: 2023,
      imdbId: "tt27503384",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQxNDk0ODU3Ml5BMl5BanBnXkFtZTgwNzI5ODU4MzE@._V1_SX300.jpg",
      description: "Ritmo existencial"
    },
    {
      title: "Back to the Future",
      director: "Robert Zemeckis",
      year: 1985,
      imdbId: "tt0088763",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      description: "Temporalidade"
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Film className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                TEXTURA CINEMATOGRÁFICA
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                CINEMATIC TEXTURE — Referências visuais que moldaram o projeto
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
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
