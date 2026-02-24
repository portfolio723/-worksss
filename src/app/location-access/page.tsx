
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Navigation, ArrowLeft, ShieldCheck, Info } from 'lucide-react';

export default function LocationAccessPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'prompt' | 'granted' | 'denied'>('prompt');

  const handleRequest = () => {
    // Simulate browser permission request
    setStatus('granted');
    setTimeout(() => {
      router.back();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col p-6">
      <header className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-xl">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-black">Location Settings</h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
        <div className="relative">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
            <MapPin className="h-10 w-10 text-primary" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-lg">
            <Navigation className="h-5 w-5 text-primary" />
          </div>
        </div>

        <div className="space-y-3 px-4">
          <h2 className="text-3xl font-black tracking-tight">Enable Location</h2>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed">
            We Use Your Location To Show You Relevant Jobs, Internships, And Local Gigs In Hyderabad.
          </p>
        </div>

        <Card className="w-full p-6 border-none shadow-sm bg-secondary/30 rounded-3xl space-y-4">
          <div className="flex items-start gap-4 text-left">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Privacy Guaranteed</p>
              <p className="text-[10px] text-muted-foreground font-medium leading-normal">Your exact coordinates are never shared with recruiters without your permission.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-left">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <Info className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">Smart Matching</p>
              <p className="text-[10px] text-muted-foreground font-medium leading-normal">Helps us calculate distance for "Gigs Nearby" on your dashboard.</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-auto space-y-4 pb-8">
        <Button 
          onClick={handleRequest}
          disabled={status === 'granted'}
          className="w-full h-16 text-lg font-black rounded-2xl bg-primary text-primary-foreground shadow-xl transition-all"
        >
          {status === 'granted' ? 'Location Enabled' : 'Allow Location Access'}
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="w-full h-12 text-sm font-bold text-muted-foreground"
        >
          Maybe Later
        </Button>
      </div>
    </div>
  );
}
