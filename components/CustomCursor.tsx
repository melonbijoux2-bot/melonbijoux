'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const expandCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `scale(2)`;
        cursorRef.current.style.backgroundColor = 'rgba(255,229,0,0.15)';
        cursorRef.current.style.border = '1.5px solid #FFE500';
      }
    };

    const shrinkCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `scale(1)`;
        cursorRef.current.style.backgroundColor = 'transparent';
        cursorRef.current.style.border = '1.5px solid #FFE500';
      }
    };

    window.addEventListener('mousemove', moveCursor);

    const hoverables = document.querySelectorAll('a, button, [data-hover]');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', expandCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('a, button, [data-hover]');
      els.forEach((el) => {
        el.addEventListener('mouseenter', expandCursor);
        el.addEventListener('mouseleave', shrinkCursor);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, [mouseX, mouseY, dotX, dotY]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-brand-yellow pointer-events-none z-[9999] transition-all duration-200"
        style={{
          x: springX,
          y: springY,
          border: '1.5px solid #FFE500',
        }}
      />
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-yellow pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </>
  );
}
