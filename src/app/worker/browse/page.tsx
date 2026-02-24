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
  Star,
  Zap,
  Navigation,
  X,
  Target
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
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

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
    company: 'GoMobile Hyderabad',
    budget: '₹25,000 /mo',
    location: 'Hitech City / Remote',
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
    location: 'Jubilee Hills Area',
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

const categories = ['Development', 'Design', 'Marketing', 'Writing', 'Sales', 'Admin'];

export default function BrowseJobs() {
  const router = useRouter();
  const [budgetRange, setBudgetRange] = useState([5000]);
  const [distance, setDistance] = useState([10]);

  return (
    <div className="worker-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="mb-6 px-2">
          <h1 className="text-3xl font-normal">Browse Jobs</h1>
          <p className="text-sm text-muted-foreground mt-1 font-medium">Find Your Next Big Opportunity.</p>
        </div>

        <div className="flex gap-3 mb-6 px-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              className="pl-12 h-14 rounded-2xl bg-white border-border shadow-sm text-base focus:ring-primary font-medium" 
              placeholder="Search Roles..." 
            />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                className="h-14 w-14 rounded-2xl bg-white border-border shadow-sm hover:bg-primary hover:text-white transition-all group font-medium shrink-0"
              >
                <SlidersHorizontal className="h-6 w-6 text-primary group-hover:text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="bottom" 
              className="worker-theme h-[92vh] w-full max-w-[390px] mx-auto p-0 flex flex-col border-none rounded-t-[2.5rem] overflow-hidden left-1/2 -translate-x-1/2"
            >
              <SheetHeader className="p-6 border-b flex flex-row items-center justify-between">
                <SheetTitle className="text-2xl font-normal">Filters</SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </SheetHeader>
              
              <ScrollArea className="flex-1 px-6">
                <div className="space-y-10 py-8">
                  {/* Category */}
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Bookmark className="h-3 w-3" /> Category
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((cat) => (
                        <div key={cat} className="flex items-center space-x-2 bg-secondary/30 p-3 rounded-xl">
                          <Checkbox id={`cat-${cat}`} />
                          <Label htmlFor={`cat-${cat}`} className="text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {cat}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <Zap className="h-3 w-3" /> Budget Range
                      </h3>
                      <span className="text-xs font-black text-primary">₹{budgetRange[0].toLocaleString()}+</span>
                    </div>
                    <Slider 
                      defaultValue={[5000]} 
                      max={50000} 
                      step={1000} 
                      onValueChange={setBudgetRange}
                      className="py-2"
                    />
                  </div>

                  {/* Distance (GPS/Manual Location Integration) */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <Navigation className="h-3 w-3" /> Distance (KM)
                      </h3>
                      <span className="text-xs font-black text-primary">{distance[0]} KM</span>
                    </div>
                    <Slider 
                      defaultValue={[10]} 
                      max={50} 
                      min={1}
                      step={1} 
                      onValueChange={setDistance}
                      className="py-2"
                    />
                    <div 
                      className="flex items-center justify-between p-4 bg-secondary/30 rounded-2xl cursor-pointer hover:bg-secondary/50 transition-colors"
                      onClick={() => router.push('/location-access')}
                    >
                      <div className="flex items-center gap-3">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Nearby Banjara Hills</span>
                      </div>
                      <span className="text-[10px] font-normal text-primary">Change Area</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Star className="h-3 w-3" /> Minimum Rating
                    </h3>
                    <RadioGroup defaultValue="4" className="grid grid-cols-2 gap-3">
                      {['4.5+', '4.0+', '3.5+', 'Any'].map((rating) => (
                        <Label
                          key={rating}
                          htmlFor={`rating-${rating}`}
                          className="flex items-center justify-between p-3 rounded-xl border border-border bg-white cursor-pointer hover:bg-secondary/20 transition-all font-normal text-xs"
                        >
                          <span className="flex items-center gap-1.5">
                            {rating} <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          </span>
                          <RadioGroupItem value={rating} id={`rating-${rating}`} className="sr-only" />
                        </Label>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Work Mode */}
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <MapPin className="h-3 w-3" /> Work Mode
                    </h3>
                    <RadioGroup defaultValue="remote" className="flex flex-wrap gap-2">
                      {['Remote', 'On-Site', 'Hybrid'].map(mode => (
                        <Label
                          key={mode}
                          htmlFor={`mode-${mode}`}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-white cursor-pointer hover:bg-primary hover:text-white transition-all font-normal text-xs"
                        >
                          <RadioGroupItem value={mode.toLowerCase()} id={`mode-${mode}`} className="sr-only" />
                          {mode}
                        </Label>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Availability/Urgency */}
                  <div className="space-y-4 pb-10">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Clock className="h-3 w-3" /> Availability / Urgency
                    </h3>
                    <Select defaultValue="any">
                      <SelectTrigger className="h-12 rounded-xl bg-secondary/30 border-none font-normal text-xs">
                        <SelectValue placeholder="Select Urgency" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-none shadow-xl">
                        <SelectItem value="any" className="font-medium text-xs">Any Time</SelectItem>
                        <SelectItem value="immediate" className="font-medium text-xs">Immediate (Starts Today)</SelectItem>
                        <SelectItem value="week" className="font-medium text-xs">Next 7 Days</SelectItem>
                        <SelectItem value="flexible" className="font-medium text-xs">Flexible Start</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </ScrollArea>

              <SheetFooter className="p-6 border-t bg-white">
                <SheetClose asChild>
                  <Button className="w-full h-16 bg-primary text-white rounded-2xl font-normal shadow-xl">
                    Apply Filters
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <ScrollArea className="w-full whitespace-nowrap mb-8 px-2">
          <div className="flex gap-2 pb-2">
            {quickFilters.map(filter => (
              <Badge 
                key={filter} 
                variant="secondary" 
                className="px-5 py-2 rounded-full bg-white shadow-sm border border-border font-normal text-xs cursor-pointer hover:bg-primary hover:text-white transition-all"
              >
                {filter}
              </Badge>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="space-y-4 px-2">
          {jobs.map((job) => (
            <Card key={job.id} className="p-5 bg-white border-border/50 hover:border-primary transition-all shadow-sm group rounded-[2rem]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-normal text-lg group-hover:text-primary transition-colors tracking-tight">{job.title}</h3>
                  <p className="text-xs font-normal text-muted-foreground">{job.company}</p>
                </div>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:bg-secondary rounded-xl font-medium">
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-y-3 text-xs text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-black text-foreground">Stipend:</span>
                  <span className="font-medium">{job.budget}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">{job.time}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-secondary text-primary px-3 py-1 rounded-full font-black uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border/50">
                <Button 
                  variant="outline"
                  className="flex-1 h-11 rounded-xl border-border font-normal text-xs"
                  onClick={() => router.push(`/worker/jobs/${job.id}`)}
                >
                  View Details
                </Button>
                <Button 
                  className="flex-1 h-11 rounded-xl bg-primary text-white font-normal text-xs shadow-md"
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
