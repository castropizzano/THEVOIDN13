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
    category: "music-video" 
  },
  { 
    source: "vimeo", 
    videoId: "647033555", 
    title: { pt: "MOLOTOV", en: "MOLOTOV" },
    subtitle: { pt: "NON-GRATA", en: "NON-GRATA" },
    year: "2022", 
    category: "music-video" 
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
    category: "music-video" 
  },
  { 
    source: "vimeo", 
    videoId: "349830611", 
    title: { pt: "CURITOWN", en: "CURITOWN" },
    subtitle: { pt: "FCC", en: "FCC" },
    year: "2019", 
    category: "documentário" 
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
                  Uma seleção condensada dos projetos em que atuo. Em cada um deles, transito entre conceito, design, direção de arte, direção de fotografia, edição e pós-produção, sempre de acordo com o que a obra pede. Cada projeto tem sua própria identidade, mas todos orbitam o mesmo eixo estético que define o meu trabalho. Para ver outros projetos coletivos, autorais, comerciais, culturais, musicais, documentais e experimentais, acesse os portfólios completos no Vimeo e no Behance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button
                    variant="default"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://vimeo.com/castropizzano" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797z"/>
                      </svg>
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
                      className="w-full sm:w-auto"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.673 1.45.673 2.35 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.767-.64.165-1.33.247-2.07.247H0V4.503h6.938zm.71 8.437c.57 0 1.03-.15 1.36-.44.33-.294.495-.73.495-1.305 0-.332-.06-.6-.18-.8-.123-.206-.29-.37-.5-.49-.21-.125-.45-.21-.72-.257-.27-.053-.56-.078-.86-.078H3.24v3.37h4.41zm-4.41 5.633h4.41c.288 0 .576-.03.86-.085.29-.06.55-.14.78-.27.23-.12.42-.29.57-.51.15-.22.22-.5.22-.84 0-.63-.2-1.1-.6-1.39-.4-.29-.95-.44-1.65-.44H3.24v3.53zM13.27 10.87h6.49v1.26h-6.49v-1.26zm11.73 2.08c0-.88-.165-1.63-.495-2.26-.33-.63-.77-1.15-1.32-1.57-.55-.42-1.18-.73-1.89-.94-.71-.21-1.45-.32-2.23-.32-1.01 0-1.93.16-2.75.5-.82.34-1.52.82-2.09 1.45-.57.63-.995 1.38-1.28 2.26-.28.88-.42 1.87-.42 2.96 0 1.03.15 1.98.44 2.85.29.87.71 1.62 1.26 2.24.56.62 1.24 1.1 2.04 1.45.8.35 1.72.52 2.75.52 1.37 0 2.52-.33 3.44-1 .92-.67 1.55-1.62 1.88-2.85h-2.54c-.17.5-.52.92-1.04 1.24-.52.32-1.13.48-1.85.48-.52 0-.97-.07-1.35-.2-.38-.13-.7-.32-.96-.58-.26-.25-.465-.56-.61-.92-.15-.36-.24-.76-.27-1.2h8.5c.02-.17.03-.36.04-.57 0-.21.01-.42.01-.63zm-8.5-1.33c.04-.42.14-.82.32-1.2.18-.38.43-.72.74-1 .31-.3.68-.52 1.11-.67.43-.15.91-.22 1.44-.22.49 0 .94.07 1.35.2.41.13.76.32 1.05.56.29.24.52.53.69.88.17.35.27.73.31 1.15H16.5z"/>
                      </svg>
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button
                    variant="default"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://vimeo.com/castropizzano" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797z"/>
                      </svg>
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
                      className="w-full sm:w-auto"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.673 1.45.673 2.35 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.767-.64.165-1.33.247-2.07.247H0V4.503h6.938zm.71 8.437c.57 0 1.03-.15 1.36-.44.33-.294.495-.73.495-1.305 0-.332-.06-.6-.18-.8-.123-.206-.29-.37-.5-.49-.21-.125-.45-.21-.72-.257-.27-.053-.56-.078-.86-.078H3.24v3.37h4.41zm-4.41 5.633h4.41c.288 0 .576-.03.86-.085.29-.06.55-.14.78-.27.23-.12.42-.29.57-.51.15-.22.22-.5.22-.84 0-.63-.2-1.1-.6-1.39-.4-.29-.95-.44-1.65-.44H3.24v3.53zM13.27 10.87h6.49v1.26h-6.49v-1.26zm11.73 2.08c0-.88-.165-1.63-.495-2.26-.33-.63-.77-1.15-1.32-1.57-.55-.42-1.18-.73-1.89-.94-.71-.21-1.45-.32-2.23-.32-1.01 0-1.93.16-2.75.5-.82.34-1.52.82-2.09 1.45-.57.63-.995 1.38-1.28 2.26-.28.88-.42 1.87-.42 2.96 0 1.03.15 1.98.44 2.85.29.87.71 1.62 1.26 2.24.56.62 1.24 1.1 2.04 1.45.8.35 1.72.52 2.75.52 1.37 0 2.52-.33 3.44-1 .92-.67 1.55-1.62 1.88-2.85h-2.54c-.17.5-.52.92-1.04 1.24-.52.32-1.13.48-1.85.48-.52 0-.97-.07-1.35-.2-.38-.13-.7-.32-.96-.58-.26-.25-.465-.56-.61-.92-.15-.36-.24-.76-.27-1.2h8.5c.02-.17.03-.36.04-.57 0-.21.01-.42.01-.63zm-8.5-1.33c.04-.42.14-.82.32-1.2.18-.38.43-.72.74-1 .31-.3.68-.52 1.11-.67.43-.15.91-.22 1.44-.22.49 0 .94.07 1.35.2.41.13.76.32 1.05.56.29.24.52.53.69.88.17.35.27.73.31 1.15H16.5z"/>
                      </svg>
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
