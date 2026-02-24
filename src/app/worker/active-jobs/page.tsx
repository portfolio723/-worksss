"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { ArrowLeft, MessageSquare, CheckCircle2, FileText, LayoutDashboard, AlertCircle, XCircle } from 'lucide-react';
import { Progress as ProgressUI } from '@/components/ui/progress';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
          <h1 className="text-3xl font-normal tracking-tight">Current Projects</h1>
        </div>

        <div className="bg-amber-50 p-5 rounded-3xl mb-8 border border-amber-100 flex gap-4">
          <AlertCircle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-[10px] font-normal uppercase tracking-widest text-amber-700">Worker Ethics Policy</p>
            <p className="text-xs text-amber-800 leading-relaxed font-normal">
              Cancelling a project after acceptance will negatively impact your <span className="font-normal">Behaviour Rating</span> and profile visibility.
            </p>
          </div>
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
                    <h3 className="font-normal text-xl">{job.title}</h3>
                    <p className="text-sm text-muted-foreground font-normal">{job.company}</p>
                    <Badge className="mt-2 bg-emerald-50 text-emerald-700 font-normal text-[9px] uppercase tracking-widest">{job.status}</Badge>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-[10px] text-muted-foreground font-normal uppercase tracking-widest mb-1">Upcoming Deadline</p>
                  <p className="font-normal text-rose-500">{job.deadline}</p>
                </div>
              </div>

              <div className="space-y-6 bg-secondary/30 p-6 rounded-[2rem] mb-8">
                <div className="flex justify-between items-center text-xs font-normal uppercase tracking-tight text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Current Milestone: {job.milestone}</span>
                  </div>
                  <span>{job.progress}%</span>
                </div>
                <ProgressUI value={job.progress} className="h-3 bg-secondary" />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <Button className="h-14 rounded-2xl bg-primary text-white shadow-lg font-normal gap-2">
                  <FileText className="h-5 w-5" />
                  Submit Work
                </Button>
                <Button variant="outline" className="h-14 rounded-2xl border-primary text-primary font-normal gap-2" onClick={() => router.push('/worker/messages')}>
                  <MessageSquare className="h-5 w-5" />
                  Chat Client
                </Button>
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" className="h-14 rounded-2xl font-normal text-rose-500 hover:bg-rose-50 border-none flex gap-2">
                      <XCircle className="h-5 w-5" />
                      Abandon Project
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="worker-theme rounded-[2rem] p-8 max-w-[360px]">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-2xl font-normal">Abandon Project?</AlertDialogTitle>
                      <AlertDialogDescription className="text-sm font-normal">
                        Abandoning an ongoing project will result in a <span className="text-rose-600 font-normal">1-star Behaviour Rating</span> impact and restricted project access for 14 days.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-6 flex-col gap-3">
                      <AlertDialogAction className="w-full h-14 bg-rose-600 text-white rounded-2xl font-normal shadow-lg">
                        Yes, Abandon
                      </AlertDialogAction>
                      <AlertDialogCancel className="w-full h-14 bg-secondary text-foreground rounded-2xl font-normal border-none">
                        Continue Working
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <BottomNav role="worker" />
    </div>
  );
}
