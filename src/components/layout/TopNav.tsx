
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
      <div className="flex items-center gap-2">
        <Menu className="h-5 w-5 text-accent md:hidden" />
        <Link href={isHirer ? "/hirer" : "/worker"} className="text-xl font-bold text-accent tracking-tighter">
          #works
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-destructive rounded-full" />
        </Button>
        <Link href={profilePath}>
          <div className="h-8 w-8 rounded-full bg-primary/40 border border-primary overflow-hidden">
            <img 
              src={isHirer ? "https://picsum.photos/seed/avatar_in_1/150/150" : "https://picsum.photos/seed/avatar_in_2/150/150"} 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}
