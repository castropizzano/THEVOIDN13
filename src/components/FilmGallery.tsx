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
import { useTranslation } from "@/hooks/useTranslation";
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
  descriptionKey: string;
  objectPosition?: string;
  scale?: string;
}

const FilmGallery = () => {
  const { t } = useTranslation();
  const films: FilmReference[] = [
    {
      title: "Blade Runner",
      director: "Ridley Scott",
      year: 1982,
      imdbId: "tt0083658",
      posterUrl: bladeRunnerPoster,
      descriptionKey: "bladeRunnerDesc"
    },
    {
      title: "Kids",
      director: "Larry Clark",
      year: 1995,
      imdbId: "tt0113540",
      posterUrl: kidsPoster,
      descriptionKey: "kidsDesc"
    },
    {
      title: "The Matrix",
      director: "The Wachowskis",
      year: 1999,
      imdbId: "tt0133093",
      posterUrl: matrixPoster,
      descriptionKey: "matrixDesc"
    },
    {
      title: "Akira",
      director: "Katsuhiro Ōtomo",
      year: 1988,
      imdbId: "tt0094625",
      posterUrl: akiraPoster,
      descriptionKey: "akiraDesc"
    },
    {
      title: "Fallen Angels",
      director: "Wong Kar Wai",
      year: 1995,
      imdbId: "tt0112913",
      posterUrl: fallenAngelsPoster,
      descriptionKey: "fallenAngelsDesc"
    },
    {
      title: "THX 1138",
      director: "George Lucas",
      year: 1971,
      imdbId: "tt0066434",
      posterUrl: thx1138Poster,
      descriptionKey: "thx1138Desc",
      objectPosition: "center bottom",
      scale: "scale-110"
    },
    {
      title: "Brazil",
      director: "Terry Gilliam",
      year: 1985,
      imdbId: "tt0088846",
      posterUrl: brazilPoster,
      descriptionKey: "brazilDesc"
    },
    {
      title: "Equilibrium",
      director: "Kurt Wimmer",
      year: 2002,
      imdbId: "tt0238380",
      posterUrl: equilibriumPoster,
      descriptionKey: "equilibriumDesc"
    },
    {
      title: "The Warriors",
      director: "Walter Hill",
      year: 1979,
      imdbId: "tt0080120",
      posterUrl: theWarriorsPoster,
      descriptionKey: "warriorsDesc",
      scale: "scale-110"
    },
    {
      title: "1984",
      director: "Michael Radford",
      year: 1984,
      imdbId: "tt0087803",
      posterUrl: poster1984,
      descriptionKey: "orwell1984Desc",
      scale: "scale-110"
    },
    {
      title: "Christiane F.",
      director: "Uli Edel",
      year: 1981,
      imdbId: "tt0082176",
      posterUrl: christianeFPoster,
      descriptionKey: "christianeFDesc"
    },
    {
      title: "Perfect Days",
      director: "Wim Wenders",
      year: 2023,
      imdbId: "tt27503384",
      posterUrl: perfectDaysPoster,
      descriptionKey: "perfectDaysDesc"
    },
    {
      title: "Back to the Future",
      director: "Robert Zemeckis",
      year: 1985,
      imdbId: "tt0088763",
      posterUrl: backToTheFuturePoster,
      descriptionKey: "backToFutureDesc",
      scale: "scale-110"
    },
    {
      title: "Back to the Future Part II",
      director: "Robert Zemeckis",
      year: 1989,
      imdbId: "tt0096874",
      posterUrl: backToTheFuture2Poster,
      descriptionKey: "backToFutureDesc"
    },
    {
      title: "Back to the Future Part III",
      director: "Robert Zemeckis",
      year: 1990,
      imdbId: "tt0099088",
      posterUrl: backToTheFuture3Poster,
      descriptionKey: "backToFutureDesc"
    }
  ];

  return (
    <section className="w-full bible-section">
      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm p-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start bible-media">
                <span className="text-sm">{t("filmReferencesButton")}</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{t("filmReferencesTitle")}</DialogTitle>
              </DialogHeader>
              <div className="bible-block text-sm leading-relaxed">
                <p>{t("filmRefPara1")}</p>
                <p>{t("filmRefPara2")}</p>
                <p>{t("filmRefPara3")}</p>
                <p>{t("filmRefPara4")}</p>
              </div>
            </DialogContent>
          </Dialog>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {films.map((film) => (
            <TooltipProvider key={film.imdbId}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="group overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer">
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
                          className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ${film.scale || ''}`}
                          style={{ objectPosition: film.objectPosition || 'center' }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <ExternalLink className="w-5 h-5 text-foreground" />
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
                  <p className="text-xs text-muted-foreground">{film.director} • {film.year}</p>
                  <p className="text-xs mt-1">{t(film.descriptionKey as any)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
          </div>

          <div className="bible-media p-6 bg-secondary/10 rounded-lg border border-primary/10">
            <p className="text-sm text-center text-muted-foreground leading-relaxed">
              <span className="lang-pt">Essas 15 obras cinematográficas formam a base conceitual e estética do universo THEVOIDN13.</span>
              <span className="lang-en">These 15 cinematic works form the conceptual and aesthetic foundation of the THEVOIDN13 universe.</span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FilmGallery;
