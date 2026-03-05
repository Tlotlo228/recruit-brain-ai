import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

const MagneticButton = ({ children, className, strength = 0.3 }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [glowing, setGlowing] = useState(false);

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
    setGlowing(true);
  };

  const handleLeave = () => {
    setPos({ x: 0, y: 0 });
    setGlowing(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("relative inline-block", className)}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: glowing ? "transform 0.15s ease-out" : "transform 0.4s ease-out",
      }}
    >
      {/* Glow ring */}
      <div
        className="pointer-events-none absolute -inset-1 rounded-xl opacity-0 transition-opacity duration-300 blur-md"
        style={{
          background: "linear-gradient(135deg, hsl(35 50% 50% / 0.4), hsl(163 35% 20% / 0.4))",
          opacity: glowing ? 0.6 : 0,
        }}
      />
      {children}
    </div>
  );
};

export default MagneticButton;
