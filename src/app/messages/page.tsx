"use client"

import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Input } from '@/components/ui/input';
import { Search, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const conversations = [
  {
    id: 'a1',
    name: 'Rahul Varma',
    lastMessage: 'Sir, I have shared my updated portfolio.',
    time: '10:30 AM',
    unread: 2,
    avatar: 'https://picsum.photos/seed/r1/100/100',
    online: true
  },
  {
    id: 'a2',
    name: 'Priya Das',
    lastMessage: 'Thank you for the opportunity!',
    time: 'Yesterday',
    unread: 0,
    avatar: 'https://picsum.photos/seed/p1/100/100',
    online: false
  },
  {
    id: 'h1',
    name: 'Arjun (Recruiter)',
    lastMessage: 'Are you available for a quick call at 4 PM?',
    time: 'Yesterday',
    unread: 0,
    avatar: 'https://picsum.photos/seed/avatar_in_1/100/100',
    online: true
  },
  {
    id: 'a3',
    name: 'Amit Singh',
    lastMessage: 'When is the deadline for the task?',
    time: '2 days ago',
    unread: 0,
    avatar: 'https://picsum.photos/seed/am1/100/100',
    online: false
  }
];

export default function MessagesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Messages</h1>
          <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">
            3 New
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            className="pl-10 h-12 bg-white border-none shadow-sm rounded-xl" 
            placeholder="Search conversations..." 
          />
        </div>

        <div className="space-y-2">
          {conversations.map((chat) => (
            <Card 
              key={chat.id} 
              className="p-4 bg-white border-none shadow-sm flex items-center gap-4 cursor-pointer hover:bg-secondary/20 transition-colors"
              onClick={() => router.push(`/messages/${chat.id}`)}
            >
              <div className="relative">
                <img 
                  src={chat.avatar} 
                  alt={chat.name} 
                  className="w-14 h-14 rounded-2xl object-cover"
                />
                {chat.online && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-sm truncate">{chat.name}</h3>
                  <span className="text-[10px] text-muted-foreground">{chat.time}</span>
                </div>
                <p className={`text-xs truncate ${chat.unread > 0 ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                  {chat.lastMessage}
                </p>
              </div>

              {chat.unread > 0 && (
                <div className="bg-accent w-5 h-5 rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">{chat.unread}</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        {conversations.length === 0 && (
          <div className="text-center py-20">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <p className="text-muted-foreground">No messages yet.</p>
          </div>
        )}
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
