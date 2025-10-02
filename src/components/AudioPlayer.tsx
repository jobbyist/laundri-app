import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, ThumbsUp, ThumbsDown, MessageCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface AudioPlayerProps {
  title: string;
  episodeNumber: number;
}

export function AudioPlayer({ title, episodeNumber }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null);
  const [playCount, setPlayCount] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasPlayedRef = useRef(false);

  // Simulated audio duration (in seconds)
  useEffect(() => {
    // Simulate different durations for each episode
    const durations = [2700, 2580, 2940]; // 45, 43, 49 minutes in seconds
    setDuration(durations[episodeNumber - 1] || 2700);
    
    // Simulate initial engagement metrics
    const initialLikes = [42, 38, 51];
    const initialDislikes = [3, 2, 1];
    const initialPlays = [1247, 1098, 1534];
    
    setLikes(initialLikes[episodeNumber - 1] || 42);
    setDislikes(initialDislikes[episodeNumber - 1] || 3);
    setPlayCount(initialPlays[episodeNumber - 1] || 1000);
  }, [episodeNumber]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    
    // Increment play count on first play
    if (!hasPlayedRef.current && !isPlaying) {
      setPlayCount(prev => prev + 1);
      hasPlayedRef.current = true;
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!isMuted) {
      setVolume(0);
    } else {
      setVolume(1);
    }
  };

  const handleLike = () => {
    if (userVote === 'like') {
      setLikes(prev => prev - 1);
      setUserVote(null);
    } else {
      if (userVote === 'dislike') {
        setDislikes(prev => prev - 1);
      }
      setLikes(prev => prev + 1);
      setUserVote('like');
    }
  };

  const handleDislike = () => {
    if (userVote === 'dislike') {
      setDislikes(prev => prev - 1);
      setUserVote(null);
    } else {
      if (userVote === 'like') {
        setLikes(prev => prev - 1);
      }
      setDislikes(prev => prev + 1);
      setUserVote('dislike');
    }
  };

  const handleSaveOffline = () => {
    setIsSaved(!isSaved);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Simulate audio progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  return (
    <div className="bg-secondary/50 rounded-lg p-4 border border-border">
      <div className="flex flex-col gap-4">
        {/* Main Controls Row */}
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-primary-foreground" />
            ) : (
              <Play className="h-6 w-6 text-primary-foreground ml-0.5" />
            )}
          </button>

          {/* Progress Bar and Time */}
          <div className="flex-1">
            <div className="h-2 bg-background rounded-full overflow-hidden mb-2 cursor-pointer">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="relative flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
              className="h-10 w-10"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </Button>
            {showVolumeSlider && (
              <div 
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-background border border-border rounded-lg shadow-lg"
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
              >
                <div className="h-24 flex items-center">
                  <Slider
                    value={[volume]}
                    onValueChange={handleVolumeChange}
                    max={1}
                    step={0.1}
                    orientation="vertical"
                    className="h-20"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-between border-t border-border/50 pt-3">
          <div className="flex items-center gap-2">
            {/* Like Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`gap-1.5 ${userVote === 'like' ? 'text-primary' : ''}`}
            >
              <ThumbsUp className={`h-4 w-4 ${userVote === 'like' ? 'fill-current' : ''}`} />
              <span className="text-xs font-medium">{likes}</span>
            </Button>

            {/* Dislike Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDislike}
              className={`gap-1.5 ${userVote === 'dislike' ? 'text-destructive' : ''}`}
            >
              <ThumbsDown className={`h-4 w-4 ${userVote === 'dislike' ? 'fill-current' : ''}`} />
              <span className="text-xs font-medium">{dislikes}</span>
            </Button>

            {/* Comment Button */}
            <Button variant="ghost" size="sm" className="gap-1.5">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs font-medium">Comment</span>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {/* Play Count */}
            <span className="text-xs text-muted-foreground">
              {playCount.toLocaleString()} plays
            </span>

            {/* Save for Offline Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSaveOffline}
              className={`gap-1.5 ${isSaved ? 'text-primary' : ''}`}
            >
              <Download className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
              <span className="text-xs font-medium">{isSaved ? 'Saved' : 'Save'}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
