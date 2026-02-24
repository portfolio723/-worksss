"use client"

import { Bell, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export function TopNav() {
  const pathname = usePathname();
  const isHirer = pathname.startsWith('/hirer');
  const notificationPath = isHirer ? '/hirer/notifications' : '/worker/notifications';

  return (
    <nav className="top-nav">
      <div className="flex items-center gap-1">
        <Link 
          href={isHirer ? "/hirer" : "/worker"} 
          className="text-2xl font-black text-foreground tracking-tighter hover:opacity-80 transition-opacity px-2"
        >
          #
        </Link>
      </div>
      
      <div className="flex items-center gap-1">
        <Link href="/location-access">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-2xl hover:bg-secondary">
            <MapPin className="h-5 w-5 text-muted-foreground" />
          </Button>
        </Link>
        <Link href={notificationPath}>
          <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-2xl hover:bg-secondary">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-destructive rounded-full border-2 border-white" />
          </Button>
        </Link>
      </div>
    </nav>
  );
}