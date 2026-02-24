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
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function CreateJobPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to Firestore
    setIsSubmitted(true);
    setTimeout(() => {
      router.push('/hirer/jobs');
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Internship Posted!</h1>
        <p className="text-muted-foreground mb-8">
          Your requirement has been sent to matching students. You'll hear from them soon.
        </p>
        <p className="text-sm text-accent animate-pulse font-medium">Redirecting to your dashboard...</p>
      </div>
    );
  }

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
          <h1 className="text-2xl font-bold">Post Internship</h1>
        </div>

        <Card className="p-6 bg-white border-none shadow-sm rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Internship Title</Label>
              <Input id="title" placeholder="e.g. Social Media Marketing Intern" required className="h-12" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select required>
                  <SelectTrigger id="category" className="h-12">
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
              <div className="space-y-2">
                <Label htmlFor="type">Work Type</Label>
                <Select required>
                  <SelectTrigger id="type" className="h-12">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="onsite">On-site</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location (City)</Label>
              <Input id="location" placeholder="e.g. Bangalore, Remote" className="h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stipend">Stipend (per month)</Label>
              <Input id="stipend" placeholder="e.g. ₹15,000" required className="h-12" />
              <p className="text-[10px] text-muted-foreground">Fixed amount or range preferred by Indian students.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Select required>
                <SelectTrigger id="duration" className="h-12">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Month</SelectItem>
                  <SelectItem value="2">2 Months</SelectItem>
                  <SelectItem value="3">3 Months</SelectItem>
                  <SelectItem value="6">6 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Required Skills (Comma separated)</Label>
              <Input id="skills" placeholder="e.g. React, Canva, SEO" className="h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea 
                id="description" 
                placeholder="What will the student be doing? What are the expectations?" 
                className="min-h-[120px] rounded-xl"
                required
              />
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full h-14 text-lg bg-accent rounded-2xl shadow-lg">
                Post Now
              </Button>
            </div>
          </form>
        </Card>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
