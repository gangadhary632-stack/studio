import { cn } from "@/lib/utils";

export function QuizLogo({ className }: { className?: string }) {
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
    >
      <path
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"
        fill="#E8EAF6"
        stroke="none"
      />
      <path
        d="M12 17v.01"
        stroke="#3F51B5"
        strokeWidth="2.5"
      />
      <path
        d="M12 13.5a1.5 1.5 0 0 1-1.5-1.5 2.5 2.5 0 1 1 5 0 1.5 1.5 0 0 1-1.5 1.5"
        stroke="#3F51B5"
        strokeWidth="1.5"
        fill="none"
      />
       <path
        d="M10 9 a 2 2 0 1 1 4 0"
        stroke="#FF5722"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
