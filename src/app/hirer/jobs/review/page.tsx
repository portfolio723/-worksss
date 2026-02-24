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
  GraduationCap,
  Star
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockApplicants = [
  {
    id: 'a1',
    name: 'Rahul Varma',
    college: 'IIT Bombay',
    role: 'Frontend Developer',
    matchScore: 98,
    status: 'Pending',
    appliedOn: '2 Days Ago',
    skills: ['React', 'Next.js', 'Tailwind'],
    avatar: 'https://picsum.photos/seed/r1/100/100'
  },
  {
    id: 'a2',
    name: 'Priya Das',
    college: 'Delhi Technological University',
    role: 'UI/UX Designer',
    matchScore: 92,
    status: 'Shortlisted',
    appliedOn: '1 Day Ago',
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    avatar: 'https://picsum.photos/seed/p1/100/100'
  }
];

export default function ReviewApplicantsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');

  const filteredApplicants = mockApplicants.filter(app => {
    if (activeTab === 'all') return true;
    return app.status.toLowerCase() === activeTab;
  });

  return (
    <div className="hirer-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-xl hover:bg-secondary"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Review Applicants</h1>
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-tight">React Dev Intern (Summer)</p>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
          <TabsList className="w-full bg-secondary/50 p-1 rounded-2xl">
            <TabsTrigger value="all" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">All Applicants</TabsTrigger>
            <TabsTrigger value="shortlisted" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Shortlisted</TabsTrigger>
            <TabsTrigger value="pending" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Pending</TabsTrigger>
          </TabsList>

          <div className="mt-8 space-y-6">
            {filteredApplicants.map((applicant) => (
              <Card key={applicant.id} className="p-6 bg-white border-none shadow-sm relative overflow-hidden rounded-3xl">
                <div className="flex gap-5">
                  <div className="relative shrink-0">
                    <img 
                      src={applicant.avatar} 
                      alt={applicant.name} 
                      className="w-16 h-16 rounded-2xl object-cover shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-[10px] text-white px-2 py-0.5 rounded-lg font-black shadow-sm">
                      {applicant.matchScore}%
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg text-foreground truncate">{applicant.name}</h3>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mt-0.5">
                          <GraduationCap className="h-3.5 w-3.5" />
                          <span className="truncate">{applicant.college}</span>
                        </div>
                      </div>
                      <Badge 
                        variant={applicant.status === 'Shortlisted' ? 'secondary' : 'outline'} 
                        className={`text-[9px] h-5 uppercase tracking-widest font-black ${applicant.status === 'Shortlisted' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : ''}`}
                      >
                        {applicant.status}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {applicant.skills.map(skill => (
                        <span key={skill} className="text-[10px] bg-secondary text-primary px-2 py-0.5 rounded-md font-bold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-muted/50">
                  <Button variant="ghost" className="h-12 text-xs font-bold gap-2 text-destructive hover:text-destructive hover:bg-destructive/5 rounded-xl">
                    <XCircle className="h-4 w-4" />
                    Reject
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="h-12 text-xs font-bold gap-2 text-primary hover:bg-primary/5 rounded-xl"
                    onClick={() => router.push(`/hirer/messages/${applicant.id}`)}
                  >
                    <MessageSquare className="h-4 w-4" />
                    Chat
                  </Button>
                  <Button className="h-12 text-xs font-bold gap-2 bg-primary text-primary-foreground shadow-md hover:bg-primary/90 rounded-xl">
                    <CheckCircle2 className="h-4 w-4" />
                    Shortlist
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Tabs>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
