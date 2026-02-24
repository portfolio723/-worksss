
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
          <h1 className="text-2xl font-bold">Transaction History</h1>
        </div>

        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-10 h-12 bg-white border-none shadow-sm rounded-xl" placeholder="Search Transactions..." />
          </div>
          <Button variant="outline" className="h-12 w-12 rounded-xl bg-white border-none shadow-sm">
            <Filter className="h-5 w-5 text-accent" />
          </Button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 mb-2">
          {['All', 'Income', 'Withdrawals'].map(filter => (
            <Badge 
              key={filter} 
              variant={activeFilter === filter.toLowerCase() ? 'default' : 'outline'}
              className={`px-4 py-1.5 rounded-full cursor-pointer whitespace-nowrap transition-all ${
                activeFilter === filter.toLowerCase() ? 'bg-accent border-accent text-white' : 'bg-white'
              }`}
              onClick={() => setActiveFilter(filter.toLowerCase())}
            >
              {filter}
            </Badge>
          ))}
        </div>

        <div className="space-y-3">
          {filteredTransactions.map((tx) => (
            <Card key={tx.id} className="p-4 bg-white border-none shadow-sm rounded-xl">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${tx.type === 'Income' ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-accent'}`}>
                  {tx.type === 'Income' ? <ArrowDownLeft className="h-5 w-5" /> : <ArrowUpRight className="h-5 w-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm truncate">{tx.title}</h3>
                    <span className={`text-sm font-bold ${tx.type === 'Income' ? 'text-green-600' : 'text-foreground'}`}>
                      {tx.type === 'Income' ? '+' : '-'}{tx.amount}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {tx.date} • {tx.type}
                    </p>
                    <p className={`text-[10px] font-bold ${tx.status === 'Completed' || tx.status === 'Credited' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {tx.status}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Button className="w-full mt-8 h-12 rounded-xl border-dashed border-2 border-muted bg-transparent text-muted-foreground hover:bg-muted/5 font-bold gap-2">
          <Download className="h-4 w-4" />
          Export Transaction Statement (PDF)
        </Button>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}
