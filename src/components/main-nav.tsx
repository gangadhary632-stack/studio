'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { PuzzleLogo } from './puzzle-logo';
import { QuizLogo } from './quiz-logo';
import { LeaderboardLogo } from './leaderboard-logo';
import { ProfileLogo } from './profile-logo';
import { RewardsLogo } from './rewards-logo';
import { DashboardLogo } from './dashboard-logo';
import { HelpLogo } from './help-logo';

const navItems = [
  { href: '/dashboard', icon: DashboardLogo, label: 'Dashboard' },
  { href: '/quiz', icon: QuizLogo, label: 'Quizzes' },
  { href: '/puzzles', icon: PuzzleLogo, label: 'Puzzles' },
  { href: '/leaderboard', icon: LeaderboardLogo, label: 'Leaderboard' },
  { href: '/profile', icon: ProfileLogo, label: 'Profile' },
  { href: '/rewards', icon: RewardsLogo, label: 'Rewards' },
  { href: '/help', icon: HelpLogo, label: 'Help & Support' },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname.startsWith(item.href)}
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
