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
  AlertCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';

const hirerNotifications = [
  {
    id: 'n1',
    title: 'New Application Received',
    description: 'Rohan Gupta Applied For React Dev Intern Role.',
    time: '10 Mins Ago',
    type: 'application',
    read: false,
    icon: Users,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    id: 'n2',
    title: 'Payment Successful',
    description: '₹15,000 Added To Your Balance Via UPI.',
    time: '2 Hours Ago',
    type: 'payment',
    read: true,
    icon: CreditCard,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    id: 'n3',
    title: 'Milestone Update',
    description: 'Ananya Sharma Submitted Work Report For Review.',
    time: '5 Hours Ago',
    type: 'work',
    read: true,
    icon: Clock,
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    id: 'n4',
    title: 'Profile Verified',
    description: 'Your Company GST Details Have Been Approved.',
    time: 'Yesterday',
    type: 'system',
    read: true,
    icon: CheckCircle2,
    color: 'text-primary',
    bg: 'bg-primary/10'
  }
];

export default function HirerNotificationsPage() {
  const router = useRouter();

  return (
    <div className="hirer-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-xl hover:bg-secondary font-normal"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Button>
          <h1 className="text-2xl font-normal text-foreground">Notifications</h1>
        </div>

        <div className="space-y-4">
          {hirerNotifications.map((notif) => (
            <Card 
              key={notif.id} 
              className={`p-5 border-none shadow-sm transition-all cursor-pointer hover:bg-white/80 rounded-3xl ${notif.read ? 'bg-white' : 'bg-primary/5 ring-1 ring-primary/20 shadow-md'}`}
            >
              <div className="flex gap-5">
                <div className={`p-4 rounded-2xl h-fit ${notif.bg} ${notif.color}`}>
                  <notif.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-base font-normal truncate ${notif.read ? 'text-foreground' : 'text-primary'}`}>
                      {notif.title}
                    </h3>
                    <span className="text-[10px] text-muted-foreground font-normal uppercase tracking-tight whitespace-nowrap ml-3 mt-1">
                      {notif.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                    {notif.description}
                  </p>
                  {!notif.read && (
                    <div className="mt-5 flex gap-3">
                      <Button size="sm" className="h-9 px-5 text-xs bg-primary text-primary-foreground font-normal rounded-xl shadow-md">View Details</Button>
                      <Button size="sm" variant="ghost" className="h-9 px-5 text-xs font-normal rounded-xl hover:bg-primary/5">Mark Read</Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {hirerNotifications.length === 0 && (
          <div className="text-center py-24 px-8 bg-white rounded-3xl shadow-sm">
            <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="h-10 w-10 text-muted-foreground opacity-20" />
            </div>
            <p className="text-muted-foreground font-normal text-lg">No Notifications Yet.</p>
          </div>
        )}
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
