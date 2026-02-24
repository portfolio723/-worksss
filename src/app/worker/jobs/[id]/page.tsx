
"use client"

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Wallet, 
  Building2, 
  ShieldCheck, 
  CheckCircle2,
  Share2,
  Bookmark
} from 'lucide-react';

export default function JobDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [isApplied, setIsApplied] = useState(false);

  const job = {
    title: "Frontend Intern (Next.js)",
    company: "TechShastra",
    location: "Bangalore / Remote",
    stipend: "₹20,000/mo",
    duration: "3 Months",
    posted: "2 days ago",
    description: "We are looking for an ambitious React/Next.js developer to join our growing team. You will be responsible for building high-quality UI components and ensuring the best user experience.",
    responsibilities: [
      "Developing and implementing highly responsive user interface components using React.",
      "Developing and implementing front-end architecture to support user interface concepts.",
      "Monitoring and improving front-end performance.",
      "Documenting application changes and developing updates."
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
  };

  const handleApply = () => {
    setIsApplied(true);
  };

  if (isApplied) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Application Sent!</h1>
        <p className="text-muted-foreground mb-8">
          Your profile has been shared with {job.company}. Keep an eye on your messages!
        </p>
        <Button className="bg-accent rounded-xl px-8" onClick={() => router.push('/worker')}>
          Back to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-full"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Card className="p-6 bg-white border-none shadow-sm rounded-3xl mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-accent font-bold text-xl">
              TS
            </div>
            <div>
              <h1 className="text-xl font-bold">{job.title}</h1>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Building2 className="h-3 w-3" />
                {job.company}
                <ShieldCheck className="h-3 w-3 text-green-500 ml-1" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="space-y-1">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Stipend</p>
              <div className="flex items-center gap-1 text-sm font-bold text-accent">
                <Wallet className="h-4 w-4" />
                {job.stipend}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Duration</p>
              <div className="flex items-center gap-1 text-sm font-bold">
                <Clock className="h-4 w-4 text-muted-foreground" />
                {job.duration}
              </div>
            </div>
          </div>
        </Card>

        <section className="space-y-6 px-2">
          <div>
            <h3 className="font-bold mb-3">About the Internship</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {job.description}
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Key Responsibilities</h3>
            <ul className="space-y-3">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map(skill => (
                <Badge key={skill} variant="outline" className="border-accent text-accent px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] p-6 bg-white border-t z-50">
          <Button 
            className="w-full h-14 bg-accent text-lg font-bold rounded-2xl shadow-lg"
            onClick={handleApply}
          >
            Apply Now
          </Button>
        </div>
      </main>
    </div>
  );
}
