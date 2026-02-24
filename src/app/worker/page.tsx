
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Wallet, MapPin, Activity, ChevronRight, Zap, Navigation } from 'lucide-react';
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

const nearbyGigs = [
  {
    id: 'g1',
    title: 'Website Bug Fix',
    budget: '₹2,500',
    location: 'Indiranagar, BLR',
    distance: '0.8 km away',
    type: 'Gig',
    time: 'Due in 2h'
  },
  {
    id: 'g2',
    title: 'Logo Design Refresh',
    budget: '₹1,200',
    location: 'Koramangala, BLR',
    distance: '1.5 km away',
    type: 'Gig',
    time: 'Starts Today'
  }
];

export default function WorkerDashboard() {
  const router = useRouter();

  return (
    <div className="worker-theme min-h-screen bg-background pb-24">
      <TopNav />
      
      <main className="content-area">
        <div className="mb-6">
          <h1 className="text-3xl font-black tracking-tight">Hi, Rohan</h1>
          <p className="text-sm text-muted-foreground mt-1 font-medium">Ready To Ship Some Code Today?</p>
        </div>

        <Card 
          className="p-6 bg-primary text-primary-foreground mb-8 shadow-2xl overflow-hidden relative cursor-pointer border-none rounded-3xl"
          onClick={() => router.push('/worker/earnings')}
        >
          <div className="relative z-10">
            <span className="text-xs opacity-70 mb-1 block font-bold tracking-tight uppercase">Total Balance</span>
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl font-black tracking-tighter">₹42,500.00</span>
              <div className="bg-white/10 p-2.5 rounded-2xl">
                <Wallet className="h-6 w-6" />
              </div>
            </div>
            <Button variant="secondary" size="sm" className="w-full font-black h-12 rounded-xl shadow-sm">
              View Wallet <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full" />
        </Card>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-black text-muted-foreground tracking-widest uppercase">Profile Progress</h2>
            <span className="text-xs font-black">75%</span>
          </div>
          <ProgressUI value={75} className="h-2 bg-secondary rounded-full" />
          <div className="mt-4 p-5 bg-secondary/50 border border-secondary rounded-3xl flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-[11px] text-foreground font-black uppercase tracking-tight">Verification Needed</p>
              <p className="text-[11px] text-muted-foreground font-medium leading-tight max-w-[180px]">Verify Your College ID To Unlock High-Stipend Gigs.</p>
            </div>
            <Button 
              size="sm" 
              className="h-10 px-6 text-xs font-black rounded-xl bg-primary text-white shadow-md"
              onClick={() => router.push('/worker/profile')}
            >
              Verify
            </Button>
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black tracking-tight">Top Picks For You</h2>
            <Button variant="link" className="text-primary p-0 h-auto text-xs font-black" onClick={() => router.push('/worker/browse')}>
              See All
            </Button>
          </div>
          
          <div className="space-y-4">
            {recommendedJobs.map((job) => (
              <Card key={job.title} className="p-6 border-border/50 bg-white hover:border-primary transition-all cursor-pointer group rounded-3xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-black text-lg group-hover:text-primary transition-colors tracking-tight">{job.title}</h3>
                    <p className="text-xs font-bold text-muted-foreground mt-0.5">Recommended Based on Skills</p>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary font-black text-[10px] px-3 py-1 rounded-lg">
                    {job.match} Match
                  </Badge>
                </div>
                <div className="flex items-center gap-5 text-xs text-muted-foreground mb-6">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Wallet className="h-3.5 w-3.5 text-primary" />
                    {job.budget}
                  </div>
                  <div className="flex items-center gap-1.5 font-bold">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    className="flex-1 h-12 rounded-2xl font-black border-slate-200 text-sm shadow-sm"
                    onClick={() => router.push(`/worker/jobs/${job.id}`)}
                  >
                    Details
                  </Button>
                  <Button 
                    className="flex-1 h-12 rounded-2xl bg-primary font-black text-sm shadow-lg"
                    onClick={() => router.push(`/worker/jobs/${job.id}`)}
                  >
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Top Gigs Near Your Surroundings */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black tracking-tight">Gigs Nearby</h2>
              <Badge className="bg-emerald-500 text-white text-[9px] font-black h-4 px-1.5 rounded-sm">LIVE</Badge>
            </div>
            <Button variant="link" className="text-primary p-0 h-auto text-xs font-black">
              Map View
            </Button>
          </div>
          
          <div className="space-y-4">
            {nearbyGigs.map((gig) => (
              <Card key={gig.id} className="p-5 border-border/50 bg-white hover:bg-primary/5 transition-all cursor-pointer rounded-3xl shadow-sm group">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-black text-base tracking-tight truncate group-hover:text-primary">{gig.title}</h3>
                      <span className="text-base font-black text-primary">{gig.budget}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground font-bold">
                      <div className="flex items-center gap-1">
                        <Navigation className="h-3 w-3" />
                        {gig.distance}
                      </div>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {gig.location}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-[9px] font-black border-slate-200 px-2 h-5">ONE-DAY</Badge>
                        <Badge variant="outline" className="text-[9px] font-black border-slate-200 px-2 h-5">URGENT</Badge>
                      </div>
                      <p className="text-[10px] text-primary font-black uppercase tracking-widest animate-pulse">{gig.time}</p>
                    </div>
                  </div>
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
