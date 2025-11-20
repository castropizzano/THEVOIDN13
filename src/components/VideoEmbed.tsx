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
        // For Internet Archive videos - return download URL for direct video element
        if (videoId.includes("/")) {
          const [itemId, filename] = videoId.split("/");
          return `https://archive.org/download/${itemId}/${filename}`;
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
        {source === "internet-archive" && videoId.includes("/") ? (
          <video
            src={getEmbedUrl()}
            title={title}
            className="absolute top-0 left-0 w-full h-full"
            controls
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={getEmbedUrl()}
            title={title}
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};
