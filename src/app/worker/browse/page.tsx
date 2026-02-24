"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Clock, 
  Bookmark,
  X,
  ChevronRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';

const quickFilters = [
  'Remote', 
  'Internship', 
  'Part-Time',
  'React', 
  'Figma', 
  'Python', 
  'Node.js',
  '₹5k - ₹10k', 
  '₹10k - ₹20k', 
  '₹20k+',
  'Marketing', 
  'Content Writing'
];

const jobs = [
  {
    id: '1',
    title: 'React Native Intern',
    company: 'GoMobile India',
    budget: '₹25,000 /mo',
    location: 'Gurgaon / Remote',
    time: '4h ago',
    tags: ['Mobile', 'React Native', 'Expo']
  },
  {
    id: '2',
    title: 'Graphic Design Project',
    company: 'Creatives Hub',
    budget: '₹8,000 Fixed',
    location: 'Remote',
    time: '6h ago',
    tags: ['Branding', 'Social Media', 'Photoshop']
  },
  {
    id: '3',
    title: 'Marketing Campus Lead',
    company: 'EduScale',
    budget: '₹10,000 + Perks',
    location: 'Mumbai University Area',
    time: '1d ago',
    tags: ['Leadership', 'Marketing', 'Events']
  },
  {
    id: '4',
    title: 'Technical Content Writer',
    company: 'BlogProwess',
    budget: '₹2 per word',
    location: 'Remote',
    time: '2d ago',
    tags: ['Writing', 'Tech', 'SEO']
  }
];

const skillOptions = ['React', 'Next.js', 'Node.js', 'Python', 'Figma', 'Marketing', 'Writing'];

export default function BrowseJobs() {
  const router = useRouter();
  const [stipendValue, setStipendValue] = useState([5000]);

  return (
    <div className="worker-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="mb-6">
          <h1 className="text-3xl font-black">Browse Jobs</h1>
          <p className="text-sm text-muted-foreground mt-1">Find Your Next Big Opportunity.</p>
        </div>

        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              className="pl-12 h-14 rounded-2xl bg-white border-border shadow-sm text-base focus:ring-primary" 
              placeholder="Search Roles..." 
            />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                className="h-14 w-14 rounded-2xl bg-white border-border shadow-sm hover:bg-primary hover:text-white transition-all group"
              >
                <SlidersHorizontal className="h-6 w-6 text-primary group-hover:text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="worker-theme w-[320px] sm:w-[400px] p-6 border-l">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-2xl font-black">Filters</SheetTitle>
              </SheetHeader>
              
              <div className="space-y-10 overflow-y-auto max-h-[calc(100vh-220px)] pr-2 no-scrollbar">
                <div className="space-y-5">
                  <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Work Mode</h3>
                  <RadioGroup defaultValue="remote" className="space-y-4">
                    {['Remote', 'On-Site', 'Hybrid'].map(mode => (
                      <div key={mode} className="flex items-center space-x-3">
                        <RadioGroupItem value={mode.toLowerCase()} id={mode} />
                        <Label htmlFor={mode} className="font-bold text-sm">{mode}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Stipend</h3>
                    <span className="text-sm font-black">₹{stipendValue[0].toLocaleString()}</span>
                  </div>
                  <Slider 
                    defaultValue={[5000]} 
                    max={50000} 
                    step={1000} 
                    onValueChange={setStipendValue}
                    className="py-4"
                  />
                </div>

                <div className="space-y-5">
                  <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Skills</h3>
                  <div className="space-y-3">
                    {skillOptions.map((skill) => (
                      <div key={skill} className="flex items-center space-x-3">
                        <Checkbox id={`skill-${skill}`} />
                        <Label htmlFor={`skill-${skill}`} className="font-bold text-sm">{skill}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <SheetFooter className="absolute bottom-6 left-6 right-6">
                <SheetClose asChild>
                  <Button className="w-full h-14 bg-primary text-primary-foreground rounded-2xl font-black shadow-2xl">
                    Apply Filters
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <ScrollArea className="w-full whitespace-nowrap mb-8 -mx-4 px-4">
          <div className="flex gap-2 pb-2">
            {quickFilters.map(filter => (
              <Badge 
                key={filter} 
                variant="secondary" 
                className="px-5 py-2 rounded-full bg-white shadow-sm border border-border font-bold text-xs cursor-pointer hover:bg-primary hover:text-white transition-all"
              >
                {filter}
              </Badge>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="p-5 bg-white border-border/50 hover:border-primary transition-all shadow-sm group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-xs font-bold text-muted-foreground">{job.company}</p>
                </div>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:bg-secondary rounded-xl">
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-y-3 text-xs text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-black text-foreground">Stipend:</span>
                  {job.budget}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {job.time}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-secondary text-primary px-3 py-1 rounded-full font-black">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border/50">
                <Button 
                  variant="outline"
                  className="flex-1 h-11 rounded-xl border-border font-bold"
                  onClick={() => router.push(`/worker/jobs/${job.id}`)}
                >
                  View Details
                </Button>
                <Button 
                  className="flex-1 h-11 rounded-xl bg-primary text-primary-foreground font-bold shadow-md"
                  onClick={() => router.push(`/worker/jobs/${job.id}`)}
                >
                  Apply Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}