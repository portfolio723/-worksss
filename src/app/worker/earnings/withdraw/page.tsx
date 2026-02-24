
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
import { ArrowLeft, CheckCircle2, Banknote, Smartphone } from 'lucide-react';

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
      <div className="worker-theme min-h-screen bg-background flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-black tracking-tight mb-3">Withdrawal Initiated!</h1>
        <p className="text-muted-foreground font-medium mb-10 leading-relaxed">
          ₹{Number(amount).toLocaleString('en-IN')} Will Be Credited To Your Account Within 24 Hours.
        </p>
        <p className="text-xs text-primary animate-pulse font-black tracking-widest uppercase">Updating Your Wallet...</p>
      </div>
    );
  }

  return (
    <div className="worker-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-2xl hover:bg-secondary font-medium"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-black tracking-tight">Withdraw Funds</h1>
        </div>

        <Card className="p-8 bg-white border-border shadow-sm rounded-3xl mb-8">
          <form onSubmit={handleWithdraw} className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="amount" className="text-xs font-black uppercase tracking-widest text-muted-foreground">Amount To Withdraw (₹)</Label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-2xl text-muted-foreground">₹</span>
                <Input 
                  id="amount" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-12 h-16 text-3xl font-black rounded-2xl border-border focus:ring-primary" 
                  placeholder="0"
                  type="number"
                  max="42500"
                  required 
                />
              </div>
              <div className="flex justify-between items-center px-1">
                <p className="text-[10px] text-muted-foreground font-bold">Balance: ₹42,500.00</p>
                <Button 
                  type="button" 
                  variant="link" 
                  className="h-auto p-0 text-[10px] font-medium text-primary"
                  onClick={() => setAmount('42500')}
                >
                  Withdraw All
                </Button>
              </div>
            </div>

            <div className="space-y-5">
              <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Select Destination</Label>
              <RadioGroup value={method} onValueChange={setMethod} className="space-y-4">
                <div 
                  className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer ${method === 'bank' ? 'border-primary bg-primary/5 shadow-md' : 'border-border'}`}
                  onClick={() => setMethod('bank')}
                >
                  <Label htmlFor="bank" className="flex items-center gap-4 cursor-pointer flex-1">
                    <div className="bg-secondary p-3 rounded-xl"><Banknote className="h-6 w-6 text-primary" /></div>
                    <div className="flex-1">
                      <p className="font-black text-sm tracking-tight">HDFC Bank •••• 4291</p>
                      <p className="text-[10px] text-muted-foreground font-bold">Primary Account • 24h Settlement</p>
                    </div>
                  </Label>
                  <RadioGroupItem value="bank" id="bank" className="border-primary" />
                </div>

                <div 
                  className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer ${method === 'upi' ? 'border-primary bg-primary/5 shadow-md' : 'border-border'}`}
                  onClick={() => setMethod('upi')}
                >
                  <Label htmlFor="upi" className="flex items-center gap-4 cursor-pointer flex-1">
                    <div className="bg-secondary p-3 rounded-xl"><Smartphone className="h-6 w-6 text-primary" /></div>
                    <div className="flex-1">
                      <p className="font-black text-sm tracking-tight">UPI (Rohan@Ybl)</p>
                      <p className="text-[10px] text-muted-foreground font-bold">Instant Transfer • Zero Fee</p>
                    </div>
                  </Label>
                  <RadioGroupItem value="upi" id="upi" className="border-primary" />
                </div>
              </RadioGroup>
            </div>

            <Button 
              type="submit" 
              className="w-full h-16 text-lg bg-primary text-white rounded-2xl shadow-2xl mt-6 font-medium tracking-tight"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing Transfer...' : `Confirm Withdrawal`}
            </Button>
          </form>
        </Card>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}
