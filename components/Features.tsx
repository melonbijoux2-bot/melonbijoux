'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFE500" strokeWidth="1.5">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    title: 'FREE SHIPPING',
    text: 'Complimentary worldwide delivery on all orders over $150.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFE500" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'HANDPICKED QUALITY',
    text: 'Every accessory is individually curated by our editorial team.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFE500" strokeWidth="1.5">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
    ),
    title: 'EASY RETURNS',
    text: '30-day hassle-free returns, no questions asked.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFE500" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'MEMBERS ONLY DROPS',
    text: 'Exclusive early access to limited collections for members.',
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-brand-gray py-16 md:py-24 px-6 md:px-12">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="group p-8 border-t-2 border-brand-yellow/20 hover:border-brand-yellow transition-colors duration-300 border-r border-white/5 last:border-r-0"
            variants={fadeUp}
            custom={i}
          >
            <div className="mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
              {feature.icon}
            </div>
            <h3 className="font-poppins font-black text-sm tracking-widest text-white mb-3 uppercase">
              {feature.title}
            </h3>
            <p className="font-poppins text-white/40 text-sm leading-relaxed">
              {feature.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
