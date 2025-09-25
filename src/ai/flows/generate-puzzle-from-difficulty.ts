'use server';
/**
 * @fileOverview Puzzle generation flow that suggests a puzzle appropriate for a given difficulty level.
 *
 * - generatePuzzleFromDifficulty - A function that generates a puzzle based on the provided difficulty level.
 * - GeneratePuzzleInput - The input type for the generatePuzzleFromDifficulty function.
 * - GeneratePuzzleOutput - The return type for the generatePuzzleFromDifficulty function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePuzzleInputSchema = z.object({
  difficultyLevel: z
    .number()
    .describe('The difficulty level of the puzzle (1-10, 1 being easiest).'),
});
export type GeneratePuzzleInput = z.infer<typeof GeneratePuzzleInputSchema>;

const GeneratePuzzleOutputSchema = z.object({
  puzzleType: z.string().describe('The type of puzzle (e.g., logic, spatial, memory).'),
  puzzleDescription: z.string().describe('A description of the puzzle.'),
  solution: z.string().describe('The solution to the puzzle.'),
});
export type GeneratePuzzleOutput = z.infer<typeof GeneratePuzzleOutputSchema>;

export async function generatePuzzleFromDifficulty(input: GeneratePuzzleInput): Promise<GeneratePuzzleOutput> {
  return generatePuzzleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePuzzlePrompt',
  input: {schema: GeneratePuzzleInputSchema},
  output: {schema: GeneratePuzzleOutputSchema},
  prompt: `You are an expert puzzle generator, skilled at creating engaging puzzles for various skill levels.

  Based on the difficulty level requested, generate a puzzle that is appropriate for that level. Provide a puzzleType, puzzleDescription, and solution.

  Difficulty Level: {{{difficultyLevel}}}
  `,
});

const generatePuzzleFlow = ai.defineFlow(
  {
    name: 'generatePuzzleFlow',
    inputSchema: GeneratePuzzleInputSchema,
    outputSchema: GeneratePuzzleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
