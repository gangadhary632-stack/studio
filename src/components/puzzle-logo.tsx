import { cn } from "@/lib/utils";

export function PuzzleLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={cn(className)}
      aria-label="Puzzle Logo"
    >
      <defs>
        <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#28a745" />
          <stop offset="100%" stopColor="#218838" />
        </linearGradient>
        <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#007bff" />
          <stop offset="100%" stopColor="#0069d9" />
        </linearGradient>
        <linearGradient id="gradYellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffc107" />
          <stop offset="100%" stopColor="#e0a800" />
        </linearGradient>
        <linearGradient id="gradRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dc3545" />
          <stop offset="100%" stopColor="#c82333" />
        </linearGradient>
        <filter id="dropShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
            <feOffset dx="1" dy="1" result="offsetblur"/>
             <feComponentTransfer>
                <feFuncA type="linear" slope="0.7"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
      </defs>

      <g filter="url(#dropShadow)" stroke="#000" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Green piece */}
        <path d="M12.5 3.5 C 11 3.5 11 5 9.5 5 C 8 5 8 3.5 6.5 3.5 C 5 3.5 5 5 5 6.5 C 5 8 3.5 8 3.5 9.5 C 3.5 11 5 11 5 12.5 L 12.5 12.5 Z" fill="url(#gradGreen)"/>
        {/* Blue piece */}
        <path d="M20.5 9.5 C 20.5 11 19 11 19 12.5 C 19 14 20.5 14 20.5 15.5 C 20.5 17 19 17 19 18.5 C 17.5 18.5 17.5 17 16 17 C 14.5 17 14.5 18.5 13 18.5 L 13 9.5 Z" fill="url(#gradBlue)"/>
        {/* Yellow piece */}
        <path d="M11 11.5 C 9.5 11.5 9.5 10 8 10 C 6.5 10 6.5 11.5 5 11.5 L 5 18.5 C 6.5 18.5 6.5 17 8 17 C 9.5 17 9.5 18.5 11 18.5 Z" fill="url(#gradYellow)"/>
        {/* Red piece */}
        <path d="M18.5 11.5 C 17 11.5 17 13 15.5 13 C 14 13 14 11.5 12.5 11.5 L 12.5 4.5 C 14 4.5 14 6 15.5 6 C 17 6 17 4.5 18.5 4.5 Z" fill="url(#gradRed)" transform="rotate(180 15.5 8)"/>
      </g>
    </svg>
  );
}
