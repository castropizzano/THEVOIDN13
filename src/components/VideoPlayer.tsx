import { useState } from "react";

interface VideoPlayerProps {
  vimeoId: string;
  title: string;
}

export const VideoPlayer = ({ vimeoId, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full">
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full pb-[56.25%] bg-black overflow-hidden border-2 border-primary/30">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
          title={title}
          className={`absolute top-0 left-0 w-full h-full border-0 transition-all duration-500 ${
            isPlaying ? "grayscale-0" : "grayscale"
          }`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onMouseEnter={() => setIsPlaying(true)}
          onClick={() => setIsPlaying(true)}
        />
      </div>
    </div>
  );
};
