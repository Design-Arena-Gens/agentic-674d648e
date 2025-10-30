'use client';

import { useEffect, useState } from 'react';

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  formatter?: (value: number) => string;
};

const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

export function AnimatedCounter({ value, duration = 1200, formatter }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = easeOutQuad(progress);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  const formatted = formatter ? formatter(display) : display.toLocaleString();

  return <span>{formatted}</span>;
}
