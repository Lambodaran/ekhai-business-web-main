import React, { useEffect, useState } from 'react';

interface TrailDot {
  x: number;
  y: number;
  id: number;
}

const CursorTrail: React.FC = () => {
  const [dots, setDots] = useState<TrailDot[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newDot: TrailDot = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };
      setDots((prev) => [...prev, newDot]);

      // Remove dot after 500ms
      setTimeout(() => {
        setDots((prev) => prev.filter((dot) => dot.id !== newDot.id));
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-4 h-4 rounded-full bg-blue-500 opacity-50 animate-fadeOut pointer-events-none"
          style={{ top: dot.y, left: dot.x, transform: 'translate(-50%, -50%)' }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
