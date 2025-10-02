import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const duration = 8000; // 8 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 300);
      } else {
        setProgress(currentProgress);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      {/* Logo */}
      <div className="mb-8">
        <img
          src={theme === "dark" ? "/laundriwhite.svg" : "/laundriblack.svg"}
          alt="Laundri Logo"
          className="w-48 h-auto"
        />
      </div>

      {/* Loading Bar Container */}
      <div className="w-80 max-w-[90vw]">
        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
          {/* Gradient Loading Bar */}
          <div
            className="absolute inset-y-0 left-0 rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)",
              backgroundSize: "200% 100%",
              animation: "gradientShift 2s ease infinite",
            }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-center mt-4 text-foreground font-medium">
          Loading Your Experience…
        </p>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
