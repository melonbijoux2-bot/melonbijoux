'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarVariants } from '@/lib/animations';

const navLinks = ['COLLECTIONS', 'LOOKBOOK', 'ABOUT', 'SHOP'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
        variants={navbarVariants}
        animate={scrolled ? 'scrolled' : 'top'}
        initial="top"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          className="font-poppins font-black italic text-brand-yellow text-2xl md:text-3xl tracking-tighter z-10"
          whileHover={{ scale: 1.02 }}
          data-hover
        >
          AURUM
        </motion.a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <MagneticLink key={link} label={link} />
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <motion.button
            className="text-white hover:text-brand-yellow transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            data-hover
            aria-label="Cart"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </motion.button>
          <motion.button
            className="bg-brand-yellow text-brand-black font-poppins font-bold text-xs tracking-widest px-6 py-2.5 rounded-full hover:scale-105 transition-transform duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            data-hover
          >
            EXPLORE
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-10 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-hover
        >
          <motion.span
            className="block w-7 h-0.5 bg-white origin-left"
            animate={menuOpen ? { rotate: 45, translateY: 0 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-brand-yellow"
            animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-7 h-0.5 bg-white origin-left"
            animate={menuOpen ? { rotate: -45, translateY: 0 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-brand-black z-40 flex flex-col items-start justify-center px-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Yellow decorative lines */}
            <motion.div
              className="absolute top-0 left-0 w-1 h-full bg-brand-yellow"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />

            <div className="flex flex-col gap-6 w-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  className="font-poppins font-black text-5xl text-white hover:text-brand-yellow transition-colors duration-200 tracking-tight"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  data-hover
                >
                  {link}
                </motion.a>
              ))}
            </div>

            <motion.button
              className="mt-12 bg-brand-yellow text-brand-black font-poppins font-bold text-sm tracking-widest px-8 py-3 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              data-hover
            >
              EXPLORE
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MagneticLink({ label }: { label: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) * 0.3;
    const y = (e.clientY - centerY) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      href="#"
      className="font-poppins font-bold text-xs tracking-widest text-white/70 hover:text-white transition-colors duration-200 relative group"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-hover
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-yellow group-hover:w-full transition-all duration-300" />
    </motion.a>
  );
}
