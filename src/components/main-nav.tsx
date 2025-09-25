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
  Lightbulb,
  Puzzle,
  Trophy,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/quiz", icon: Lightbulb, label: "Quizzes" },
  { href: "/puzzles", icon: Puzzle, label: "Puzzles" },
  { href: "/leaderboard", icon: Trophy, label: "Leaderboard" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} legacyBehavior passHref>
            <SidebarMenuButton
              isActive={pathname === item.href}
              tooltip={item.label}
            >
              <item.icon />
              <span>{item.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
