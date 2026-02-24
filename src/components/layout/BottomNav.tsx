
"use client"

import { Home, Briefcase, MessageSquare, CreditCard, User, Search, Wallet, Plus } from 'lucide-react';
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
        "flex flex-col items-center justify-center gap-1 transition-all duration-200 group",
        isActive ? "text-primary scale-105" : "text-muted-foreground hover:text-primary"
      )}
    >
      <div className={cn(
        "p-1.5 rounded-xl transition-all duration-200", 
        isActive ? "bg-primary/10" : "group-hover:bg-secondary"
      )}>
        {icon}
      </div>
      <span className={cn("text-[10px] font-bold tracking-tight", isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100")}>
        {label}
      </span>
    </Link>
  );
}

export function BottomNav({ role }: { role: 'hirer' | 'worker' }) {
  if (role === 'hirer') {
    return (
      <nav className="bottom-nav hirer-theme border-t border-border/50 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
        <NavItem href="/hirer" icon={<Home className="h-5 w-5" />} label="Dashboard" />
        <NavItem href="/hirer/messages" icon={<MessageSquare className="h-5 w-5" />} label="Chats" />
        <NavItem href="/hirer/jobs/create" icon={<Plus className="h-5 w-5" />} label="Post" />
        <NavItem href="/hirer/payments" icon={<CreditCard className="h-5 w-5" />} label="Pay" />
        <NavItem href="/hirer/profile" icon={<User className="h-5 w-5" />} label="Profile" />
      </nav>
    );
  }

  return (
    <nav className="bottom-nav worker-theme border-t border-border/40 shadow-[0_-4px_10px_rgba(0,0,0,0.04)]">
      <NavItem href="/worker" icon={<Home className="h-5 w-5" />} label="Dashboard" />
      <NavItem href="/worker/browse" icon={<Search className="h-5 w-5" />} label="Browse" />
      <NavItem href="/worker/messages" icon={<MessageSquare className="h-5 w-5" />} label="Chats" />
      <NavItem href="/worker/earnings" icon={<Wallet className="h-5 w-5" />} label="Wallet" />
      <NavItem href="/worker/profile" icon={<User className="h-5 w-5" />} label="Profile" />
    </nav>
  );
}
