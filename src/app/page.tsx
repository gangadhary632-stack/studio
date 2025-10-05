"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  AuthError,
} from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import { EduQuestLogo } from "@/components/edutech-logo";
import { useToast } from "@/hooks/use-toast";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Google</title>
    <path
      d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.08-2.58 1.98-4.84 1.98-5.84 0-10.6-4.52-10.6-10.1s4.76-10.1 10.6-10.1c3.28 0 5.21 1.25 6.4 2.39l2.84-2.73C19.5 1.96 16.46 0 12.48 0 5.88 0 0 5.51 0 12.3s5.88 12.3 12.48 12.3c7.2 0 12.04-4.79 12.04-12.55 0-.73-.06-1.29-.18-1.82z"
      fill="#4285F4"
    />
  </svg>
);

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleAuthError = (error: AuthError) => {
    let errorMessage = "An unexpected error occurred.";
    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage =
          "This email is already in use. Please try logging in.";
        break;
      case "auth/invalid-email":
        errorMessage = "Please enter a valid email address.";
        break;
      case "auth/weak-password":
        errorMessage = "The password must be at least 6 characters long.";
        break;
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
        errorMessage = "Invalid email or password.";
        break;
      case "auth/popup-closed-by-user":
        errorMessage = "Google sign-in was cancelled.";
        break;
      default:
        errorMessage = error.message;
        break;
    }
    toast({
      variant: "destructive",
      title: "Authentication Failed",
      description: errorMessage,
    });
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (activeTab === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (userCredential.user) {
          await updateProfile(userCredential.user, { displayName: name });
        }
      }
      router.push("/dashboard");
    } catch (error) {
      handleAuthError(error as AuthError);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      handleAuthError(error as AuthError);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center space-y-2 text-center mb-6">
            <div className="flex items-center gap-2 text-primary">
            <EduQuestLogo className="h-12 w-auto" />
            <h1 className="text-5xl font-bold font-headline">EduQuest</h1>
            </div>
            <p className="text-muted-foreground md:text-xl">
            Challenge your mind. Climb the leaderboard.
            </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Create Account</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <form onSubmit={handleEmailAuth}>
                <CardHeader>
                  <CardTitle>Welcome Back</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-4">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    Sign In
                  </Button>
                   <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
                    <GoogleIcon className="mr-2 h-5 w-5" />
                    Sign in with Google
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card>
              <form onSubmit={handleEmailAuth}>
                <CardHeader>
                  <CardTitle>Create an Account</CardTitle>
                  <CardDescription>
                    Fill in the details below to create your new account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="Jane Doe"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-4">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    Create Account
                  </Button>
                  <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
                    <GoogleIcon className="mr-2 h-5 w-5" />
                    Sign up with Google
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}