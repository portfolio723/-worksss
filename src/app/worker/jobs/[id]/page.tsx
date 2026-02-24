
"use client"

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Wallet, 
  Building2, 
  ShieldCheck, 
  CheckCircle2,
  Share2,
  Bookmark,
  MessageSquare,
  Timer,
  Calculator
} from 'lucide-react';

export default function JobDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [isApplied, setIsApplied] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form states for negotiation and estimation
  const [proposedStipend, setProposedStipend] = useState('20000');
  const [estimatedTime, setEstimatedTime] = useState('3 Months');
  const [coverNote, setCoverNote] = useState('');

  const job = {
    title: "Frontend Intern (Next.js)",
    company: "TechShastra",
    companyId: "h1",
    location: "Bangalore / Remote",
    stipend: "₹20,000/mo",
    duration: "3 Months",
    posted: "2 days ago",
    description: "We Are Looking For An Ambitious React/Next.js Developer To Join Our Growing Team. You Will Be Responsible For Building High-Quality UI Components And Ensuring The Best User Experience.",
    responsibilities: [
      "Developing and implementing highly responsive user interface components using React.",
      "Developing and implementing front-end architecture to support user interface concepts.",
      "Monitoring and improving front-end performance.",
      "Documenting application changes and developing updates."
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplied(true);
    setIsDialogOpen(false);
  };

  if (isApplied) {
    return (
      <div className="worker-theme min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        </div>
        <h1 className="text-2xl font-black mb-2">Application Sent!</h1>
        <p className="text-sm text-muted-foreground mb-8 max-w-xs mx-auto font-medium">
          Your proposed terms (₹{proposedStipend}, {estimatedTime}) have been shared with {job.company}.
        </p>
        <Button className="bg-primary text-white rounded-xl px-10 h-14 font-medium shadow-xl" onClick={() => router.push('/worker')}>
          Back To Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="worker-theme min-h-screen bg-background pb-32">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-full font-medium"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full font-medium text-primary hover:bg-primary/5"
              onClick={() => router.push(`/worker/messages/${job.companyId}`)}
            >
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full font-medium">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full font-medium">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Card className="p-6 bg-white border-border/50 shadow-sm rounded-3xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-primary font-bold text-xl">
              TS
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight">{job.title}</h1>
              <div className="flex items-center gap-1 text-xs text-muted-foreground font-bold uppercase tracking-tight">
                <Building2 className="h-3 w-3" />
                {job.company}
                <ShieldCheck className="h-3 w-3 text-emerald-500 ml-1" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/50">
            <div className="space-y-1">
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Fixed Stipend</p>
              <div className="flex items-center gap-1.5 text-base font-black text-primary">
                <Wallet className="h-4 w-4" />
                {job.stipend}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Est. Duration</p>
              <div className="flex items-center gap-1.5 text-base font-black">
                <Clock className="h-4 w-4 text-muted-foreground" />
                {job.duration}
              </div>
            </div>
          </div>
        </Card>

        <section className="space-y-8 px-2">
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">About The Internship</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              {job.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Key Responsibilities</h3>
            <ul className="space-y-4">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="flex gap-4 text-sm text-muted-foreground font-medium">
                  <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="bg-secondary text-primary px-4 py-1.5 font-black text-[10px] rounded-lg">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] p-6 bg-white/80 backdrop-blur-md border-t border-border/50 z-50 flex gap-3">
          <Button 
            variant="outline"
            className="h-14 w-14 rounded-2xl border-primary text-primary"
            onClick={() => router.push(`/worker/messages/${job.companyId}`)}
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex-1 h-14 bg-primary text-white text-lg font-medium rounded-2xl shadow-xl">
                Apply Now
              </Button>
            </DialogTrigger>
            <DialogContent className="worker-theme max-w-[360px] rounded-[2rem] p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black tracking-tight">Complete Application</DialogTitle>
                <DialogDescription className="text-xs font-medium">
                  Customize your proposal to stand out.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleApplySubmit} className="space-y-6 py-4">
                <div className="space-y-3">
                  <Label htmlFor="stipend" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                    Propose Stipend (Negotiate)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-primary">₹</span>
                    <Input 
                      id="stipend" 
                      value={proposedStipend}
                      onChange={(e) => setProposedStipend(e.target.value)}
                      className="pl-8 h-12 rounded-xl bg-secondary/50 border-none font-black"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="time" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                    Estimated Completion Time
                  </Label>
                  <div className="relative">
                    <Timer className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="time" 
                      value={estimatedTime}
                      onChange={(e) => setEstimatedTime(e.target.value)}
                      className="pl-10 h-12 rounded-xl bg-secondary/50 border-none font-bold"
                      placeholder="e.g. 2 Months"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="note" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                    Personal Note
                  </Label>
                  <Textarea 
                    id="note" 
                    placeholder="Why are you a good fit?"
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    className="rounded-xl bg-secondary/50 border-none min-h-[100px] text-sm font-medium p-4"
                  />
                </div>

                <Button type="submit" className="w-full h-14 bg-primary text-white rounded-2xl font-medium text-base shadow-lg mt-4">
                  Confirm & Send
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
}
