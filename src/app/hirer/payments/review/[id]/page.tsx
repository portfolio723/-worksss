"use client"

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  AlertCircle,
  Calendar,
  IndianRupee
} from 'lucide-react';

const mockPaymentData: Record<string, any> = {
  'pp1': { 
    student: 'Amit Singh', 
    role: 'Backend Intern', 
    amount: '₹12,000', 
    milestone: 'API Integration for Mobile App',
    period: 'Oct 01 - Oct 31, 2023',
    status: 'Pending Review',
    avatar: 'https://picsum.photos/seed/am1/100/100',
    college: 'Anna University'
  },
  'pp2': { 
    student: 'Ananya Sharma', 
    role: 'Fullstack Intern', 
    amount: '₹15,000', 
    milestone: 'Dashboard UI Revamp',
    period: 'Oct 01 - Oct 31, 2023',
    status: 'Pending Review',
    avatar: 'https://picsum.photos/seed/s1/100/100',
    college: 'IIT Delhi'
  },
};

export default function ReviewPaymentPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const payment = mockPaymentData[id] || mockPaymentData['pp1'];

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRelease = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/hirer/payments');
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="hirer-theme min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Stipend Released!</h1>
        <p className="text-muted-foreground font-medium mb-8 leading-relaxed">
          The Payment Of {payment.amount} Has Been Successfully Sent To {payment.student}.
        </p>
        <p className="text-sm text-primary animate-pulse font-bold">Updating Balance...</p>
      </div>
    );
  }

  return (
    <div className="hirer-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-xl hover:bg-secondary"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Review Stipend</h1>
        </div>

        <Card className="p-8 bg-white border-none shadow-sm rounded-3xl mb-8">
          <div className="flex items-center gap-5 mb-8">
            <img 
              src={payment.avatar} 
              alt={payment.student} 
              className="w-20 h-20 rounded-2xl object-cover shadow-md"
              data-ai-hint="indian student"
            />
            <div>
              <h2 className="text-xl font-bold text-foreground">{payment.student}</h2>
              <p className="text-sm text-muted-foreground font-medium">{payment.role} • {payment.college}</p>
              <Badge variant="outline" className="mt-2 text-[10px] text-primary border-primary bg-primary/5 font-black uppercase tracking-widest">
                {payment.status}
              </Badge>
            </div>
          </div>

          <div className="space-y-5 pt-6 border-t border-muted/50">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-tight">Period</span>
              </div>
              <span className="text-sm font-bold text-foreground">{payment.period}</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-tight">Milestone</span>
              </div>
              <span className="text-sm font-bold text-foreground text-right max-w-[180px] truncate">{payment.milestone}</span>
            </div>

            <div className="flex justify-between items-center py-5 bg-primary/5 px-5 rounded-2xl border border-primary/10 mt-4">
              <div className="flex items-center gap-2.5 text-primary">
                <IndianRupee className="h-5 w-5" />
                <span className="text-base font-black uppercase tracking-widest">Release Amount</span>
              </div>
              <span className="text-2xl font-black text-primary">{payment.amount}</span>
            </div>
          </div>
        </Card>

        <section className="mb-10 px-2">
          <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-4">Verification Steps</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-muted/50">
              <div className="bg-emerald-100 p-2 rounded-xl mt-0.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Work Report Submitted</p>
                <p className="text-[10px] text-muted-foreground font-medium">Student Shared Documentation On Oct 28.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-muted/50">
              <div className="bg-emerald-100 p-2 rounded-xl mt-0.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Identity Verified</p>
                <p className="text-[10px] text-muted-foreground font-medium">Aadhar And College ID Confirmed.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 p-5 rounded-3xl flex gap-4 mb-10 border border-amber-100">
          <AlertCircle className="h-6 w-6 text-amber-600 shrink-0" />
          <p className="text-[11px] text-amber-800 leading-relaxed font-bold">
            Confirming This Release Will Transfer Funds Instantly From Your Escrow To The Student's Wallet. This Action Cannot Be Reversed.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-16 rounded-2xl border-primary text-primary font-bold hover:bg-primary/5">
            Request Edit
          </Button>
          <Button 
            className="h-16 rounded-2xl bg-primary text-primary-foreground font-black shadow-xl hover:bg-primary/90"
            disabled={isProcessing}
            onClick={handleRelease}
          >
            {isProcessing ? 'Processing...' : 'Approve & Pay'}
          </Button>
        </div>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
