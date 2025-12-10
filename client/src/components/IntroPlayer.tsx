import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Play, SkipForward, Volume2, VolumeX } from "lucide-react";

const INTRO_SEEN_KEY = "perang-jawa-intro-seen";

export function IntroPlayer() {
  const [, setLocation] = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem(INTRO_SEEN_KEY);
    if (hasSeenIntro === "true") {
      setLocation("/");
    }
    
    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLocation]);

  const handleSkip = () => {
    localStorage.setItem(INTRO_SEEN_KEY, "true");
    setLocation("/");
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  const handleVideoEnd = () => {
    handleSkip();
  };

  return (
    <div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      data-testid="intro-player"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnd}
          muted={isMuted}
          playsInline
          data-testid="intro-video"
        >
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>

        {!isPlaying && (
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">
              Perang Jawa
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              1825 - 1830
            </p>
            <p className="text-base text-white/60 mb-8 max-w-xl mx-auto">
              Perjuangan heroik Pangeran Diponegoro dan rakyat Jawa melawan kolonialisme
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={handlePlay}
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                data-testid="button-play-intro"
              >
                <Play className="h-5 w-5" />
                Mulai
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleSkip}
                className="border-white/30 text-white hover:bg-white/10"
                data-testid="button-skip-to-home"
              >
                Lewati
              </Button>
            </div>
          </div>
        )}

        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <div className="max-w-4xl mx-auto">
              <div className="w-full h-1 bg-white/20 rounded-full mb-4 overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="text-white hover:bg-white/10"
                  data-testid="button-toggle-mute"
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
                <span className="text-white/60 text-sm font-serif">
                  Perang Jawa 1825-1830
                </span>
                <div />
              </div>
            </div>
          </div>
        )}

        {showSkip && (
          <Button
            variant="outline"
            onClick={handleSkip}
            className="absolute top-6 right-6 z-20 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm gap-2"
            data-testid="button-skip-intro"
          >
            <SkipForward className="h-4 w-4" />
            Lewati Intro
          </Button>
        )}
      </div>
    </div>
  );
}
