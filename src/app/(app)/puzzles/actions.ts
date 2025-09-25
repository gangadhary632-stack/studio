"use server";

import { generatePuzzleFromDifficulty, GeneratePuzzleOutput } from "@/ai/flows/generate-puzzle-from-difficulty";
import { z } from "zod";

const puzzleSchema = z.object({
  difficulty: z.coerce.number().min(1).max(10),
});

export interface PuzzleState {
    puzzle?: GeneratePuzzleOutput;
    error?: string;
    message?: string;
}

export async function generatePuzzle(
  prevState: PuzzleState,
  formData: FormData
): Promise<PuzzleState> {
  try {
    const validatedFields = puzzleSchema.safeParse({
      difficulty: formData.get("difficulty"),
    });

    if (!validatedFields.success) {
      return {
        error: "Invalid difficulty level.",
      };
    }
    
    const difficultyLevel = validatedFields.data.difficulty;
    const puzzle = await generatePuzzleFromDifficulty({ difficultyLevel });
    
    return { puzzle, message: "New puzzle generated!" };
  } catch (e) {
    console.error(e);
    return {
      error: "Failed to generate puzzle. Please try again later.",
    };
  }
}
