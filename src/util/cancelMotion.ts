/* Exports a function that allows you to retrieve current reduced motion setting. */
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

// Should motion be cancelled?
let isMotionCancelled = mediaQuery.matches;
mediaQuery.addEventListener('change', () => {
  isMotionCancelled = mediaQuery.matches;
});

export const cancelMotion = () => { return isMotionCancelled; }