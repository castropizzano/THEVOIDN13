/**
 * AudioPlayer Component
 * 
 * A complete audio player with play/pause controls, seek functionality, 
 * volume adjustment, and time display.
 * 
 * Features:
 * - Play/pause toggle with visual feedback
 * - Seekable progress bar showing current position
 * - Volume control with mute/unmute functionality
 * - Time display in MM:SS format (current/total)
 * - Responsive design with hover effects
 * 
 * @component
 * @example
 * ```tsx
 * <AudioPlayer 
 *   src="/audio/track.mp3"
 *   title="Track Title"
 *   description="Track description"
 * />
 * ```
 */
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

/**
 * Props for AudioPlayer component
 */
interface AudioPlayerProps {
  /** URL or path to the audio file */
  src: string;
  /** Title displayed above the player */
  title: string;
  /** Optional description text */
  description?: string;
}

export const AudioPlayer = ({ src, title, description }: AudioPlayerProps) => {
  // Ref to access the native HTML audio element
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // Current playback position in seconds
  const [duration, setDuration] = useState(0); // Total audio duration in seconds
  
  // Volume state
  const [volume, setVolume] = useState(1); // 0.0 to 1.0
  const [isMuted, setIsMuted] = useState(false);

  /**
   * Setup audio event listeners on component mount
   * Cleans up listeners on unmount to prevent memory leaks
   */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  /**
   * Toggle between play and pause states
   */
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  /**
   * Handle seeking to a specific time position
   * @param value - Array containing the new time position in seconds
   */
  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  /**
   * Handle volume level changes
   * Automatically unmutes if volume is increased from 0
   * @param value - Array containing the new volume (0.0 to 1.0)
   */
  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newVolume = value[0];
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  /**
   * Toggle mute state
   * Restores previous volume level when unmuting (or defaults to 0.5)
   */
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume || 0.5;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  /**
   * Format seconds into MM:SS display format
   * @param time - Time in seconds
   * @returns Formatted string (e.g., "3:45")
   */
  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full border-2 border-primary/30 rounded-lg bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-colors">
      <audio ref={audioRef} src={src} />
      
      <div className="space-y-4">
        {/* Title and Description */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-primary">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={0.1}
            onValueChange={handleSeek}
            className="cursor-pointer hover:opacity-80 transition-opacity [&_*]:pointer-events-auto"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <Button
            size="icon"
            variant="default"
            onClick={togglePlay}
            className="h-12 w-12 rounded-full"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" />
            )}
          </Button>

          {/* Volume Control */}
          <div className="flex items-center gap-2 flex-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleMute}
              className="h-8 w-8"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume]}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className="w-24 cursor-pointer [&_*]:pointer-events-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
