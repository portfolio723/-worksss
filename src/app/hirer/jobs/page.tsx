
"use client"

import { useState } from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, MoreVertical, Users, Eye, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

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
    type: 'Internship'
  },
  {
    id: '2',
    title: 'UI/UX Designer (Part-time)',
    stipend: '₹12,000 /mo',
    postedOn: 'Sep 28, 2023',
    status: 'Active',
    applicants: 8,
    views: 92,
    location: 'Bangalore, KA',
    type: 'Gig'
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
    type: 'Gig'
  },
  {
    id: '4',
    title: 'Social Media Manager',
    stipend: '₹10,000 /mo',
    postedOn: 'Nov 01, 2023',
    status: 'Draft',
    applicants: 0,
    views: 0,
    location: 'Mumbai, MH',
    type: 'Internship'
  }
];

export default function HirerJobsPage() {
  const [activeTab, setActiveTab] = useState('active');

  const filteredJobs = myPostings.filter(job => {
    if (activeTab === 'all') return true;
    return job.status.toLowerCase() === activeTab;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Manage Postings</h1>
            <p className="text-sm text-muted-foreground">Track your listings and applications</p>
          </div>
          <Button size="icon" className="h-10 w-10 rounded-full bg-accent shadow-lg">
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            className="pl-10 h-12 bg-white border-none shadow-sm rounded-xl" 
            placeholder="Search your postings..." 
          />
        </div>

        <Tabs defaultValue="active" className="w-full mb-6" onValueChange={setActiveTab}>
          <TabsList className="w-full bg-white/50 p-1 rounded-xl">
            <TabsTrigger value="active" className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Active</TabsTrigger>
            <TabsTrigger value="closed" className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Closed</TabsTrigger>
            <TabsTrigger value="draft" className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Drafts</TabsTrigger>
            <TabsTrigger value="all" className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">All</TabsTrigger>
          </TabsList>

          <div className="mt-6 space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card key={job.id} className="p-4 bg-white border-none shadow-sm overflow-hidden">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-base leading-tight">{job.title}</h3>
                        <Badge variant={job.status === 'Active' ? 'secondary' : 'outline'} className="text-[10px] h-4">
                          {job.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {job.postedOn}
                        </div>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Posting</DropdownMenuItem>
                        <DropdownMenuItem>View Stats</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Close Posting</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="bg-secondary/30 rounded-lg p-3 my-4 grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1">Applicants</p>
                      <div className="flex items-center justify-center gap-1">
                        <Users className="h-3 w-3 text-accent" />
                        <span className="text-sm font-bold">{job.applicants}</span>
                      </div>
                    </div>
                    <div className="text-center border-x border-muted">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1">Views</p>
                      <div className="flex items-center justify-center gap-1">
                        <Eye className="h-3 w-3 text-accent" />
                        <span className="text-sm font-bold">{job.views}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1">Type</p>
                      <span className="text-[11px] font-bold text-accent">{job.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground">{job.stipend}</span>
                    <Button size="sm" className="h-9 px-6 bg-accent rounded-xl text-xs font-bold">
                      Review Applicants
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 px-8">
                <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-8 w-8 text-muted-foreground opacity-50" />
                </div>
                <h3 className="font-bold text-lg mb-2">No {activeTab} postings</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Ready to find your next student talent? Post a new job or internship.
                </p>
                <Button className="bg-accent rounded-xl px-8">Create Posting</Button>
              </div>
            )}
          </div>
        </Tabs>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
