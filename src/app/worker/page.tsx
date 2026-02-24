
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Wallet, Briefcase, Bookmark, Star, MapPin, Progress } from 'lucide-react';
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
  },
  {
    id: '2',
    title: 'Campus Ambassador',
    budget: '₹5,000 + Perks',
    location: 'Delhi NCR',
    skills: ['Marketing', 'Social Media', 'Events'],
    match: '92%'
  }
];

export default function WorkerDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Hi, Rohan</h1>
            <p className="text-muted-foreground">Found 12 internships matching your profile.</p>
          </div>
        </div>

        <Card 
          className="p-6 bg-accent text-white mb-8 shadow-xl overflow-hidden relative cursor-pointer active:scale-95 transition-transform"
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
            <div className="flex gap-4">
              <div className="flex-1">
                <span className="text-[10px] opacity-80 uppercase font-bold tracking-wider">Active Gigs</span>
                <p className="text-xl font-bold">2</p>
              </div>
              <div className="flex-1 border-l border-white/20 pl-4">
                <span className="text-[10px] opacity-80 uppercase font-bold tracking-wider">Rating</span>
                <div className="flex items-center gap-1">
                  <p className="text-xl font-bold">4.8</p>
                  <Star className="h-4 w-4 fill-white text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full" />
        </Card>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Profile Completion</h2>
            <span className="text-sm font-bold text-accent">75%</span>
          </div>
          <ProgressUI value={75} className="h-2 bg-primary/20" />
          <p className="text-[10px] text-muted-foreground mt-2">Add your college ID & portfolio to get verified.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold">Curated for Students</h2>
            </div>
            <Button 
              variant="link" 
              className="text-accent h-auto p-0" 
              onClick={() => router.push('/worker/browse')}
            >
              Filter
            </Button>
          </div>
          
          <div className="space-y-4">
            {recommendedJobs.map((job) => (
              <Card key={job.title} className="p-4 border-2 border-transparent hover:border-accent transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-sm">{job.title}</h3>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">{job.match} Match</Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Wallet className="h-3 w-3" />
                    {job.budget}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap mb-4">
                  {job.skills.map(s => (
                    <Badge key={s} variant="outline" className="text-[10px] py-0">{s}</Badge>
                  ))}
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

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Current Projects</h2>
          <Card className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary/20 rounded-xl flex items-center justify-center text-accent font-bold">
                TS
              </div>
              <div>
                <h4 className="text-sm font-bold">TechShastra Landing Page</h4>
                <p className="text-xs text-muted-foreground">Milestone 1/2</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-accent">
              <Progress className="h-5 w-5" />
            </Button>
          </Card>
        </section>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}
