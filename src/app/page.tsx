"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/firebase";
import { 
  initiateEmailSignUp,
  initiateEmailSignIn,
} from "@/firebase/non-blocking-login";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, LoaderCircle } from "lucide-react";
import { EduQuestLogo } from "@/components/edutech-logo";
import { useToast } from "@/hooks/use-toast";
import { AuthError } from "firebase/auth";

export default function AuthPage() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleAuthAction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      setIsLoading(true);
      try {
        if (isLoginPage) {
          await initiateEmailSignIn(auth, email, password);
        } else {
          if (!name.trim()) {
             toast({
              variant: "destructive",
              title: "Name is required",
              description: "Please enter your name to create an account.",
            });
            setIsLoading(false);
            return;
          }
          await initiateEmailSignUp(auth, email, password);
          // Here you might want to update the user's profile with the name
        }
        // The onAuthStateChanged listener in UserProvider will handle the redirect
      } catch (error) {
         const authError = error as AuthError;
         toast({
            variant: "destructive",
            title: "Authentication Failed",
            description: authError.message || "An unexpected error occurred.",
        });
        setIsLoading(false);
      }
    }
  };
  
  const toggleAuthMode = () => {
    setIsLoginPage(!isLoginPage);
    setName("");
    setEmail("");
    setPassword("");
    setIsLoading(false);
  }

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
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">{isLoginPage ? "Login" : "Create Account"}</CardTitle>
            <CardDescription>
              {isLoginPage ? "Enter your email and password to start." : "Fill in the details to create your account."}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleAuthAction}>
            <CardContent className="grid gap-4">
              {!isLoginPage && (
                 <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              )}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full" variant="default" disabled={isLoading}>
                {isLoading ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
                {isLoginPage ? "Continue" : "Create Account"}
              </Button>
               <Button type="button" variant="link" size="sm" onClick={toggleAuthMode} disabled={isLoading}>
                {isLoginPage ? "Don't have an account? Create one" : "Already have an account? Log in"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
}
