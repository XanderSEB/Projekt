import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll sofort nach oben, wenn sich die Route ändert
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


