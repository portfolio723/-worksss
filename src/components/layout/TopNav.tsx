import { Bell, User, Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function TopNav() {
  return (
    <nav className="top-nav">
      <div className="flex items-center gap-2">
        <Menu className="h-5 w-5 text-accent md:hidden" />
        <Link href="/" className="text-xl font-bold text-accent tracking-tighter">
          #works
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-destructive rounded-full" />
        </Button>
        <Link href="/profile">
          <div className="h-8 w-8 rounded-full bg-primary/40 border border-primary overflow-hidden">
            <img 
              src="https://picsum.photos/seed/avatar1/150/150" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}
