import { useState } from "react";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
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
    year: string;
    category: string;
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

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-lg bg-background border border-border transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <img
            src={getThumbnailUrl()}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Play className="h-16 w-16 text-white drop-shadow-lg" fill="currentColor" />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-2">
          {/* Category Badge */}
          <Badge variant="secondary" className="text-xs uppercase tracking-wider">
            {categoryLabel}
          </Badge>

          {/* Title */}
          <h3 className="bible-h3 text-foreground line-clamp-2 min-h-[3rem]">
            {title}
          </h3>

          {/* Year */}
          <p className="text-sm text-muted-foreground font-mono">{video.year}</p>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 overflow-hidden">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <div className="relative w-full">
            <VideoEmbed
              source={video.source}
              videoId={video.videoId}
              title={title}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
