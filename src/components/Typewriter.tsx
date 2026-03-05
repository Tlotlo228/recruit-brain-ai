import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  onDone?: () => void;
}

const Typewriter = ({ text, speed = 80, className, onDone }: TypewriterProps) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  return (
    <span className={className}>
      {displayed}
      <span
        className="inline-block w-[3px] h-[0.9em] ml-1 align-baseline bg-primary"
        style={{
          animation: done ? "blink 1s step-end infinite" : "none",
          opacity: 1,
        }}
      />
    </span>
  );
};

export default Typewriter;
