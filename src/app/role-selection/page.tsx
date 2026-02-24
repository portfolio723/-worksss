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
    <div className="min-h-screen bg-background p-6 flex flex-col">
      <h1 className="text-3xl font-bold mt-12 mb-2">Who are you?</h1>
      <p className="text-muted-foreground mb-12">Select your role to personalize your experience.</p>

      <div className="space-y-4">
        <Card 
          className={`p-6 border-2 transition-all cursor-pointer flex items-center gap-4 ${role === 'hirer' ? 'border-accent bg-accent/5' : 'border-transparent'}`}
          onClick={() => setRole('hirer')}
        >
          <div className={`p-3 rounded-2xl ${role === 'hirer' ? 'bg-accent text-white' : 'bg-primary/20 text-accent'}`}>
            <Users className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">I want to hire</h3>
            <p className="text-sm text-muted-foreground">Find top talent for your projects and scale your business.</p>
          </div>
        </Card>

        <Card 
          className={`p-6 border-2 transition-all cursor-pointer flex items-center gap-4 ${role === 'worker' ? 'border-accent bg-accent/5' : 'border-transparent'}`}
          onClick={() => setRole('worker')}
        >
          <div className={`p-3 rounded-2xl ${role === 'worker' ? 'bg-accent text-white' : 'bg-primary/20 text-accent'}`}>
            <Briefcase className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">I want to work</h3>
            <p className="text-sm text-muted-foreground">Browse projects, find opportunities, and earn money.</p>
          </div>
        </Card>
      </div>

      <div className="mt-auto pb-8">
        <Button 
          disabled={!role} 
          className="w-full h-12 text-lg bg-accent"
          onClick={handleContinue}
        >
          Continue
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}