
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Plus, Clock, Users, CheckCircle2, CreditCard } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const stats = [
  { label: 'Active Jobs', value: 2, icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100' },
  { label: 'Total Applicants', value: 24, icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-100' },
  { label: 'Completed Gigs', value: 18, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-100' },
];

const recentApplicants = [
  {
    id: 'a1',
    name: 'Ananya Sharma',
    role: 'Fullstack Intern',
    rating: 4.9,
    location: 'IIT Hyderabad',
    skills: ['Next.js', 'Firebase', 'Tailwind'],
    avatar: 'https://picsum.photos/seed/s1/100/100'
  }
];

export default function HirerDashboard() {
  const router = useRouter();

  return (
    <div className="hirer-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Namaste, Arjun</h1>
          <p className="text-sm text-muted-foreground mt-2 font-medium">Manage Your Team And Postings Effortlessly.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <Button 
            className="h-16 rounded-2xl bg-primary text-primary-foreground shadow-lg text-base font-bold flex-1"
            onClick={() => router.push('/hirer/jobs/create')}
          >
            <Plus className="mr-2 h-5 w-5" />
            Post New Job
          </Button>
          <Button 
            variant="outline"
            className="h-16 rounded-2xl bg-white border-2 border-primary/10 shadow-sm text-base font-bold flex-1 text-primary hover:bg-primary/5"
            onClick={() => router.push('/hirer/payments')}
          >
            <CreditCard className="mr-2 h-5 w-5" />
            Payments
          </Button>
        </div>

        <Carousel className="w-full mb-8 overflow-hidden -mx-6 px-6" opts={{ align: "start", dragFree: true }}>
          <CarouselContent className="-ml-4">
            {stats.map((stat) => (
              <CarouselItem key={stat.label} className="pl-4 basis-[160px]">
                <Card className="p-5 flex flex-col gap-2 bg-white border-none shadow-sm rounded-2xl h-full">
                  <div className={`${stat.bg} ${stat.color} p-2.5 rounded-xl w-fit`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className="text-3xl font-bold text-foreground mt-2">{stat.value}</span>
                  <span className="text-sm text-muted-foreground font-bold tracking-tight">{stat.label}</span>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-muted-foreground tracking-tight">Live Listings</h2>
            <Button variant="link" className="text-xs font-bold text-primary p-0 h-auto" onClick={() => router.push('/hirer/jobs')}>
              View All Postings
            </Button>
          </div>
          <Card className="p-5 border-l-4 border-l-primary bg-white shadow-sm mb-4 rounded-2xl">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-base text-foreground">React Dev Intern (Summer)</h3>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 font-bold text-[10px]">Active</Badge>
            </div>
            <p className="text-xs text-muted-foreground font-medium">14 Students Applied • Posted On Oct 12</p>
            <div className="flex gap-3 mt-6">
              <Button 
                variant="secondary" 
                className="flex-1 h-10 text-xs font-bold rounded-xl bg-secondary hover:bg-secondary/80 text-foreground"
                onClick={() => router.push('/hirer/jobs/edit?jobId=1')}
              >
                Edit Posting
              </Button>
              <Button 
                className="flex-1 h-10 bg-primary text-primary-foreground text-xs font-bold rounded-xl shadow-md"
                onClick={() => router.push('/hirer/jobs/review?jobId=1')}
              >
                Review Applicants
              </Button>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-bold text-muted-foreground tracking-tight mb-4">Top Matches</h2>
          {recentApplicants.map((applicant) => (
            <Card key={applicant.name} className="p-5 bg-white border-none shadow-sm rounded-2xl">
              <div className="flex gap-4">
                <img 
                  src={applicant.avatar} 
                  alt={applicant.name} 
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-base text-foreground">{applicant.name}</h4>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">★ {applicant.rating}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium mb-4">{applicant.role} • {applicant.location}</p>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1 h-10 text-xs font-bold rounded-xl border-primary text-primary hover:bg-primary/5"
                      onClick={() => router.push(`/worker/profile/${applicant.id}`)}
                    >
                      View Profile
                    </Button>
                    <Button 
                      className="flex-1 h-10 text-xs bg-primary text-primary-foreground font-bold rounded-xl shadow-md"
                      onClick={() => router.push(`/hirer/messages/${applicant.id}`)}
                    >
                      Chat Now
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
