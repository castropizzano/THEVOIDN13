import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { VideoCard } from "@/components/VideoCard";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import coverVideosPt from "@/assets/cover-videos-pt.png";
import coverVideosEn from "@/assets/cover-videos-en.png";

interface CuratedVideo {
  source: "vimeo" | "internet-archive" | "youtube";
  videoId: string;
  title: { pt: string; en: string };
  subtitle?: { pt: string; en: string };
  year: string;
  category: string;
  specialLink?: string;
  objectPosition?: string;
}

const curatedVideos: CuratedVideo[] = [
  { 
    source: "internet-archive", 
    videoId: "nyx-post-porn-2024/01_NYX-POST-PORN_Trailer_(Brasil,_2024).ia.mp4", 
    title: { pt: "NYX — POST PORN", en: "NYX — POST PORN" },
    subtitle: { pt: "COM FLÁVIA MASSALI", en: "WITH FLÁVIA MASSALI" },
    year: "2025", 
    category: "experimental",
    specialLink: "https://nyx-post-porn.vercel.app/"
  },
  { 
    source: "vimeo", 
    videoId: "1113340788", 
    title: { pt: "ANIMA", en: "ANIMA" },
    subtitle: { pt: "PPG/CINEAV", en: "PPG/CINEAV" },
    year: "2024", 
    category: "curta-metragem" 
  },
  { 
    source: "vimeo", 
    videoId: "938890093", 
    title: { pt: "MÃE NATUREZA", en: "MOTHER NATURE" },
    subtitle: { pt: "COM LUANA NERY", en: "WITH LUANA NERY" },
    year: "2024", 
    category: "videoart" 
  },
  { 
    source: "vimeo", 
    videoId: "913360719", 
    title: { pt: "DEPRESSED", en: "DEPRESSED" },
    subtitle: { pt: "COM JULIA TESTONI", en: "WITH JULIA TESTONI" },
    year: "2023", 
    category: "videoart" 
  },
  { 
    source: "vimeo", 
    videoId: "698852539", 
    title: { pt: "DIGITAL PURGE", en: "DIGITAL PURGE" },
    subtitle: { pt: "NON-GRATA", en: "NON-GRATA" },
    year: "2022", 
    category: "music-video",
    objectPosition: "center 50%"
  },
  { 
    source: "vimeo", 
    videoId: "647033555", 
    title: { pt: "MOLOTOV", en: "MOLOTOV" },
    subtitle: { pt: "NON-GRATA", en: "NON-GRATA" },
    year: "2022", 
    category: "music-video",
    objectPosition: "center 50%"
  },
  { 
    source: "vimeo", 
    videoId: "647030152", 
    title: { pt: "NO FIO DA ESPADA", en: "ON THE EDGE OF THE SWORD" },
    subtitle: { pt: "CARTA PRETA", en: "CARTA PRETA" },
    year: "2021", 
    category: "music-video" 
  },
  { 
    source: "vimeo", 
    videoId: "647038633", 
    title: { pt: "NRB X TSTRW", en: "NRB X TSTRW" },
    subtitle: { pt: "PROD. TRAUMATOPIA", en: "PROD. TRAUMATOPIA" },
    year: "2020", 
    category: "music-video",
    objectPosition: "center 50%"
  },
  { 
    source: "vimeo", 
    videoId: "349830611", 
    title: { pt: "CURITOWN", en: "CURITOWN" },
    subtitle: { pt: "FCC", en: "FCC" },
    year: "2019", 
    category: "documentário",
    objectPosition: "center 50%"
  }
];

const Videos = () => {
  const { language } = useLanguage();
  const categoryLabels: Record<string, { pt: string; en: string }> = {
    "experimental": { pt: "EXPERIMENTAL", en: "EXPERIMENTAL" },
    "curta-metragem": { pt: "SHORT FILM", en: "SHORT FILM" },
    "documentário": { pt: "DOCUMENTÁRIO", en: "DOCUMENTARY" },
    "videoart": { pt: "VIDEOART", en: "VIDEOART" },
    "music-video": { pt: "MUSIC VIDEO", en: "MUSIC VIDEO" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title={language === "pt" ? "Alguns Projetos | THEVØIDN13" : "Some Projects | THEVØIDN13"} />
      <Header />
      <BackToTop />
      <main>
        <section className="w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 sm:pt-20 md:pt-24">
          <img 
            src={language === "pt" ? coverVideosPt : coverVideosEn} 
            alt={language === "pt" ? "Alguns Projetos" : "Some Projects"}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </section>
        <BilingualSection className="bible-section">
          <BilingualContent
            portugueseContent={
              <div className="bible-block mb-12">
                <h1 className="bible-title mb-8">ALGUNS PROJETOS</h1>
              </div>
            }
            englishContent={
              <div className="bible-block mb-12">
                <h1 className="bible-title mb-8">SOME PROJECTS</h1>
              </div>
            }
          />
          
          <BilingualContent
            portugueseContent={
              <div className="bible-block space-y-6 mb-12">
                <p className="bible-body text-justify">
                  Uma seleção condensada dos projetos em que atuo. Em cada um deles, transito entre conceito, design, direção de arte, direção de fotografia, edição e pós-produção, sempre de acordo com o que a obra pede. Cada projeto tem sua própria identidade, mas todos orbitam o mesmo eixo estético que define o meu trabalho. Para ver outros projetos coletivos, autorais, comerciais, culturais, musicais, documentais e experimentais, acesse meus portfólios completos no Vimeo e no Behance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    variant="default"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://vimeo.com/castropizzano" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1"
                    >
                      VIMEO PORTFOLIO
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://www.behance.net/castropizzano" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1"
                    >
                      BEHANCE PORTFOLIO
                    </a>
                  </Button>
                </div>
              </div>
            }
            englishContent={
              <div className="bible-block space-y-6 mb-12">
                <p className="bible-body text-justify">
                  A condensed selection of the projects I work on. In each one, I move between concept, design, art direction, cinematography, editing and post-production, always according to what the work demands. Each project has its own identity, but they all orbit the same aesthetic axis that defines my work. To see other collective, authorial, commercial, cultural, musical, documentary and experimental projects, access the complete portfolios on Vimeo and Behance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    variant="default"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://vimeo.com/castropizzano" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1"
                    >
                      VIMEO PORTFOLIO
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://www.behance.net/castropizzano" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1"
                    >
                      BEHANCE PORTFOLIO
                    </a>
                  </Button>
                </div>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curatedVideos.map((video, index) => (
              <VideoCard key={index} video={video} language={language} categoryLabel={categoryLabels[video.category][language]} />
            ))}
          </div>
        </BilingualSection>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
