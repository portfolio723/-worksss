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
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Funds Added Successfully!</h1>
        <p className="text-muted-foreground mb-8">
          ₹{Number(amount).toLocaleString('en-IN')} has been added to your escrow balance.
        </p>
        <p className="text-sm text-accent animate-pulse font-medium">Redirecting to payments...</p>
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
          <h1 className="text-2xl font-bold">Add Funds</h1>
        </div>

        <Card className="p-6 bg-white border-none shadow-sm mb-6 rounded-2xl">
          <form onSubmit={handleAddFunds} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount to Add (₹)</Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-lg">₹</span>
                <Input 
                  id="amount" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-10 h-14 text-xl font-bold rounded-xl" 
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
                    className="flex-1 rounded-lg text-xs"
                    onClick={() => setAmount(val)}
                  >
                    +₹{Number(val).toLocaleString('en-IN')}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label>Payment Method</Label>
              <RadioGroup value={method} onValueChange={setMethod} className="space-y-3">
                <div className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${method === 'upi' ? 'border-accent bg-accent/5' : 'border-muted'}`}>
                  <Label htmlFor="upi" className="flex items-center gap-3 cursor-pointer flex-1">
                    <div className="bg-primary/20 p-2 rounded-lg"><Smartphone className="h-5 w-5 text-accent" /></div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">UPI (GPay, PhonePe, etc.)</p>
                      <p className="text-[10px] text-muted-foreground">Instant Transfer • Zero Fee</p>
                    </div>
                  </Label>
                  <RadioGroupItem value="upi" id="upi" />
                </div>

                <div className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${method === 'card' ? 'border-accent bg-accent/5' : 'border-muted'}`}>
                  <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                    <div className="bg-primary/20 p-2 rounded-lg"><CreditCard className="h-5 w-5 text-accent" /></div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">Credit / Debit Card</p>
                      <p className="text-[10px] text-muted-foreground">Visa, Mastercard, RuPay</p>
                    </div>
                  </Label>
                  <RadioGroupItem value="card" id="card" />
                </div>

                <div className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${method === 'netbanking' ? 'border-accent bg-accent/5' : 'border-muted'}`}>
                  <Label htmlFor="netbanking" className="flex items-center gap-3 cursor-pointer flex-1">
                    <div className="bg-primary/20 p-2 rounded-lg"><Building2 className="h-5 w-5 text-accent" /></div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">Net Banking</p>
                      <p className="text-[10px] text-muted-foreground">All Major Indian Banks</p>
                    </div>
                  </Label>
                  <RadioGroupItem value="netbanking" id="netbanking" />
                </div>
              </RadioGroup>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 text-lg bg-accent rounded-2xl shadow-lg mt-4"
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
