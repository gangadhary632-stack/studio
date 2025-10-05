"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/firebase";
import { 
  signInAnonymously,
  AuthError
} from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, LoaderCircle } from "lucide-react";
import { EduQuestLogo } from "@/components/edutech-logo";
import { useToast } from "@/hooks/use-toast";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleGuestLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signInAnonymously(auth);
      router.push("/dashboard");
    } catch (error) {
       const authError = error as AuthError;
       let errorMessage = "An unexpected error occurred.";
       switch (authError.code) {
         default:
           errorMessage = authError.message;
           break;
       }
       toast({
          variant: "destructive",
          title: "Authentication Failed",
          description: errorMessage,
      });
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="flex items-center gap-2 text-primary">
          <EduQuestLogo className="h-12 w-auto" />
          <h1 className="text-5xl font-bold font-headline">EduQuest</h1>
        </div>
        <p className="text-muted-foreground md:text-xl">
          Challenge your mind. Climb the leaderboard.
        </p>
        <div className="w-full max-w-sm pt-6">
          <Button onClick={handleGuestLogin} className="w-full" variant="default" size="lg" disabled={isLoading}>
            {isLoading ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
            Enter as Guest
          </Button>
        </div>
      </div>
    </main>
  );
}
