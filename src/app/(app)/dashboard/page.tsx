"use client";

import { useState } from "react";
import Link from "next/link";
import { useUser } from "@/firebase";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Lightbulb, Puzzle, Trophy, ArrowRight } from "lucide-react";

const featureCards = [
  {
    title: "Take a Quiz",
    href: "/quiz",
    icon: Lightbulb,
    description: "Test your knowledge on various topics.",
    cta: "Start Quiz",
  },
  {
    title: "Solve a Puzzle",
    href: "/puzzles",
    icon: Puzzle,
    description: "Challenge your logic and reasoning skills.",
    cta: "Generate Puzzle",
  },
  {
    title: "View Leaderboard",
    href: "/leaderboard",
    icon: Trophy,
    description: "See how you stack up against others.",
    cta: "View Rankings",
  },
];

const classes = ["6th", "7th", "8th", "9th", "10th", "11th", "12th"];

export default function DashboardPage() {
  const { user } = useUser();
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {user?.displayName || user?.email || "Player"}!
        </h1>
        <p className="text-muted-foreground">
          Ready to challenge your mind today?
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Your Class</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-w-xs space-y-2">
            <Label htmlFor="class-select">Class</Label>
            <Select onValueChange={setSelectedClass}>
              <SelectTrigger id="class-select">
                <SelectValue placeholder="Choose your grade level" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((grade) => (
                  <SelectItem key={grade} value={grade}>
                    {grade} Grade
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {selectedClass && (
        <div className="animate-in fade-in-50">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            For {selectedClass} Grade
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <Link href={feature.href} key={feature.title} className="block rounded-lg transition-transform duration-200 hover:scale-[1.02]">
                <Card className="h-full hover:border-primary">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium">
                      {feature.title}
                    </CardTitle>
                    <feature.icon className="h-6 w-6 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center font-semibold text-primary">
                      {feature.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
