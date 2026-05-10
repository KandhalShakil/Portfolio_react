import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Cursor6D = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const innerX = useSpring(cursorX, { damping: 40, stiffness: 400 });
  const innerY = useSpring(cursorY, { damping: 40, stiffness: 400 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid var(--electric-blue)',
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 15px var(--glow-primary)',
        }}
      />
      {/* Inner Dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'var(--quantum-cyan)',
          x: innerX,
          y: innerY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      {/* Trail/Light Field */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)',
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: -1,
          opacity: 0.15,
        }}
      />
    </>
  );
};

export default Cursor6D;
