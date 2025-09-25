"use client";

import { useState } from "react";
import { type Question } from "./data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Check, X, PartyPopper, RotateCcw } from "lucide-react";

interface QuizRunnerProps {
  quizTitle: string;
  questions: Question[];
  onFinish: () => void;
}

type AnswerState = "unanswered" | "correct" | "incorrect";

export function QuizRunner({
  quizTitle,
  questions,
  onFinish,
}: QuizRunnerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answerStates, setAnswerStates] = useState<Record<number, AnswerState>>(
    {}
  );

  const currentQuestion = questions[currentQuestionIndex];
  const isFinished = currentQuestionIndex >= questions.length;

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      // Mark as finished
      setCurrentQuestionIndex(questions.length);
    }
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.answer;
    setScore(score + (isCorrect ? 1 : 0));
    setIsSubmitted(true);
    setAnswerStates({
      ...answerStates,
      [currentQuestionIndex]: isCorrect ? "correct" : "incorrect",
    });
  };

  const getOptionClassName = (option: string) => {
    if (!isSubmitted) return "";
    if (option === currentQuestion.answer) return "border-green-500 text-green-700";
    if (option === selectedAnswer) return "border-red-500 text-red-700";
    return "";
  };
  
  const getOptionIcon = (option: string) => {
    if (!isSubmitted) return null;
    if (option === currentQuestion.answer) return <Check className="h-5 w-5 text-green-500" />;
    if (option === selectedAnswer) return <X className="h-5 w-5 text-red-500" />;
    return null;
  }

  if (isFinished) {
    return (
      <Card className="w-full max-w-2xl mx-auto text-center">
        <CardHeader>
          <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
          <CardDescription>You've finished the {quizTitle} quiz.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <PartyPopper className="mx-auto h-16 w-16 text-primary" />
          <p className="text-2xl font-bold">
            Your Score: {score} / {questions.length}
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Progress value={(score / questions.length) * 100} className="w-1/2" />
            <span className="font-semibold">{Math.round((score / questions.length) * 100)}%</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button onClick={onFinish}>
             <RotateCcw className="mr-2 h-4 w-4" />
            Back to Categories
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col gap-8">
       <div>
        <h1 className="text-3xl font-bold tracking-tight">{quizTitle}</h1>
        <div className="mt-2 flex items-center gap-4">
           <Progress value={progress} className="w-full max-w-sm" />
           <p className="text-sm font-medium text-muted-foreground">Question {currentQuestionIndex + 1} of {questions.length}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {currentQuestion.id}. {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswer ?? ""}
            onValueChange={setSelectedAnswer}
            disabled={isSubmitted}
          >
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <Label
                  key={option}
                  htmlFor={option}
                  className={cn(
                    "flex items-center justify-between rounded-md border p-4 transition-all hover:bg-secondary/50",
                    getOptionClassName(option)
                  )}
                >
                  <span className="font-semibold">{option}</span>
                   <div className="flex items-center gap-4">
                    {getOptionIcon(option)}
                    <RadioGroupItem value={option} id={option} />
                   </div>
                </Label>
              ))}
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter className="justify-end">
          {isSubmitted ? (
            <Button onClick={handleNext} className="w-full sm:w-auto">
              {currentQuestionIndex === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!selectedAnswer} className="w-full sm:w-auto">
              Submit Answer
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
