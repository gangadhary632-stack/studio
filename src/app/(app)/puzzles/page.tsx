import { PuzzleGenerator } from "./puzzle-generator";

export default function PuzzlesPage() {
  return (
    <div className="flex flex-col gap-8">
       <div>
        <h1 className="text-3xl font-bold tracking-tight">Puzzle Generator</h1>
        <p className="text-muted-foreground">
          Use our AI to generate a brain-teasing puzzle based on your desired difficulty.
        </p>
      </div>
      <PuzzleGenerator />
    </div>
  );
}
