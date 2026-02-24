
"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function EntryPage() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const onboardingSteps = [
    {
      title: "Earn While You Learn",
      description: "Find Part-Time Gigs And Internships That Fit Your College Schedule.",
      image: PlaceHolderImages.find(img => img.id === 'onboarding-1')
    },
    {
      title: "Launch Your Career",
      description: "Connect With India's Top Startups And Agencies Looking For Fresh Talent.",
      image: PlaceHolderImages.find(img => img.id === 'onboarding-2')
    },
    {
      title: "Secure Stipends",
      description: "Timely Payments For Every Milestone Completed, Directly To Your Account.",
      image: PlaceHolderImages.find(img => img.id === 'onboarding-3')
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background p-8 animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 overflow-hidden">
          <div className="w-16 h-16 bg-primary rounded-xl animate-bounce" />
        </div>
        <h1 className="text-4xl font-black text-primary tracking-tighter">#works</h1>
        <p className="text-muted-foreground mt-2 font-bold">Career Simplified.</p>
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

  const currentStep = onboardingSteps[step];

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex justify-end p-4">
        <Button variant="ghost" className="font-medium text-muted-foreground" onClick={() => router.push('/auth')}>Skip</Button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-10 shadow-2xl border border-muted/30">
          <img 
            src={currentStep.image?.imageUrl} 
            alt={currentStep.title} 
            className="w-full h-full object-cover"
            data-ai-hint={currentStep.image?.imageHint}
          />
        </div>
        
        <h2 className="text-3xl font-black mb-4 px-2 leading-tight tracking-tight text-foreground">
          {currentStep.title}
        </h2>
        <p className="text-sm text-muted-foreground px-4 mb-8 font-medium leading-relaxed">
          {currentStep.description}
        </p>

        <div className="flex gap-2 mb-8">
          {onboardingSteps.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-10 bg-primary' : 'w-2 bg-muted'}`} 
            />
          ))}
        </div>
      </div>

      <div className="p-8 pb-12">
        <Button 
          className="w-full h-14 text-lg font-medium rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl" 
          onClick={handleNext}
        >
          {step === onboardingSteps.length - 1 ? 'Get Started' : 'Next Step'}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
