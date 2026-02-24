"use client"

import { Bell, Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export function TopNav() {
  const pathname = usePathname();
  const isHirer = pathname.startsWith('/hirer');
  const profilePath = isHirer ? '/hirer/profile' : '/worker/profile';

  return (
    <nav className="top-nav">
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-10 w-10 text-accent md:hidden hover:bg-accent/10 rounded-xl">
          <Menu className="h-5 w-5" />
        </Button>
        <Link 
          href={isHirer ? "/hirer" : "/worker"} 
          className="text-2xl font-black text-accent tracking-tighter hover:opacity-80 transition-opacity px-2"
        >
          #works
        </Link>
      </div>
      
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-2xl hover:bg-secondary">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-destructive rounded-full border-2 border-white" />
        </Button>
        
        <Link href={profilePath} className="ml-1">
          <div className="h-9 w-9 rounded-2xl bg-secondary border border-border overflow-hidden shadow-sm hover:ring-2 hover:ring-accent/20 transition-all">
            <img 
              src={isHirer ? "https://picsum.photos/seed/avatar_in_1/150/150" : "https://picsum.photos/seed/avatar_in_2/150/150"} 
              alt="UserAvatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}