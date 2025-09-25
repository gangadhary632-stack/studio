import { LoaderCircle } from "lucide-react";

export function FullScreenLoader() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <LoaderCircle className="h-10 w-10 animate-spin text-primary" />
    </div>
  );
}
