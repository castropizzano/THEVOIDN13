import { Play } from "lucide-react";

interface VideoEmbedProps {
  source: "vimeo" | "internet-archive" | "youtube";
  videoId: string;
  title: string;
}

export const VideoEmbed = ({ source, videoId, title }: VideoEmbedProps) => {
  const getEmbedUrl = () => {
    switch (source) {
      case "vimeo":
        return `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`;
      case "internet-archive":
        return `https://archive.org/embed/${videoId}`;
      case "youtube":
        return `https://www.youtube.com/embed/${videoId}`;
    }
  };

  return (
    <div className="relative w-full group">
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full pb-[56.25%] bg-black">
        <iframe
          src={getEmbedUrl()}
          title={title}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
        
        {/* Play Icon Overlay (visible on hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <Play className="w-16 h-16 text-white/80" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};
