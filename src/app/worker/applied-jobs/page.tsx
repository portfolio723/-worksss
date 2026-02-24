
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send, Search, Filter, Calendar, Building2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

const applications = [
  { id: 'ap1', title: 'Frontend Developer', company: 'Zomato', status: 'In Review', date: '2 Days Ago', location: 'Remote', stipend: '₹15k/mo' },
  { id: 'ap2', title: 'Next.js Specialist', company: 'Razorpay', status: 'Interviewing', date: '5 Days Ago', location: 'Bangalore', stipend: '₹25k/mo' },
  { id: 'ap3', title: 'UI Design Intern', company: 'Swiggy', status: 'Rejected', date: '1 Week Ago', location: 'Remote', stipend: '₹12k/mo' },
  { id: 'ap4', title: 'Python Backend Lead', company: 'Dunzo', status: 'In Review', date: '1 Week Ago', location: 'Hybrid', stipend: '₹30k/mo' },
];

export default function AppliedJobsPage() {
  const router = useRouter();

  return (
    <div className="worker-theme min-h-screen bg-background pb-24">
      <TopNav />
      <main className="content-area px-6 max-w-4xl mx-auto py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" className="rounded-xl h-10 w-10" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-black tracking-tight">Applications</h1>
        </div>

        <div className="flex gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input className="pl-12 h-14 bg-white border-none shadow-sm rounded-2xl text-base" placeholder="Search applications..." />
          </div>
          <Button variant="outline" className="h-14 w-14 rounded-2xl bg-white shadow-sm">
            <Filter className="h-6 w-6 text-primary" />
          </Button>
        </div>

        <div className="space-y-4">
          {applications.map((job) => (
            <Card key={job.id} className="p-6 border-none bg-white shadow-sm rounded-[2rem] hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{job.company}</p>
                  </div>
                </div>
                <Badge 
                  className={cn(
                    "w-fit font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-lg",
                    job.status === 'In Review' && "bg-blue-50 text-blue-700",
                    job.status === 'Interviewing' && "bg-emerald-50 text-emerald-700",
                    job.status === 'Rejected' && "bg-rose-50 text-rose-700"
                  )}
                >
                  {job.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-muted/30">
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-tight">Applied</p>
                  <p className="text-xs font-bold">{job.date}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-tight">Location</p>
                  <p className="text-xs font-bold">{job.location}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-tight">Stipend</p>
                  <p className="text-xs font-bold">{job.stipend}</p>
                </div>
                <Button variant="secondary" size="sm" className="h-10 rounded-xl text-xs font-medium">
                  Withdraw
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <BottomNav role="worker" />
    </div>
  );
}

import { cn } from '@/lib/utils';
