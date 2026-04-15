import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

export default function ScrollReveal({
  children,
  delay = 0,
  distance = 28,
  duration = 0.62,
  threshold = 0.08,
  once = true,
  sx = {},
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px 10% 0px',
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <Box
      ref={elementRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : `translate3d(0, ${distance}px, 0) scale(0.985)`,
        filter: isVisible ? 'blur(0px)' : 'blur(8px)',
        transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, filter ${duration}s ease ${delay}s`,
        willChange: 'opacity, transform, filter',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
