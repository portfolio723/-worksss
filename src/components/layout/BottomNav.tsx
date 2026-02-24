
"use client"

import { Home, Briefcase, MessageSquare, CreditCard, User, Search, Wallet } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function NavItem({ href, icon, label }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + '/');

  return (
    <Link 
      href={href} 
      className={cn(
        "flex flex-col items-center justify-center gap-1 transition-colors",
        isActive ? "text-accent" : "text-muted-foreground"
      )}
    >
      <div className={cn("p-1 rounded-lg", isActive && "bg-accent/10")}>
        {icon}
      </div>
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}

export function BottomNav({ role }: { role: 'hirer' | 'worker' }) {
  if (role === 'hirer') {
    return (
      <nav className="bottom-nav">
        <NavItem href="/hirer" icon={<Home className="h-5 w-5" />} label="Home" />
        <NavItem href="/hirer/jobs" icon={<Briefcase className="h-5 w-5" />} label="Jobs" />
        <NavItem href="/hirer/messages" icon={<MessageSquare className="h-5 w-5" />} label="Chats" />
        <NavItem href="/hirer/payments" icon={<CreditCard className="h-5 w-5" />} label="Pay" />
        <NavItem href="/hirer/profile" icon={<User className="h-5 w-5" />} label="Profile" />
      </nav>
    );
  }

  return (
    <nav className="bottom-nav">
      <NavItem href="/worker" icon={<Home className="h-5 w-5" />} label="Home" />
      <NavItem href="/worker/browse" icon={<Search className="h-5 w-5" />} label="Browse" />
      <NavItem href="/worker/messages" icon={<MessageSquare className="h-5 w-5" />} label="Chats" />
      <NavItem href="/worker/earnings" icon={<Wallet className="h-5 w-5" />} label="Earn" />
      <NavItem href="/worker/profile" icon={<User className="h-5 w-5" />} label="Profile" />
    </nav>
  );
}
