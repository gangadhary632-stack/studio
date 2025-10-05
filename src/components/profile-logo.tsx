import { cn } from "@/lib/utils";

export function ProfileLogo({ className }: { className?: string }) {
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
      aria-label="Profile Logo"
    >
      <path
        d="M12 2l1.45 4.34-3.45 3.45-3.45-3.45L8 2z"
        fill="#FFC107"
        stroke="none"
      />
      <circle cx="12" cy="14" r="7" fill="#4CAF50" stroke="none" />
      <circle cx="12" cy="12" r="3" fill="#FFC107" stroke="none" />
      <path
        d="M12 15c-1.66 0-3 1.34-3 3v1h6v-1c0-1.66-1.34-3-3-3z"
        fill="#FFB300"
        stroke="none"
      />
    </svg>
  );
}
