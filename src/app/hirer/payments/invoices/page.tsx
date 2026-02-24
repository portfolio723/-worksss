
"use client"

import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Download, FileText, Search, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';

const mockInvoices = [
  { id: 'INV-2023-001', date: 'Oct 05, 2023', amount: '₹16,200', type: 'Stipend Batch', status: 'Paid', tax: '₹1,200 GST' },
  { id: 'INV-2023-002', date: 'Sep 28, 2023', amount: '₹50,000', type: 'Add Funds', status: 'Paid', tax: '₹0 GST' },
  { id: 'INV-2023-003', date: 'Sep 05, 2023', amount: '₹8,640', type: 'Gig Payment', status: 'Paid', tax: '₹640 GST' },
  { id: 'INV-2023-004', date: 'Aug 12, 2023', amount: '₹12,000', type: 'Stipend Batch', status: 'Paid', tax: '₹1,000 GST' },
];

export default function InvoicesPage() {
  const router = useRouter();

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
          <div>
            <h1 className="text-2xl font-bold text-foreground">Invoices</h1>
            <p className="text-sm text-muted-foreground font-medium">Download GST Compliant Bills</p>
          </div>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input className="pl-12 h-14 bg-white border-none shadow-sm rounded-2xl text-base font-medium focus:ring-primary" placeholder="Search By ID Or Date..." />
        </div>

        <div className="space-y-4">
          {mockInvoices.map((inv) => (
            <Card key={inv.id} className="p-6 bg-white border-none shadow-sm rounded-3xl overflow-hidden">
              <div className="flex gap-5">
                <div className="bg-primary/10 p-4 rounded-2xl flex items-center justify-center h-fit">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-base text-foreground truncate">{inv.id}</h3>
                    <span className="text-[10px] bg-emerald-500 text-white px-3 py-1 rounded-lg font-black uppercase tracking-widest shadow-sm">
                      {inv.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1.5 font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    {inv.date} • {inv.type}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-muted/50">
                    <div>
                      <span className="text-base font-bold text-foreground">{inv.amount}</span>
                      <span className="text-[10px] text-muted-foreground font-black ml-2">({inv.tax})</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-10 px-4 text-xs font-medium text-primary gap-1.5 hover:bg-primary/5 rounded-xl">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center bg-primary/5 p-8 rounded-3xl border border-primary/10">
          <p className="text-sm text-primary leading-relaxed font-bold">
            Need Consolidated Quarterly Reports For Tax Filing? 
            <br />
            <Button variant="link" className="text-primary font-black underline decoration-primary h-auto p-0 mt-3 text-sm font-medium">
              Email Reports
            </Button>
          </p>
        </div>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
