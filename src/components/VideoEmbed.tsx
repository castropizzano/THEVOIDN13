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
        // Extract the item ID (before the first /) for Internet Archive embeds
        const itemId = videoId.includes("/") ? videoId.split("/")[0] : videoId;
        return `https://archive.org/embed/${itemId}`;
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
