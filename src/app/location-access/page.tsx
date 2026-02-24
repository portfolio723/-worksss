
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { 
  MapPin, 
  Navigation, 
  ArrowLeft, 
  ShieldCheck, 
  Search, 
  LocateFixed,
  CheckCircle2
} from 'lucide-react';

export default function LocationAccessPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'prompt' | 'detecting' | 'granted'>('prompt');
  const [distance, setDistance] = useState([10]);
  const [manualLocation, setManualLocation] = useState('');

  const handleAutoDetect = () => {
    setStatus('detecting');
    // Simulate GPS detection
    setTimeout(() => {
      setStatus('granted');
      setManualLocation('Current Location (Banjara Hills, HYD)');
    }, 2000);
  };

  const handleSave = () => {
    // Navigate back to the previous context (Browse or Dashboard)
    router.back();
  };

  return (
    <div className="worker-theme min-h-screen bg-background flex flex-col p-6">
      <header className="flex items-center gap-4 mb-10 pt-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => router.back()} 
          className="rounded-2xl bg-secondary/50 h-12 w-12"
        >
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </Button>
        <h1 className="text-2xl font-black tracking-tight">Location Settings</h1>
      </header>

      <div className="flex-1 space-y-10">
        {/* 1. GPS Auto-detect Section */}
        <section className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Precision GPS</h2>
          <Button 
            onClick={handleAutoDetect}
            disabled={status === 'detecting'}
            variant={status === 'granted' ? 'secondary' : 'default'}
            className="w-full h-16 rounded-3xl gap-3 shadow-lg relative overflow-hidden"
          >
            {status === 'detecting' ? (
              <>
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span className="font-bold">Detecting Location...</span>
              </>
            ) : status === 'granted' ? (
              <>
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                <span className="font-bold text-foreground">GPS Location Verified</span>
              </>
            ) : (
              <>
                <LocateFixed className="h-6 w-6" />
                <span className="font-bold">Auto-detect via GPS</span>
              </>
            )}
          </Button>
        </section>

        {/* 2. Manual Pin / Search Section */}
        <section className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Manual Pin / Area</h2>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search Area, Tech Park, or College..." 
              value={manualLocation}
              onChange={(e) => setManualLocation(e.target.value)}
              className="h-16 pl-12 rounded-3xl bg-white border-border shadow-sm text-base font-medium focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap gap-2 px-1">
            {['Hitech City', 'Gachibowli', 'Kukatpally', 'Madhapur'].map(tag => (
              <button 
                key={tag} 
                onClick={() => setManualLocation(tag)}
                className="text-[10px] font-black uppercase tracking-tighter bg-secondary text-primary px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* 3. Distance Filter Radius */}
        <section className="space-y-6">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Search Radius</h2>
            <span className="text-sm font-black text-primary bg-primary/10 px-3 py-1 rounded-full">{distance[0]} KM</span>
          </div>
          <Card className="p-8 rounded-[2.5rem] border-none shadow-sm bg-white space-y-8">
            <div className="flex justify-between items-end mb-2">
              <div className="flex flex-col items-center">
                <div className="w-1 h-3 bg-slate-200 rounded-full mb-2" />
                <span className="text-[10px] font-black text-slate-400">5KM</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-1 h-3 bg-slate-200 rounded-full mb-2" />
                <span className="text-[10px] font-black text-slate-400">25KM</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-1 h-3 bg-slate-200 rounded-full mb-2" />
                <span className="text-[10px] font-black text-slate-400">50KM</span>
              </div>
            </div>
            <Slider 
              defaultValue={[10]} 
              max={50} 
              min={1}
              step={1} 
              onValueChange={setDistance}
              className="py-2"
            />
            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-2xl">
              <Navigation className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">
                We'll prioritize jobs within <span className="text-foreground font-bold">{distance[0]}km</span> of your pinned location. Remote jobs are always shown.
              </p>
            </div>
          </Card>
        </section>
      </div>

      <div className="mt-auto pt-10 pb-8">
        <Button 
          onClick={handleSave}
          className="w-full h-16 text-lg font-bold rounded-3xl bg-primary text-white shadow-2xl hover:bg-primary/90 transition-all"
        >
          Confirm Location
        </Button>
        <div className="flex items-center justify-center gap-2 mt-6">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Privacy Protected Settings</p>
        </div>
      </div>
    </div>
  );
}
