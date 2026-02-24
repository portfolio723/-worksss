
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { 
  Wallet, 
  MapPin, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  Bookmark, 
  Star, 
  Send,
  Briefcase,
  Activity
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress as ProgressUI } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';

const activeJobs = [
  { id: 'aj1', title: 'React Dev Intern', company: 'TechShastra', deadline: 'Next Week', progress: 65 },
  { id: 'aj2', title: 'UI Design Fixes', company: 'Creatives Hub', deadline: '2 Days Left', progress: 40 },
];

const appliedJobs = [
  { id: 'ap1', title: 'Frontend Developer', company: 'Zomato', status: 'In Review', date: '2 Days Ago' },
  { id: 'ap2', title: 'Next.js Specialist', company: 'Razorpay', status: 'Interviewing', date: '5 Days Ago' },
];

const savedJobs = [
  { id: 'sj1', title: 'Senior UX Researcher', company: 'Google', stipend: '₹50,000/mo', type: 'Remote' },
];

const reviews = [
  { id: 'r1', client: 'Arjun Mehta', company: 'TechShastra', rating: 5, comment: "Exceptional quality of work and timely delivery. Highly recommended!", date: 'Oct 12' },
];

export default function WorkerDashboard() {
  const router = useRouter();

  return (
    <div className="worker-theme min-h-screen bg-background pb-24">
      <TopNav />
      
      <main className="content-area px-4 py-6 space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-black tracking-tight text-foreground">Namaste, Rohan</h1>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Your Career Dashboard</p>
        </div>

        {/* 1. Earnings Summary */}
        <Card 
          className="p-6 bg-primary text-primary-foreground shadow-xl overflow-hidden relative cursor-pointer border-none rounded-3xl"
          onClick={() => router.push('/worker/earnings')}
        >
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] opacity-80 font-black uppercase tracking-widest">Available Balance</span>
                <div className="text-3xl font-black mt-1 tracking-tighter">₹42,500.00</div>
              </div>
              <div className="bg-white/20 p-2.5 rounded-2xl">
                <Wallet className="h-6 w-6" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-6">
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
                <p className="text-[8px] uppercase font-black opacity-70">Total Earned</p>
                <p className="text-sm font-bold">₹1.2L</p>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
                <p className="text-[8px] uppercase font-black opacity-70">In Clearance</p>
                <p className="text-sm font-bold">₹8,400</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full" />
        </Card>

        {/* 2. Profile Completion Tracker */}
        <Card className="p-5 border-none bg-white shadow-sm rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-black text-foreground uppercase tracking-tight">Profile Completion</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary font-black text-[10px]">75%</Badge>
          </div>
          <ProgressUI value={75} className="h-2 bg-secondary rounded-full" />
          <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">
            Verify your college ID to unlock premium high-stipend internships.
          </p>
          <Button 
            className="w-full h-10 rounded-xl bg-secondary text-primary hover:bg-primary hover:text-white transition-all text-xs font-medium"
            onClick={() => router.push('/worker/profile')}
          >
            Complete Verification
          </Button>
        </Card>

        {/* 3. Active Jobs */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black tracking-tight flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" /> Active Gigs
            </h2>
            <Button variant="link" className="text-primary p-0 h-auto text-[10px] font-bold" onClick={() => router.push('/worker/active-jobs')}>
              See All
            </Button>
          </div>
          <div className="space-y-3">
            {activeJobs.map((job) => (
              <Card key={job.id} className="p-4 border-none bg-white shadow-sm rounded-2xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm leading-tight">{job.title}</h3>
                    <p className="text-[10px] text-muted-foreground font-medium">{job.company}</p>
                  </div>
                  <Badge variant="outline" className="text-[8px] font-black uppercase text-primary border-primary/20">
                    {job.deadline}
                  </Badge>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[8px] font-black uppercase text-muted-foreground">
                    <span>Progress</span>
                    <span>{job.progress}%</span>
                  </div>
                  <ProgressUI value={job.progress} className="h-1 bg-secondary" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. Applied Jobs */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black tracking-tight flex items-center gap-2">
              <Send className="h-4 w-4 text-primary" /> Applications
            </h2>
            <Button variant="link" className="text-primary p-0 h-auto text-[10px] font-bold" onClick={() => router.push('/worker/applied-jobs')}>
              Track
            </Button>
          </div>
          <div className="space-y-3">
            {appliedJobs.map((job) => (
              <Card key={job.id} className="p-4 border-none bg-white shadow-sm rounded-2xl flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-xs truncate">{job.title}</h3>
                  <p className="text-[9px] text-muted-foreground font-medium uppercase">{job.company} • {job.date}</p>
                </div>
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 font-bold text-[8px]">
                  {job.status}
                </Badge>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. Saved Jobs */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black tracking-tight flex items-center gap-2">
              <Bookmark className="h-4 w-4 text-primary" /> Saved
            </h2>
            <Button variant="link" className="text-primary p-0 h-auto text-[10px] font-bold" onClick={() => router.push('/worker/saved-jobs')}>
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {savedJobs.map((job) => (
              <Card key={job.id} className="p-4 border-none bg-white shadow-sm rounded-2xl hover:bg-primary/5 cursor-pointer group transition-colors" onClick={() => router.push(`/worker/jobs/${job.id}`)}>
                <div className="flex justify-between items-center gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-xs group-hover:text-primary transition-colors truncate">{job.title}</h3>
                    <p className="text-[9px] text-muted-foreground font-bold">{job.company} • {job.type}</p>
                  </div>
                  <span className="text-[10px] font-black text-primary shrink-0">{job.stipend}</span>
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 6. Reviews Section */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black tracking-tight flex items-center gap-2">
              <Star className="h-4 w-4 text-primary fill-primary" /> Client Feedback
            </h2>
          </div>
          <div className="space-y-3">
            {reviews.map((review) => (
              <Card key={review.id} className="p-5 border-none bg-white shadow-sm rounded-3xl relative overflow-hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Star className="h-5 w-5 text-primary fill-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs">{review.client}</h3>
                    <p className="text-[9px] text-muted-foreground font-medium">{review.company}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground italic leading-relaxed font-medium">
                  "{review.comment}"
                </p>
                <p className="mt-3 text-[8px] font-black uppercase text-primary/40 tracking-widest">{review.date}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}
