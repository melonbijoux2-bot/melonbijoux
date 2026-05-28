'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const QUOTE = "DETAILS ARE NOT DETAILS. THEY MAKE THE DESIGN.";

function scrambleText(target: string, progress: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ.! ';
  return target
    .split('')
    .map((char, i) => {
      if (char === ' ') return ' ';
      if (i < Math.floor(progress * target.length)) return char;
      return chars[Math.floor(Math.random() * chars.length)];
    })
    .join('');
}

export default function StatementSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-150px' });
  const [displayText, setDisplayText] = useState(QUOTE);
  const [scrambling, setScrambling] = useState(false);

  useEffect(() => {
    if (!inView) return;
    setScrambling(true);

    let frame = 0;
    const totalFrames = 60;
    let animId: number;

    const animate = () => {
      const progress = Math.min(frame / totalFrames, 1);
      setDisplayText(scrambleText(QUOTE, progress));
      frame++;

      if (frame <= totalFrames + 10) {
        animId = requestAnimationFrame(animate);
      } else {
        setDisplayText(QUOTE);
        setScrambling(false);
      }
    };

    const timeout = setTimeout(() => {
      animId = requestAnimationFrame(animate);
    }, 200);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animId);
    };
  }, [inView]);

  return (
    <section ref={ref} className="bg-brand-black py-24 md:py-40 px-6 md:px-12 relative overflow-hidden">
      {/* Background radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,229,0,0.03)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto text-center relative">
        {/* Top rule */}
        <motion.div
          className="flex items-center gap-6 mb-12 justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex-1 max-w-[200px] h-px bg-brand-yellow" />
          <span className="font-poppins font-black text-[10px] tracking-[0.4em] text-brand-yellow/60 uppercase">Editorial</span>
          <div className="flex-1 max-w-[200px] h-px bg-brand-yellow" />
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2
            className="font-poppins font-black text-[clamp(2rem,5.5vw,5.5rem)] leading-tight tracking-tight text-white"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {displayText.split('').map((char, i) => (
              <span
                key={i}
                className={char !== QUOTE[i] && scrambling ? 'text-brand-yellow/60' : 'text-white'}
                style={{ transition: 'color 0.05s' }}
              >
                {char}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Bottom rule */}
        <motion.div
          className="flex items-center gap-6 mt-12 justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex-1 max-w-[200px] h-px bg-brand-yellow" />
          <span className="font-poppins font-bold text-[10px] tracking-[0.4em] text-brand-yellow/40 uppercase">— Charles Eames</span>
          <div className="flex-1 max-w-[200px] h-px bg-brand-yellow" />
        </motion.div>
      </div>
    </section>
  );
}
