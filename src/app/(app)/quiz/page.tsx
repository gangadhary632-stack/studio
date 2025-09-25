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
import { Lightbulb } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const quizCategories = [
  {
    title: "General Knowledge",
    description: "A mix of everything. How much do you know?",
    image: PlaceHolderImages.find(img => img.id === 'quiz-general'),
  },
  {
    title: "Math Whiz",
    description: "Numbers, patterns, and logic. Put your brain to the test.",
    image: PlaceHolderImages.find(img => img.id === 'quiz-math'),
  },
  {
    title: "Science Buff",
    description: "From biology to black holes, explore the universe.",
    image: PlaceHolderImages.find(img => img.id === 'quiz-science'),
  },
];

export default function QuizPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Quizzes</h1>
        <p className="text-muted-foreground">
          Choose a category to start a new quiz. Good luck!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quizCategories.map((category) => (
          <Card key={category.title} className="flex flex-col">
            <CardHeader>
              {category.image && (
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md">
                   <Image
                    src={category.image.imageUrl}
                    alt={category.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={category.image.imageHint}
                  />
                </div>
              )}
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle>{category.title}</CardTitle>
              <CardDescription className="mt-2">{category.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Start Quiz</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Feature Coming Soon!</AlertTitle>
        <AlertDescription>
          The interactive quiz sessions are being developed. For now, enjoy browsing the categories!
        </AlertDescription>
      </Alert>
    </div>
  );
}
