"use client";

import { useUser } from "@/firebase";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, User as UserIcon } from "lucide-react";

export default function ProfilePage() {
  const userName = 'Guest';
  const userEmail = 'guest@eduquest.com';
  const avatarFallback = 'G';

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground">
          Your personal account details.
        </p>
      </div>

      <Card className="max-w-md">
        <CardHeader className="flex flex-row items-center gap-4">
           <Avatar className="h-20 w-20 border-2 border-primary">
              <AvatarFallback className="bg-secondary text-xl font-bold text-secondary-foreground">
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
            <div>
                <CardTitle className="text-3xl">{userName}</CardTitle>
                <CardDescription className="text-lg">{userEmail}</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
             <div className="flex items-center gap-4 rounded-md border p-4">
                <UserIcon className="h-6 w-6 text-muted-foreground" />
                <div>
                    <p className="text-sm text-muted-foreground">Username</p>
                    <p className="font-semibold">{userName}</p>
                </div>
            </div>
             <div className="flex items-center gap-4 rounded-md border p-4">
                <Mail className="h-6 w-6 text-muted-foreground" />
                <div>
                    <p className="text-sm text-muted-foreground">Email Address</p>
                    <p className="font-semibold">{userEmail}</p>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
