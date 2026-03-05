import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: globalThis.MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute h-[300px] w-[300px] rounded-full"
        style={{
          left: pos.x - 150,
          top: pos.y - 150,
          background: "radial-gradient(circle, hsl(35 50% 50% / 0.04) 0%, transparent 70%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
    </div>
  );
};

export default CursorGlow;
