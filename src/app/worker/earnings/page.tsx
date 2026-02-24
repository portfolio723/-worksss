
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { 
  Wallet, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Banknote, 
  Clock, 
  CheckCircle2,
  TrendingUp,
  CreditCard
} from 'lucide-react';

const history = [
  { id: 'h1', title: 'TechShastra Milestone 1', amount: '₹12,500', status: 'Credited', date: 'Oct 12, 2023', type: 'Income' },
  { id: 'h2', title: 'Withdrawal To Bank', amount: '₹20,000', status: 'Completed', date: 'Oct 08, 2023', type: 'Withdrawal' },
  { id: 'h3', title: 'Campus Lead Stipend', amount: '₹5,000', status: 'Processing', date: 'Oct 14, 2023', type: 'Income' },
];

export default function WorkerEarningsPage() {
  const router = useRouter();

  return (
    <div className="worker-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="mb-6">
          <h1 className="text-3xl font-black">Your Earnings</h1>
          <p className="text-sm text-muted-foreground mt-1">Track Your Income And Withdraw Funds</p>
        </div>

        <Card className="p-6 bg-primary text-primary-foreground mb-6 shadow-xl relative overflow-hidden border-none">
          <div className="relative z-10 text-center">
            <span className="text-xs opacity-80 font-bold tracking-tight">Available For Withdrawal</span>
            <h2 className="text-4xl font-black mt-2 mb-6">₹42,500.00</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <Button 
                className="bg-white text-black hover:bg-white/90 font-bold rounded-xl h-12"
                onClick={() => router.push('/worker/earnings/withdraw')}
              >
                Withdraw Now
              </Button>
              <Button 
                variant="ghost" 
                className="border border-white/30 hover:bg-white/10 text-white font-bold rounded-xl h-12"
                onClick={() => router.push('/worker/earnings/transactions')}
              >
                Transactions
              </Button>
            </div>
          </div>
          <div className="absolute -left-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
        </Card>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="p-4 bg-white border-border/50 shadow-sm">
            <div className="bg-secondary p-2 rounded-lg w-fit mb-2">
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground font-bold tracking-tight">In Clearance</p>
            <p className="text-lg font-black">₹8,400</p>
          </Card>
          <Card className="p-4 bg-white border-border/50 shadow-sm">
            <div className="bg-secondary p-2 rounded-lg w-fit mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground font-bold tracking-tight">Total Earned</p>
            <p className="text-lg font-black">₹1.2L</p>
          </Card>
        </div>

        <section className="mb-8">
          <h3 className="text-xs font-black text-muted-foreground tracking-tight mb-4">Saved Withdrawal Methods</h3>
          <div className="space-y-3">
            <Card className="p-4 bg-white border-border/50 shadow-sm flex items-center justify-between cursor-pointer hover:bg-secondary/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-secondary p-2 rounded-lg">
                  <Banknote className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">HDFC Bank •••• 4291</h4>
                  <p className="text-[10px] text-muted-foreground">Primary Account</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-secondary text-primary border-none">Verified</Badge>
            </Card>
            <Card className="p-4 bg-white border-border/50 shadow-sm flex items-center justify-between cursor-pointer hover:bg-secondary/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-secondary p-2 rounded-lg">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">UPI ID: Rohan@Ybl</h4>
                  <p className="text-[10px] text-muted-foreground">Instant Transfer</p>
                </div>
              </div>
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </Card>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-black text-muted-foreground tracking-tight">Recent Activity</h3>
            <Button 
              variant="ghost" 
              className="text-primary text-xs h-auto p-0 font-bold"
              onClick={() => router.push('/worker/earnings/transactions')}
            >
              See All
            </Button>
          </div>
          <div className="space-y-3">
            {history.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-border/30">
                <div className={`p-2 rounded-full ${item.type === 'Income' ? 'bg-secondary text-primary' : 'bg-secondary text-primary'}`}>
                  {item.type === 'Income' ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold truncate">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground">{item.date} • {item.status}</p>
                </div>
                <div className="text-sm font-black">
                  {item.type === 'Income' ? '+' : '-'}{item.amount}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}
