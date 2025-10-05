import { cn } from "@/lib/utils";

export function DashboardLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(className)}
      aria-label="Dashboard Logo"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8D5E2" stopOpacity="1" />
          <stop offset="100%" stopColor="#D4EAF1" stopOpacity="1" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
            <feOffset dx="1" dy="1" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
      </defs>
      <circle cx="12" cy="12" r="11" fill="url(#grad1)" filter="url(#shadow)"/>
      <g stroke="#2B6777" strokeWidth="1.5" fill="#52AB98">
        <rect x="6" y="6" width="5" height="5" rx="1"/>
        <rect x="13" y="6" width="5" height="5" rx="1"/>
        <rect x="6" y="13" width="5" height="5" rx="1"/>
        <rect x="13" y="13" width="5" height="5" rx="1"/>
      </g>
    </svg>
  );
}