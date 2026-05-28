'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const products = [
  {
    id: 1,
    name: 'NOIR CHAIN',
    price: '$340',
    category: 'Handbag',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=85',
  },
  {
    id: 2,
    name: 'SOLAR SHIELD',
    price: '$195',
    category: 'Eyewear',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=85',
  },
  {
    id: 3,
    name: 'SILK REVERIE',
    price: '$125',
    category: 'Scarf',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=85',
  },
  {
    id: 4,
    name: 'AURUM CUFF',
    price: '$280',
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85',
  },
  {
    id: 5,
    name: 'OBSIDIAN TOTE',
    price: '$450',
    category: 'Handbag',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=85',
  },
  {
    id: 6,
    name: 'ECLIPSE BELT',
    price: '$165',
    category: 'Belt',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b0c4e?w=600&q=85',
  },
];

export default function ProductSpotlight() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-brand-black py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <motion.div
        className="px-6 md:px-12 flex items-end justify-between mb-10"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div>
          <motion.p
            className="font-poppins font-bold text-[10px] tracking-[0.4em] text-brand-yellow mb-2 uppercase"
            variants={fadeUp}
          >
            — New Arrivals
          </motion.p>
          <motion.h2
            className="font-poppins font-black text-[clamp(2.5rem,6vw,5.5rem)] leading-none tracking-tighter text-white"
            variants={fadeUp}
          >
            THIS SEASON
          </motion.h2>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="hidden md:flex items-center gap-3 text-white/30"
          variants={fadeUp}
        >
          <span className="font-poppins font-bold text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-8 h-px bg-brand-yellow"
            animate={{ scaleX: [1, 1.5, 1], x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Horizontal scroll on desktop, vertical on mobile */}
      <div
        ref={scrollRef}
        className="flex flex-col md:flex-row gap-4 px-6 md:px-12 md:overflow-x-auto no-scrollbar md:pb-6"
      >
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, index, inView }: { product: typeof products[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      className="group relative bg-brand-gray rounded-2xl overflow-hidden flex-shrink-0 w-full md:w-[300px] lg:w-[320px]"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      data-hover
    >
      {/* Image */}
      <div className="relative h-[280px] md:h-[320px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="320px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gray via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="font-poppins font-bold text-[9px] tracking-widest bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full uppercase border border-white/10">
            {product.category}
          </span>
        </div>

        {/* Add to cart overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            className="w-full bg-brand-yellow text-brand-black font-poppins font-black text-xs tracking-widest py-4 hover:bg-white transition-colors duration-200"
            data-hover
          >
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-poppins font-black text-white text-sm tracking-tight">{product.name}</p>
          </div>
          <p className="font-poppins font-black text-brand-yellow text-sm">{product.price}</p>
        </div>
        <div className="mt-3 w-8 h-px bg-brand-yellow/30 group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  );
}
