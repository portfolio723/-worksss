"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, MapPin, DollarSign, Clock, Bookmark } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const filters = ['Remote', 'Internship', 'High Stipend', 'Tech', 'Marketing', 'Writing'];

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

export default function BrowseJobs() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-10 h-12 rounded-xl bg-white border-none shadow-sm" placeholder="Search internships or projects..." />
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
                <Button size="sm" variant="outline" className="flex-1 h-10 rounded-xl border-accent text-accent">Details</Button>
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
