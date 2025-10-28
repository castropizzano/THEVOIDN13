import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { BackToTop } from "@/components/BackToTop";
import { supabase } from "@/integrations/supabase/client";
import { Play, Clock, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Video {
  id: string;
  name: string;
  description: string;
  duration: number;
  link: string;
  embedUrl: string;
  thumbnail: string;
  createdTime: string;
  width: number;
  height: number;
}

const Videos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [videoSettings, setVideoSettings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const { toast } = useToast();

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://thevoidn13.lovableproject.com/" },
    { name: "Portfolio de Vídeos", url: "https://thevoidn13.lovableproject.com/videos" }
  ]);

  const videoCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGallery",
    "name": "Portfolio Audiovisual — Castro Pizzano",
    "description": "Catálogo completo de trabalhos audiovisuais: curtas-metragens, videoperformance, documentários e comerciais",
    "author": {
      "@type": "Person",
      "name": "Castro Pizzano"
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [videoCollectionSchema, breadcrumbs]
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.functions.invoke('vimeo-videos');

      if (error) {
        console.error('Error fetching videos:', error);
        toast({
          title: "Erro ao carregar vídeos",
          description: "Não foi possível carregar os vídeos. Tente novamente.",
          variant: "destructive",
        });
        return;
      }

      const { data: settings } = await supabase
        .from('video_settings')
        .select('vimeo_id, is_visible, is_featured, display_order')
        .eq('is_visible', true)
        .order('display_order', { ascending: true });

      setVideos(data.videos || []);
      setVideoSettings(settings || []);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao carregar os vídeos.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <BackToTop />
        <main className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-muted-foreground">Carregando vídeos...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Apply video settings
  const visibleVideoIds = new Set(videoSettings.map(v => v.vimeo_id));
  const featuredSetting = videoSettings.find(v => v.is_featured);
  
  const visibleVideos = videoSettings.length > 0
    ? videos.filter(v => visibleVideoIds.has(v.id))
    : videos;

  const featuredVideo = featuredSetting
    ? visibleVideos.find(v => v.id === featuredSetting.vimeo_id) || visibleVideos[0]
    : visibleVideos[Math.floor(Math.random() * visibleVideos.length)];

  const catalogVideos = visibleVideos
    .filter(v => v.id !== featuredVideo?.id)
    .sort((a, b) => {
      const orderA = videoSettings.find(s => s.vimeo_id === a.id)?.display_order ?? 999;
      const orderB = videoSettings.find(s => s.vimeo_id === b.id)?.display_order ?? 999;
      return orderA - orderB;
    });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Portfolio de Vídeos — Audiovisual | Castro Pizzano"
        description="Catálogo completo de trabalhos audiovisuais: curtas-metragens experimentais, videoperformance, documentários e projetos comerciais por Castro Pizzano (цастро™) — CasaTrezeStudio®"
        schemaData={schemaData}
      />
      <Header />
      <BackToTop />
      
      <main>
        {/* Featured Video - Full Screen */}
        {featuredVideo && (
          <section className="w-full h-screen overflow-hidden relative">
            <iframe
              src={`${featuredVideo.embedUrl}?background=1&autoplay=1&loop=1&byline=0&title=0`}
              className="w-full h-full object-cover"
              frameBorder="0"
              allow="autoplay; fullscreen"
              title={featuredVideo.name}
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none"></div>
          </section>
        )}

        {/* Introduction Text */}
        <BilingualSection>
          <BilingualContent 
            portugueseContent={
              <>
                <h2 className="text-base font-bold">Portfolio Audiovisual</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Uma coleção de trabalhos que atravessam design, cinema e videoarte. Cada projeto é um experimento em linguagem visual, onde a estética encontra a narrativa e o movimento se transforma em significado. Do comercial ao experimental, do documentário à performance, estas obras compartilham uma mesma busca: criar imagens que ressoam além da tela.
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Brandbooks, curtas-metragens, videoperformances, documentários e projetos autorais. Trabalhos produzidos entre 2019-2025, reunindo colaborações com CasaTrezeStudio®, LowPressure™ e projetos independentes. Cada vídeo carrega sua própria metodologia, seu próprio tempo, sua própria forma de existir.
                </p>
              </>
            }
            englishContent={
              <>
                <h2 className="text-base font-bold">Audiovisual Portfolio</h2>
                <p className="text-base text-justify leading-relaxed mt-6">
                  A collection of works that traverse design, cinema and video art. Each project is an experiment in visual language, where aesthetics meets narrative and movement transforms into meaning. From commercial to experimental, from documentary to performance, these works share the same quest: to create images that resonate beyond the screen.
                </p>
                <p className="text-base text-justify leading-relaxed mt-6">
                  Brandbooks, short films, video performances, documentaries and authorial projects. Works produced between 2019-2025, bringing together collaborations with CasaTrezeStudio®, LowPressure™ and independent projects. Each video carries its own methodology, its own time, its own way of existing.
                </p>
              </>
            }
          />
        </BilingualSection>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="w-full max-w-6xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary transition-colors text-2xl"
                >
                  ✕
                </button>
                <iframe
                  src={selectedVideo.embedUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={selectedVideo.name}
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Video Catalog */}
        <BilingualSection bgClassName="bg-card/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {catalogVideos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video mb-3 overflow-hidden rounded-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-full object-cover scale-[2.00] grayscale group-hover:grayscale-0 group-hover:scale-[2.05] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatDuration(video.duration)}
                  </div>
                </div>
                <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors text-sm">
                  {video.name}
                </h3>
                {video.description && (
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                    {video.description}
                  </p>
                )}
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  Ver no Vimeo
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </BilingualSection>

        {catalogVideos.length === 0 && !loading && (
          <BilingualSection>
            <div className="text-center space-y-4 py-20">
              <p className="text-muted-foreground text-xl">Nenhum vídeo adicional encontrado</p>
            </div>
          </BilingualSection>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Videos;
