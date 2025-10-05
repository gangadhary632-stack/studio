import { cn } from "@/lib/utils";

export function EduQuestLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-auto h-8", className)}
      aria-label="EduQuest Logo"
    >
      <defs>
        <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A90E2" />
          <stop offset="100%" stopColor="#357ABD" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>
      </defs>
      
      {/* Globe Sphere */}
      <circle cx="12" cy="12" r="10" fill="url(#oceanGradient)" stroke="#357ABD" strokeWidth="0.5"/>
      <circle cx="12" cy="12" r="10" fill="url(#glow)" opacity="0.5"/>

      {/* Continents */}
      <path
        d="M10 5.5 C 9 6, 8 7, 7.5 8.5 S 8 10, 9 11 M 7 15 C 7.5 14, 8.5 13.5, 9.5 13.5 C 11 13.5, 11.5 14.5, 11 16"
        fill="#98C9A3"
        stroke="#77B588"
        strokeWidth="0.5"
      />
      <path
        d="M13 5 C 14 5, 15 6, 16 7 C 17 8, 17.5 9, 17 10.5 C 16.5 12, 15 12, 14 11.5 L 13 11 Z"
        fill="#98C9A3"
        stroke="#77B588"
        strokeWidth="0.5"
      />
      <path
        d="M14 13.5 C 15.5 13, 17 14, 16.5 16 C 16 18, 14 19, 13 18.5 C 12 18, 12.5 16, 13.5 15 Z"
        fill="#98C9A3"
        stroke="#77B588"
        strokeWidth="0.5"
      />

       {/* Orbital Lines */}
      <ellipse cx="12" cy="12" rx="4" ry="10.5" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" transform="rotate(-45 12 12)" />
    </svg>
  );
}
