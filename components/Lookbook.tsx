'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer, clipReveal } from '@/lib/animations';

export default function Lookbook() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-brand-black py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
        {/* Left — Image */}
        <motion.div
          className="relative h-[60vh] md:h-[75vh] rounded-2xl overflow-hidden"
          variants={clipReveal}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Image
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85"
            alt="AURUM Lookbook Editorial"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />

          {/* Floating SS tag */}
          <motion.div
            className="absolute top-6 right-6 w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center"
            initial={{ scale: 0, rotate: -45 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-poppins font-black text-[9px] text-brand-black text-center leading-tight tracking-tight">SS<br/>2025</span>
          </motion.div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          className="flex flex-col justify-center"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            className="font-poppins font-bold text-[10px] tracking-[0.4em] text-brand-yellow/60 mb-6 uppercase"
            variants={fadeUp}
          >
            — Editorial
          </motion.p>

          {/* Overlapping text hierarchy */}
          <div className="relative">
            <motion.p
              className="font-poppins font-normal text-white/40 text-lg mb-0"
              variants={fadeUp}
            >
              THE
            </motion.p>
            <motion.h2
              className="font-poppins font-black text-brand-yellow text-[clamp(4rem,9vw,8rem)] leading-none tracking-tighter -mt-2"
              variants={fadeUp}
            >
              LOOK
              <br />
              BOOK
            </motion.h2>
            <motion.p
              className="font-poppins font-black text-stroke-yellow text-[clamp(2rem,5vw,4rem)] leading-none tracking-tighter -mt-2"
              variants={fadeUp}
            >
              SS 2025
            </motion.p>
          </div>

          <motion.p
            className="mt-8 font-poppins text-white/40 text-sm leading-relaxed max-w-sm"
            variants={fadeUp}
          >
            Each piece tells a story. Explore how AURUM&apos;s latest collection redefines modern femininity through bold accessories and unexpected pairings.
          </motion.p>

          <motion.a
            href="#"
            className="mt-8 inline-flex items-center gap-3 font-poppins font-black text-sm tracking-widest text-white group w-fit"
            variants={fadeUp}
            data-hover
          >
            <span className="relative">
              EXPLORE THE STORY →
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-yellow group-hover:w-full transition-all duration-400" />
            </span>
          </motion.a>

          {/* Stats */}
          <motion.div
            className="mt-12 pt-10 border-t border-white/10 grid grid-cols-3 gap-6"
            variants={fadeUp}
          >
            {[
              { num: '48', label: 'Pieces' },
              { num: '12', label: 'Looks' },
              { num: '3', label: 'Stories' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-poppins font-black text-3xl text-brand-yellow leading-none">{stat.num}</p>
                <p className="font-poppins font-bold text-[10px] tracking-widest text-white/30 uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
