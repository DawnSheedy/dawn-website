
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

// Should motion be cancelled?
let cancelMotion = mediaQuery.matches;
mediaQuery.addEventListener('change', () => {
  cancelMotion = mediaQuery.matches;
});

export default () => { return cancelMotion; }