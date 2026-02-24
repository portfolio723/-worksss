"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Plus, Clock, Users, CheckCircle2, Star, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

const stats = [
  { label: 'Active Internships', value: 2, icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Applicants', value: 24, icon: Users, color: 'text-purple-500', bg: 'bg-purple-50' },
  { label: 'Completed Gigs', value: 18, icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50' },
];

const recentApplicants = [
  {
    name: 'Ananya Sharma',
    role: 'Fullstack Intern',
    rating: 4.9,
    location: 'IIT Delhi',
    skills: ['Next.js', 'Firebase', 'Tailwind'],
    avatar: 'https://picsum.photos/seed/s1/100/100'
  },
  {
    name: 'Vikram Malhotra',
    role: 'Content Writer',
    rating: 4.7,
    location: 'Mumbai University',
    skills: ['SEO', 'Copywriting', 'Canva'],
    avatar: 'https://picsum.photos/seed/s2/100/100'
  }
];

export default function HirerDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Namaste, Arjun</h1>
          <p className="text-muted-foreground">You have 5 new student applications today.</p>
        </div>

        <Button 
          className="w-full h-14 rounded-2xl bg-accent mb-8 shadow-lg text-lg"
          onClick={() => router.push('/hirer/jobs/create')}
        >
          <Plus className="mr-2 h-5 w-5" />
          Post an Internship
        </Button>

        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 mb-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="min-w-[140px] p-4 flex flex-col gap-2">
              <div className={`${stat.bg} ${stat.color} p-2 rounded-xl w-fit`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </Card>
          ))}
        </div>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Active Postings</h2>
            <Button 
              variant="link" 
              className="text-accent h-auto p-0"
              onClick={() => router.push('/hirer/jobs')}
            >
              View all
            </Button>
          </div>
          
          <Card className="p-4 border-l-4 border-l-accent mb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">React Dev Intern (Summer)</h3>
              <Badge variant="secondary">Active</Badge>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Stipend: ₹15,000 - ₹25,000 /mo</p>
            <div className="flex gap-2 flex-wrap mb-4">
              <Badge variant="outline" className="text-[10px]">React</Badge>
              <Badge variant="outline" className="text-[10px]">TypeScript</Badge>
              <Badge variant="outline" className="text-[10px]">Redux</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">14 Students Applied</span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="h-8 text-xs">Edit</Button>
                <Button size="sm" className="h-8 text-xs bg-accent">Review</Button>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Top Student Matches</h2>
          </div>
          
          <div className="space-y-4">
            {recentApplicants.map((applicant) => (
              <Card key={applicant.name} className="p-4">
                <div className="flex gap-4">
                  <img 
                    src={applicant.avatar} 
                    alt={applicant.name} 
                    className="w-12 h-12 rounded-xl object-cover"
                    data-ai-hint="indian student"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-sm">{applicant.name}</h4>
                        <p className="text-xs text-muted-foreground">{applicant.role}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-bold">{applicant.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-1 mb-2">
                      <MapPin className="h-3 w-3" />
                      {applicant.location}
                    </div>
                    <div className="flex gap-2 mb-3">
                      {applicant.skills.map(s => (
                        <span key={s} className="text-[10px] bg-secondary px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">Profile</Button>
                      <Button size="sm" className="flex-1 h-8 text-xs bg-accent">Message</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
