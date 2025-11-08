'use client'
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const TextPressure = ({
  text = "ARJUN",
  minFontSize = 28,
  className = ""
}) => {
  const containerRef = useRef(null);
  const [pressure, setPressure] = useState({ x: 0.5, y: 0.5 });
  const { scrollY } = useScroll();

  // Transform scroll into scale with spring physics for smooth gradual animation
  // Starts smaller (0.85x) and grows to larger (1.3x) over much longer scroll distance
  const scaleRaw = useTransform(scrollY, [0, 3000], [0.85, 1.3]);
  const scale = useSpring(scaleRaw, { stiffness: 100, damping: 30, mass: 0.5 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setPressure({ x, y });
    };

    const handleMouseLeave = () => {
      setPressure({ x: 0.5, y: 0.5 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      style={{ 
        width: '100%',
        height: '100%',
      }}
    >
      <motion.span
        style={{
          scale,
          fontSize: `${minFontSize}px`,
          fontFamily: "var(--font-bebas), 'Arial Black', sans-serif",
          fontWeight: 400,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          transition: 'all 0.2s ease-out',
        }}
        className="text-gray-900 dark:text-white"
        animate={{
          rotateY: (pressure.x - 0.5) * 10,
          rotateX: (pressure.y - 0.5) * 10,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default TextPressure;
