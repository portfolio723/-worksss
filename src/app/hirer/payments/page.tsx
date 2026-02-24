"use client"

import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  ArrowUpRight, 
  Plus, 
  Download, 
  History,
  ShieldCheck,
  Smartphone,
  Info,
  ChevronRight
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const transactions = [
  { id: 'tx1', recipient: 'Rahul Varma', amount: '₹15,000', status: 'Completed', type: 'Stipend', date: 'Oct 05, 2023' },
  { id: 'tx2', recipient: 'Priya Das', amount: '₹8,000', status: 'Pending', type: 'Milestone', date: 'Oct 10, 2023' },
  { id: 'tx3', recipient: 'WorkWave Fee', amount: '₹1,200', status: 'Completed', type: 'Platform Fee', date: 'Oct 05, 2023' },
];

const pendingPayments = [
  { id: 'pp1', student: 'Amit Singh', role: 'Backend Intern', amount: '₹12,000', dueDate: 'In 4 Days' },
  { id: 'pp2', student: 'Ananya Sharma', role: 'Fullstack Intern', amount: '₹15,000', dueDate: 'In 12 Days' },
];

export default function HirerPaymentsPage() {
  const router = useRouter();

  return (
    <div className="hirer-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area px-6">
        <div className="mb-8">
          <h1 className="text-2xl font-normal text-foreground">Payment Dashboard</h1>
          <p className="text-sm text-muted-foreground font-medium">Manage Stipends And Platform Billing Securely.</p>
        </div>

        <Card className="p-8 bg-primary text-primary-foreground mb-8 shadow-xl relative overflow-hidden rounded-3xl border-none">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[11px] opacity-90 uppercase font-normal tracking-widest">Balance</span>
                <h2 className="text-4xl font-normal mt-2 tracking-tight">₹58,400.00</h2>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl">
                <ShieldCheck className="h-7 w-7" />
              </div>
            </div>
            <div className="flex gap-4">
              <Button 
                className="flex-1 bg-white text-primary hover:bg-white/90 h-12 font-medium rounded-xl shadow-md"
                onClick={() => router.push('/hirer/payments/add-funds')}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Funds
              </Button>
              <Button 
                variant="ghost" 
                className="flex-1 border border-white/40 hover:bg-white/10 text-white h-12 font-medium rounded-xl"
                onClick={() => router.push('/hirer/payments/invoices')}
              >
                <Download className="h-4 w-4 mr-2" />
                Invoices
              </Button>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-white/10 rounded-full" />
        </Card>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full bg-secondary/50 p-1 rounded-2xl mb-8">
            <TabsTrigger value="overview" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Overview</TabsTrigger>
            <TabsTrigger value="history" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">History</TabsTrigger>
            <TabsTrigger value="methods" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Saved Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <section className="mb-10">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-[11px] font-black text-muted-foreground uppercase tracking-widest">Upcoming Stipends</h3>
                <Badge className="bg-indigo-50 text-indigo-700 font-bold border-indigo-100">2 Pending</Badge>
              </div>
              <div className="space-y-4">
                {pendingPayments.map((payment) => (
                  <Card key={payment.id} className="p-5 bg-white border-none shadow-sm rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="font-normal text-base text-foreground">{payment.student}</h4>
                        <p className="text-xs text-muted-foreground font-medium">{payment.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-normal text-lg text-primary">{payment.amount}</p>
                        <p className="text-[10px] text-destructive font-bold uppercase">Due {payment.dueDate}</p>
                      </div>
                    </div>
                    <Button 
                      className="w-full h-11 text-xs bg-secondary text-primary hover:bg-secondary/80 font-medium rounded-xl transition-colors"
                      onClick={() => router.push(`/hirer/payments/review/${payment.id}`)}
                    >
                      Review Report & Release Stipend
                    </Button>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-[11px] font-black text-muted-foreground uppercase tracking-widest">Recent Activity</h3>
                <Button 
                  variant="link" 
                  className="text-primary text-xs font-medium h-auto p-0"
                  onClick={() => router.push('/hirer/payments/history')}
                >
                  See Full History <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              <div className="space-y-3">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-transparent hover:border-primary/10 transition-all">
                    <div className={`p-2.5 rounded-xl ${tx.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                      {tx.type === 'Stipend' ? <ArrowUpRight className="h-5 w-5" /> : <History className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-normal text-foreground truncate">{tx.recipient}</h4>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">{tx.date} • {tx.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-normal text-foreground">{tx.amount}</p>
                      <p className={`text-[9px] font-black uppercase tracking-widest ${tx.status === 'Completed' ? 'text-emerald-600' : 'text-amber-600'}`}>{tx.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="history">
            <div className="text-center py-20 px-8 bg-white rounded-3xl shadow-sm">
              <History className="h-16 w-16 text-muted-foreground mx-auto mb-6 opacity-20" />
              <h3 className="text-lg font-normal text-foreground mb-3">No Detailed History Yet</h3>
              <p className="text-sm text-muted-foreground font-medium mb-10 leading-relaxed">Your Full Transaction Logs, Filters, And Monthly Statements Will Appear Here.</p>
              <Button 
                variant="outline" 
                className="rounded-2xl border-primary text-primary font-medium h-12 px-8 hover:bg-primary/5"
                onClick={() => router.push('/hirer/payments/history')}
              >
                View Full Logs
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="methods">
            <div className="space-y-5">
              <Card className="p-5 border-2 border-primary/20 bg-primary/5 flex items-center justify-between rounded-2xl shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-normal text-foreground">UPI Auto-Pay</h4>
                    <p className="text-xs text-muted-foreground font-medium">Linked To arjun@hdfc</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary text-white font-bold text-[10px] rounded-lg">PRIMARY</Badge>
              </Card>
              
              <Card className="p-6 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center gap-3 text-muted-foreground cursor-pointer hover:bg-muted/5 hover:border-primary/30 transition-all rounded-2xl group">
                <Plus className="h-5 w-5 group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">Add New Payment Method</span>
              </Card>

              <div className="bg-indigo-50/50 p-5 rounded-2xl flex gap-4 border border-indigo-100">
                <Info className="h-6 w-6 text-indigo-600 shrink-0" />
                <p className="text-[11px] text-indigo-800 leading-relaxed font-medium">
                  Stipends Are Held Securely In Our Escrow System. Funds Are Only Released To Students After You Approve Their Monthly Work Reports.
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
