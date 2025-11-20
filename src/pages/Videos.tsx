import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import { VideoCard } from "@/components/VideoCard";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { useLanguage } from "@/contexts/LanguageContext";
import coverVideos from "@/assets/cover-videos.png";

interface CuratedVideo {
  source: "vimeo" | "internet-archive" | "youtube";
  videoId: string;
  title: { pt: string; en: string };
  year: string;
  category: string;
  specialLink?: string;
}

const curatedVideos: CuratedVideo[] = [
  { source: "vimeo", videoId: "938890093", title: { pt: "MÃE NATUREZA", en: "MOTHER NATURE" }, year: "2024", category: "videoart" },
  { source: "vimeo", videoId: "1113340788", title: { pt: "ANIMA", en: "ANIMA" }, year: "2024", category: "curta-metragem" },
  { source: "vimeo", videoId: "913360719", title: { pt: "DEPRESSED", en: "DEPRESSED" }, year: "2024", category: "videoart" },
  { source: "vimeo", videoId: "1007122683", title: { pt: "BAKULI", en: "BAKULI" }, year: "2024", category: "videoart" },
  { 
    source: "internet-archive", 
    videoId: "nyx-post-porn-2024/01_NYX-POST-PORN_Trailer_(Brasil,_2024).mp4", 
    title: { pt: "NYX — POST PORN", en: "NYX — POST PORN" }, 
    year: "2024", 
    category: "curta-metragem",
    specialLink: "https://nyx-post-porn.vercel.app/"
  },
  { source: "vimeo", videoId: "698852539", title: { pt: "DIGITAL PURGE", en: "DIGITAL PURGE" }, year: "2023", category: "music-video" },
  { source: "vimeo", videoId: "349830611", title: { pt: "CURITOWN", en: "CURITOWN" }, year: "2023", category: "documentário" },
  { source: "vimeo", videoId: "647033555", title: { pt: "MOLOTOV", en: "MOLOTOV" }, year: "2023", category: "music-video" },
  { source: "vimeo", videoId: "647030152", title: { pt: "NO FIO DA ESPADA", en: "ON THE EDGE OF THE SWORD" }, year: "2023", category: "music-video" },
  { source: "vimeo", videoId: "647038633", title: { pt: "NRB X TSTRW — PROD. TRAUMATOPIA", en: "NRB X TSTRW — PROD. TRAUMATOPIA" }, year: "2023", category: "music-video" }
];

const Videos = () => {
  const { language } = useLanguage();
  const categoryLabels: Record<string, { pt: string; en: string }> = {
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
            src={coverVideos} 
            alt={language === "pt" ? "Alguns Projetos" : "Some Projects"}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </section>
        <BilingualSection className="bible-section">
          <div className="bilingual-grid bible-block mb-8">
            <div className="bilingual-col">
              <h1 className="bible-title">ALGUNS PROJETOS</h1>
            </div>
            <div className="bilingual-col">
              <h1 className="bible-title">SOME PROJECTS</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curatedVideos.map((video, index) => (
              <VideoCard key={index} video={video} language={language} categoryLabel={categoryLabels[video.category][language]} />
            ))}
          </div>
        </BilingualSection>
        <BilingualSection className="bible-section">
          <BilingualContent
            portugueseContent={<div className="text-center bible-block"><p className="bible-body mb-4">Veja mais trabalhos em meu portfólio completo:</p><a href="https://vimeo.com/castropizzano" target="_blank" rel="noopener noreferrer" className="story-link bible-body text-primary hover:text-primary/80 transition-colors">vimeo.com/castropizzano</a></div>}
            englishContent={<div className="text-center bible-block"><p className="bible-body mb-4">See more work on my complete portfolio:</p><a href="https://vimeo.com/castropizzano" target="_blank" rel="noopener noreferrer" className="story-link bible-body text-primary hover:text-primary/80 transition-colors">vimeo.com/castropizzano</a></div>}
          />
        </BilingualSection>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
