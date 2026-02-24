
"use client"

import { useRouter, useParams } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  MapPin, 
  GraduationCap, 
  Star, 
  Briefcase, 
  Github, 
  Linkedin, 
  Mail,
  MessageSquare
} from 'lucide-react';

export default function StudentProfileView() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  // Mock data for a student profile
  const student = {
    name: "Ananya Sharma",
    role: "Fullstack Developer",
    college: "IIT Hyderabad",
    location: "Kandi, HYD",
    rating: 4.9,
    bio: "Final Year Computer Science Student With A Passion For Building Scalable Web Applications. Experienced In React, Next.js, And Node.js. Completed 3 Internships With Top Startups.",
    skills: ["React", "Next.js", "Node.js", "Tailwind", "Firebase", "TypeScript"],
    experience: [
      { role: "Frontend Intern", company: "Zomato", period: "May - July 2023" },
      { role: "Fullstack Intern", company: "Razorpay", period: "Dec 2022 - Feb 2023" }
    ],
    avatar: "https://picsum.photos/seed/s1/200/200"
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-full font-medium"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Student Profile</h1>
        </div>

        <Card className="p-6 bg-white border-none shadow-sm rounded-3xl mb-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-3xl overflow-hidden mb-4 border-4 border-secondary shadow-lg">
              <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold">{student.name}</h2>
            <p className="text-sm text-accent font-medium mb-2">{student.role}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <GraduationCap className="h-3 w-3" />
                {student.college}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {student.location}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <Button className="bg-accent h-12 rounded-xl font-medium gap-2" onClick={() => router.push(`/messages/${id}`)}>
              <MessageSquare className="h-4 w-4" />
              Message
            </Button>
            <Button variant="outline" className="h-12 rounded-xl border-accent text-accent font-medium">
              Hire Now
            </Button>
          </div>
        </Card>

        <section className="space-y-4">
          <Card className="p-6 bg-white border-none shadow-sm rounded-2xl">
            <h3 className="font-bold mb-3">About</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {student.bio}
            </p>
          </Card>

          <Card className="p-6 bg-white border-none shadow-sm rounded-2xl">
            <h3 className="font-bold mb-3">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {student.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50 text-accent border-none px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-white border-none shadow-sm rounded-2xl">
            <h3 className="font-bold mb-3">Internship Experience</h3>
            <div className="space-y-4">
              {student.experience.map((exp, i) => (
                <div key={i} className="flex gap-3">
                  <div className="bg-primary/20 p-2 rounded-xl h-fit">
                    <Briefcase className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{exp.role}</p>
                    <p className="text-xs text-muted-foreground">{exp.company} • {exp.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
