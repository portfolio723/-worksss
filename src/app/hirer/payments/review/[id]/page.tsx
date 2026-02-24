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
  Clock, 
  FileText, 
  ShieldCheck, 
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
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Stipend Released!</h1>
        <p className="text-muted-foreground mb-8">
          The payment of {payment.amount} has been successfully sent to {payment.student}.
        </p>
        <p className="text-sm text-accent animate-pulse font-medium">Updating balance...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-full"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Review Stipend</h1>
        </div>

        <Card className="p-6 bg-white border-none shadow-sm rounded-2xl mb-6">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={payment.avatar} 
              alt={payment.student} 
              className="w-16 h-16 rounded-2xl object-cover"
              data-ai-hint="indian student"
            />
            <div>
              <h2 className="text-lg font-bold">{payment.student}</h2>
              <p className="text-xs text-muted-foreground">{payment.role} • {payment.college}</p>
              <Badge variant="outline" className="mt-1 text-[10px] text-accent border-accent">
                {payment.status}
              </Badge>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-xs font-medium">Period</span>
              </div>
              <span className="text-xs font-bold">{payment.period}</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span className="text-xs font-medium">Milestone</span>
              </div>
              <span className="text-xs font-bold text-right max-w-[150px] truncate">{payment.milestone}</span>
            </div>

            <div className="flex justify-between items-center py-2 bg-secondary/20 px-3 rounded-lg">
              <div className="flex items-center gap-2 text-accent">
                <IndianRupee className="h-4 w-4" />
                <span className="text-sm font-bold">Release Amount</span>
              </div>
              <span className="text-lg font-bold text-accent">{payment.amount}</span>
            </div>
          </div>
        </Card>

        <section className="mb-8">
          <h3 className="text-sm font-bold mb-4">Verification Steps</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-muted">
              <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                <CheckCircle2 className="h-3 w-3 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold">Work Report Submitted</p>
                <p className="text-[10px] text-muted-foreground">Student shared documentation on Oct 28.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-muted">
              <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                <CheckCircle2 className="h-3 w-3 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold">Identity Verified</p>
                <p className="text-[10px] text-muted-foreground">Aadhar and College ID confirmed.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-yellow-50 p-4 rounded-xl flex gap-3 mb-8">
          <AlertCircle className="h-5 w-5 text-yellow-600 shrink-0" />
          <p className="text-[10px] text-yellow-800 leading-relaxed font-medium">
            Confirming this release will transfer funds instantly from your escrow to the student's wallet. This action cannot be reversed.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-14 rounded-2xl border-accent text-accent">
            Request Edit
          </Button>
          <Button 
            className="h-14 rounded-2xl bg-accent shadow-lg"
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
