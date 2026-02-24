
"use client"

import { Bell, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export function TopNav() {
  const pathname = usePathname();
  const router = useRouter();
  const isHirer = pathname.startsWith('/hirer');
  const notificationPath = isHirer ? '/hirer/notifications' : '/worker/notifications';

  return (
    <nav className="top-nav">
      <div className="flex items-center gap-3">
        <Link 
          href={isHirer ? "/hirer" : "/worker"} 
          className="text-2xl font-black text-foreground tracking-tighter hover:opacity-80 transition-opacity px-1"
        >
          #
        </Link>

        {/* Role Toggle Switch */}
        <div className={cn(
          "p-1 rounded-full flex items-center border border-border/20 h-9 transition-colors",
          isHirer ? "hirer-theme bg-secondary/50" : "worker-theme bg-secondary/50"
        )}>
          <button 
            onClick={() => router.push('/hirer')}
            className={cn(
              "px-4 h-7 text-[10px] font-medium rounded-full transition-all flex items-center justify-center",
              isHirer ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Hirer
          </button>
          <button 
            onClick={() => router.push('/worker')}
            className={cn(
              "px-4 h-7 text-[10px] font-medium rounded-full transition-all flex items-center justify-center",
              !isHirer ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Worker
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-1">
        <Link href="/location-access">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-2xl hover:bg-secondary font-medium">
            <MapPin className="h-5 w-5 text-muted-foreground" />
          </Button>
        </Link>
        <Link href={notificationPath}>
          <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-2xl hover:bg-secondary font-medium">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-destructive rounded-full border-2 border-white" />
          </Button>
        </Link>
      </div>
    </nav>
  );
}
