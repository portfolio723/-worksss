
"use client"

import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Star, Quote, MessageSquare, GraduationCap } from 'lucide-react';

const reviews = [
  { id: 'r1', worker: 'Rohan Gupta', college: 'IIT Hyderabad', rating: 5, comment: "Arjun Is A Great Mentor. The Requirements Were Clear And Payments Were Released On Time. Highly Recommended Hirer!", date: 'Oct 15, 2023' },
  { id: 'r2', worker: 'Priya Das', college: 'DTU Delhi', rating: 5, comment: "Professional Environment And Exciting Projects. Happy To Work With TechShastra Again.", date: 'Sep 28, 2023' },
  { id: 'r3', worker: 'Amit Singh', college: 'Anna University', rating: 4, comment: "Good Projects, Though The Deadlines Were A Bit Tight. Overall A Great Experience.", date: 'Aug 12, 2023' },
];

export default function HirerReviewsPage() {
  const router = useRouter();

  return (
    <div className="hirer-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-black text-foreground tracking-tight">Talent Feedback</h1>
            <p className="text-sm text-muted-foreground font-medium">Ratings from students who worked with you.</p>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-8 bg-primary text-primary-foreground rounded-[2.5rem] text-center border-none shadow-xl">
            <h2 className="text-4xl font-black mb-2 tracking-tighter">4.9</h2>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-white text-white" />)}
            </div>
            <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Average Employer Rating</p>
          </Card>

          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6 bg-white border-none shadow-sm rounded-3xl relative group">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/5 group-hover:text-primary/10 transition-colors" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center font-black text-primary">
                    {review.worker.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground">{review.worker}</h3>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-bold uppercase tracking-tight">
                      <GraduationCap className="h-3 w-3" />
                      {review.college}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-3.5 w-3.5 ${i < review.rating ? 'text-primary fill-primary' : 'text-muted/20 fill-muted/20'}`} />
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Worker Description</p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="flex justify-between items-center pt-6 mt-6 border-t border-muted/50">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{review.date}</span>
                  <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold text-primary gap-1.5 rounded-lg hover:bg-primary/5">
                    <MessageSquare className="h-3 w-3" />
                    Thank Student
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
