
"use client"

import { useState } from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, MoreVertical, Users, Eye, Calendar, MapPin, AlertTriangle, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
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
import { useRouter } from 'next/navigation';

const myPostings = [
  {
    id: '1',
    title: 'React Dev Intern (Summer)',
    stipend: '₹15,000 - ₹25,000 /mo',
    postedOn: 'Oct 12, 2023',
    status: 'Active',
    applicants: 14,
    views: 156,
    location: 'Remote',
    type: 'Internship',
    hasAcceptedHires: false
  },
  {
    id: '2',
    title: 'UI/UX Designer (Part-Time)',
    stipend: '₹12,000 /mo',
    postedOn: 'Sep 28, 2023',
    status: 'Active',
    applicants: 8,
    views: 92,
    location: 'Hitech City, HYD',
    type: 'Gig',
    hasAcceptedHires: true
  },
  {
    id: '3',
    title: 'Content Writer - Tech Blog',
    stipend: '₹8,000 /mo',
    postedOn: 'Aug 15, 2023',
    status: 'Closed',
    applicants: 32,
    views: 412,
    location: 'Remote',
    type: 'Gig',
    hasAcceptedHires: false
  },
  {
    id: '4',
    title: 'Social Media Manager',
    stipend: '₹10,000 /mo',
    postedOn: 'Nov 01, 2023',
    status: 'Draft',
    applicants: 0,
    views: 0,
    location: 'Banjara Hills, HYD',
    type: 'Internship',
    hasAcceptedHires: false
  }
];

export default function HirerJobsPage() {
  const [activeTab, setActiveTab] = useState('active');
  const router = useRouter();

  const filteredJobs = myPostings.filter(job => {
    if (activeTab === 'all') return true;
    return job.status.toLowerCase() === activeTab;
  });

  return (
    <div className="hirer-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Manage Postings</h1>
            <p className="text-sm text-muted-foreground font-medium">Track Your Listings And Applications In Real-Time.</p>
          </div>
          <Button 
            size="icon" 
            className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 font-medium"
            onClick={() => router.push('/hirer/jobs/create')}
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>

        <div className="bg-blue-50 p-4 rounded-2xl mb-8 border border-blue-100 flex gap-3">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary">Cancellation Policy</p>
            <p className="text-xs text-blue-800 leading-relaxed font-medium">
              Free cancellation for all postings before a hire is accepted. Penalty apply only for accepted project cancellations.
            </p>
          </div>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            className="pl-12 h-14 bg-white border-none shadow-sm rounded-2xl text-base font-medium focus:ring-primary" 
            placeholder="Search Your Postings..." 
          />
        </div>

        <Tabs defaultValue="active" className="w-full mb-8" onValueChange={setActiveTab}>
          <TabsList className="w-full bg-secondary/50 p-1 rounded-2xl">
            <TabsTrigger value="active" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Active</TabsTrigger>
            <TabsTrigger value="closed" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Closed</TabsTrigger>
            <TabsTrigger value="draft" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Drafts</TabsTrigger>
            <TabsTrigger value="all" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">All</TabsTrigger>
          </TabsList>

          <div className="mt-8 space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card key={job.id} className="p-5 bg-white border-none shadow-sm overflow-hidden rounded-3xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg text-foreground leading-tight truncate">{job.title}</h3>
                        <Badge variant={job.status === 'Active' ? 'secondary' : 'outline'} className={`text-[10px] h-5 font-bold ${job.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : ''}`}>
                          {job.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {job.postedOn}
                        </div>
                      </div>
                    </div>
                    
                    <AlertDialog>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-10 w-10 -mr-2 rounded-xl font-medium">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-xl border-none shadow-xl">
                          <DropdownMenuItem className="font-bold text-sm p-3" onClick={() => router.push(`/hirer/jobs/edit?jobId=${job.id}`)}>Edit Posting</DropdownMenuItem>
                          <DropdownMenuItem className="font-bold text-sm p-3">View Detailed Stats</DropdownMenuItem>
                          <AlertDialogTrigger asChild>
                            <DropdownMenuItem className="font-bold text-sm p-3 text-destructive">Close Posting</DropdownMenuItem>
                          </AlertDialogTrigger>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      
                      <AlertDialogContent className="hirer-theme rounded-[2rem] p-8 max-w-[360px]">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-2xl font-black">Confirm Cancellation?</AlertDialogTitle>
                          <AlertDialogDescription className="text-sm font-medium">
                            {job.hasAcceptedHires 
                              ? "Warning: You have already accepted talent for this gig. Cancelling now will incur a 10% platform penalty fee from your escrow."
                              : "This posting has no accepted hires yet. You can cancel this posting without any penalty fees."}
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="mt-6 flex-col gap-3">
                          <AlertDialogAction className="w-full h-14 bg-destructive text-white rounded-2xl font-bold shadow-lg">
                            Yes, Cancel Posting
                          </AlertDialogAction>
                          <AlertDialogCancel className="w-full h-14 bg-secondary text-foreground rounded-2xl font-bold border-none">
                            Keep Posting
                          </AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>

                  <div className="bg-secondary/30 rounded-2xl p-4 mb-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1.5">Applicants</p>
                      <div className="flex items-center justify-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-primary" />
                        <span className="text-base font-bold text-foreground">{job.applicants}</span>
                      </div>
                    </div>
                    <div className="text-center border-x border-muted/50">
                      <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1.5">Views</p>
                      <div className="flex items-center justify-center gap-1.5">
                        <Eye className="h-3.5 w-3.5 text-primary" />
                        <span className="text-base font-bold text-foreground">{job.views}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1.5">Role Type</p>
                      <span className="text-xs font-bold text-primary">{job.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-foreground">{job.stipend}</span>
                    <Button 
                      className="h-11 px-6 bg-primary text-primary-foreground rounded-2xl text-xs font-medium shadow-md hover:bg-primary/90"
                      onClick={() => router.push(`/hirer/jobs/review?jobId=${job.id}`)}
                    >
                      Review Applicants
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-20 px-8 bg-white rounded-3xl shadow-sm">
                <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plus className="h-10 w-10 text-muted-foreground opacity-30" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3">No {activeTab} Postings Found</h3>
                <p className="text-sm text-muted-foreground font-medium mb-10 leading-relaxed">
                  Ready To Find Your Next Student Talent? Post A New Internship Or Gig Project To Get Started.
                </p>
                <Button 
                  className="bg-primary text-primary-foreground rounded-2xl px-10 h-14 text-base font-medium shadow-xl"
                  onClick={() => router.push('/hirer/jobs/create')}
                >
                  Create New Posting
                </Button>
              </div>
            )}
          </div>
        </Tabs>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
