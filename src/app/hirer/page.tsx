
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Plus, Clock, Users, CheckCircle2, Star, MapPin, CreditCard } from 'lucide-react';
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
    id: 'a1',
    name: 'Ananya Sharma',
    role: 'Fullstack Intern',
    rating: 4.9,
    location: 'IIT Delhi',
    skills: ['Next.js', 'Firebase', 'Tailwind'],
    avatar: 'https://picsum.photos/seed/s1/100/100'
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

        <div className="grid grid-cols-2 gap-4 mb-8">
          <Button 
            className="h-14 rounded-2xl bg-accent shadow-lg text-sm flex-1"
            onClick={() => router.push('/hirer/jobs/create')}
          >
            <Plus className="mr-2 h-4 w-4" />
            Post Internship
          </Button>
          <Button 
            variant="outline"
            className="h-14 rounded-2xl bg-white border-none shadow-md text-sm flex-1 text-accent"
            onClick={() => router.push('/hirer/payments')}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Pay Stipends
          </Button>
        </div>

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
          <h2 className="text-lg font-bold mb-4">Active Postings</h2>
          <Card className="p-4 border-l-4 border-l-accent mb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-sm">React Dev Intern (Summer)</h3>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-muted-foreground">14 Students Applied</span>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="h-8 text-xs"
                  onClick={() => router.push('/hirer/jobs/edit?jobId=1')}
                >
                  Edit
                </Button>
                <Button 
                  size="sm" 
                  className="h-8 text-xs bg-accent"
                  onClick={() => router.push('/hirer/jobs/review?jobId=1')}
                >
                  Review
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Top Student Matches</h2>
          {recentApplicants.map((applicant) => (
            <Card key={applicant.name} className="p-4">
              <div className="flex gap-4">
                <img 
                  src={applicant.avatar} 
                  alt={applicant.name} 
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-sm">{applicant.name}</h4>
                  <p className="text-xs text-muted-foreground">{applicant.role}</p>
                  <div className="flex gap-2 mt-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 h-8 text-xs"
                      onClick={() => router.push(`/hirer/students/${applicant.id}`)}
                    >
                      Profile
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 h-8 text-xs bg-accent"
                      onClick={() => router.push(`/hirer/messages/${applicant.id}`)}
                    >
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </section>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
