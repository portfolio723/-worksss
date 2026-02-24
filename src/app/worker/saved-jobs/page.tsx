
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Bookmark, Trash2, MapPin, Wallet, Calendar } from 'lucide-react';

const savedJobs = [
  { id: 'sj1', title: 'Senior UX Researcher', company: 'Google', stipend: '₹50,000/mo', type: 'Remote', duration: '6 Months', posted: '3 Days Ago' },
  { id: 'sj2', title: 'Product Designer', company: 'Airbnb', stipend: '₹45,000/mo', type: 'Hybrid', duration: '3 Months', posted: 'Yesterday' },
  { id: 'sj3', title: 'SEO Specialist', company: 'HubSpot', stipend: '₹20,000/mo', type: 'Remote', duration: 'Ongoing', posted: '5 Days Ago' },
];

export default function SavedJobsPage() {
  const router = useRouter();

  return (
    <div className="worker-theme min-h-screen bg-background pb-24">
      <TopNav />
      <main className="content-area px-6 max-w-4xl mx-auto py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-xl h-10 w-10" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-3xl font-black tracking-tight">Saved Gigs</h1>
          </div>
          <Badge className="bg-primary/10 text-primary font-black px-4 py-1 rounded-lg">3 Total</Badge>
        </div>

        <div className="space-y-4">
          {savedJobs.map((job) => (
            <Card key={job.id} className="p-6 border-none bg-white shadow-sm rounded-[2.5rem] hover:border-primary/20 hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{job.company}</p>
                </div>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-rose-500 hover:bg-rose-50">
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-xs text-muted-foreground font-bold uppercase tracking-tight mb-8">
                <div className="flex items-center gap-2">
                  <Wallet className="h-4 w-4 text-primary" />
                  {job.stipend}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {job.duration}
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 h-12 rounded-2xl bg-primary text-white shadow-lg font-medium" onClick={() => router.push(`/worker/jobs/${job.id}`)}>
                  Apply Now
                </Button>
                <Button variant="secondary" className="px-8 h-12 rounded-2xl font-medium">
                  Contact
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
