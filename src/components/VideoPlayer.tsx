/**
 * VideoPlayer Component
 * 
 * Embeds a Vimeo video with interactive grayscale effect.
 * Maintains 16:9 aspect ratio and applies grayscale filter until user interaction.
 * 
 * Features:
 * - Responsive 16:9 aspect ratio container
 * - Grayscale filter removed on hover or click (visual engagement cue)
 * - Lazy loading for performance optimization
 * - Clean Vimeo embed without title, byline, or portrait
 * - Border styling consistent with project design system
 * 
 * @component
 * @example
 * ```tsx
 * <VideoPlayer 
 *   vimeoId="123456789"
 *   title="Video Title"
 * />
 * ```
 */
import { useState } from "react";

/**
 * Props for VideoPlayer component
 */
interface VideoPlayerProps {
  /** Vimeo video ID (numeric string from video URL) */
  vimeoId: string;
  /** Accessible title for the iframe */
  title: string;
}

export const VideoPlayer = ({ vimeoId, title }: VideoPlayerProps) => {
  // Track interaction state to toggle grayscale effect
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
