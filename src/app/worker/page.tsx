"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Wallet, MapPin, Activity, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress as ProgressUI } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';

const recommendedJobs = [
  {
    id: '1',
    title: 'Frontend Intern (Next.js)',
    budget: '₹20,000/mo',
    location: 'Bangalore / Remote',
    skills: ['Next.js', 'Tailwind', 'React'],
    match: '98%'
  }
];

export default function WorkerDashboard() {
  const router = useRouter();

  return (
    <div className="worker-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="mb-6">
          <h1 className="text-3xl font-black">Hi, Rohan</h1>
          <p className="text-sm text-muted-foreground mt-1">Ready To Ship Some Code Today?</p>
        </div>

        <Card 
          className="p-6 bg-primary text-primary-foreground mb-8 shadow-2xl overflow-hidden relative cursor-pointer border-none"
          onClick={() => router.push('/worker/earnings')}
        >
          <div className="relative z-10">
            <span className="text-xs opacity-70 mb-1 block font-bold tracking-tight">Total Balance</span>
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold">₹42,500.00</span>
              <div className="bg-white/10 p-2 rounded-xl">
                <Wallet className="h-6 w-6" />
              </div>
            </div>
            <Button variant="secondary" size="sm" className="w-full font-bold h-10">
              View Wallet <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full" />
        </Card>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Profile Progress</h2>
            <span className="text-xs font-bold">75%</span>
          </div>
          <ProgressUI value={75} className="h-1.5 bg-secondary" />
          <div className="mt-4 p-4 bg-secondary rounded-2xl flex items-center justify-between">
            <p className="text-[11px] text-muted-foreground font-medium leading-tight max-w-[180px]">Verify Your College ID To Unlock High-Stipend Gigs.</p>
            <Button 
              size="sm" 
              className="h-8 px-4 text-[10px] font-bold rounded-lg"
              onClick={() => router.push('/worker/profile')}
            >
              Verify
            </Button>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black">Top Picks For You</h2>
            <Button variant="link" className="text-primary p-0 h-auto text-xs font-bold" onClick={() => router.push('/worker/browse')}>
              See All
            </Button>
          </div>
          
          <div className="space-y-4">
            {recommendedJobs.map((job) => (
              <Card key={job.title} className="p-5 border-border/50 bg-white hover:border-primary transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{job.title}</h3>
                  <Badge variant="secondary" className="bg-secondary text-primary font-bold text-[10px]">
                    {job.match} Match
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Wallet className="h-3 w-3" />
                    {job.budget}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    className="flex-1 h-11 rounded-xl font-bold border-border"
                    onClick={() => router.push(`/worker/jobs/${job.id}`)}
                  >
                    Details
                  </Button>
                  <Button 
                    className="flex-1 h-11 rounded-xl bg-primary font-bold"
                    onClick={() => router.push(`/worker/jobs/${job.id}`)}
                  >
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}