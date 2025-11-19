import { Info, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import watchmenCover from "@/assets/comics/watchmen.jpg";
import sandmanCover from "@/assets/comics/sandman.jpg";
import blackHoleCover from "@/assets/comics/black-hole.png";
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

interface ComicReference {
  titleKey: string;
  author: string;
  year: number;
  coverUrl: string;
  descriptionKey: string;
  contextKey: string;
  wikipediaUrl: string;
}

const ComicsShowcase = () => {
  const { t } = useTranslation();

  const comics: ComicReference[] = [
    {
      titleKey: "watchmenTitle",
      author: "Alan Moore & Dave Gibbons",
      year: 1986,
      coverUrl: watchmenCover,
      descriptionKey: "watchmenDesc",
      contextKey: "watchmenContext",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Watchmen"
    },
    {
      titleKey: "sandmanTitle",
      author: "Neil Gaiman",
      year: 1989,
      coverUrl: sandmanCover,
      descriptionKey: "sandmanDesc",
      contextKey: "sandmanContext",
      wikipediaUrl: "https://en.wikipedia.org/wiki/The_Sandman_(comic_book)"
    },
    {
      titleKey: "blackHoleTitle",
      author: "Charles Burns",
      year: 1995,
      coverUrl: blackHoleCover,
      descriptionKey: "blackHoleDesc",
      contextKey: "blackHoleContext",
      wikipediaUrl: "https://en.wikipedia.org/wiki/Black_Hole_(comics)"
    }
  ];

  return (
    <section className="w-full bible-section">
      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm p-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start bible-media">
                <span className="text-sm">{t("comicsDNAButton")}</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{t("comicsDNATitle")}</DialogTitle>
              </DialogHeader>
              <div className="bible-block text-sm leading-relaxed">
                <p>{t("comicsDNAIntro")}</p>
                <ul className="bible-block">
                  <li>
                    <strong>Watchmen (1986)</strong> — Alan Moore & Dave Gibbons<br />
                    {t("watchmenDesc")}
                  </li>
                  <li>
                    <strong>The Sandman (1989)</strong> — Neil Gaiman<br />
                    {t("sandmanDesc")}
                  </li>
                  <li>
                    <strong>Black Hole (1995)</strong> — Charles Burns<br />
                    {t("blackHoleDesc")}
                  </li>
                </ul>
                <p className="pt-6 border-t border-border">
                  {t("comicsDNANote")}
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comics.map((comic) => (
            <TooltipProvider key={t(comic.titleKey as any)}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="group overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer">
                    <a
                      href={comic.wikipediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="aspect-[2/3] overflow-hidden bg-secondary/20 relative">
                        <img
                          src={comic.coverUrl}
                          alt={`${t(comic.titleKey as any)} cover`}
                          className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <ExternalLink className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                      <div className="p-6 bg-card">
                        <h3 className="font-bold text-lg">{t(comic.titleKey as any)}</h3>
                        <p className="text-sm text-muted-foreground">
                          {comic.author} ({comic.year})
                        </p>
                        <p className="text-sm italic text-primary/80">
                          {t(comic.descriptionKey as any)}
                        </p>
                      </div>
                    </a>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p className="font-semibold">{t(comic.titleKey as any)}</p>
                  <p className="text-xs text-muted-foreground">{t(comic.contextKey as any)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        <div className="bible-media p-6 bg-secondary/10 rounded-lg border border-primary/10">
          <p className="text-sm text-center text-muted-foreground leading-relaxed">
            {t("comicsTriadNote")}
          </p>
        </div>
        </Card>
      </div>
    </section>
  );
};

export default ComicsShowcase;
