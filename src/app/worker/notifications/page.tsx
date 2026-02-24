"use client"

import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Briefcase, 
  Wallet, 
  MessageSquare, 
  Star,
  BellRing,
  CheckCircle2
} from 'lucide-react';

const workerNotifications = [
  {
    id: 'w1',
    title: 'Stipend Credited',
    description: '₹12,500 has been added to your wallet for Milestone 1.',
    time: 'Just Now',
    type: 'payment',
    read: false,
    icon: Wallet,
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    id: 'w2',
    title: 'Shortlisted!',
    description: 'TechShastra has shortlisted you for React Dev role.',
    time: '1 Hour Ago',
    type: 'status',
    read: false,
    icon: Star,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50'
  },
  {
    id: 'w3',
    title: 'New Message',
    description: 'Arjun (Recruiter) sent you a message regarding your task.',
    time: '4 Hours Ago',
    type: 'chat',
    read: true,
    icon: MessageSquare,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    id: 'w4',
    title: 'Identity Verified',
    description: 'Your College ID has been successfully verified.',
    time: 'Yesterday',
    type: 'system',
    read: true,
    icon: CheckCircle2,
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }
];

export default function WorkerNotificationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-full"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Alerts & Updates</h1>
        </div>

        <div className="space-y-3">
          {workerNotifications.map((notif) => (
            <Card 
              key={notif.id} 
              className={`p-4 border-none shadow-sm transition-all cursor-pointer hover:bg-white/80 ${notif.read ? 'bg-white' : 'bg-accent/5 ring-1 ring-accent/10'}`}
            >
              <div className="flex gap-4">
                <div className={`p-3 rounded-2xl h-fit ${notif.bg} ${notif.color}`}>
                  <notif.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`text-sm font-bold truncate ${notif.read ? 'text-foreground' : 'text-accent'}`}>
                      {notif.title}
                    </h3>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap ml-2">
                      {notif.time}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {notif.description}
                  </p>
                  {!notif.read && (
                    <div className="mt-3 flex gap-2">
                      <Button size="sm" className="h-7 text-[10px] bg-accent rounded-lg">Check Now</Button>
                      <Button size="sm" variant="ghost" className="h-7 text-[10px] rounded-lg">Dismiss</Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {workerNotifications.length === 0 && (
          <div className="text-center py-20">
            <BellRing className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <p className="text-muted-foreground font-medium">All Caught Up!</p>
          </div>
        )}
      </main>

      <BottomNav role="worker" />
    </div>
  );
}
