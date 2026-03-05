import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className }: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      background: `radial-gradient(circle at ${x}px ${y}px, hsl(35 50% 50% / 0.08), transparent 60%)`,
    });
  };

  const handleLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0) rotateY(0) scale(1)",
      background: "transparent",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "relative rounded-xl border border-border bg-card p-6 transition-all duration-300 ease-out",
        className
      )}
      style={{
        ...style,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Cursor spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={style.background ? { background: style.background } : {}}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowCard;
