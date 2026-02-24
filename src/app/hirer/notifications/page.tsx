"use client"

import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Users, 
  CreditCard, 
  MessageSquare, 
  AlertCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';

const hirerNotifications = [
  {
    id: 'n1',
    title: 'New Application Received',
    description: 'Rohan Gupta applied for React Dev Intern role.',
    time: '10 Mins Ago',
    type: 'application',
    read: false,
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    id: 'n2',
    title: 'Payment Successful',
    description: '₹15,000 added to your escrow balance via UPI.',
    time: '2 Hours Ago',
    type: 'payment',
    read: true,
    icon: CreditCard,
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    id: 'n3',
    title: 'Milestone Update',
    description: 'Ananya Sharma submitted work report for Review.',
    time: '5 Hours Ago',
    type: 'work',
    read: true,
    icon: Clock,
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  },
  {
    id: 'n4',
    title: 'Profile Verified',
    description: 'Your company GST details have been approved.',
    time: 'Yesterday',
    type: 'system',
    read: true,
    icon: CheckCircle2,
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }
];

export default function HirerNotificationsPage() {
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
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>

        <div className="space-y-3">
          {hirerNotifications.map((notif) => (
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
                      <Button size="sm" className="h-7 text-[10px] bg-accent rounded-lg">View Details</Button>
                      <Button size="sm" variant="ghost" className="h-7 text-[10px] rounded-lg">Mark Read</Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {hirerNotifications.length === 0 && (
          <div className="text-center py-20">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <p className="text-muted-foreground font-medium">No Notifications Yet.</p>
          </div>
        )}
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
