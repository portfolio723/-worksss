"use client"

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  MessageSquare, 
  CheckCircle2, 
  XCircle, 
  Star, 
  MapPin, 
  GraduationCap,
  Filter,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockApplicants = [
  {
    id: 'a1',
    name: 'Rahul Varma',
    college: 'IIT Bombay',
    role: 'Frontend Developer',
    matchScore: 98,
    status: 'pending',
    appliedOn: '2 days ago',
    skills: ['React', 'Next.js', 'Tailwind'],
    avatar: 'https://picsum.photos/seed/r1/100/100'
  },
  {
    id: 'a2',
    name: 'Priya Das',
    college: 'Delhi Technological University',
    role: 'UI/UX Designer',
    matchScore: 92,
    status: 'shortlisted',
    appliedOn: '1 day ago',
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    avatar: 'https://picsum.photos/seed/p1/100/100'
  },
  {
    id: 'a3',
    name: 'Amit Singh',
    college: 'Anna University',
    role: 'Backend Intern',
    matchScore: 85,
    status: 'pending',
    appliedOn: '3 days ago',
    skills: ['Node.js', 'PostgreSQL', 'Docker'],
    avatar: 'https://picsum.photos/seed/am1/100/100'
  },
  {
    id: 'a4',
    name: 'Sanya Malhotra',
    college: 'BITS Pilani',
    role: 'Fullstack Intern',
    matchScore: 89,
    status: 'rejected',
    appliedOn: '4 days ago',
    skills: ['MERN Stack', 'Redux', 'AWS'],
    avatar: 'https://picsum.photos/seed/sm1/100/100'
  }
];

export default function ReviewApplicantsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobId = searchParams.get('jobId') || '1';
  const [activeTab, setActiveTab] = useState('all');

  const filteredApplicants = mockApplicants.filter(app => {
    if (activeTab === 'all') return true;
    return app.status === activeTab;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-full"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Review Applicants</h1>
            <p className="text-xs text-muted-foreground">React Dev Intern (Summer)</p>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-10 h-12 bg-white border-none shadow-sm rounded-xl" placeholder="Search by name or college..." />
          </div>
          <Button variant="outline" className="h-12 w-12 rounded-xl bg-white border-none shadow-sm">
            <Filter className="h-5 w-5 text-accent" />
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full mb-6" onValueChange={setActiveTab}>
          <TabsList className="w-full bg-white/50 p-1 rounded-xl">
            <TabsTrigger value="all" className="flex-1 rounded-lg">All</TabsTrigger>
            <TabsTrigger value="shortlisted" className="flex-1 rounded-lg">Shortlisted</TabsTrigger>
            <TabsTrigger value="pending" className="flex-1 rounded-lg">Pending</TabsTrigger>
          </TabsList>

          <div className="mt-6 space-y-4">
            {filteredApplicants.map((applicant) => (
              <Card key={applicant.id} className="p-4 bg-white border-none shadow-sm relative overflow-hidden">
                <div className="flex gap-4">
                  <div className="relative">
                    <img 
                      src={applicant.avatar} 
                      alt={applicant.name} 
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-secondary"
                      data-ai-hint="indian student"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 text-[8px] text-white px-1 rounded-md font-bold">
                      {applicant.matchScore}%
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-base truncate">{applicant.name}</h3>
                        <div className="flex items-center gap-1 text-[11px] text-muted-foreground mb-1">
                          <GraduationCap className="h-3 w-3" />
                          <span className="truncate">{applicant.college}</span>
                        </div>
                      </div>
                      <Badge 
                        variant={applicant.status === 'shortlisted' ? 'secondary' : 'outline'} 
                        className="text-[9px] h-4 uppercase tracking-wider"
                      >
                        {applicant.status}
                      </Badge>
                    </div>

                    <div className="flex gap-1.5 flex-wrap mt-2">
                      {applicant.skills.map(skill => (
                        <span key={skill} className="text-[10px] bg-secondary/50 text-accent font-medium px-2 py-0.5 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t">
                  <Button variant="ghost" className="h-10 text-xs gap-2 text-destructive hover:text-destructive hover:bg-destructive/5">
                    <XCircle className="h-4 w-4" />
                    Reject
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="h-10 text-xs gap-2 text-accent"
                    onClick={() => router.push(`/messages/${applicant.id}`)}
                  >
                    <MessageSquare className="h-4 w-4" />
                    Chat
                  </Button>
                  <Button className="h-10 text-xs gap-2 bg-accent shadow-md">
                    <CheckCircle2 className="h-4 w-4" />
                    Shortlist
                  </Button>
                </div>
              </Card>
            ))}

            {filteredApplicants.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No applicants found in this category.</p>
              </div>
            )}
          </div>
        </Tabs>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
