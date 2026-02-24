"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, MapPin, DollarSign, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const filters = ['Remote', 'Full-time', 'Price: High-Low', 'Design', 'Development'];

const jobs = [
  {
    title: 'Senior Product Designer',
    company: 'Fintech Solutions',
    budget: '$6,000 - $8,000',
    location: 'Remote',
    time: '2h ago',
    tags: ['UI/UX', 'Figma', 'FinTech']
  },
  {
    title: 'React Native Expert',
    company: 'GoMobile Inc',
    budget: '$45/hr',
    location: 'Dubai, UAE',
    time: '5h ago',
    tags: ['Mobile', 'React Native', 'Expo']
  },
  {
    title: 'Logo & Branding Project',
    company: 'New Start Studio',
    budget: '$500 Fixed',
    location: 'Remote',
    time: '1d ago',
    tags: ['Branding', 'Vector', 'Illustrator']
  }
];

export default function BrowseJobs() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-10 h-12 rounded-xl bg-white border-none shadow-sm" placeholder="Search for jobs..." />
          </div>
          <Button variant="outline" className="h-12 w-12 rounded-xl bg-white border-none shadow-sm">
            <SlidersHorizontal className="h-5 w-5 text-accent" />
          </Button>
        </div>

        <ScrollArea className="w-full whitespace-nowrap mb-6 -mx-4 px-4">
          <div className="flex gap-2 pb-2">
            {filters.map(filter => (
              <Badge key={filter} variant="secondary" className="px-4 py-1.5 rounded-full bg-white shadow-sm border-none font-medium cursor-pointer hover:bg-accent hover:text-white transition-colors">
                {filter}
              </Badge>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="space-y-4">
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
                  <DollarSign className="h-3 w-3" />
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
                <Button size="sm" variant="outline" className="flex-1 h-10 rounded-xl border-accent text-accent">Details</Button>
                <Button size="sm" className="flex-1 h-10 rounded-xl bg-accent">Apply</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}

function Bookmark({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}