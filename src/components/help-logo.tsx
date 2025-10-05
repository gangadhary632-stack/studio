import { cn } from '@/lib/utils';

export function HelpLogo({ className }: { className?: string }) {
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
      aria-label="Help Logo"
    >
      <circle cx="12" cy="12" r="10" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="1.5" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" fill="none" stroke="#0EA5E9" strokeWidth="2" />
      <line x1="12" y1="17" x2="12.01" y2="17" stroke="#0EA5E9" strokeWidth="3" />
    </svg>
  );
}
