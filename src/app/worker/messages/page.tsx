
"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Input } from '@/components/ui/input';
import { Search, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const conversations = [
  {
    id: 'h1',
    name: 'Arjun (Recruiter)',
    lastMessage: 'Are you available for a quick call at 4 PM?',
    time: 'Yesterday',
    unread: 1,
    avatar: 'https://picsum.photos/seed/avatar_in_1/100/100',
    online: true
  }
];

export default function WorkerMessagesPage() {
  const router = useRouter();

  return (
    <div className="worker-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-black">Chats</h1>
          <div className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black tracking-tight">
            1 New
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            className="pl-12 h-14 bg-white border-border/50 shadow-sm rounded-2xl text-base" 
            placeholder="Search Recruiters..." 
          />
        </div>

        <div className="space-y-3">
          {conversations.map((chat) => (
            <Card 
              key={chat.id} 
              className="p-4 bg-white border-border/40 shadow-sm flex items-center gap-4 cursor-pointer hover:bg-secondary/50 transition-colors rounded-2xl"
              onClick={() => router.push(`/worker/messages/${chat.id}`)}
            >
              <div className="relative">
                <img 
                  src={chat.avatar} 
                  alt={chat.name} 
                  className="w-14 h-14 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all"
                />
                {chat.online && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-black text-sm truncate">{chat.name}</h3>
                  <span className="text-[10px] text-muted-foreground font-bold">{chat.time}</span>
                </div>
                <p className={`text-xs truncate font-medium ${chat.unread > 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                  {chat.lastMessage}
                </p>
              </div>

              {chat.unread > 0 && (
                <div className="bg-primary w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-[10px] text-white font-black">{chat.unread}</span>
                </div>
              )}
            </Card>
          ))}

          {conversations.length === 0 && (
            <div className="text-center py-20 px-8">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
              <p className="text-muted-foreground font-bold">No Conversations Yet.</p>
            </div>
          )}
        </div>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}
