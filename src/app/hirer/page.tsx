"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Plus, Clock, Users, CheckCircle2, CreditCard } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

const stats = [
  { label: 'Active Internships', value: 2, icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Total Applicants', value: 24, icon: Users, color: 'text-purple-500', bg: 'bg-purple-50' },
  { label: 'Completed Gigs', value: 18, icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50' },
];

const recentApplicants = [
  {
    id: 'a1',
    name: 'Ananya Sharma',
    role: 'Fullstack Intern',
    rating: 4.9,
    location: 'IIT Delhi',
    skills: ['Next.js', 'Firebase', 'Tailwind'],
    avatar: 'https://picsum.photos/seed/s1/100/100'
  }
];

export default function HirerDashboard() {
  const router = useRouter();

  return (
    <div className="hirer-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Namaste, Arjun</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage Your Team And Postings Effortlessly.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <Button 
            className="h-16 rounded-2xl bg-accent shadow-xl text-base font-bold flex-1"
            onClick={() => router.push('/hirer/jobs/create')}
          >
            <Plus className="mr-2 h-5 w-5" />
            Post New
          </Button>
          <Button 
            variant="outline"
            className="h-16 rounded-2xl bg-white border-none shadow-md text-base font-bold flex-1 text-accent"
            onClick={() => router.push('/hirer/payments')}
          >
            <CreditCard className="mr-2 h-5 w-5" />
            Payments
          </Button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="min-w-[150px] p-5 flex flex-col gap-2 bg-white border-none shadow-sm">
              <div className={`${stat.bg} ${stat.color} p-2 rounded-xl w-fit`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <span className="text-3xl font-bold">{stat.value}</span>
              <span className="text-[10px] text-muted-foreground font-black tracking-tight">{stat.label}</span>
            </Card>
          ))}
        </div>

        <section className="mb-10">
          <h2 className="text-xs font-black text-muted-foreground tracking-tight mb-4">Live Listings</h2>
          <Card className="p-5 border-l-4 border-l-accent bg-white shadow-sm mb-4 rounded-2xl">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-base">React Dev Intern (Summer)</h3>
              <Badge variant="secondary" className="bg-green-100 text-green-700 font-bold text-[9px]">Active</Badge>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-xs text-muted-foreground font-medium">14 Students Applied</span>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="h-9 px-4 text-xs font-bold rounded-xl"
                  onClick={() => router.push('/hirer/jobs/edit?jobId=1')}
                >
                  Edit
                </Button>
                <Button 
                  size="sm" 
                  className="h-9 px-4 bg-accent text-xs font-bold rounded-xl shadow-md"
                  onClick={() => router.push('/hirer/jobs/review?jobId=1')}
                >
                  Review
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-xs font-black text-muted-foreground tracking-tight mb-4">Top Matches</h2>
          {recentApplicants.map((applicant) => (
            <Card key={applicant.name} className="p-5 bg-white border-none shadow-sm rounded-2xl">
              <div className="flex gap-4">
                <img 
                  src={applicant.avatar} 
                  alt={applicant.name} 
                  className="w-14 h-14 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-base">{applicant.name}</h4>
                    <span className="text-[10px] font-bold text-accent">★ {applicant.rating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{applicant.role}</p>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 h-9 text-xs font-bold rounded-xl border-accent text-accent"
                      onClick={() => router.push(`/worker/profile/${applicant.id}`)}
                    >
                      Profile
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 h-9 text-xs bg-accent font-bold rounded-xl shadow-md"
                      onClick={() => router.push(`/hirer/messages/${applicant.id}`)}
                    >
                      Chat
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </section>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}