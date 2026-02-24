
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, Quote, CheckCircle2, Zap, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const allReviews = [
  { 
    id: 'r1', 
    client: 'Arjun Mehta', 
    company: 'TechShastra', 
    overallRating: 5, 
    metrics: { quality: 5, timeline: 5, behaviour: 5 },
    comment: "Exceptional quality of work and timely delivery. Rohan is a highly skilled Next.js developer who understands business requirements perfectly.", 
    date: 'Oct 12, 2023' 
  },
  { 
    id: 'r2', 
    client: 'Sneha Rao', 
    company: 'Creatives Hub', 
    overallRating: 4, 
    metrics: { quality: 4, timeline: 3, behaviour: 5 },
    comment: "Very good understanding of UI design. The final product was very close to our Figma files. Minor delays in communication but overall great.", 
    date: 'Sep 24, 2023' 
  },
  { 
    id: 'r3', 
    client: 'Vikram Singh', 
    company: 'EduScale', 
    overallRating: 5, 
    metrics: { quality: 5, timeline: 5, behaviour: 4 },
    comment: "One of the best freelancers we've worked with. Very proactive and reliable.", 
    date: 'Aug 15, 2023' 
  },
];

function RatingBar({ label, value, icon: Icon }: { label: string, value: number, icon: any }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center px-1">
        <div className="flex items-center gap-1.5">
          <Icon className="h-3 w-3 text-primary" />
          <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">{label}</span>
        </div>
        <span className="text-[10px] font-black text-primary">{value}/5</span>
      </div>
      <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-500" 
          style={{ width: `${(value / 5) * 100}%` }} 
        />
      </div>
    </div>
  );
}

export default function WorkerReviewsPage() {
  const router = useRouter();

  return (
    <div className="worker-theme min-h-screen bg-background pb-24">
      <TopNav />
      <main className="content-area px-6 max-w-4xl mx-auto py-8">
        <div className="flex items-center gap-4 mb-12">
          <Button variant="ghost" size="icon" className="rounded-xl h-10 w-10" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-foreground">Client Feedback</h1>
            <p className="text-sm text-muted-foreground font-medium">Detailed performance analytics from hirers.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {allReviews.map((review) => (
            <Card key={review.id} className="p-8 border-none bg-white shadow-xl rounded-[3rem] relative overflow-hidden group">
              <Quote className="absolute right-8 top-8 h-12 w-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
              
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Client Info & Metrics */}
                <div className="w-full md:w-1/3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                      <Star className="h-7 w-7 text-primary fill-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">{review.client}</h3>
                      <p className="text-xs text-muted-foreground font-medium">{review.company}</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-muted/30">
                    <RatingBar label="Work Quality" value={review.metrics.quality} icon={CheckCircle2} />
                    <RatingBar label="Timeline" value={review.metrics.timeline} icon={Zap} />
                    <RatingBar label="Behaviour" value={review.metrics.behaviour} icon={Heart} />
                  </div>
                </div>

                {/* Right: Overall & Comment */}
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={cn(
                              "h-5 w-5",
                              i < review.overallRating ? "text-primary fill-primary" : "text-muted/30 fill-muted/30"
                            )} 
                          />
                        ))}
                      </div>
                      <span className="text-sm font-black text-primary uppercase tracking-widest">Overall Rating</span>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed font-medium italic bg-secondary/20 p-6 rounded-[2rem]">
                      "{review.comment}"
                    </p>
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-primary/40 tracking-widest">{review.date}</span>
                    <Badge variant="outline" className="border-primary/20 text-primary font-bold text-[10px] rounded-lg">VERIFIED HIRE</Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <BottomNav role="worker" />
    </div>
  );
}
