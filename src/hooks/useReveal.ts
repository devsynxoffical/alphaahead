import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Fades/slides in every `.reveal` element when it scrolls into view.
 * Content is fully visible without JS (the hiding CSS only applies under html.aa-js).
 */
export default function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    // Wait a frame so the new route has rendered.
    const id = requestAnimationFrame(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => io.observe(el));
    });
    return () => {
      cancelAnimationFrame(id);
      io.disconnect();
    };
  }, [pathname]);
}
