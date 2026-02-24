
"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Briefcase, Users, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function RoleSelectionPage() {
  const [role, setRole] = useState<'hirer' | 'worker' | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (role === 'hirer') router.push('/hirer');
    if (role === 'worker') router.push('/worker');
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      <h1 className="text-3xl font-black tracking-tight mt-12 mb-2">Who Are You?</h1>
      <p className="text-sm text-muted-foreground font-medium mb-12">Select Your Role To Personalize Your Experience.</p>

      <div className="space-y-4">
        <Card 
          className={`p-6 border-2 transition-all duration-300 cursor-pointer flex items-center gap-5 rounded-3xl ${
            role === 'hirer' 
              ? 'border-primary bg-primary/5 shadow-lg' 
              : 'border-muted bg-white hover:border-muted-foreground'
          }`}
          onClick={() => setRole('hirer')}
        >
          <div className={`p-4 rounded-2xl transition-colors ${role === 'hirer' ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'}`}>
            <Users className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-black tracking-tight mb-1">I Want To Hire</h3>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed">Find Top Talent For Your Projects And Scale Your Business.</p>
          </div>
        </Card>

        <Card 
          className={`p-6 border-2 transition-all duration-300 cursor-pointer flex items-center gap-5 rounded-3xl ${
            role === 'worker' 
              ? 'border-primary bg-primary/5 shadow-lg' 
              : 'border-muted bg-white hover:border-muted-foreground'
          }`}
          onClick={() => setRole('worker')}
        >
          <div className={`p-4 rounded-2xl transition-colors ${role === 'worker' ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'}`}>
            <Briefcase className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-black tracking-tight mb-1">I Want To Work</h3>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed">Browse Projects, Find Opportunities, And Earn Money.</p>
          </div>
        </Card>
      </div>

      <div className="mt-auto pb-12">
        <Button 
          disabled={!role} 
          className="w-full h-16 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl shadow-2xl transition-all"
          onClick={handleContinue}
        >
          Continue
          <ChevronRight className="ml-2 h-6 w-6" />
        </Button>
        <p className="text-center text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-6">
          You Can Switch Roles Later In Settings
        </p>
      </div>
    </div>
  );
}
