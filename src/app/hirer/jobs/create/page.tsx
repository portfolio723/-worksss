"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, Clock, Zap, Hammer } from 'lucide-react';

export default function CreateJobPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      router.push('/hirer/jobs');
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="hirer-theme min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        </div>
        <h1 className="text-2xl font-normal text-foreground mb-2">Job Posted Successfully!</h1>
        <p className="text-muted-foreground font-medium mb-8">
          Your Requirement Has Been Sent To Matching Students. You'll Hear From Them Soon.
        </p>
        <p className="text-sm text-primary animate-pulse font-bold">Redirecting To Your Dashboard...</p>
      </div>
    );
  }

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
          <h1 className="text-2xl font-normal text-foreground">Post New Job</h1>
        </div>

        <Card className="p-8 bg-white border-none shadow-sm rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div className="space-y-3">
              <Label htmlFor="title" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Job Title</Label>
              <Input id="title" placeholder="e.g. Social Media Marketing Intern" required className="h-14 rounded-2xl bg-secondary/30 border-none text-base font-medium focus:ring-primary" />
            </div>

            {/* Category */}
            <div className="space-y-3">
              <Label htmlFor="category" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Category</Label>
              <Select required>
                <SelectTrigger id="category" className="h-14 rounded-2xl bg-secondary/30 border-none text-base font-medium">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="content">Content Writing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Urgency */}
            <div className="space-y-3">
              <Label htmlFor="urgency" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                <Zap className="h-3 w-3" /> Urgency
              </Label>
              <Select required>
                <SelectTrigger id="urgency" className="h-14 rounded-2xl bg-secondary/30 border-none text-base font-medium">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Label htmlFor="description" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Job Description</Label>
              <Textarea 
                id="description" 
                placeholder="What Will The Student Be Doing? What Are The Expectations?" 
                className="min-h-[140px] rounded-2xl bg-secondary/30 border-none text-base font-medium focus:ring-primary p-4"
                required
              />
            </div>

            {/* Budget */}
            <div className="space-y-3">
              <Label htmlFor="budget" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Budget (₹/mo)</Label>
              <Input id="budget" placeholder="e.g. ₹15,000" required className="h-14 rounded-2xl bg-secondary/30 border-none text-base font-medium focus:ring-primary" />
            </div>

            {/* Work Mode */}
            <div className="space-y-3">
              <Label htmlFor="type" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Work Mode</Label>
              <Select required>
                <SelectTrigger id="type" className="h-14 rounded-2xl bg-secondary/30 border-none text-base font-medium">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="onsite">On-Site</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-3">
              <Label htmlFor="location" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Location</Label>
              <Input id="location" placeholder="e.g. Bangalore" className="h-14 rounded-2xl bg-secondary/30 border-none text-base font-medium focus:ring-primary" />
            </div>

            {/* Start Date */}
            <div className="space-y-3">
              <Label htmlFor="startDate" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                <Clock className="h-3 w-3" /> Start Date
              </Label>
              <Input id="startDate" type="date" required className="h-14 rounded-2xl bg-secondary/30 border-none text-base font-medium focus:ring-primary px-4" />
            </div>

            {/* Skills & Tools */}
            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="skills" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Skills Required (Optional)</Label>
                <Input id="skills" placeholder="e.g. React, SEO, Copywriting" className="h-14 rounded-2xl bg-secondary/30 border-none text-base font-medium focus:ring-primary" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="tools" className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                  <Hammer className="h-3 w-3" /> Tools Required (Optional)
                </Label>
                <Input id="tools" placeholder="e.g. Figma, Photoshop, Slack" className="h-14 rounded-2xl bg-secondary/30 border-none text-base font-medium focus:ring-primary" />
              </div>
            </div>

            <div className="pt-6">
              <Button type="submit" className="w-full h-16 text-lg bg-primary text-primary-foreground font-medium rounded-2xl shadow-xl hover:bg-primary/90">
                Post Job Now
              </Button>
            </div>
          </form>
        </Card>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
