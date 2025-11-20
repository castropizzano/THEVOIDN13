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
        // If videoId contains "/" it's a full path, otherwise use as ID
        if (videoId.includes("/")) {
          return `https://archive.org/embed/${videoId}`;
        }
        return `https://archive.org/embed/${videoId}`;
      case "youtube":
        return `https://www.youtube.com/embed/${videoId}`;
    }
  };

  return (
    <div className="relative w-full">
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
      </div>
    </div>
  );
};
