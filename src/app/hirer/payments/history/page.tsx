
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Search, 
  Filter,
  Download,
  Calendar
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const allTransactions = [
  { id: 'tx1', recipient: 'Rahul Varma', amount: '₹15,000', status: 'Completed', type: 'Stipend', date: 'Oct 05, 2023' },
  { id: 'tx2', recipient: 'Priya Das', amount: '₹8,000', status: 'Pending', type: 'Milestone', date: 'Oct 10, 2023' },
  { id: 'tx3', recipient: 'WorkWave Fee', amount: '₹1,200', status: 'Completed', type: 'Platform Fee', date: 'Oct 05, 2023' },
  { id: 'tx4', recipient: 'Self (Add Funds)', amount: '₹50,000', status: 'Completed', type: 'Deposit', date: 'Sep 28, 2023' },
  { id: 'tx5', recipient: 'Amit Singh', amount: '₹12,000', status: 'Completed', type: 'Stipend', date: 'Sep 05, 2023' },
  { id: 'tx6', recipient: 'WorkWave Fee', amount: '₹960', status: 'Completed', type: 'Platform Fee', date: 'Sep 05, 2023' },
  { id: 'tx7', recipient: 'Ananya Sharma', amount: '₹15,000', status: 'Completed', type: 'Stipend', date: 'Aug 05, 2023' },
];

export default function PaymentHistoryPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="hirer-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-xl hover:bg-secondary font-medium"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Transaction History</h1>
        </div>

        <div className="flex gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input className="pl-12 h-14 bg-white border-none shadow-sm rounded-2xl text-base font-medium focus:ring-primary" placeholder="Search By Name..." />
          </div>
          <Button variant="outline" className="h-14 w-14 rounded-2xl bg-white border-none shadow-sm font-medium">
            <Filter className="h-6 w-6 text-primary" />
          </Button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6 mb-4">
          {['All', 'Stipends', 'Deposits', 'Fees'].map(filter => (
            <Badge 
              key={filter} 
              variant={activeFilter === filter.toLowerCase() ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-xl cursor-pointer whitespace-nowrap font-bold text-xs transition-all ${activeFilter === filter.toLowerCase() ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-white border-slate-200 text-muted-foreground'}`}
              onClick={() => setActiveFilter(filter.toLowerCase())}
            >
              {filter}
            </Badge>
          ))}
        </div>

        <div className="space-y-4">
          {allTransactions.map((tx) => (
            <Card key={tx.id} className="p-5 bg-white border-none shadow-sm rounded-3xl hover:bg-secondary/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`p-3.5 rounded-2xl ${tx.type === 'Deposit' ? 'bg-emerald-100 text-emerald-600' : 'bg-primary/10 text-primary'}`}>
                  {tx.type === 'Deposit' ? <ArrowDownLeft className="h-6 w-6" /> : <ArrowUpRight className="h-6 w-6" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm text-foreground truncate">{tx.recipient}</h3>
                    <span className="text-base font-bold text-foreground">{tx.amount}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-[10px] text-muted-foreground font-bold flex items-center gap-1 uppercase tracking-tight">
                      <Calendar className="h-3 w-3" />
                      {tx.date} • {tx.type}
                    </p>
                    <Badge variant="outline" className={`text-[9px] font-black h-5 uppercase tracking-widest ${tx.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100'}`}>
                      {tx.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Button className="w-full mt-10 h-16 rounded-2xl border-dashed border-2 border-muted bg-transparent text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all font-medium gap-3 shadow-sm">
          <Download className="h-5 w-5" />
          Export All Transactions (CSV)
        </Button>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
