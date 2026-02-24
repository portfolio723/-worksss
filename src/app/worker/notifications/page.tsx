"use client"

import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowLeft, 
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
    description: '₹12,500 Has Been Added To Your Wallet For Milestone 1.',
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
    description: 'TechShastra Has Shortlisted You For React Dev Role.',
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
    description: 'Arjun (Recruiter) Sent You A Message Regarding Your Task.',
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
    description: 'Your College ID Has Been Successfully Verified.',
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
    <div className="worker-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-2xl hover:bg-secondary font-normal"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-normal tracking-tight">Alerts And Updates</h1>
        </div>

        <div className="space-y-4">
          {workerNotifications.map((notif) => (
            <Card 
              key={notif.id} 
              className={`p-5 border-none shadow-sm transition-all cursor-pointer rounded-2xl hover:bg-secondary/30 ${notif.read ? 'bg-white' : 'bg-primary/5 ring-1 ring-primary/10'}`}
            >
              <div className="flex gap-4">
                <div className={`p-3.5 rounded-2xl h-fit ${notif.bg} ${notif.color}`}>
                  <notif.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`text-sm font-normal tracking-tight truncate ${notif.read ? 'text-foreground' : 'text-primary'}`}>
                      {notif.title}
                    </h3>
                    <span className="text-[10px] text-muted-foreground font-normal whitespace-nowrap ml-2">
                      {notif.time}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                    {notif.description}
                  </p>
                  {!notif.read && (
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" className="h-8 px-4 text-[10px] bg-primary text-white font-normal rounded-xl">Check Now</Button>
                      <Button size="sm" variant="ghost" className="h-8 px-4 text-[10px] font-normal rounded-xl hover:bg-secondary">Dismiss</Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {workerNotifications.length === 0 && (
          <div className="text-center py-24">
            <BellRing className="h-16 w-16 text-muted-foreground mx-auto mb-6 opacity-10" />
            <p className="text-muted-foreground font-normal text-lg tracking-tight">All Caught Up!</p>
          </div>
        )}
      </main>

      <BottomNav role="worker" />
    </div>
  );
}
