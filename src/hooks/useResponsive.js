'use client';
import { useState, useEffect } from 'react';

// SSR-safe: render with a desktop default on the server and on the first client
// paint (so markup matches and hydration doesn't warn), then correct on mount.
const useResponsive = () => {
  const [width, setWidth] = useState(1024);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    width,
  };
};

export default useResponsive;