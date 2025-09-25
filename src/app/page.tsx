"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/user-context";
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
import { LogIn } from "lucide-react";
import { EduQuestLogo } from "@/components/edutech-logo";

export default function AuthPage() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const router = useRouter();

  const handleAuthAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      const userName = isLoginPage ? email.split("@")[0] : name;
      login(userName, email);
      router.push("/dashboard");
    }
  };
  
  const toggleAuthMode = () => {
    setIsLoginPage(!isLoginPage);
    setName("");
    setEmail("");
    setPassword("");
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
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.g. value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full" variant="default">
                <LogIn className="mr-2 h-4 w-4" />
                {isLoginPage ? "Continue" : "Create Account"}
              </Button>
               <Button type="button" variant="link" size="sm" onClick={toggleAuthMode}>
                {isLoginPage ? "Don't have an account? Create one" : "Already have an account? Log in"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
}
