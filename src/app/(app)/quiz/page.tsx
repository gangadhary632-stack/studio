"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { quizzes, type QuizCategory } from "./data";
import { QuizRunner } from "./quiz-runner";

const quizCategories: (QuizCategory & { imageId: string })[] = [
  {
    slug: "general-knowledge",
    title: "General Knowledge",
    description: "A mix of everything. How much do you know?",
    imageId: "quiz-general",
  },
  {
    slug: "math-whiz",
    title: "Math Whiz",
    description: "Numbers, patterns, and logic. Put your brain to the test.",
    imageId: "quiz-math",
  },
  {
    slug: "science-buff",
    title: "Science Buff",
    description: "From biology to black holes, explore the universe.",
    imageId: "quiz-science",
  },
];

export default function QuizPage() {
  const [activeQuiz, setActiveQuiz] = useState<QuizCategory | null>(null);

  if (activeQuiz) {
    const questions = quizzes[activeQuiz.slug];
    return (
      <QuizRunner
        quizTitle={activeQuiz.title}
        questions={questions}
        onFinish={() => setActiveQuiz(null)}
      />
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Quizzes</h1>
        <p className="text-muted-foreground">
          Choose a category to start a new quiz. Good luck!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quizCategories.map((category) => {
          const image = PlaceHolderImages.find(
            (img) => img.id === category.imageId
          );
          return (
            <Card key={category.title} className="flex flex-col">
              <CardHeader>
                {image && (
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle>{category.title}</CardTitle>
                <CardDescription className="mt-2">
                  {category.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => setActiveQuiz(category)}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Start Quiz
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
