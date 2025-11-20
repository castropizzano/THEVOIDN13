import { useState } from "react";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VideoEmbed } from "./VideoEmbed";

interface VideoCardProps {
  video: {
    source: "vimeo" | "internet-archive" | "youtube";
    videoId: string;
    title: {
      pt: string;
      en: string;
    };
    subtitle?: {
      pt: string;
      en: string;
    };
    year: string;
    category: string;
    specialLink?: string;
  };
  language: "pt" | "en";
  categoryLabel: string;
}

export const VideoCard = ({ video, language, categoryLabel }: VideoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getThumbnailUrl = () => {
    switch (video.source) {
      case "vimeo":
        return `https://vumbnail.com/${video.videoId}.jpg`;
      case "internet-archive":
        return `https://archive.org/services/img/${video.videoId}`;
      case "youtube":
        return `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
    }
  };

  const title = language === "pt" ? video.title.pt : video.title.en;
  const subtitle = video.subtitle ? (language === "pt" ? video.subtitle.pt : video.subtitle.en) : null;

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-lg bg-background border border-border transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
      >
        {/* Thumbnail */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-black">
          <img
            src={getThumbnailUrl()}
            alt={title}
            loading="lazy"
            className="h-full w-full object-contain transition-all duration-500 grayscale group-hover:grayscale-0"
          />
          
          {/* Category Badge - No Rounded, Top Position */}
          <Badge variant="secondary" className="absolute top-2 left-2 text-xs uppercase tracking-wider rounded-none">
            {categoryLabel}
          </Badge>
          
          {/* Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Play className="h-16 w-16 text-white drop-shadow-lg" fill="currentColor" />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-2">
          <h3 className="bible-h3 text-foreground line-clamp-2">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {subtitle}
            </p>
          )}
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground font-mono">{video.year}</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 overflow-hidden">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <DialogDescription className="sr-only">
            {subtitle ? `${title} - ${subtitle}` : title}
          </DialogDescription>
          <div className="relative w-full">
            <VideoEmbed
              source={video.source}
              videoId={video.videoId}
              title={title}
            />
            
            {/* Special Link for Full Video (NYX) */}
            {video.specialLink && (
              <div className="p-4 bg-background border-t border-border">
                <a
                  href={video.specialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors w-full"
                >
                  {language === "pt" ? "ASSISTIR VÍDEO COMPLETO" : "WATCH FULL VIDEO"}
                </a>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
