import { useState, useEffect, useRef } from "react";

const WavingRobot = () => {
  const [pos, setPos] = useState({ x: 80, y: 80 });
  const [target, setTarget] = useState({ x: 80, y: 80 });
  const [waving, setWaving] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const containerRef = useRef<HTMLDivElement>(null);

  // Pick a new random target every few seconds
  useEffect(() => {
    const pick = () => {
      const container = containerRef.current?.parentElement;
      if (!container) return;
      const maxX = container.clientWidth - 60;
      const maxY = Math.min(container.clientHeight - 60, 200);
      const newTarget = {
        x: Math.random() * Math.max(maxX, 100),
        y: Math.random() * Math.max(maxY, 60) + 20,
      };
      setDirection(newTarget.x > pos.x ? "right" : "left");
      setTarget(newTarget);
    };
    pick();
    const interval = setInterval(pick, 3500);
    return () => clearInterval(interval);
  }, []);

  // Smooth movement toward target
  useEffect(() => {
    const move = () => {
      setPos((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.02,
        y: prev.y + (target.y - prev.y) * 0.02,
      }));
    };
    const interval = setInterval(move, 16);
    return () => clearInterval(interval);
  }, [target]);

  // Wave periodically
  useEffect(() => {
    const wave = () => {
      setWaving(true);
      setTimeout(() => setWaving(false), 1200);
    };
    wave();
    const interval = setInterval(wave, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <div
        className="absolute transition-none"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `scaleX(${direction === "left" ? -1 : 1})`,
          filter: "drop-shadow(0 4px 12px hsl(35 50% 50% / 0.3))",
        }}
      >
        <svg width="48" height="52" viewBox="0 0 48 52" fill="none">
          {/* Body */}
          <rect x="14" y="20" width="20" height="18" rx="4" fill="hsl(163, 35%, 15%)" stroke="hsl(35, 50%, 50%)" strokeWidth="1.5" />
          {/* Head */}
          <rect x="12" y="6" width="24" height="16" rx="5" fill="hsl(163, 35%, 12%)" stroke="hsl(35, 50%, 50%)" strokeWidth="1.5" />
          {/* Eyes */}
          <circle cx="20" cy="14" r="2.5" fill="hsl(35, 50%, 50%)">
            <animate attributeName="r" values="2.5;1;2.5" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="28" cy="14" r="2.5" fill="hsl(35, 50%, 50%)">
            <animate attributeName="r" values="2.5;1;2.5" dur="3s" repeatCount="indefinite" />
          </circle>
          {/* Antenna */}
          <line x1="24" y1="6" x2="24" y2="1" stroke="hsl(35, 50%, 50%)" strokeWidth="1.5" />
          <circle cx="24" cy="0" r="2" fill="hsl(35, 50%, 50%)">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
          {/* Legs */}
          <rect x="17" y="38" width="4" height="8" rx="2" fill="hsl(163, 35%, 15%)" stroke="hsl(35, 50%, 50%)" strokeWidth="1" />
          <rect x="27" y="38" width="4" height="8" rx="2" fill="hsl(163, 35%, 15%)" stroke="hsl(35, 50%, 50%)" strokeWidth="1" />
          {/* Left arm (static) */}
          <rect x="6" y="22" width="8" height="4" rx="2" fill="hsl(163, 35%, 15%)" stroke="hsl(35, 50%, 50%)" strokeWidth="1" />
          {/* Right arm (waving) */}
          <g style={{
            transformOrigin: "34px 24px",
            animation: waving ? "robot-wave 0.4s ease-in-out 3" : "none",
          }}>
            <rect x="34" y="22" width="8" height="4" rx="2" fill="hsl(163, 35%, 15%)" stroke="hsl(35, 50%, 50%)" strokeWidth="1" />
          </g>
          {/* Chest glow */}
          <circle cx="24" cy="29" r="3" fill="hsl(35, 50%, 50%)" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default WavingRobot;
