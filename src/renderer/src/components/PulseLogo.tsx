interface PulseLogoProps {
  size?: number;
  className?: string;
}

export function PulseLogo({ size = 100, className = '' }: PulseLogoProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4169E1" />
            <stop offset="50%" stopColor="#1E90FF" />
            <stop offset="100%" stopColor="#00BFFF" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#pulseGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
          className="animate-pulse-slow"
        />
        
        {/* Inner ring */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="url(#pulseGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />
        
        {/* Central pulse icon */}
        <g filter="url(#glow)">
          {/* Pulse wave lines */}
          <path
            d="M20 50 L35 50 L42 30 L50 70 L58 50 L65 50 L75 50"
            stroke="url(#pulseGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Secondary pulse wave */}
          <path
            d="M25 50 L32 50 L38 38 L45 62 L52 50 L60 50"
            stroke="url(#pulseGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.5"
          />
        </g>
        
        {/* Decorative dots */}
        <circle cx="50" cy="15" r="2" fill="#4169E1" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="85" r="2" fill="#4169E1" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="15" cy="50" r="2" fill="#1E90FF" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="85" cy="50" r="2" fill="#1E90FF" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" begin="1.5s" />
        </circle>
      </svg>
    </div>
  );
}
