import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { BackToTop } from "@/components/BackToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { VideoEmbed } from "@/components/VideoEmbed";
import { useLanguage } from "@/contexts/LanguageContext";

interface CuratedVideo {
  source: "vimeo" | "internet-archive" | "youtube";
  videoId: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  year: string;
  category: "curta-metragem" | "documentário" | "comercial" | "videoperformance";
}

const curatedVideos: CuratedVideo[] = [
  { source: "vimeo", videoId: "819353942", title: { pt: "Vídeo 01", en: "Video 01" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "curta-metragem" },
  { source: "vimeo", videoId: "castropizzano/maenatureza", title: { pt: "Mãe Natureza", en: "Mother Nature" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "videoperformance" },
  { source: "vimeo", videoId: "1113340788", title: { pt: "Vídeo 03", en: "Video 03" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "curta-metragem" },
  { source: "vimeo", videoId: "1009245969", title: { pt: "Vídeo 04", en: "Video 04" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "documentário" },
  { source: "vimeo", videoId: "647030152", title: { pt: "Vídeo 05", en: "Video 05" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2023", category: "curta-metragem" },
  { source: "vimeo", videoId: "1011149512", title: { pt: "Vídeo 06", en: "Video 06" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "videoperformance" },
  { source: "vimeo", videoId: "647038633", title: { pt: "Vídeo 07", en: "Video 07" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2023", category: "comercial" },
  { source: "vimeo", videoId: "205557108", title: { pt: "Vídeo 08", en: "Video 08" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2022", category: "curta-metragem" },
  { source: "vimeo", videoId: "379505784", title: { pt: "Vídeo 09", en: "Video 09" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2022", category: "documentário" },
  { source: "vimeo", videoId: "913360719", title: { pt: "Vídeo 10", en: "Video 10" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2023", category: "videoperformance" },
  { source: "vimeo", videoId: "1113341670", title: { pt: "Vídeo 11", en: "Video 11" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "curta-metragem" },
  { source: "vimeo", videoId: "379505079", title: { pt: "Vídeo 12", en: "Video 12" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2022", category: "comercial" },
  { source: "vimeo", videoId: "846675243", title: { pt: "Vídeo 13", en: "Video 13" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2023", category: "documentário" },
  { source: "vimeo", videoId: "1007123356", title: { pt: "Vídeo 14", en: "Video 14" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "videoperformance" },
  { source: "vimeo", videoId: "647033555", title: { pt: "Vídeo 15", en: "Video 15" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2023", category: "curta-metragem" },
  { source: "vimeo", videoId: "698852539", title: { pt: "Vídeo 16", en: "Video 16" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2023", category: "comercial" },
  { source: "vimeo", videoId: "1031724488", title: { pt: "Vídeo 18", en: "Video 18" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "documentário" },
  { source: "vimeo", videoId: "534231958", title: { pt: "Vídeo 19", en: "Video 19" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2022", category: "curta-metragem" },
  { source: "vimeo", videoId: "686144695", title: { pt: "Vídeo 20", en: "Video 20" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2023", category: "videoperformance" },
  { source: "vimeo", videoId: "1007122683", title: { pt: "Vídeo 21", en: "Video 21" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "comercial" },
  { source: "vimeo", videoId: "1007120645", title: { pt: "Vídeo 22", en: "Video 22" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "documentário" },
  { source: "vimeo", videoId: "163004143", title: { pt: "Vídeo 23", en: "Video 23" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2021", category: "curta-metragem" },
  { source: "vimeo", videoId: "686156639", title: { pt: "Vídeo 24", en: "Video 24" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2023", category: "videoperformance" },
  { source: "vimeo", videoId: "819517648", title: { pt: "Vídeo 25", en: "Video 25" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2023", category: "comercial" },
  { source: "vimeo", videoId: "349827062", title: { pt: "Vídeo 26", en: "Video 26" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2021", category: "documentário" },
  { source: "vimeo", videoId: "406871732", title: { pt: "Vídeo 27", en: "Video 27" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2022", category: "curta-metragem" },
  { source: "vimeo", videoId: "406871953", title: { pt: "Vídeo 28", en: "Video 28" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2022", category: "videoperformance" },
  { source: "vimeo", videoId: "493604256", title: { pt: "Vídeo 29", en: "Video 29" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2022", category: "comercial" },
  { source: "vimeo", videoId: "474411083", title: { pt: "Vídeo 30", en: "Video 30" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2022", category: "documentário" },
  { source: "vimeo", videoId: "406868847", title: { pt: "Vídeo 31", en: "Video 31" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2022", category: "curta-metragem" },
  { source: "vimeo", videoId: "349830611", title: { pt: "Vídeo 32", en: "Video 32" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2021", category: "videoperformance" },
  { source: "vimeo", videoId: "castropizzano/udnfs", title: { pt: "UDNFS", en: "UDNFS" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2021", category: "comercial" },
  { source: "vimeo", videoId: "163004144", title: { pt: "Vídeo 34", en: "Video 34" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2021", category: "documentário" },
  { source: "vimeo", videoId: "1007121923", title: { pt: "Vídeo 35", en: "Video 35" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "curta-metragem" },
  { source: "vimeo", videoId: "195199575", title: { pt: "Vídeo 36", en: "Video 36" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2021", category: "videoperformance" },
  { source: "vimeo", videoId: "349764052", title: { pt: "Vídeo 37", en: "Video 37" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2021", category: "comercial" },
  { source: "vimeo", videoId: "163004137", title: { pt: "Vídeo 38", en: "Video 38" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2021", category: "documentário" },
  { source: "vimeo", videoId: "349775160", title: { pt: "Vídeo 39", en: "Video 39" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2021", category: "curta-metragem" },
  { source: "vimeo", videoId: "1031721731", title: { pt: "Vídeo 40", en: "Video 40" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "videoperformance" },
  { source: "internet-archive", videoId: "nyx-post-porn-2024", title: { pt: "Nyx Post Porn", en: "Nyx Post Porn" }, description: { pt: "Trabalho audiovisual", en: "Audiovisual work" }, year: "2024", category: "videoperformance" }
];

const Videos = () => {
  const { language } = useLanguage();

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://thevoidn13.com/" },
    { name: language === "pt" ? "Portfolio de Vídeos" : "Video Portfolio", url: "https://thevoidn13.com/videos" }
  ]);

  const getVideoUrl = (video: CuratedVideo) => {
    switch (video.source) {
      case "vimeo":
        return `https://vimeo.com/${video.videoId}`;
      case "internet-archive":
        return `https://archive.org/details/${video.videoId}`;
      case "youtube":
        return `https://youtube.com/watch?v=${video.videoId}`;
    }
  };

  const getThumbnailUrl = (video: CuratedVideo) => {
    switch (video.source) {
      case "vimeo":
        return `https://vumbnail.com/${video.videoId}.jpg`;
      case "internet-archive":
        return `https://archive.org/services/img/${video.videoId}`;
      case "youtube":
        return `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
    }
  };

  const videoCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGallery",
    "name": language === "pt" 
      ? "Portfolio Audiovisual — Castro Pizzano" 
      : "Audiovisual Portfolio — Castro Pizzano",
    "description": language === "pt"
      ? "Registro de uma prática audiovisual em trânsito: direção, fotografia, design, edição e pós-produção"
      : "Record of an audiovisual practice in transit: direction, photography, design, editing and post-production",
    "author": {
      "@type": "Person",
      "name": "Castro Pizzano"
    },
    "video": curatedVideos.map(video => ({
      "@type": "VideoObject",
      "name": video.title[language],
      "description": video.description[language],
      "thumbnailUrl": getThumbnailUrl(video),
      "uploadDate": `${video.year}-01-01`,
      "contentUrl": getVideoUrl(video)
    }))
  };

  const categoryLabels: Record<CuratedVideo["category"], { pt: string; en: string }> = {
    "curta-metragem": { pt: "Curta-Metragem", en: "Short Film" },
    "documentário": { pt: "Documentário", en: "Documentary" },
    "comercial": { pt: "Comercial", en: "Commercial" },
    "videoperformance": { pt: "Videoperformance", en: "Video Performance" }
  };

  return (
    <>
      <SEO
        title={language === "pt" 
          ? "Portfolio Audiovisual — Castro Pizzano | THEVØIDN13" 
          : "Audiovisual Portfolio — Castro Pizzano | THEVØIDN13"
        }
        description={language === "pt"
          ? "Registro de uma prática audiovisual em trânsito entre direção, fotografia, design, edição e pós-produção. Curtas-metragens, documentários e videoperformances."
          : "Record of an audiovisual practice in transit between direction, photography, design, editing and post-production. Short films, documentaries and video performances."
        }
        type="website"
        schemaData={[breadcrumbs, videoCollectionSchema]}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <BackToTop />
        
        <main>
          {/* ========================================
              HERO IMAGE FULLSCREEN
              ======================================== */}
          <section className="w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 sm:pt-20 md:pt-24">
            <div className="w-full h-full flex items-center justify-center">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter">
                PORTFOLIO<br />AUDIOVISUAL
              </h1>
            </div>
          </section>

          {/* ========================================
              TÍTULO E SUBTÍTULO
              ======================================== */}
          <BilingualSection className="bible-section">
            <BilingualContent
              portugueseContent={
                <div className="bible-block">
                  <h2 className="bible-title">PORTFOLIO AUDIOVISUAL</h2>
                  <p className="bible-body text-muted-foreground">
                    Registro de uma prática audiovisual em trânsito
                  </p>
                </div>
              }
              englishContent={
                <div className="bible-block">
                  <h2 className="bible-title">AUDIOVISUAL PORTFOLIO</h2>
                  <p className="bible-body text-muted-foreground">
                    Record of an audiovisual practice in transit
                  </p>
                </div>
              }
            />
          </BilingualSection>

          <Separator className="bg-border/30" />

          {/* ========================================
              SEÇÃO CONCEITUAL: MULTIDISCIPLINARIDADE
              ======================================== */}
          <BilingualSection className="bible-section">
            <div className="bible-bilingual-grid bible-block">
              <div>
                <h2 className="bible-title">MULTIDISCIPLINARIDADE CRIATIVA</h2>
              </div>
              <div>
                <h2 className="bible-title">CREATIVE MULTIDISCIPLINARITY</h2>
              </div>
            </div>

            <div className="bible-bilingual-grid bible-block">
              <div>
                <p className="bible-body text-justify">
                  Este é o registro de uma prática audiovisual em trânsito — entre direção, 
                  fotografia, design, edição e pós-produção. Cada trabalho aqui apresentado é um fragmento de um processo onde as funções 
                  se dissolvem e a autoria emerge do gesto completo: do conceito à finalização, 
                  da luz ao corte final. São curtas-metragens, documentários, videoperformances e experimentos visuais 
                  que respiram a mesma ética: o compromisso com a imagem bruta, a recusa do 
                  polimento corporativo, a verdade do processo.
                </p>
              </div>
              <div>
                <p className="bible-body text-justify">
                  This is the record of an audiovisual practice in transit — between direction, 
                  photography, design, editing and post-production. Each work presented here is a fragment of a process where functions dissolve 
                  and authorship emerges from the complete gesture: from concept to finalization, 
                  from light to final cut. These are short films, documentaries, video performances and visual experiments 
                  that breathe the same ethic: commitment to raw image, refusal of corporate 
                  polish, the truth of process.
                </p>
              </div>
            </div>
          </BilingualSection>

          <Separator className="bg-border/30" />

          {/* ========================================
              GRID DE VÍDEOS
              ======================================== */}
          <BilingualSection className="bible-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {curatedVideos.map((video, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden bg-card border border-border hover:border-primary transition-colors duration-300"
                >
                  <VideoEmbed
                    source={video.source}
                    videoId={video.videoId}
                    title={video.title[language]}
                  />
                  
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-primary uppercase tracking-wider">
                        {categoryLabels[video.category][language]}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {video.year}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {video.title[language]}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {video.description[language]}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </BilingualSection>

          <Separator className="bg-border/30" />

          {/* ========================================
              RODAPÉ: LINK PARA VIMEO
              ======================================== */}
          <BilingualSection className="bible-section">
            <div className="bible-bilingual-grid bible-block">
              <div className="text-center">
                <p className="bible-body mb-4">
                  Para visualizar o portfolio completo, visite:
                </p>
                <a
                  href="https://vimeo.com/user123456789" // SUBSTITUIR com seu username real do Vimeo
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-2xl font-bold text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                >
                  vimeo.com/user123456789
                </a>
              </div>
              <div className="text-center">
                <p className="bible-body mb-4">
                  To view the complete portfolio, visit:
                </p>
                <a
                  href="https://vimeo.com/user123456789" // SUBSTITUIR com seu username real do Vimeo
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-2xl font-bold text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4"
                >
                  vimeo.com/user123456789
                </a>
              </div>
            </div>
          </BilingualSection>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Videos;
