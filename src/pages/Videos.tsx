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
}

const curatedVideos: CuratedVideo[] = [
  { source: "vimeo", videoId: "819353942", title: { pt: "Projeto 01", en: "Project 01" }, year: "2024", category: "curta-metragem" },
  { source: "vimeo", videoId: "938890093", title: { pt: "Mãe Natureza", en: "Mother Nature" }, year: "2024", category: "curta-metragem" },
  { source: "vimeo", videoId: "1113340788", title: { pt: "Projeto 03", en: "Project 03" }, year: "2024", category: "documentário" },
  { source: "vimeo", videoId: "1009245969", title: { pt: "Projeto 04", en: "Project 04" }, year: "2024", category: "comercial" },
  { source: "vimeo", videoId: "647030152", title: { pt: "Projeto 05", en: "Project 05" }, year: "2023", category: "videoperformance" },
  { source: "vimeo", videoId: "1011149512", title: { pt: "Projeto 06", en: "Project 06" }, year: "2024", category: "curta-metragem" },
  { source: "vimeo", videoId: "647038633", title: { pt: "Projeto 07", en: "Project 07" }, year: "2023", category: "documentário" },
  { source: "vimeo", videoId: "205557108", title: { pt: "Projeto 08", en: "Project 08" }, year: "2022", category: "comercial" },
  { source: "vimeo", videoId: "379505784", title: { pt: "Projeto 09", en: "Project 09" }, year: "2023", category: "videoperformance" },
  { source: "vimeo", videoId: "913360719", title: { pt: "Projeto 10", en: "Project 10" }, year: "2024", category: "curta-metragem" },
  { source: "vimeo", videoId: "1113341670", title: { pt: "Projeto 11", en: "Project 11" }, year: "2024", category: "documentário" },
  { source: "vimeo", videoId: "379505079", title: { pt: "Projeto 12", en: "Project 12" }, year: "2023", category: "comercial" },
  { source: "vimeo", videoId: "846675243", title: { pt: "Projeto 13", en: "Project 13" }, year: "2024", category: "videoperformance" },
  { source: "vimeo", videoId: "1007123356", title: { pt: "Projeto 14", en: "Project 14" }, year: "2024", category: "curta-metragem" },
  { source: "vimeo", videoId: "647033555", title: { pt: "Projeto 15", en: "Project 15" }, year: "2023", category: "documentário" },
  { source: "vimeo", videoId: "698852539", title: { pt: "Projeto 16", en: "Project 16" }, year: "2023", category: "comercial" },
  { source: "vimeo", videoId: "1031724488", title: { pt: "Projeto 17", en: "Project 17" }, year: "2024", category: "videoperformance" },
  { source: "vimeo", videoId: "534231958", title: { pt: "Projeto 18", en: "Project 18" }, year: "2023", category: "curta-metragem" },
  { source: "vimeo", videoId: "686144695", title: { pt: "Projeto 19", en: "Project 19" }, year: "2023", category: "documentário" },
  { source: "vimeo", videoId: "1007122683", title: { pt: "Projeto 20", en: "Project 20" }, year: "2024", category: "comercial" },
  { source: "vimeo", videoId: "1007120645", title: { pt: "Projeto 21", en: "Project 21" }, year: "2024", category: "videoperformance" },
  { source: "vimeo", videoId: "163004143", title: { pt: "Projeto 22", en: "Project 22" }, year: "2022", category: "curta-metragem" },
  { source: "vimeo", videoId: "686156639", title: { pt: "Projeto 23", en: "Project 23" }, year: "2023", category: "documentário" },
  { source: "vimeo", videoId: "819517648", title: { pt: "Projeto 24", en: "Project 24" }, year: "2024", category: "comercial" },
  { source: "vimeo", videoId: "349827062", title: { pt: "Projeto 25", en: "Project 25" }, year: "2023", category: "videoperformance" },
  { source: "vimeo", videoId: "406871732", title: { pt: "Projeto 26", en: "Project 26" }, year: "2023", category: "curta-metragem" },
  { source: "vimeo", videoId: "406871953", title: { pt: "Projeto 27", en: "Project 27" }, year: "2023", category: "documentário" },
  { source: "vimeo", videoId: "493604256", title: { pt: "Projeto 28", en: "Project 28" }, year: "2023", category: "comercial" },
  { source: "vimeo", videoId: "474411083", title: { pt: "Projeto 29", en: "Project 29" }, year: "2023", category: "videoperformance" },
  { source: "vimeo", videoId: "406868847", title: { pt: "Projeto 30", en: "Project 30" }, year: "2023", category: "curta-metragem" },
  { source: "vimeo", videoId: "349830611", title: { pt: "Projeto 31", en: "Project 31" }, year: "2023", category: "documentário" },
  { source: "vimeo", videoId: "171656069", title: { pt: "UDNFS", en: "UDNFS" }, year: "2023", category: "comercial" },
  { source: "vimeo", videoId: "163004144", title: { pt: "Projeto 34", en: "Project 34" }, year: "2022", category: "comercial" },
  { source: "vimeo", videoId: "1007121923", title: { pt: "Projeto 35", en: "Project 35" }, year: "2024", category: "videoperformance" },
  { source: "vimeo", videoId: "195199575", title: { pt: "Projeto 36", en: "Project 36" }, year: "2022", category: "curta-metragem" },
  { source: "vimeo", videoId: "349764052", title: { pt: "Projeto 37", en: "Project 37" }, year: "2023", category: "documentário" },
  { source: "vimeo", videoId: "163004137", title: { pt: "Projeto 38", en: "Project 38" }, year: "2022", category: "comercial" },
  { source: "vimeo", videoId: "349775160", title: { pt: "Projeto 39", en: "Project 39" }, year: "2023", category: "videoperformance" },
  { source: "vimeo", videoId: "1031721731", title: { pt: "Projeto 40", en: "Project 40" }, year: "2024", category: "curta-metragem" },
  { source: "internet-archive", videoId: "nyx-post-porn-2024", title: { pt: "Projeto 41", en: "Project 41" }, year: "2024", category: "documentário" }
];

const Videos = () => {
  const { language } = useLanguage();
  const categoryLabels: Record<string, { pt: string; en: string }> = {
    "curta-metragem": { pt: "Curta-Metragem", en: "Short Film" },
    "documentário": { pt: "Documentário", en: "Documentary" },
    "comercial": { pt: "Comercial", en: "Commercial" },
    "videoperformance": { pt: "Videoperformance", en: "Video Performance" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title={language === "pt" ? "Projetos | THEVØIDN13" : "Work | THEVØIDN13"} />
      <Header />
      <BackToTop />
      <main>
        <section className="w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 sm:pt-20 md:pt-24">
          <img 
            src={coverVideos} 
            alt={language === "pt" ? "Projetos" : "Work"}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </section>
        <BilingualSection className="bible-section">
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
