"use client";

import { useActionState, useEffect, useState, useRef } from "react";
import { useFormStatus } from "react-dom";
import { generatePuzzle, PuzzleState } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Wand2, LoaderCircle } from "lucide-react";

const initialState: PuzzleState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Wand2 className="mr-2 h-4 w-4" />
      )}
      Generate Puzzle
    </Button>
  );
}

export function PuzzleGenerator() {
  const [state, formAction] = useActionState(generatePuzzle, initialState);
  const { toast } = useToast();
  const [difficulty, setDifficulty] = useState(5);
  const [userAnswer, setUserAnswer] = useState("");
  const { pending } = useFormStatus();
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: state.error,
      });
    }
  }, [state, toast]);
  
  useEffect(() => {
    setUserAnswer("");
  }, [state.puzzle]);


  const handleCheckAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim()) {
      toast({
        variant: "destructive",
        title: "No Answer",
        description: "Please enter an answer.",
      });
      return;
    }
    const isCorrect = state.puzzle?.solution.trim().toLowerCase() === userAnswer.trim().toLowerCase();
    if (isCorrect) {
      toast({
        title: "Correct!",
        description: "You solved the puzzle!",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Incorrect",
        description: "That's not the right answer. Try again!",
      });
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <form action={formAction}>
          <CardHeader>
            <CardTitle>Select Difficulty</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty: {difficulty}</Label>
              <Slider
                id="difficulty"
                name="difficulty"
                min={1}
                max={10}
                step={1}
                value={[difficulty]}
                onValueChange={(value) => setDifficulty(value[0])}
                disabled={pending}
              />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      <div className="min-h-[250px]">
        {pending ? (
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
          </Card>
        ) : state.puzzle ? (
           <Card className="animate-in fade-in-50 flex flex-col">
            <CardHeader>
                <CardTitle className="capitalize">{state.puzzle.puzzleType} Puzzle</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <p className="text-muted-foreground">{state.puzzle.puzzleDescription}</p>
                <form onSubmit={handleCheckAnswer} className="flex items-center gap-2">
                    <Input 
                      placeholder="Enter your answer" 
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      aria-label="Puzzle Answer"
                    />
                    <Button type="submit" variant="secondary">Check</Button>
                </form>
            </CardContent>
            <CardFooter>
                 <Accordion type="single" collapsible className="w-full" ref={accordionRef}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Show Solution</AccordionTrigger>
                        <AccordionContent>
                        {state.puzzle.solution}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardFooter>
           </Card>
        ) : (
          <div className="flex h-full items-center justify-center rounded-lg border border-dashed">
            <div className="text-center text-muted-foreground">
              <p>Your generated puzzle will appear here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
