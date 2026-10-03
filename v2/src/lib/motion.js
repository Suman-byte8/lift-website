// Shared Framer Motion variants. Luxury = slow, subtle, smooth.
export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export const stagger = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const revealMask = {
  hidden: { clipPath: "inset(12% 0% 12% 0% round 28px)", opacity: 0.4, scale: 1.04 },
  show: { clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1, scale: 1, transition: { duration: 1.4, ease } },
};

export const viewport = { once: true, amount: 0.25 };
