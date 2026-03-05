import { useRef, useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface RoboticToggleProps {
  label: string;
  active?: boolean;
  className?: string;
}

const RoboticToggle = ({ label, active: initialActive = false, className }: RoboticToggleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(initialActive);
  const [cursorX, setCursorX] = useState(0);
  const [hovering, setHovering] = useState(false);

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setCursorX(Math.max(0, Math.min(100, x)));
    setHovering(true);
  };

  const handleLeave = () => {
    setHovering(false);
  };

  // The indicator follows the cursor when hovering, snaps to position when not
  const indicatorPos = hovering ? cursorX : active ? 85 : 15;

  return (
    <div className={cn("inline-flex flex-col items-center gap-2", className)}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={() => setActive(!active)}
        className={cn(
          "relative h-10 w-20 cursor-pointer rounded-full border-2 transition-all duration-300 overflow-hidden",
          active
            ? "border-primary bg-primary/20"
            : "border-border bg-muted"
        )}
      >
        {/* Scan line effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: hovering
              ? `linear-gradient(90deg, transparent ${cursorX - 15}%, hsl(35 50% 50% / 0.5) ${cursorX}%, transparent ${cursorX + 15}%)`
              : "none",
            transition: "background 0.1s ease-out",
          }}
        />
        {/* Robotic indicator */}
        <div
          className={cn(
            "absolute top-1 h-6 w-6 rounded-full shadow-lg transition-all",
            hovering ? "duration-100" : "duration-400",
            active
              ? "bg-primary shadow-primary/40"
              : "bg-muted-foreground/60 shadow-muted-foreground/20"
          )}
          style={{
            left: `calc(${indicatorPos}% - 12px)`,
            boxShadow: active
              ? "0 0 12px hsl(35 50% 50% / 0.5), inset 0 1px 2px hsl(35 50% 70% / 0.3)"
              : "0 2px 4px hsl(0 0% 0% / 0.2)",
          }}
        >
          {/* Inner dot */}
          <div className={cn(
            "absolute inset-1.5 rounded-full transition-colors duration-300",
            active ? "bg-primary-foreground/80" : "bg-background/50"
          )} />
        </div>
      </div>
      <span className={cn(
        "text-xs font-medium transition-colors duration-300",
        active ? "text-primary" : "text-muted-foreground"
      )}>
        {label}
      </span>
    </div>
  );
};

export default RoboticToggle;
