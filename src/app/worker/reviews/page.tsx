
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, Quote } from 'lucide-react';

const allReviews = [
  { id: 'r1', client: 'Arjun Mehta', company: 'TechShastra', rating: 5, comment: "Exceptional quality of work and timely delivery. Rohan is a highly skilled Next.js developer who understands business requirements perfectly.", date: 'Oct 12, 2023' },
  { id: 'r2', client: 'Sneha Rao', company: 'Creatives Hub', rating: 4, comment: "Very good understanding of UI design. The final product was very close to our Figma files. Minor delays in communication but overall great.", date: 'Sep 24, 2023' },
  { id: 'r3', client: 'Vikram Singh', company: 'EduScale', rating: 5, comment: "One of the best freelancers we've worked with. Very proactive and reliable.", date: 'Aug 15, 2023' },
];

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
            <h1 className="text-3xl font-black tracking-tight">Feedback & Reviews</h1>
            <p className="text-sm text-muted-foreground font-medium">Average Rating: 4.8 / 5.0 (24 reviews)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allReviews.map((review) => (
            <Card key={review.id} className="p-8 border-none bg-white shadow-xl rounded-[3rem] relative overflow-hidden group">
              <Quote className="absolute right-8 top-8 h-12 w-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-[1.25rem] bg-secondary flex items-center justify-center">
                  <Star className="h-7 w-7 text-primary fill-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{review.client}</h3>
                  <p className="text-xs text-muted-foreground font-medium">{review.company}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "h-4 w-4",
                      i < review.rating ? "text-primary fill-primary" : "text-muted/30 fill-muted/30"
                    )} 
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed font-medium italic">
                "{review.comment}"
              </p>

              <div className="mt-8 pt-8 border-t border-muted/30 flex justify-between items-center">
                <span className="text-[10px] font-black uppercase text-primary/40 tracking-widest">{review.date}</span>
                <Badge variant="outline" className="border-primary/20 text-primary font-bold text-[10px]">VERIFIED HIRE</Badge>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <BottomNav role="worker" />
    </div>
  );
}

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
