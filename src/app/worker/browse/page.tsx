
"use client"

import { useState } from 'react';
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
  X
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
    title: 'React Native Intern',
    company: 'GoMobile India',
    budget: '₹25,000 /mo',
    location: 'Gurgaon / Remote',
    time: '4h ago',
    tags: ['Mobile', 'React Native', 'Expo']
  },
  {
    title: 'Graphic Design Project',
    company: 'Creatives Hub',
    budget: '₹8,000 Fixed',
    location: 'Remote',
    time: '6h ago',
    tags: ['Branding', 'Social Media', 'Photoshop']
  },
  {
    title: 'Marketing Campus Lead',
    company: 'EduScale',
    budget: '₹10,000 + Perks',
    location: 'Mumbai University Area',
    time: '1d ago',
    tags: ['Leadership', 'Marketing', 'Events']
  },
  {
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
  const [stipendValue, setStipendValue] = useState([5000]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              className="pl-10 h-12 rounded-xl bg-white border-none shadow-sm" 
              placeholder="Search Internships Or Projects..." 
            />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                className="h-12 w-12 rounded-xl bg-white border-none shadow-sm hover:bg-accent hover:text-white transition-all group"
              >
                <SlidersHorizontal className="h-5 w-5 text-accent group-hover:text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] rounded-l-3xl p-6">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-xl font-bold">Advanced Filters</SheetTitle>
              </SheetHeader>
              
              <div className="space-y-8 overflow-y-auto max-h-[calc(100vh-200px)] pr-2 no-scrollbar">
                {/* Work Type */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Work Type</h3>
                  <RadioGroup defaultValue="remote" className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="remote" id="r-remote" />
                      <Label htmlFor="r-remote" className="font-medium">Remote Work</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="onsite" id="r-onsite" />
                      <Label htmlFor="r-onsite" className="font-medium">On-Site Work</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="hybrid" id="r-hybrid" />
                      <Label htmlFor="r-hybrid" className="font-medium">Hybrid Model</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Stipend Range */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Min Stipend</h3>
                    <span className="text-sm font-bold text-accent">₹{stipendValue[0].toLocaleString()}</span>
                  </div>
                  <Slider 
                    defaultValue={[5000]} 
                    max={50000} 
                    step={1000} 
                    onValueChange={setStipendValue}
                    className="py-4"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                    <span>₹0</span>
                    <span>₹50,000+</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Skills Required</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {skillOptions.map((skill) => (
                      <div key={skill} className="flex items-center space-x-3">
                        <Checkbox id={`skill-${skill}`} />
                        <Label htmlFor={`skill-${skill}`} className="font-medium">{skill}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Duration</h3>
                  <div className="flex flex-wrap gap-2">
                    {['1 Month', '3 Months', '6 Months'].map(d => (
                      <Badge key={d} variant="outline" className="px-3 py-1 cursor-pointer hover:bg-accent hover:text-white border-muted">
                        {d}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <SheetFooter className="absolute bottom-6 left-6 right-6">
                <SheetClose asChild>
                  <Button className="w-full h-12 bg-accent rounded-xl font-bold shadow-lg">
                    Apply Better Findings
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <ScrollArea className="w-full whitespace-nowrap mb-6 -mx-4 px-4">
          <div className="flex gap-2 pb-2">
            {quickFilters.map(filter => (
              <Badge 
                key={filter} 
                variant="secondary" 
                className="px-4 py-1.5 rounded-full bg-white shadow-sm border-none font-medium cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all"
              >
                {filter}
              </Badge>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="space-y-4">
          <h2 className="text-lg font-bold mb-4">Available Opportunities</h2>
          {jobs.map((job) => (
            <Card key={job.title} className="p-4 bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-base">{job.title}</h3>
                  <p className="text-xs text-accent font-medium">{job.company}</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-foreground">Stipend:</span>
                  {job.budget}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {job.time}
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                {job.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-primary/10 text-accent px-2 py-0.5 rounded-full font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 pt-2 border-t">
                <Button size="sm" variant="outline" className="flex-1 h-10 rounded-xl border-accent text-accent">View Details</Button>
                <Button size="sm" className="flex-1 h-10 rounded-xl bg-accent">Apply Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}
