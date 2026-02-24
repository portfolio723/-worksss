"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const onboardingSteps = [
  {
    title: "Earn While You Learn",
    description: "Find part-time gigs and internships that fit your college schedule.",
    image: "https://picsum.photos/seed/student1/600/400"
  },
  {
    title: "Launch Your Career",
    description: "Connect with India's top startups and agencies looking for fresh talent.",
    image: "https://picsum.photos/seed/student2/600/400"
  },
  {
    title: "Secure Stipends",
    description: "Timely payments for every milestone completed, directly to your account.",
    image: "https://picsum.photos/seed/student3/600/400"
  }
];

export default function EntryPage() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background p-8 animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 overflow-hidden">
          <div className="w-16 h-16 bg-accent rounded-xl animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold text-accent tracking-tighter">#workwave</h1>
        <p className="text-muted-foreground mt-2">Career simplified.</p>
      </div>
    );
  }

  const handleNext = () => {
    if (step < onboardingSteps.length - 1) {
      setStep(step + 1);
    } else {
      router.push('/auth');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex justify-end p-4">
        <Button variant="ghost" onClick={() => router.push('/auth')}>Skip</Button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-xl border border-muted">
          <img 
            src={onboardingSteps[step].image} 
            alt={onboardingSteps[step].title} 
            className="w-full h-full object-cover"
            data-ai-hint="indian student"
          />
        </div>
        
        <h2 className="text-3xl font-bold mb-4 px-4 leading-tight">
          {onboardingSteps[step].title}
        </h2>
        <p className="text-muted-foreground px-8 mb-8">
          {onboardingSteps[step].description}
        </p>

        <div className="flex gap-2 mb-8">
          {onboardingSteps.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all ${i === step ? 'w-8 bg-accent' : 'w-2 bg-muted'}`} 
            />
          ))}
        </div>
      </div>

      <div className="p-8 pb-12">
        <Button 
          className="w-full h-12 text-lg rounded-xl bg-accent hover:bg-accent/90" 
          onClick={handleNext}
        >
          {step === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
