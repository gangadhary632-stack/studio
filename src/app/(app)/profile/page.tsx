'use client';

import { useUser } from '@/firebase';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, User as UserIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProfilePage() {
  const { user, isUserLoading } = useUser();

  const userName = user?.displayName || user?.email?.split('@')[0] || 'User';
  const userEmail = user?.email || 'No email provided';
  const avatarFallback =
    user?.displayName?.charAt(0).toUpperCase() ||
    user?.email?.charAt(0).toUpperCase() ||
    'U';

  if (isUserLoading) {
    return (
      <div className="flex flex-col gap-8">
        <div>
          <Skeleton className="h-9 w-1/3" />
          <Skeleton className="mt-2 h-5 w-2/5" />
        </div>

        <Card className="max-w-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <Skeleton className="h-20 w-20 rounded-full" />
            <div>
              <Skeleton className="h-9 w-32" />
              <Skeleton className="mt-2 h-5 w-48" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <Skeleton className="h-16 w-full rounded-md" />
            <Skeleton className="h-16 w-full rounded-md" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground">Your personal account details.</p>
      </div>

      <Card className="max-w-md">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-20 w-20 border-2 border-primary">
             {user?.photoURL && <AvatarImage src={user.photoURL} alt={userName} />}
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
