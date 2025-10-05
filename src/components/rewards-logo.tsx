import { cn } from "@/lib/utils";

export function RewardsLogo({ className }: { className?: string }) {
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
      aria-label="Rewards Logo"
    >
      <path
        d="M12 2l2.5 5 5.5.8-4 3.9.9 5.4-4.9-2.6-4.9 2.6.9-5.4-4-3.9 5.5-.8z"
        fill="#FFD700"
        stroke="#DAA520"
        strokeWidth="1"
      />
      <path d="M12 9v2m-2-1h4" stroke="#F0E68C" strokeWidth="0.5" />
      <rect x="4" y="11" width="16" height="11" rx="2" fill="#E57373" stroke="#C62828" strokeWidth="1" />
      <path d="M12 11v11" stroke="#A5D6A7" strokeWidth="2" />
      <path d="M4 16h16" stroke="#A5D6A7" strokeWidth="2" />
      <path d="M8 11a4 4 0 0 0-4 4v0" stroke="#A5D6A7" strokeWidth="2" fill="none"/>
      <path d="M16 11a4 4 0 0 1 4 4v0" stroke="#A5D6A7" strokeWidth="2" fill="none"/>
    </svg>
  );
}
