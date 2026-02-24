
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Search, 
  Filter,
  Download,
  Calendar
} from 'lucide-react';

const allTransactions = [
  { id: 'tx1', title: 'TechShastra Milestone 1', amount: '₹12,500', status: 'Credited', type: 'Income', date: 'Oct 12, 2023' },
  { id: 'tx2', title: 'Withdrawal To Bank', amount: '₹20,000', status: 'Completed', type: 'Withdrawal', date: 'Oct 08, 2023' },
  { id: 'tx3', title: 'Campus Lead Stipend', amount: '₹5,000', status: 'Processing', type: 'Income', date: 'Oct 14, 2023' },
  { id: 'tx4', title: 'Project: UI Revamp', amount: '₹8,000', status: 'Credited', type: 'Income', date: 'Sep 28, 2023' },
  { id: 'tx5', title: 'Withdrawal To UPI', amount: '₹5,000', status: 'Completed', type: 'Withdrawal', date: 'Sep 25, 2023' },
  { id: 'tx6', title: 'Logo Design Gig', amount: '₹2,500', status: 'Credited', type: 'Income', date: 'Sep 20, 2023' },
];

export default function WorkerTransactionsPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTransactions = allTransactions.filter(tx => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'income') return tx.type === 'Income';
    if (activeFilter === 'withdrawals') return tx.type === 'Withdrawal';
    return true;
  });

  return (
    <div className="worker-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-2xl hover:bg-secondary"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-black tracking-tight">Transaction History</h1>
        </div>

        <div className="flex gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input className="pl-12 h-14 bg-white border-border shadow-sm rounded-2xl text-base" placeholder="Search Transactions..." />
          </div>
          <Button variant="outline" className="h-14 w-14 rounded-2xl bg-white border-border shadow-sm hover:bg-secondary transition-all">
            <Filter className="h-6 w-6 text-primary" />
          </Button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar -mx-4 px-4 mb-4">
          {['All', 'Income', 'Withdrawals'].map(filter => (
            <Badge 
              key={filter} 
              variant={activeFilter === filter.toLowerCase() ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full cursor-pointer whitespace-nowrap transition-all font-black text-xs ${
                activeFilter === filter.toLowerCase() ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white text-muted-foreground'
              }`}
              onClick={() => setActiveFilter(filter.toLowerCase())}
            >
              {filter}
            </Badge>
          ))}
        </div>

        <div className="space-y-4">
          {filteredTransactions.map((tx) => (
            <Card key={tx.id} className="p-5 bg-white border-border/50 shadow-sm rounded-2xl hover:border-primary transition-all group">
              <div className="flex items-center gap-4">
                <div className={`p-3.5 rounded-2xl ${tx.type === 'Income' ? 'bg-secondary text-primary' : 'bg-secondary/50 text-muted-foreground'}`}>
                  {tx.type === 'Income' ? <ArrowDownLeft className="h-5 w-5" /> : <ArrowUpRight className="h-5 w-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-black text-sm tracking-tight truncate group-hover:text-primary transition-colors">{tx.title}</h3>
                    <span className={`text-sm font-black ${tx.type === 'Income' ? 'text-primary' : 'text-foreground'}`}>
                      {tx.type === 'Income' ? '+' : '-'}{tx.amount}
                    </span>
                  </div>
                  <div className="flex justify-between items-end mt-1">
                    <p className="text-[10px] text-muted-foreground font-bold flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {tx.date} • {tx.type}
                    </p>
                    <p className={`text-[10px] font-black tracking-tight ${tx.status === 'Completed' || tx.status === 'Credited' ? 'text-primary' : 'text-muted-foreground'}`}>
                      {tx.status}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Button className="w-full mt-10 h-14 rounded-2xl border-dashed border-2 border-border bg-transparent text-muted-foreground hover:bg-secondary hover:text-primary font-black gap-3 transition-all">
          <Download className="h-5 w-5" />
          Export Transaction Statement (PDF)
        </Button>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}
