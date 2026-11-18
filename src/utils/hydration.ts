/**
 * Pages are prerendered at a fixed desktop width (see scripts/prerender.js) and then hydrated.
 * While hydrating, components must render exactly what the prerender produced, so width-based
 * layouts start at PRERENDER_WIDTH and switch to the real window width right after mount.
 */
export const PRERENDER_WIDTH = 1366;

let hydrating = false;
export const setHydrating = (v: boolean) => {
  hydrating = v;
};

export const initialWidth = () =>
  hydrating || typeof window === 'undefined' ? PRERENDER_WIDTH : window.innerWidth;
