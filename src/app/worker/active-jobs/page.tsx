
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, MessageSquare, CheckCircle2, FileText, LayoutDashboard } from 'lucide-react';
import { Progress as ProgressUI } from '@/components/ui/progress';

const activeJobs = [
  { id: 'aj1', title: 'React Dev Intern', company: 'TechShastra', deadline: 'Next Week', progress: 65, status: 'On Track', milestone: 'API Integration' },
  { id: 'aj2', title: 'UI Design Fixes', company: 'Creatives Hub', deadline: '2 Days Left', progress: 40, status: 'Urgent', milestone: 'Figma Review' },
];

export default function ActiveJobsPage() {
  const router = useRouter();

  return (
    <div className="worker-theme min-h-screen bg-background pb-24">
      <TopNav />
      <main className="content-area px-6 max-w-4xl mx-auto py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" className="rounded-xl h-10 w-10" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-black tracking-tight">Current Projects</h1>
        </div>

        <div className="space-y-6">
          {activeJobs.map((job) => (
            <Card key={job.id} className="p-8 border-none bg-white shadow-xl rounded-[3rem]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                <div className="flex gap-5">
                  <div className="h-16 w-16 rounded-[1.5rem] bg-secondary flex items-center justify-center">
                    <LayoutDashboard className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{job.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{job.company}</p>
                    <Badge className="mt-2 bg-emerald-50 text-emerald-700 font-black text-[9px] uppercase tracking-widest">{job.status}</Badge>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mb-1">Upcoming Deadline</p>
                  <p className="font-bold text-rose-500">{job.deadline}</p>
                </div>
              </div>

              <div className="space-y-6 bg-secondary/30 p-6 rounded-[2rem] mb-8">
                <div className="flex justify-between items-center text-xs font-black uppercase tracking-tight text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Current Milestone: {job.milestone}</span>
                  </div>
                  <span>{job.progress}%</span>
                </div>
                <ProgressUI value={job.progress} className="h-3 bg-secondary" />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <Button className="h-14 rounded-2xl bg-primary text-white shadow-lg font-medium gap-2">
                  <FileText className="h-5 w-5" />
                  Submit Work
                </Button>
                <Button variant="outline" className="h-14 rounded-2xl border-primary text-primary font-medium gap-2" onClick={() => router.push('/worker/messages')}>
                  <MessageSquare className="h-5 w-5" />
                  Chat Client
                </Button>
                <Button variant="secondary" className="h-14 rounded-2xl font-medium col-span-2 lg:col-span-1">
                  View Brief
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
