import { cn } from "@/lib/utils";

export function ProfileLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(className)}
      aria-label="Profile Logo"
    >
      <path
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 4a3 3 0 1 1-3 3a3 3 0 0 1 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.98 4-3.08 6-3.08s5.97 1.1 6 3.08a7.2 7.2 0 0 1-6 3.22z"
      />
    </svg>
  );
}
