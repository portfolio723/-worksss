"use client"

import { useState } from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Plus, 
  Download, 
  History,
  ShieldCheck,
  Smartphone,
  Info
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const transactions = [
  { id: 'tx1', recipient: 'Rahul Varma', amount: '₹15,000', status: 'Completed', type: 'Stipend', date: 'Oct 05, 2023' },
  { id: 'tx2', recipient: 'Priya Das', amount: '₹8,000', status: 'Pending', type: 'Milestone', date: 'Oct 10, 2023' },
  { id: 'tx3', recipient: 'WorkWave Fee', amount: '₹1,200', status: 'Completed', type: 'Platform Fee', date: 'Oct 05, 2023' },
];

const pendingPayments = [
  { id: 'pp1', student: 'Amit Singh', role: 'Backend Intern', amount: '₹12,000', dueDate: 'In 4 days' },
  { id: 'pp2', student: 'Ananya Sharma', role: 'Fullstack Intern', amount: '₹15,000', dueDate: 'In 12 days' },
];

export default function HirerPaymentsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Payments</h1>
          <p className="text-sm text-muted-foreground">Manage stipends and platform billing</p>
        </div>

        <Card className="p-6 bg-accent text-white mb-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs opacity-80 uppercase font-bold tracking-wider">Escrow Balance</span>
                <h2 className="text-3xl font-bold mt-1">₹58,400.00</h2>
              </div>
              <div className="bg-white/20 p-2 rounded-xl">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1 bg-white text-accent hover:bg-white/90 h-10 font-bold rounded-xl">
                <Plus className="h-4 w-4 mr-1" />
                Add Funds
              </Button>
              <Button variant="ghost" className="flex-1 border border-white/30 hover:bg-white/10 text-white h-10 font-bold rounded-xl">
                <Download className="h-4 w-4 mr-1" />
                Invoices
              </Button>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full" />
        </Card>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full bg-white/50 p-1 rounded-xl mb-6">
            <TabsTrigger value="overview" className="flex-1 rounded-lg">Overview</TabsTrigger>
            <TabsTrigger value="history" className="flex-1 rounded-lg">History</TabsTrigger>
            <TabsTrigger value="methods" className="flex-1 rounded-lg">Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <section className="mb-8">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Upcoming Stipends</h3>
              <div className="space-y-4">
                {pendingPayments.map((payment) => (
                  <Card key={payment.id} className="p-4 bg-white border-none shadow-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-sm">{payment.student}</h4>
                        <p className="text-[10px] text-muted-foreground">{payment.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-accent">{payment.amount}</p>
                        <p className="text-[10px] text-destructive font-medium">Due {payment.dueDate}</p>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-3 h-8 text-[10px] bg-secondary text-accent hover:bg-secondary/80 font-bold">
                      Review & Release
                    </Button>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Recent Activity</h3>
                <Button variant="link" className="text-accent text-xs h-auto p-0">See all</Button>
              </div>
              <div className="space-y-2">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                    <div className={`p-2 rounded-lg ${tx.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                      {tx.type === 'Stipend' ? <ArrowUpRight className="h-4 w-4" /> : <History className="h-4 w-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold truncate">{tx.recipient}</h4>
                      <p className="text-[10px] text-muted-foreground">{tx.date} • {tx.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold">{tx.amount}</p>
                      <p className={`text-[9px] font-medium ${tx.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>{tx.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="methods">
            <div className="space-y-4">
              <Card className="p-4 border-2 border-accent/20 bg-accent/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Smartphone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">UPI Auto-pay</h4>
                    <p className="text-[10px] text-muted-foreground">Linked to arjun@hdfc</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-[10px]">Default</Badge>
              </Card>
              <Card className="p-4 border border-dashed border-muted flex items-center justify-center gap-2 text-muted-foreground cursor-pointer hover:bg-muted/10 transition-colors">
                <Plus className="h-4 w-4" />
                <span className="text-sm font-bold">Add New Card or UPI</span>
              </Card>
              <div className="bg-blue-50 p-4 rounded-xl flex gap-3">
                <Info className="h-5 w-5 text-blue-500 shrink-0" />
                <p className="text-[10px] text-blue-700 leading-relaxed">
                  Stipends are held in our secure escrow. Funds are only released after you approve the student's monthly work report.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
