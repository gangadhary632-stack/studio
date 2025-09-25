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
      {/* Globe */}
      <circle cx="12" cy="8" r="6" />
      <line x1="6" y1="8" x2="18" y2="8" />
      <path d="M12 2a8.75 8.75 0 0 0 0 12 8.75 8.75 0 0 0 0-12" />

      {/* Book */}
      <path d="M4 19.5V15a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5" />
      <path d="M4 15V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9" />
      <path d="M12 4v16" />
    </svg>
  );
}
