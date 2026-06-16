export const easeOutExpo = [0.22, 1, 0.36, 1];

export const springSnappy = { type: 'spring', stiffness: 260, damping: 22 };
export const springSoft = { type: 'spring', stiffness: 120, damping: 18 };
export const springBouncy = { type: 'spring', stiffness: 400, damping: 25 };

export const viewport = { once: true, amount: 0.15, margin: '-40px' };
export const viewportHero = { once: true, amount: 0.3 };

export const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: easeOutExpo },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: easeOutExpo },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: springSoft,
  },
};

export const sectionTitle = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const titleUnderline = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, delay: 0.2, ease: easeOutExpo },
  },
};

export const staggerContainer = (stagger = 0.08, delay = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springSnappy,
  },
};

export const cardReveal = (index = 0) => ({
  hidden: { opacity: 0, y: 40, rotateX: 12, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: index * 0.12,
      duration: 0.65,
      ease: easeOutExpo,
    },
  },
});

export const reducedMotionProps = (reduceMotion) =>
  reduceMotion
    ? {
        initial: false,
        animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' },
        transition: { duration: 0 },
      }
    : {};
