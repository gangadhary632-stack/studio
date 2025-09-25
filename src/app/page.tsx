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
import { BrainCircuit, LogIn } from "lucide-react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { login } = useUser();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      login(name);
      router.push("/dashboard");
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="flex items-center gap-2 text-primary">
          <BrainCircuit className="h-12 w-12" />
          <h1 className="text-5xl font-bold font-headline">BrainBlitz</h1>
        </div>
        <p className="text-muted-foreground md:text-xl">
          Challenge your mind. Climb the leaderboard.
        </p>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your name and phone number to start.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="grid gap-4">
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
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="555-555-5555"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" variant="default">
                <LogIn className="mr-2 h-4 w-4" />
                Continue
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
}
