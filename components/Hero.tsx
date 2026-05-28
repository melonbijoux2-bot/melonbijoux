'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { heroWordReveal, fadeUp, staggerContainer } from '@/lib/animations';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxX = mousePos.x * -20;
  const parallaxY = mousePos.y * -20;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
    >
      {/* Background subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,229,0,0.04)_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 md:px-12 pt-24 pb-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Typography */}
          <div className="flex flex-col">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              {/* Line 1: WEAR */}
              <div className="overflow-hidden">
                <motion.h1
                  className="font-poppins font-black text-stroke leading-none text-[clamp(5rem,14vw,13rem)] tracking-tighter"
                  custom={0}
                  variants={heroWordReveal}
                  initial="hidden"
                  animate="visible"
                >
                  WEAR
                </motion.h1>
              </div>

              {/* Line 2: YOUR */}
              <div className="overflow-hidden">
                <motion.h1
                  className="font-poppins font-black text-brand-yellow leading-none text-[clamp(5rem,14vw,13rem)] tracking-tighter"
                  custom={1}
                  variants={heroWordReveal}
                  initial="hidden"
                  animate="visible"
                >
                  YOUR
                </motion.h1>
              </div>

              {/* Line 3: POWER */}
              <div className="overflow-hidden">
                <motion.h1
                  className="font-poppins font-black text-stroke leading-none text-[clamp(5rem,14vw,13rem)] tracking-tighter"
                  custom={2}
                  variants={heroWordReveal}
                  initial="hidden"
                  animate="visible"
                >
                  POWER
                </motion.h1>
              </div>
            </motion.div>

            {/* Subtext */}
            <motion.p
              className="mt-6 font-poppins font-normal text-white/50 text-base md:text-lg max-w-xs leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
            >
              Curated women&apos;s accessories.<br />Handpicked for the bold.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.1 }}
            >
              <motion.button
                className="bg-brand-yellow text-brand-black font-poppins font-bold text-xs tracking-widest px-8 py-3.5 rounded-full hover:scale-105 transition-transform duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                data-hover
              >
                SHOP NOW
              </motion.button>
              <motion.button
                className="border border-white/30 text-white font-poppins font-bold text-xs tracking-widest px-8 py-3.5 rounded-full hover:border-white hover:bg-white/5 transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                data-hover
              >
                VIEW LOOKBOOK
              </motion.button>
            </motion.div>
          </div>

          {/* Right — Product Image with Parallax */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center h-[60vh]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="relative w-[380px] h-[480px] rounded-2xl overflow-hidden"
              style={{
                x: parallaxX,
                y: parallaxY,
              }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=760&q=85"
                alt="AURUM hero product"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating tag */}
            <motion.div
              className="absolute bottom-8 left-0 bg-brand-gray border border-white/10 rounded-xl px-5 py-4 backdrop-blur-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: parallaxX * 0.5, y: parallaxY * 0.5 }}
            >
              <p className="text-white/40 text-xs font-poppins font-bold tracking-widest uppercase">New Drop</p>
              <p className="text-white font-poppins font-black text-sm mt-0.5">SS 2025 Collection</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Rotating Badge */}
      <motion.div
        className="absolute bottom-10 left-6 md:left-12 w-24 h-24"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ opacity: { delay: 1.5, duration: 0.5 }, rotate: { delay: 1.5, duration: 20, repeat: Infinity, ease: 'linear' } }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="circle-text" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <circle cx="50" cy="50" r="46" fill="#FFE500" />
          <text className="font-poppins" fontSize="10.5" fontWeight="900" fill="#0A0A0A" letterSpacing="2.5">
            <textPath href="#circle-text">NEW COLLECTION ✦ SS 2025 ✦ </textPath>
          </text>
        </svg>
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-brand-black" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-6 md:right-12 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="font-poppins font-bold text-[10px] tracking-[0.3em] text-white/30 uppercase rotate-90 mb-4 origin-center">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-brand-yellow/60 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
