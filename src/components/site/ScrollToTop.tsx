import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router keeps the scroll position across route changes, so opening
// /projects from the bottom of the home page would land at the bottom. Reset
// to the top on every path change, except when the navigation asks for a
// specific section (HomePage handles that via `state.scrollTo`).
export function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if ((state as { scrollTo?: string } | null)?.scrollTo) return;
    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
}
