"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Trophy,
  User,
  Gift,
  LifeBuoy,
} from "lucide-react";
import { PuzzleLogo } from "./puzzle-logo";
import { QuizLogo } from "./quiz-logo";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/quiz", icon: QuizLogo, label: "Quizzes" },
  { href: "/puzzles", icon: PuzzleLogo, label: "Pzzles" },
  { href: "/leaderboard", icon: Trophy, label: "Leaderboard" },
  { href: "/profile", icon: User, label: "Profile" },
  { href: "/rewards", icon: Gift, label: "Rewards" },
  { href: "/help", icon: LifeBuoy, label: "Help & Support" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.href}
            tooltip={item.label}
          >
            <Link href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
