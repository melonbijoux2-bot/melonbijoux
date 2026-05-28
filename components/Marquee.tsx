'use client';

import { motion } from 'framer-motion';

const items = [
  'ACCESSORIES', 'HANDBAGS', 'JEWELRY', 'SCARVES', 'SUNGLASSES', 'BELTS',
  'ACCESSORIES', 'HANDBAGS', 'JEWELRY', 'SCARVES', 'SUNGLASSES', 'BELTS',
];

export default function Marquee() {
  return (
    <div className="w-full bg-brand-yellow overflow-hidden py-4 border-y-0 relative">
      <div className="flex">
        <motion.div
          className="flex items-center gap-0 shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          style={{ willChange: 'transform' }}
        >
          {items.concat(items).map((item, i) => (
            <span
              key={i}
              className="font-poppins font-black text-brand-black text-sm md:text-base tracking-widest uppercase whitespace-nowrap px-6 flex items-center gap-6"
            >
              {item}
              <span className="text-brand-black/40 text-lg">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
