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
          <div>
            <h1 className="text-2xl font-bold">Invoices</h1>
            <p className="text-xs text-muted-foreground">Download GST compliant bills</p>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input className="pl-10 h-12 bg-white border-none shadow-sm rounded-xl" placeholder="Search by ID or date..." />
        </div>

        <div className="space-y-4">
          {mockInvoices.map((inv) => (
            <Card key={inv.id} className="p-4 bg-white border-none shadow-sm rounded-xl overflow-hidden">
              <div className="flex gap-4">
                <div className="bg-secondary/50 p-3 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm truncate">{inv.id}</h3>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      {inv.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mb-3 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {inv.date} • {inv.type}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div>
                      <span className="text-sm font-bold">{inv.amount}</span>
                      <span className="text-[9px] text-muted-foreground ml-2">({inv.tax})</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold text-accent gap-1">
                      <Download className="h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center bg-blue-50 p-6 rounded-2xl">
          <p className="text-xs text-blue-700 leading-relaxed font-medium">
            Need consolidated quarterly reports for tax filing? 
            <br />
            <Button variant="link" className="text-blue-700 font-bold underline decoration-blue-700 h-auto p-0 mt-2">
              Email Reports
            </Button>
          </p>
        </div>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
