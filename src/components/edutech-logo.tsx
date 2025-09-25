import { cn } from "@/lib/utils";

export function EdutechLogo({ className }: { className?: string }) {
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
      <path d="M22 10.5V12a10 10 0 1 1-10-10 10.15 10.15 0 0 1 3.13.5" />
      <path d="M4 19.5V15a2 2 0 0 1 2-2h3.13" />
      <path d="M4 12V7a2 2 0 0 1 2-2h6.13" />
      <path d="M18 12.5v-3.75a2 2 0 0 0-2-2H8.25" />
      <path d="M12 2v2" />
      <path d="m13 14-4 7h8l-4-7Z" />
      <path d="M18 22h-1.5" />
      <path d="M22 14h-2" />
      <path d="m20.5 18.5-1-1" />
    </svg>
  );
}
