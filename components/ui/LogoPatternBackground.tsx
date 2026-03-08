'use client';

import LogoSymbol from '@/components/LogoSymbol';

interface LogoPatternBackgroundProps {
  count?: number;
  className?: string;
  opacity?: number;
  /** Use white symbols (for dark bg sections) */
  light?: boolean;
}

// Deterministic pseudo-random positions so SSR = CSR
const ITEMS = [
  { x: 5, y: 8, size: 40, delay: 0, duration: 25 },
  { x: 22, y: 65, size: 35, delay: 3, duration: 30 },
  { x: 45, y: 20, size: 28, delay: 6, duration: 22 },
  { x: 68, y: 75, size: 45, delay: 2, duration: 28 },
  { x: 85, y: 15, size: 32, delay: 5, duration: 26 },
  { x: 15, y: 40, size: 30, delay: 8, duration: 32 },
  { x: 55, y: 50, size: 38, delay: 1, duration: 24 },
  { x: 78, y: 42, size: 26, delay: 4, duration: 27 },
  { x: 92, y: 60, size: 34, delay: 7, duration: 29 },
  { x: 35, y: 85, size: 42, delay: 2, duration: 31 },
  { x: 60, y: 90, size: 30, delay: 9, duration: 23 },
  { x: 10, y: 90, size: 36, delay: 4, duration: 26 },
];

export default function LogoPatternBackground({
  count = 8,
  className = '',
  opacity = 0.04,
  light = false,
}: LogoPatternBackgroundProps) {
  const items = ITEMS.slice(0, count);
  const starColor = light ? 'rgba(255,255,255,0.6)' : 'rgba(28,43,90,0.5)';
  const dotColor = light ? 'rgba(255,255,255,0.4)' : 'rgba(139,35,50,0.4)';

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="absolute animate-logo-drift"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          <LogoSymbol
            size={item.size}
            starColor={starColor}
            dotColor={dotColor}
          />
        </div>
      ))}
    </div>
  );
}
