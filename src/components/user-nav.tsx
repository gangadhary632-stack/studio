"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronsLeftRight, User } from "lucide-react";

export function UserNav() {
  const userName = "Guest";
  const avatarFallback = "G";

  return (
    <div className="w-full p-2">
        <Button
          variant="ghost"
          className="relative h-auto w-full justify-start p-2 text-left"
          disabled
        >
          <div className="flex w-full items-center gap-2">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
            <div className="hidden flex-col group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-medium">{userName}</span>
              <span className="text-xs text-muted-foreground">Welcome!</span>
            </div>
          </div>
        </Button>
    </div>
  );
}
