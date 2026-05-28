'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

export default function Newsletter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section ref={ref} className="bg-brand-black py-24 md:py-36 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,229,0,0.06)_0%,transparent_60%)]" />

      {/* Top decorative line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.div
        className="max-w-2xl mx-auto text-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p
          className="font-poppins font-bold text-[10px] tracking-[0.4em] text-brand-yellow/60 mb-6 uppercase"
          variants={fadeUp}
        >
          — Members Circle
        </motion.p>

        <motion.h2
          className="font-poppins font-black text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-tighter text-white mb-6"
          variants={fadeUp}
        >
          JOIN THE<br />
          <span className="text-brand-yellow">INNER</span><br />
          CIRCLE
        </motion.h2>

        <motion.p
          className="font-poppins text-white/40 text-sm md:text-base leading-relaxed mb-10"
          variants={fadeUp}
        >
          Early access to drops, exclusive offers, and editorial content.
        </motion.p>

        {!submitted ? (
          <motion.form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={handleSubmit}
            variants={fadeUp}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-brand-gray border border-white/10 focus:border-brand-yellow/50 text-white font-poppins text-sm px-5 py-4 rounded-full outline-none placeholder:text-white/20 transition-colors duration-200"
            />
            <motion.button
              type="submit"
              className="bg-brand-yellow text-brand-black font-poppins font-black text-xs tracking-widest px-7 py-4 rounded-full hover:scale-105 transition-transform duration-200 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              data-hover
            >
              SUBSCRIBE →
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-gray border border-brand-yellow/30 rounded-2xl px-8 py-6 max-w-md mx-auto"
          >
            <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="font-poppins font-black text-white text-sm tracking-wider">Welcome to the circle.</p>
            <p className="font-poppins text-white/40 text-xs mt-1">Check your inbox for confirmation.</p>
          </motion.div>
        )}

        <motion.p
          className="mt-5 font-poppins text-white/20 text-xs"
          variants={fadeUp}
        >
          No spam. Unsubscribe anytime.
        </motion.p>
      </motion.div>
    </section>
  );
}
