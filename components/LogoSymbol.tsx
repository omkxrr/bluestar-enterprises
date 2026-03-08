'use client';

/**
 * SVG recreation of the Bluestar Enterprises logo star+dot symbol.
 * Used decoratively across the site as watermarks, background patterns, etc.
 */
export default function LogoSymbol({
  className = '',
  starColor = '#1C2B5A',
  dotColor = '#8B2332',
  size = 100,
}: {
  className?: string;
  starColor?: string;
  dotColor?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * 1.2}
      className={className}
      aria-hidden="true"
    >
      {/* 4-pointed star body */}
      <path
        d="M100 40 C115 80, 145 95, 175 105 C145 115, 115 135, 100 180 C85 135, 55 115, 25 105 C55 95, 85 80, 100 40Z"
        fill={starColor}
      />
      {/* Red dot */}
      <ellipse cx="135" cy="35" rx="14" ry="14" fill={dotColor} />
    </svg>
  );
}

/** Watermark version — semi-transparent for background use */
export function LogoWatermark({ className = '' }: { className?: string }) {
  return (
    <LogoSymbol
      className={`opacity-[0.04] pointer-events-none select-none ${className}`}
      size={500}
    />
  );
}

/** Small inline icon-size logo symbol */
export function LogoIcon({ className = '', size = 28 }: { className?: string; size?: number }) {
  return <LogoSymbol className={className} size={size} />;
}
