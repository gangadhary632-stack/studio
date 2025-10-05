"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EduQuestLogo } from "@/components/edutech-logo";
import { ArrowRight } from "lucide-react";

export default function AuthPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="w-full max-w-md text-center">
        <div className="flex flex-col items-center space-y-2 mb-8">
          <div className="flex items-center gap-2 text-primary">
            <EduQuestLogo className="h-12 w-auto" />
            <h1 className="text-5xl font-bold font-headline">EduQuest</h1>
          </div>
          <p className="text-muted-foreground md:text-xl">
            Challenge your mind. Climb the leaderboard.
          </p>
        </div>

        <Link href="/dashboard" passHref>
          <Button size="lg" className="w-full max-w-xs mx-auto">
            Enter Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
