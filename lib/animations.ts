import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideUp: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const heroWordReveal: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const navbarVariants: Variants = {
  top: {
    backgroundColor: 'rgba(10,10,10,0)',
    borderBottom: '0px solid rgba(255,229,0,0)',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },
  scrolled: {
    backgroundColor: 'rgba(10,10,10,0.98)',
    borderBottom: '1px solid rgba(255,229,0,0.3)',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
  },
};
