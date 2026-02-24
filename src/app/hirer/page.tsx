"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  Clock, 
  Users, 
  CheckCircle2, 
  CreditCard, 
  Briefcase, 
  Star, 
  UserCheck, 
  Activity, 
  ChevronRight,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const stats = [
  { label: 'Active Postings', value: 4, icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100' },
  { label: 'Total Applications', value: 42, icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-100' },
  { label: 'Verified Hires', value: 12, icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-100' },
];

const ongoingJobs = [
  { id: 'oj1', title: 'React Developer', worker: 'Rohan Gupta', progress: 75, deadline: 'In 4 Days' },
  { id: 'oj2', title: 'UI/UX Designer', worker: 'Priya Das', progress: 40, deadline: 'In 12 Days' },
];

const savedProfiles = [
  { id: 's1', name: 'Ananya Sharma', role: 'Fullstack Dev', college: 'IIT Hyderabad', avatar: 'https://picsum.photos/seed/s1/100/100', rating: 4.9 },
  { id: 's2', name: 'Rahul Varma', role: 'DevOps Intern', college: 'BITS Pilani', avatar: 'https://picsum.photos/seed/r1/100/100', rating: 4.7 },
];

export default function HirerDashboard() {
  const router = useRouter();

  return (
    <div className="hirer-theme min-h-screen bg-background pb-24">
      <TopNav />
      
      <main className="content-area px-6 py-6 space-y-10">
        {/* Header Section */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-black tracking-tight text-foreground">Namaste, Arjun</h1>
          <p className="text-sm text-muted-foreground font-medium">Recruiter Dashboard • TechShastra</p>
        </div>

        {/* 1. Payment Status / Escrow Summary */}
        <Card 
          className="p-7 bg-primary text-primary-foreground shadow-xl relative overflow-hidden rounded-[2.5rem] border-none cursor-pointer"
          onClick={() => router.push('/hirer/payments')}
        >
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs opacity-90 font-bold tracking-tight">Escrow Balance</span>
                <h2 className="text-4xl font-black mt-1 tracking-tighter">₹58,400.00</h2>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl">
                <CreditCard className="h-7 w-7" />
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1 h-12 bg-white text-primary hover:bg-white/90 font-bold rounded-xl shadow-md" onClick={(e) => { e.stopPropagation(); router.push('/hirer/payments/add-funds'); }}>
                Add Funds
              </Button>
              <Button variant="ghost" className="flex-1 h-12 border border-white/30 text-white hover:bg-white/10 font-bold rounded-xl" onClick={(e) => { e.stopPropagation(); router.push('/hirer/payments/history'); }}>
                View Logs
              </Button>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full" />
        </Card>

        {/* Quick Stats Carousel */}
        <Carousel className="w-full overflow-hidden -mx-6 px-6" opts={{ align: "start", dragFree: true }}>
          <CarouselContent className="-ml-4">
            {stats.map((stat) => (
              <CarouselItem key={stat.label} className="pl-4 basis-[160px]">
                <Card className="p-5 flex flex-col gap-2 bg-white border-none shadow-sm rounded-3xl h-full">
                  <div className={`${stat.bg} ${stat.color} p-2.5 rounded-xl w-fit`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-black text-foreground mt-2">{stat.value}</span>
                  <span className="text-xs text-muted-foreground font-normal tracking-tight">{stat.label}</span>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* 2. Posted Jobs (Live Listings) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black text-foreground tracking-tight flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" /> Posted Jobs
            </h2>
            <Button variant="link" className="text-primary p-0 h-auto text-xs font-bold" onClick={() => router.push('/hirer/jobs')}>
              Manage All
            </Button>
          </div>
          <Card className="p-5 border-l-4 border-l-primary bg-white shadow-sm rounded-2xl">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-base text-foreground">React Dev Intern (Summer)</h3>
              <Badge className="bg-emerald-50 text-emerald-700 font-bold text-[10px] uppercase tracking-widest">Active</Badge>
            </div>
            <p className="text-xs text-muted-foreground font-medium">14 Applications Received • Posted On Oct 12</p>
            <div className="flex gap-3 mt-6">
              <Button variant="secondary" className="flex-1 h-10 text-xs font-bold rounded-xl" onClick={() => router.push('/hirer/jobs/edit?jobId=1')}>
                Edit
              </Button>
              <Button className="flex-1 h-10 bg-primary text-white text-xs font-bold rounded-xl shadow-md" onClick={() => router.push('/hirer/jobs/review?jobId=1')}>
                Review Applications
              </Button>
            </div>
          </Card>
        </section>

        {/* 3. Applications Received (Recent) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black text-foreground tracking-tight flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" /> New Applications
            </h2>
          </div>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <Card key={i} className="p-4 bg-white border-none shadow-sm rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center font-bold text-primary">
                  {i === 1 ? 'RG' : 'PD'}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-foreground truncate">Applicant {i === 1 ? 'Rahul G.' : 'Priya D.'}</h4>
                  <p className="text-[10px] text-muted-foreground font-medium">Applied For UI Designer • 2h Ago</p>
                </div>
                <Button variant="ghost" size="icon" className="text-primary" onClick={() => router.push('/hirer/jobs/review?jobId=1')}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. Ongoing Jobs (Tracking) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black text-foreground tracking-tight flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" /> Ongoing Gigs
            </h2>
          </div>
          <div className="space-y-4">
            {ongoingJobs.map((job) => (
              <Card key={job.id} className="p-5 bg-white border-none shadow-sm rounded-2xl space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm text-foreground">{job.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium">Assigned To: {job.worker}</p>
                  </div>
                  <Badge variant="outline" className="text-[9px] font-black text-rose-500 border-rose-100 bg-rose-50 uppercase tracking-widest">
                    Due {job.deadline}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-muted-foreground">
                    <span>Task Progress</span>
                    <span>{job.progress}%</span>
                  </div>
                  <Progress value={job.progress} className="h-1.5 bg-secondary" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. Saved Profiles */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black text-foreground tracking-tight flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-primary" /> Saved Talent
            </h2>
            <Button variant="link" className="text-primary p-0 h-auto text-xs font-bold" onClick={() => router.push('/hirer/saved-profiles')}>
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {savedProfiles.map((profile) => (
              <Card key={profile.id} className="p-4 bg-white border-none shadow-sm rounded-3xl text-center flex flex-col items-center">
                <img src={profile.avatar} className="w-14 h-14 rounded-2xl object-cover mb-3 shadow-sm" alt={profile.name} />
                <h4 className="text-xs font-bold text-foreground mb-1">{profile.name}</h4>
                <p className="text-[11px] text-muted-foreground font-medium mb-3">{profile.role}</p>
                <Button size="sm" variant="secondary" className="w-full h-8 text-[10px] font-bold rounded-lg" onClick={() => router.push(`/worker/profile/${profile.id}`)}>
                  View Profile
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* 6. Reviews Received */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black text-foreground tracking-tight flex items-center gap-2">
              <Star className="h-4 w-4 text-primary fill-primary" /> Recent Feedback
            </h2>
            <Button variant="link" className="text-primary p-0 h-auto text-xs font-bold" onClick={() => router.push('/hirer/reviews')}>
              Read More
            </Button>
          </div>
          <Card className="p-5 bg-white border-none shadow-sm rounded-3xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-xl">
                <Star className="h-4 w-4 text-primary fill-primary" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground">Rohan Gupta</h4>
                <p className="text-[10px] text-muted-foreground font-medium">React Dev Intern</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-2.5 w-2.5 text-primary fill-primary" />)}
              </div>
            </div>
            <p className="text-xs text-muted-foreground italic leading-relaxed font-medium">
              "Arjun Is A Great Mentor. The Requirements Were Clear And Payments Were Released On Time. Highly Recommended Hirer!"
            </p>
          </Card>
        </section>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
