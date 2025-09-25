"use client";

import Link from "next/link";
import { useUser } from "@/context/user-context";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {user?.name || "Player"}!
        </h1>
        <p className="text-muted-foreground">
          Ready to challenge your mind today?
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((feature) => (
          <Link href={feature.href} key={feature.title} legacyBehavior>
            <a className="block rounded-lg transition-transform duration-200 hover:scale-[1.02]">
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
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
