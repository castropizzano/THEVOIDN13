import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const { toast } = useToast();

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

      setVideos(data.videos || []);
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

  const groupVideosByYear = () => {
    const grouped: { [year: string]: Video[] } = {};
    
    videos.forEach(video => {
      const year = new Date(video.createdTime).getFullYear().toString();
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(video);
    });

    return Object.entries(grouped).sort((a, b) => parseInt(b[0]) - parseInt(a[0]));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
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

  const groupedVideos = groupVideosByYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pb-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          {videos[0] && (
            <div className="absolute inset-0">
              <img 
                src={videos[0].thumbnail} 
                alt={videos[0].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
            </div>
          )}
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Portfólio de Vídeos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-6">
              Explore a coleção completa de trabalhos audiovisuais
            </p>
            {videos[0] && (
              <button
                onClick={() => setSelectedVideo(videos[0])}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors w-fit"
              >
                <Play className="w-5 h-5" />
                Assistir Agora
              </button>
            )}
          </div>
        </section>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
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

        {/* Video Rows by Year */}
        <div className="container mx-auto px-4 space-y-12">
          {groupedVideos.map(([year, yearVideos]) => (
            <div key={year} className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">{year}</h2>
              
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
                  {yearVideos.map((video) => (
                    <div
                      key={video.id}
                      className="flex-shrink-0 w-80 group cursor-pointer"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <div className="relative aspect-video mb-3 overflow-hidden rounded-lg">
                        <img
                          src={video.thumbnail}
                          alt={video.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <Play className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDuration(video.duration)}
                        </div>
                      </div>
                      <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                        {video.name}
                      </h3>
                      {video.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
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
              </div>
            </div>
          ))}
        </div>

        {videos.length === 0 && !loading && (
          <div className="container mx-auto px-4 py-20">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground text-xl">Nenhum vídeo encontrado</p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Videos;
