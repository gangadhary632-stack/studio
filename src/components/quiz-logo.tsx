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
        <radialGradient id="grad-bg" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{stopColor: '#5EE6D0', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#38A89D', stopOpacity: 1}} />
        </radialGradient>
      </defs>
      
      {/* Background */}
      <rect width="100" height="100" fill="url(#grad-bg)" />

      {/* Comic book style explosion */}
      <path
        d="M50 10 L60 30 L80 35 L65 50 L70 70 L50 60 L30 70 L35 50 L20 35 L40 30 Z"
        fill="#F94144"
        stroke="#231F20"
        strokeWidth="2"
      />
      
       <path
        d="M50 15 L58 32 L75 36 L62 48 L66 65 L50 57 L34 65 L38 48 L25 36 L42 32 Z"
        fill="#F3722C"
        stroke="none"
      />

      {/* Text "QUIZ" */}
      <text
        x="50"
        y="55"
        fontFamily="Impact, sans-serif"
        fontSize="24"
        fill="#FCEE21"
        stroke="#231F20"
        strokeWidth="1.5"
        textAnchor="middle"
        dominantBaseline="middle"
        transform="rotate(-5 50 50)"
      >
        QUIZ
      </text>
    </svg>
  );
}
