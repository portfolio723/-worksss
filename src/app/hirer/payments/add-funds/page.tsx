"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CreditCard, Smartphone, Building2, CheckCircle2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function AddFundsPage() {
  const router = useRouter();
  const [amount, setAmount] = useState('10000');
  const [method, setMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAddFunds = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment gateway
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Funds Added Successfully!</h1>
        <p className="text-muted-foreground font-medium mb-8">
          ₹{Number(amount).toLocaleString('en-IN')} has been added to your escrow balance.
        </p>
        <p className="text-sm text-primary animate-pulse font-bold">Redirecting To Payments...</p>
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
          <h1 className="text-2xl font-bold text-foreground">Add Funds</h1>
        </div>

        <Card className="p-8 bg-white border-none shadow-sm mb-8 rounded-3xl">
          <form onSubmit={handleAddFunds} className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="amount" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Amount To Add (₹)</Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-xl text-foreground">₹</span>
                <Input 
                  id="amount" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-10 h-14 text-xl font-bold rounded-2xl bg-secondary/30 border-none focus:ring-primary" 
                  placeholder="0.00"
                  type="number"
                  required 
                />
              </div>
              <div className="flex gap-2 mt-2">
                {['5000', '10000', '25000', '50000'].map((val) => (
                  <Button 
                    key={val}
                    type="button" 
                    variant="outline" 
                    size="sm"
                    className="flex-1 rounded-xl text-[10px] font-bold h-9 bg-white border-slate-200"
                    onClick={() => setAmount(val)}
                  >
                    +₹{Number(val).toLocaleString('en-IN')}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Payment Method</Label>
              <RadioGroup value={method} onValueChange={setMethod} className="space-y-4">
                <div 
                  className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer ${method === 'upi' ? 'border-primary bg-primary/5 shadow-md' : 'border-muted'}`}
                  onClick={() => setMethod('upi')}
                >
                  <Label htmlFor="upi" className="flex items-center gap-4 cursor-pointer flex-1">
                    <div className="bg-primary/10 p-3 rounded-2xl"><Smartphone className="h-6 w-6 text-primary" /></div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-foreground">UPI (GPay, PhonePe, etc.)</p>
                      <p className="text-[10px] text-muted-foreground font-medium">Instant Transfer • Zero Fee</p>
                    </div>
                  </Label>
                  <RadioGroupItem value="upi" id="upi" className="border-primary text-primary" />
                </div>

                <div 
                  className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer ${method === 'card' ? 'border-primary bg-primary/5 shadow-md' : 'border-muted'}`}
                  onClick={() => setMethod('card')}
                >
                  <Label htmlFor="card" className="flex items-center gap-4 cursor-pointer flex-1">
                    <div className="bg-primary/10 p-3 rounded-2xl"><CreditCard className="h-6 w-6 text-primary" /></div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-foreground">Credit / Debit Card</p>
                      <p className="text-[10px] text-muted-foreground font-medium">Visa, Mastercard, RuPay</p>
                    </div>
                  </Label>
                  <RadioGroupItem value="card" id="card" className="border-primary text-primary" />
                </div>

                <div 
                  className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer ${method === 'netbanking' ? 'border-primary bg-primary/5 shadow-md' : 'border-muted'}`}
                  onClick={() => setMethod('netbanking')}
                >
                  <Label htmlFor="netbanking" className="flex items-center gap-4 cursor-pointer flex-1">
                    <div className="bg-primary/10 p-3 rounded-2xl"><Building2 className="h-6 w-6 text-primary" /></div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-foreground">Net Banking</p>
                      <p className="text-[10px] text-muted-foreground font-medium">All Major Indian Banks</p>
                    </div>
                  </Label>
                  <RadioGroupItem value="netbanking" id="netbanking" className="border-primary text-primary" />
                </div>
              </RadioGroup>
            </div>

            <Button 
              type="submit" 
              className="w-full h-16 text-lg bg-primary text-primary-foreground font-bold rounded-2xl shadow-xl mt-4 hover:bg-primary/90"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing Payment...' : `Pay ₹${Number(amount).toLocaleString('en-IN')}`}
            </Button>
          </form>
        </Card>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
