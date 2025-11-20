import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { BackToTop } from "@/components/BackToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  // ========================================
  // SLOT 1: VIMEO - CURTA-METRAGEM
  // ========================================
  {
    source: "vimeo",
    videoId: "000000001", // SUBSTITUIR: Cole aqui o ID do Vimeo (ex: vimeo.com/123456789 → 123456789)
    title: { 
      pt: "Título do Curta PT", 
      en: "Short Film Title EN" 
    },
    description: { 
      pt: "Descrição do trabalho em português. Contexto, técnica, conceito...", 
      en: "Work description in English. Context, technique, concept..." 
    },
    year: "2024",
    category: "curta-metragem"
  },
  
  // ========================================
  // SLOT 2: INTERNET ARCHIVE - DOCUMENTÁRIO
  // ========================================
  {
    source: "internet-archive",
    videoId: "seu-item-id-archive", // SUBSTITUIR: Cole aqui o identifier do Internet Archive (ex: archive.org/details/meu-video → meu-video)
    title: { 
      pt: "Título do Documentário PT", 
      en: "Documentary Title EN" 
    },
    description: { 
      pt: "Descrição do documentário em português...", 
      en: "Documentary description in English..." 
    },
    year: "2023",
    category: "documentário"
  },
  
  // ========================================
  // SLOT 3: VIMEO - VIDEOPERFORMANCE
  // ========================================
  {
    source: "vimeo",
    videoId: "000000003", // SUBSTITUIR
    title: { 
      pt: "Título da Videoperformance PT", 
      en: "Video Performance Title EN" 
    },
    description: { 
      pt: "Descrição da performance audiovisual...", 
      en: "Audiovisual performance description..." 
    },
    year: "2023",
    category: "videoperformance"
  },
  
  // ========================================
  // SLOT 4: INTERNET ARCHIVE - COMERCIAL
  // ========================================
  {
    source: "internet-archive",
    videoId: "seu-comercial-archive", // SUBSTITUIR
    title: { 
      pt: "Título do Comercial PT", 
      en: "Commercial Title EN" 
    },
    description: { 
      pt: "Descrição do trabalho comercial...", 
      en: "Commercial work description..." 
    },
    year: "2022",
    category: "comercial"
  },
  
  // ========================================
  // SLOT 5: VIMEO - CURTA-METRAGEM
  // ========================================
  {
    source: "vimeo",
    videoId: "000000005", // SUBSTITUIR
    title: { 
      pt: "Título do Curta 2 PT", 
      en: "Short Film 2 Title EN" 
    },
    description: { 
      pt: "Descrição do segundo curta-metragem...", 
      en: "Second short film description..." 
    },
    year: "2022",
    category: "curta-metragem"
  },
  
  // ========================================
  // SLOT 6: VIMEO - DOCUMENTÁRIO
  // ========================================
  {
    source: "vimeo",
    videoId: "000000006", // SUBSTITUIR
    title: { 
      pt: "Título do Doc 2 PT", 
      en: "Documentary 2 Title EN" 
    },
    description: { 
      pt: "Descrição do segundo documentário...", 
      en: "Second documentary description..." 
    },
    year: "2021",
    category: "documentário"
  },
  
  // ========================================
  // SLOT 7: YOUTUBE - VIDEOPERFORMANCE (OPCIONAL)
  // ========================================
  {
    source: "youtube",
    videoId: "dQw4w9WgXcQ", // SUBSTITUIR: Cole aqui o ID do YouTube (ex: youtube.com/watch?v=ABC123 → ABC123)
    title: { 
      pt: "Título da Performance YouTube PT", 
      en: "YouTube Performance Title EN" 
    },
    description: { 
      pt: "Descrição da videoperformance no YouTube...", 
      en: "YouTube video performance description..." 
    },
    year: "2021",
    category: "videoperformance"
  },
  
  // ========================================
  // SLOT 8: INTERNET ARCHIVE - CURTA-METRAGEM (OPCIONAL)
  // ========================================
  {
    source: "internet-archive",
    videoId: "seu-curta-archive", // SUBSTITUIR
    title: { 
      pt: "Título do Curta Archive PT", 
      en: "Archive Short Film Title EN" 
    },
    description: { 
      pt: "Descrição do curta no Internet Archive...", 
      en: "Internet Archive short film description..." 
    },
    year: "2020",
    category: "curta-metragem"
  }
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
        
        <main>
          {/* ========================================
              TÍTULO PRINCIPAL
              ======================================== */}
          <BilingualSection className="bible-section pt-32 md:pt-40">
            <BilingualContent
              portugueseContent={
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
                  PORTFOLIO<br />AUDIOVISUAL
                </h1>
              }
              englishContent={
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
                  AUDIOVISUAL<br />PORTFOLIO
                </h1>
              }
            />
          </BilingualSection>

          {/* ========================================
              SEÇÃO CONCEITUAL: MULTIDISCIPLINARIDADE
              ======================================== */}
          <BilingualSection className="bible-section">
            <BilingualContent
              portugueseContent={
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                    PORTFOLIO AUDIOVISUAL: MULTIDISCIPLINARIDADE CRIATIVA
                  </h2>
                  
                  <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      Este é o registro de uma prática audiovisual em trânsito — entre direção, 
                      fotografia, design, edição e pós-produção.
                    </p>
                    
                    <p>
                      Cada trabalho aqui apresentado é um fragmento de um processo onde as funções 
                      se dissolvem e a autoria emerge do gesto completo: do conceito à finalização, 
                      da luz ao corte final.
                    </p>
                    
                    <p>
                      São curtas-metragens, documentários, videoperformances e experimentos visuais 
                      que respiram a mesma ética: o compromisso com a imagem bruta, a recusa do 
                      polimento corporativo, a verdade do processo.
                    </p>
                  </div>
                </div>
              }
              englishContent={
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                    AUDIOVISUAL PORTFOLIO: CREATIVE MULTIDISCIPLINARITY
                  </h2>
                  
                  <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                    <p>
                      This is the record of an audiovisual practice in transit — between direction, 
                      photography, design, editing and post-production.
                    </p>
                    
                    <p>
                      Each work presented here is a fragment of a process where functions dissolve 
                      and authorship emerges from the complete gesture: from concept to finalization, 
                      from light to final cut.
                    </p>
                    
                    <p>
                      These are short films, documentaries, video performances and visual experiments 
                      that breathe the same ethic: commitment to raw image, refusal of corporate 
                      polish, the truth of process.
                    </p>
                  </div>
                </div>
              }
            />
          </BilingualSection>

          {/* ========================================
              GRID DE VÍDEOS
              ======================================== */}
          <BilingualSection className="bible-section pb-32">
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

          {/* ========================================
              RODAPÉ: LINK PARA VIMEO
              ======================================== */}
          <BilingualSection className="bible-section pb-32">
            <BilingualContent
              portugueseContent={
                <div className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground">
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
              }
              englishContent={
                <div className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground">
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
              }
            />
          </BilingualSection>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Videos;
