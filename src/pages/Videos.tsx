import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { BackToTop } from "@/components/BackToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Play } from "lucide-react";

interface CuratedVideo {
  vimeoId: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  year: string;
  category: "curta-metragem" | "documentário" | "comercial" | "videoperformance";
}

const curatedVideos: CuratedVideo[] = [
  {
    vimeoId: "000000001", // SUBSTITUIR pelo ID real do Vimeo
    title: { 
      pt: "Título do Vídeo 1", 
      en: "Video Title 1" 
    },
    description: { 
      pt: "Descrição curta do trabalho audiovisual em português.", 
      en: "Short description of the audiovisual work in English." 
    },
    year: "2024",
    category: "curta-metragem"
  },
  {
    vimeoId: "000000002", // SUBSTITUIR pelo ID real do Vimeo
    title: { 
      pt: "Título do Vídeo 2", 
      en: "Video Title 2" 
    },
    description: { 
      pt: "Descrição curta do trabalho audiovisual em português.", 
      en: "Short description of the audiovisual work in English." 
    },
    year: "2023",
    category: "documentário"
  },
  {
    vimeoId: "000000003", // SUBSTITUIR pelo ID real do Vimeo
    title: { 
      pt: "Título do Vídeo 3", 
      en: "Video Title 3" 
    },
    description: { 
      pt: "Descrição curta do trabalho audiovisual em português.", 
      en: "Short description of the audiovisual work in English." 
    },
    year: "2023",
    category: "comercial"
  },
  {
    vimeoId: "000000004", // SUBSTITUIR pelo ID real do Vimeo
    title: { 
      pt: "Título do Vídeo 4", 
      en: "Video Title 4" 
    },
    description: { 
      pt: "Descrição curta do trabalho audiovisual em português.", 
      en: "Short description of the audiovisual work in English." 
    },
    year: "2022",
    category: "videoperformance"
  },
  {
    vimeoId: "000000005", // SUBSTITUIR pelo ID real do Vimeo
    title: { 
      pt: "Título do Vídeo 5", 
      en: "Video Title 5" 
    },
    description: { 
      pt: "Descrição curta do trabalho audiovisual em português.", 
      en: "Short description of the audiovisual work in English." 
    },
    year: "2022",
    category: "curta-metragem"
  },
  {
    vimeoId: "000000006", // SUBSTITUIR pelo ID real do Vimeo
    title: { 
      pt: "Título do Vídeo 6", 
      en: "Video Title 6" 
    },
    description: { 
      pt: "Descrição curta do trabalho audiovisual em português.", 
      en: "Short description of the audiovisual work in English." 
    },
    year: "2021",
    category: "documentário"
  }
];

const Videos = () => {
  const { language } = useLanguage();

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://thevoidn13.com/" },
    { name: language === "pt" ? "Portfolio de Vídeos" : "Video Portfolio", url: "https://thevoidn13.com/videos" }
  ]);

  const videoCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGallery",
    "name": language === "pt" 
      ? "Portfolio Audiovisual — Castro Pizzano" 
      : "Audiovisual Portfolio — Castro Pizzano",
    "description": language === "pt"
      ? "Catálogo completo de trabalhos audiovisuais: curtas-metragens, videoperformance, documentários e comerciais"
      : "Complete catalog of audiovisual works: short films, video performance, documentaries and commercials",
    "author": {
      "@type": "Person",
      "name": "Castro Pizzano"
    },
    "video": curatedVideos.map(video => ({
      "@type": "VideoObject",
      "name": video.title[language],
      "description": video.description[language],
      "uploadDate": `${video.year}-01-01`,
      "thumbnailUrl": `https://vumbnail.com/${video.vimeoId}.jpg`,
      "embedUrl": `https://player.vimeo.com/video/${video.vimeoId}`
    }))
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [videoCollectionSchema, breadcrumbs]
  };

  const categoryLabels = {
    "curta-metragem": { pt: "Curta-Metragem", en: "Short Film" },
    "documentário": { pt: "Documentário", en: "Documentary" },
    "comercial": { pt: "Comercial", en: "Commercial" },
    "videoperformance": { pt: "Videoperformance", en: "Video Performance" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={language === "pt" 
          ? "Portfolio de Vídeos — Castro Pizzano | THEVØIDN13"
          : "Video Portfolio — Castro Pizzano | THEVØIDN13"
        }
        description={language === "pt"
          ? "Catálogo completo de trabalhos audiovisuais: curtas-metragens, videoperformance, documentários e comerciais"
          : "Complete catalog of audiovisual works: short films, video performance, documentaries and commercials"
        }
        schemaData={schemaData}
      />
      <Header />
      <BackToTop />

      <main className="container mx-auto px-4 py-20">
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="bible-block">
                <h1 className="section-title text-center mb-4">PORTFOLIO DE VÍDEOS</h1>
                <p className="bible-body text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                  Seleção curada de trabalhos audiovisuais: narrativas experimentais, documentários críticos e performances visuais.
                </p>
              </div>
            }
            englishContent={
              <div className="bible-block">
                <h1 className="section-title text-center mb-4">VIDEO PORTFOLIO</h1>
                <p className="bible-body text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                  Curated selection of audiovisual works: experimental narratives, critical documentaries and visual performances.
                </p>
              </div>
            }
          />
        </BilingualSection>

        <section className="bible-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6">
            {curatedVideos.map((video) => (
              <Card 
                key={video.vimeoId} 
                className="group overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    loading="lazy"
                    title={video.title[language]}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      {categoryLabels[video.category][language]}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {video.year}
                    </span>
                  </div>
                  <CardTitle className="subsection-title text-lg leading-tight">
                    {video.title[language]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="bible-body text-sm">
                    {video.description[language]}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="text-center bible-block">
                <p className="bible-body text-muted-foreground">
                  Para visualizar o portfolio completo, visite{" "}
                  <a 
                    href="https://vimeo.com/castropizzano" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    vimeo.com/castropizzano
                  </a>
                </p>
              </div>
            }
            englishContent={
              <div className="text-center bible-block">
                <p className="bible-body text-muted-foreground">
                  To view the complete portfolio, visit{" "}
                  <a 
                    href="https://vimeo.com/castropizzano" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    vimeo.com/castropizzano
                  </a>
                </p>
              </div>
            }
          />
        </BilingualSection>
      </main>

      <Footer />
    </div>
  );
};

export default Videos;
