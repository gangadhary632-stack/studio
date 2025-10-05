import { cn } from "@/lib/utils";

export function LeaderboardLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
      aria-label="Leaderboard Logo"
    >
      <path
        d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"
        fill="#4CAF50"
        stroke="none"
      />
      <path d="M12 6.13l-1.94 4L6 10.5l3.5 3.4-1 4.5 3.5-2 3.5 2-1-4.5 3.5-3.4-4-0.37-1.94-4z" fill="#FFC107" stroke="none" />
      <path d="M12 11.5a4 4 0 0 1-4-4V6h8v1.5a4 4 0 0 1-4 4z" fill="#FFB300" stroke="none" />
      <rect x="10" y="15" width="4" height="3" rx="1" fill="#FFC107" stroke="none"/>
    </svg>
  );
}
