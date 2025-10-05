import { cn } from "@/lib/utils";

export function QuizLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn(className)}
      aria-label="Quiz Logo"
    >
      <defs>
        <radialGradient id="halftone" cx="0.25" cy="0.25" r="0.2">
            <stop offset="10%" stopColor="rgba(0,0,0,0.3)" />
            <stop offset="90%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
         <pattern id="halftone-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1.5" fill="rgba(0,0,0,0.15)"/>
        </pattern>
      </defs>
      
      <g transform="translate(0, 5)">
        {/* Yellow explosion */}
        <path
          d="M50 5 L58 25 L80 20 L70 38 L90 42 L75 52 L90 62 L70 65 L80 82 L58 78 L50 95 L42 78 L20 82 L30 65 L10 62 L25 52 L10 42 L30 38 L20 20 L42 25 Z"
          fill="#FFD600"
          stroke="#000"
          strokeWidth="1.5"
        />

        {/* Blue cloud */}
        <path
          d="M50,22 C35,22 30,32 35,45 C30,50 25,50 28,60 C25,70 35,78 50,78 C65,78 75,70 72,60 C75,50 70,50 65,45 C70,32 65,22 50,22Z"
          fill="#03A9F4"
          stroke="#000"
          strokeWidth="1.5"
        />
        
        {/* Halftone effect */}
        <rect x="10" y="10" width="80" height="80" fill="url(#halftone-pattern)" mask="url(#cloud-mask)"/>

        {/* Text "QUIZ!" */}
        <text
          x="50"
          y="54"
          fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
          fontSize="30"
          fill="#FFD600"
          stroke="#000000"
          strokeWidth="2"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="-1"
        >
          QUIZ!
        </text>
      </g>
    </svg>
  );
}
