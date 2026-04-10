import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * OhWise logo — inline SVG matching the favicon exactly.
 * Gradient circle + O-ring + center node + 4 satellite nodes + connecting lines.
 */
const Logo: React.FC<LogoProps> = ({ size = 32, className = "" }) => {
  const id = "ohwise-logo-grad";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="OhWise"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      {/* Gradient background circle */}
      <circle cx="16" cy="16" r="14" fill={`url(#${id})`} />

      {/* O-ring */}
      <circle cx="16" cy="16" r="8" fill="none" stroke="white" strokeWidth="2.5" />

      {/* Connecting lines (satellite → center) */}
      <line x1="16" y1="9"  x2="16" y2="16" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="22" y1="16" x2="16" y2="16" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="16" y1="23" x2="16" y2="16" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="10" y1="16" x2="16" y2="16" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />

      {/* Center node */}
      <circle cx="16" cy="16" r="2.5" fill="white" />

      {/* Satellite nodes */}
      <circle cx="16" cy="9"  r="1.5" fill="white" />
      <circle cx="22" cy="16" r="1.5" fill="white" />
      <circle cx="16" cy="23" r="1.5" fill="white" />
      <circle cx="10" cy="16" r="1.5" fill="white" />
    </svg>
  );
};

export default Logo;
