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
      {/* Graduation Cap */}
      <path d="M22 10l-10-5-10 5 10 5 10-5z" />
      <path d="M6 12v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-5" />
      <path d="M19.5 10.5v.5" />
      <path d="M22 10l-10 5" />
      
      {/* Book */}
      <path d="M4 19.5V15a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5" />
      <path d="M4 15V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9" />
      <path d="M12 4v16" />
    </svg>
  );
}
