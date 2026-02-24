
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Wallet, Star, MapPin, Activity } from 'lucide-react';
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
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Hi, Rohan</h1>
        </div>

        <Card 
          className="p-6 bg-accent text-white mb-8 shadow-xl overflow-hidden relative cursor-pointer"
          onClick={() => router.push('/worker/earnings')}
        >
          <div className="relative z-10">
            <span className="text-sm opacity-80 mb-1 block">Total Earnings</span>
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold">₹42,500.00</span>
              <div className="bg-white/20 p-2 rounded-xl">
                <Wallet className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full" />
        </Card>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-bold text-muted-foreground tracking-widest uppercase">Profile Completion</h2>
            <span className="text-sm font-bold text-accent">75%</span>
          </div>
          <ProgressUI value={75} className="h-2 bg-primary/20" />
          <div className="flex items-center justify-between mt-2">
            <p className="text-[10px] text-muted-foreground">Add your college ID & portfolio to get verified.</p>
            <Button 
              size="sm" 
              variant="link" 
              className="text-accent h-auto p-0 text-[10px] font-bold"
              onClick={() => router.push('/worker/profile')}
            >
              Complete Profile
            </Button>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Curated For Students</h2>
          </div>
          
          <div className="space-y-4">
            {recommendedJobs.map((job) => (
              <Card key={job.title} className="p-4 border-2 border-transparent">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-sm">{job.title}</h3>
                  <Badge className="bg-blue-100 text-blue-700">{job.match} Match</Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Wallet className="h-3 w-3" />
                    {job.budget}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 h-9 rounded-xl"
                    onClick={() => router.push(`/worker/jobs/${job.id}`)}
                  >
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 h-9 rounded-xl bg-accent"
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
