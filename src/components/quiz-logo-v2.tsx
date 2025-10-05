import { cn } from "@/lib/utils";

export function QuizLogoV2({ className }: { className?: string }) {
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
      aria-label="Quiz Logo V2"
    >
        {/* Orange diamond */}
        <path d="M10 17.5 7.5 20 5 17.5 7.5 15z" fill="#f97316" stroke="#f97316" />
        {/* Green circle */}
        <circle cx="12" cy="17.5" r="2.5" fill="#22c55e" stroke="#22c55e"/>
        {/* Blue diamond */}
        <path d="M19 17.5 16.5 20 14 17.5 16.5 15z" fill="#3b82f6" stroke="#3b82f6"/>

        {/* Icons inside shapes */}
        <path d="M7.5 16.5v1a.5.5 0 0 0 .5.5h0a.5.5 0 0 0 .5-.5V17a.5.5 0 0 0-.5-.5.5.5 0 0 1-1 0 .5.5 0 0 0-.5.5" stroke="#fff" strokeWidth="1.2" fill="none" />
        <path d="m11 17.5 1 1 2-2" stroke="#fff" strokeWidth="1.5" fill="none" />
        <path d="M16.5 16v2" stroke="#fff" strokeWidth="1.5" />
        <path d="M16.5 19v.5" stroke="#fff" strokeWidth="1.5" />
      
        {/* Text "Quiz" */}
        <text x="3.5" y="12" fontFamily="sans-serif" fontSize="8px" fontWeight="bold" fill="#dc2626" stroke="#444" strokeWidth="0.3">
            quiz
        </text>

    </svg>
  );
}
