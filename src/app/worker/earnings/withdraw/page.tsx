
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, CheckCircle2, Banknote, CreditCard, Smartphone } from 'lucide-react';

export default function WithdrawFundsPage() {
  const router = useRouter();
  const [amount, setAmount] = useState('10000');
  const [method, setMethod] = useState('bank');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/worker/earnings');
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Withdrawal Initiated!</h1>
        <p className="text-muted-foreground mb-8">
          ₹{Number(amount).toLocaleString('en-IN')} will be credited to your account within 24 hours.
        </p>
        <p className="text-sm text-accent animate-pulse font-medium">Redirecting to earnings...</p>
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
          <h1 className="text-2xl font-bold">Withdraw Funds</h1>
        </div>

        <Card className="p-6 bg-white border-none shadow-sm rounded-2xl mb-6">
          <form onSubmit={handleWithdraw} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount to Withdraw (₹)</Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-lg text-muted-foreground">₹</span>
                <Input 
                  id="amount" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-10 h-14 text-xl font-bold rounded-xl" 
                  placeholder="0.00"
                  type="number"
                  max="42500"
                  required 
                />
              </div>
              <p className="text-[10px] text-muted-foreground font-medium">Available: ₹42,500.00</p>
            </div>

            <div className="space-y-4">
              <Label>Withdrawal Method</Label>
              <RadioGroup value={method} onValueChange={setMethod} className="space-y-3">
                <div className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${method === 'bank' ? 'border-accent bg-accent/5' : 'border-muted'}`}>
                  <Label htmlFor="bank" className="flex items-center gap-3 cursor-pointer flex-1">
                    <div className="bg-primary/20 p-2 rounded-lg"><Banknote className="h-5 w-5 text-accent" /></div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">HDFC Bank •••• 4291</p>
                      <p className="text-[10px] text-muted-foreground">Direct Bank Transfer</p>
                    </div>
                  </Label>
                  <RadioGroupItem value="bank" id="bank" />
                </div>

                <div className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${method === 'upi' ? 'border-accent bg-accent/5' : 'border-muted'}`}>
                  <Label htmlFor="upi" className="flex items-center gap-3 cursor-pointer flex-1">
                    <div className="bg-primary/20 p-2 rounded-lg"><Smartphone className="h-5 w-5 text-accent" /></div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">UPI (Rohan@Ybl)</p>
                      <p className="text-[10px] text-muted-foreground">Instant Transfer</p>
                    </div>
                  </Label>
                  <RadioGroupItem value="upi" id="upi" />
                </div>
              </RadioGroup>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 text-lg bg-accent rounded-2xl shadow-lg mt-4"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : `Withdraw ₹${Number(amount).toLocaleString('en-IN')}`}
            </Button>
          </form>
        </Card>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}
