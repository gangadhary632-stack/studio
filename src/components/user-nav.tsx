'use client';

import { useFirebase } from '@/firebase';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronsLeftRight, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { signOut } from 'firebase/auth';

export function UserNav() {
  const { user, auth } = useFirebase();

  if (!user) {
    return null;
  }
  
  const handleSignOut = () => {
    signOut(auth);
  };

  const userName = user.displayName || user.email?.split('@')[0] || 'User';
  const userEmail = user.email || 'No email';
  const avatarFallback = (user.displayName || user.email || 'U').charAt(0).toUpperCase();

  return (
    <div className="w-full p-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-auto w-full justify-start p-2 text-left"
          >
            <div className="flex w-full items-center gap-2">
              <Avatar className="h-9 w-9">
                {user.photoURL && <AvatarImage src={user.photoURL} alt={userName} />}
                <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                  {avatarFallback}
                </AvatarFallback>
              </Avatar>
              <div className="hidden flex-col group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium">{userName}</span>
                <span className="text-xs text-muted-foreground">{userEmail}</span>
              </div>
            </div>
            <ChevronsLeftRight className="absolute right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 group-data-[collapsible=icon]:hidden" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{userName}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {userEmail}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
           <DropdownMenuItem asChild>
             <Link href="/profile">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
             </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
