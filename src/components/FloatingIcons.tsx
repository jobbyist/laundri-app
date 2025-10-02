import { useEffect, useState } from "react";

interface FloatingIconProps {
  categoryName: string;
}

export function FloatingIcons({ categoryName }: FloatingIconProps) {
  const [icons, setIcons] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate random positions and animations for icons
    const iconCount = 5;
    const newIcons = Array.from({ length: iconCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    setIcons(newIcons);
  }, [categoryName]);

  const getIconForCategory = (category: string) => {
    switch (category.toUpperCase()) {
      case "HEADWEAR":
        return "🧢";
      case "SHIRTS":
        return "👕";
      case "PANTS":
        return "👖";
      case "JACKETS":
        return "🧥";
      case "FOOTWEAR":
        return "👟";
      case "UNDERWEAR":
        return "🩲";
      default:
        return "👔";
    }
  };

  const icon = getIconForCategory(categoryName);

  return (
    <>
      {icons.map((iconData) => (
        <div
          key={iconData.id}
          className="absolute text-4xl md:text-6xl opacity-10 pointer-events-none"
          style={{
            left: `${iconData.x}%`,
            top: `${iconData.y}%`,
            animation: `float ${iconData.duration}s ease-in-out infinite`,
            animationDelay: `${iconData.delay}s`,
          }}
        >
          {icon}
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, -10px) rotate(5deg);
          }
          50% {
            transform: translate(-5px, -20px) rotate(-5deg);
          }
          75% {
            transform: translate(-10px, -10px) rotate(3deg);
          }
        }
      `}</style>
    </>
  );
}
