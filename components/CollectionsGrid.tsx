'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer, clipReveal } from '@/lib/animations';

const collections = [
  {
    id: 1,
    name: 'NOIR CHAIN BAG',
    category: 'HANDBAGS',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=85',
    span: 'large',
  },
  {
    id: 2,
    name: 'SOLAR FRAMES',
    category: 'EYEWEAR',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=85',
    span: 'small',
  },
  {
    id: 3,
    name: 'SILK WRAP',
    category: 'SCARVES',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=85',
    span: 'small',
  },
  {
    id: 4,
    name: 'AURUM CUFF',
    category: 'JEWELRY',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85',
    span: 'small',
  },
  {
    id: 5,
    name: 'OBSIDIAN TOTE',
    category: 'HANDBAGS',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=85',
    span: 'small',
  },
];

export default function CollectionsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-brand-black py-20 md:py-32 px-6 md:px-12">
      {/* Section Header */}
      <motion.div
        className="flex items-end justify-between mb-12"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="overflow-hidden">
          <motion.h2
            className="font-poppins font-black text-[clamp(3rem,8vw,7rem)] leading-none tracking-tighter text-white"
            variants={fadeUp}
          >
            THE EDIT
          </motion.h2>
        </div>
        <motion.a
          href="#"
          className="hidden md:flex items-center gap-2 font-poppins font-bold text-xs tracking-widest text-white/50 hover:text-brand-yellow transition-colors duration-200 group"
          variants={fadeUp}
          data-hover
        >
          VIEW ALL
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Large card */}
        <motion.div
          className="md:col-span-2 md:row-span-2"
          variants={fadeUp}
        >
          <CollectionCard collection={collections[0]} large />
        </motion.div>

        {/* Small cards */}
        {collections.slice(1).map((col) => (
          <motion.div key={col.id} variants={fadeUp}>
            <CollectionCard collection={col} />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile View All */}
      <motion.div
        className="mt-8 flex md:hidden justify-center"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <a
          href="#"
          className="font-poppins font-bold text-xs tracking-widest text-white/50 hover:text-brand-yellow transition-colors duration-200 flex items-center gap-2"
          data-hover
        >
          VIEW ALL →
        </a>
      </motion.div>
    </section>
  );
}

function CollectionCard({ collection, large = false }: { collection: typeof collections[0]; large?: boolean }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-brand-gray ${large ? 'h-[400px] md:h-[580px]' : 'h-[260px] md:h-[280px]'}`}
      data-hover
    >
      {/* Image */}
      <Image
        src={collection.image}
        alt={collection.name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />

      {/* Category tag */}
      <div className="absolute top-4 left-4">
        <span className="font-poppins font-black text-[10px] tracking-widest bg-brand-yellow text-brand-black px-3 py-1 rounded-full uppercase">
          {collection.category}
        </span>
      </div>

      {/* Product name */}
      <div className="absolute bottom-5 left-5 right-5">
        <p className="font-poppins font-black text-white text-lg md:text-xl tracking-tight leading-tight">
          {collection.name}
        </p>
        <div className="mt-2 overflow-hidden h-px">
          <motion.div
            className="h-px bg-brand-yellow"
            initial={{ x: '-100%' }}
            whileHover={{ x: '0%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <div className="h-px bg-white/10 -mt-px" />
        <motion.p
          className="font-poppins font-bold text-xs tracking-widest text-white/40 mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          EXPLORE →
        </motion.p>
      </div>
    </div>
  );
}
