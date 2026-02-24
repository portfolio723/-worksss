
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { 
  Wallet, 
  MapPin, 
  ChevronRight, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Bookmark, 
  Star, 
  Send,
  Briefcase
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress as ProgressUI } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
      
      <main className="content-area px-6 max-w-7xl mx-auto py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-foreground">Namaste, Rohan</h1>
            <p className="text-sm text-muted-foreground mt-1 font-medium">Your freelance career at a glance.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="h-12 rounded-2xl border-primary text-primary font-medium" onClick={() => router.push('/worker/browse')}>
              Browse Gigs
            </Button>
            <Button className="h-12 rounded-2xl bg-primary text-white shadow-lg font-medium" onClick={() => router.push('/worker/earnings')}>
              Withdraw Funds
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Earnings Summary */}
          <Card 
            className="p-8 bg-primary text-primary-foreground shadow-2xl overflow-hidden relative cursor-pointer border-none rounded-3xl lg:col-span-2"
            onClick={() => router.push('/worker/earnings')}
          >
            <div className="relative z-10">
              <span className="text-xs opacity-80 mb-2 block font-bold tracking-widest uppercase">Available Balance</span>
              <div className="flex items-center justify-between mb-8">
                <span className="text-5xl font-black tracking-tighter">₹42,500.00</span>
                <div className="bg-white/20 p-4 rounded-[2rem]">
                  <Wallet className="h-8 w-8" />
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
                  <p className="text-[10px] uppercase font-black opacity-70 mb-1">Total Earned</p>
                  <p className="text-lg font-bold">₹1.2L</p>
                </div>
                <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
                  <p className="text-[10px] uppercase font-black opacity-70 mb-1">In Clearance</p>
                  <p className="text-lg font-bold">₹8,400</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full" />
          </Card>

          {/* Profile Completion Tracker */}
          <Card className="p-8 border-none bg-white shadow-xl rounded-3xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-black text-foreground uppercase tracking-tight">Profile Progress</h2>
                <Badge variant="secondary" className="bg-primary/10 text-primary font-black">75%</Badge>
              </div>
              <ProgressUI value={75} className="h-3 bg-secondary rounded-full" />
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                Verify your identity and add your college degree to unlock premium high-stipend gigs.
              </p>
            </div>
            <Button 
              className="mt-8 h-14 w-full rounded-2xl bg-secondary text-primary hover:bg-primary hover:text-white transition-all font-medium"
              onClick={() => router.push('/worker/profile')}
            >
              Complete Verification
            </Button>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Active Jobs */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" /> Active Jobs
              </h2>
              <Button variant="link" className="text-primary p-0 h-auto text-xs font-bold" onClick={() => router.push('/worker/active-jobs')}>
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {activeJobs.map((job) => (
                <Card key={job.id} className="p-5 border-none bg-white shadow-sm hover:shadow-md transition-shadow rounded-3xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-base">{job.title}</h3>
                      <p className="text-xs text-muted-foreground font-medium">{job.company}</p>
                    </div>
                    <Badge variant="outline" className="text-[10px] font-black uppercase text-primary border-primary/20">
                      {job.deadline}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase text-muted-foreground">
                      <span>Progress</span>
                      <span>{job.progress}%</span>
                    </div>
                    <ProgressUI value={job.progress} className="h-1.5 bg-secondary" />
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Applied Jobs */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" /> Applied
              </h2>
              <Button variant="link" className="text-primary p-0 h-auto text-xs font-bold" onClick={() => router.push('/worker/applied-jobs')}>
                Track All
              </Button>
            </div>
            <div className="space-y-4">
              {appliedJobs.map((job) => (
                <Card key={job.id} className="p-5 border-none bg-white shadow-sm rounded-3xl flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm truncate">{job.title}</h3>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase">{job.company} • {job.date}</p>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                    {job.status}
                  </Badge>
                </Card>
              ))}
            </div>
          </section>

          {/* Saved Jobs */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-primary" /> Bookmarked
              </h2>
              <Button variant="link" className="text-primary p-0 h-auto text-xs font-bold" onClick={() => router.push('/worker/saved-jobs')}>
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {savedJobs.map((job) => (
                <Card key={job.id} className="p-5 border-none bg-white shadow-sm rounded-3xl hover:bg-primary/5 cursor-pointer group transition-colors" onClick={() => router.push(`/worker/jobs/${job.id}`)}>
                  <div className="flex justify-between items-start">
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm group-hover:text-primary transition-colors truncate">{job.title}</h3>
                      <p className="text-[10px] text-muted-foreground font-bold">{job.company} • {job.type}</p>
                    </div>
                    <span className="text-xs font-black text-primary">{job.stipend}</span>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Reviews Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black tracking-tight flex items-center gap-3">
              <Star className="h-7 w-7 text-primary fill-primary" /> Client Reviews
            </h2>
            <Button variant="link" className="text-primary p-0 h-auto text-sm font-bold" onClick={() => router.push('/worker/reviews')}>
              Read All Feedback
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="p-8 border-none bg-white shadow-xl rounded-[2.5rem] relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{review.client}</h3>
                    <p className="text-xs text-muted-foreground font-medium">{review.company}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed font-medium">
                  "{review.comment}"
                </p>
                <p className="mt-6 text-[10px] font-black uppercase text-primary/50 tracking-widest">{review.date}</p>
                <div className="absolute -right-6 -top-6 h-24 w-24 bg-primary/5 rounded-full" />
              </Card>
            ))}
          </div>
        </section>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}

function Activity(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
