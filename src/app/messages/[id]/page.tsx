
"use client"

import { useState, useRef, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, 
  Send, 
  MoreVertical, 
  Phone, 
  Video, 
  CheckCheck, 
  ShieldAlert, 
  UserCheck 
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const mockChatData: Record<string, any> = {
  'a1': { name: 'Rahul Varma', avatar: 'https://picsum.photos/seed/r1/100/100', role: 'Student • IIT Bombay', verified: true },
  'a2': { name: 'Priya Das', avatar: 'https://picsum.photos/seed/p1/100/100', role: 'Student • DTU', verified: true },
  'h1': { name: 'Arjun (Recruiter)', avatar: 'https://picsum.photos/seed/avatar_in_1/100/100', role: 'Hirer • TechShastra', verified: true },
  'a3': { name: 'Amit Singh', avatar: 'https://picsum.photos/seed/am1/100/100', role: 'Student • Anna Univ', verified: true },
};

export default function ChatConversationPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const isInternalContact = !!mockChatData[id];
  const contact = mockChatData[id] || { name: 'External User', avatar: 'https://picsum.photos/seed/user/100/100', role: 'Unknown Contact', verified: false };

  const [isAccepted, setIsAccepted] = useState(id === 'a1' || id === 'h1');
  const [isOtherTyping, setIsOtherTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Namaste! I saw your application for the React Dev role.", sent: false, time: '10:00 AM', status: 'delivered' },
    { id: 2, text: "Yes sir, I am very interested. I have experience with Next.js and Tailwind.", sent: true, time: '10:05 AM', status: 'seen' },
    { id: 3, text: "Great! Can you share some of your previous project links?", sent: false, time: '10:10 AM', status: 'delivered' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOtherTyping]);

  useEffect(() => {
    if (isAccepted && isInternalContact) {
      const timer = setTimeout(() => setIsOtherTyping(true), 4000);
      const stopTimer = setTimeout(() => setIsOtherTyping(false), 7000);
      return () => {
        clearTimeout(timer);
        clearTimeout(stopTimer);
      };
    }
  }, [isAccepted]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sent: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
    
    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === newMessage.id ? { ...m, status: 'seen' } : m));
    }, 2000);
  };

  if (!isInternalContact) {
    return (
      <div className="flex flex-col h-screen bg-background">
        <header className="bg-white border-b px-4 h-16 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => router.back()}><ArrowLeft className="h-5 w-5" /></Button>
          <h2 className="font-bold">Security Block</h2>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center">
            <ShieldAlert className="h-10 w-10 text-rose-500" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-black text-foreground">External User Blocked</h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This conversation is blocked because the contact is not a verified member of #works. Protect your identity by staying within the platform.
            </p>
          </div>
          <Button className="rounded-xl px-10 h-14 font-bold bg-foreground text-white" onClick={() => router.back()}>
            Back to Safety
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="hirer-theme flex flex-col h-screen bg-secondary/10">
      <header className="bg-white border-b px-4 h-16 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-secondary font-medium" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-2xl object-cover shadow-sm" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-sm font-bold leading-none text-foreground">{contact.name}</h2>
                <UserCheck className="h-3 w-3 text-primary" />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1 font-bold">
                {isOtherTyping ? <span className="text-primary animate-pulse">Typing...</span> : contact.role}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-10 w-10 text-primary rounded-xl"><Phone className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 text-primary rounded-xl"><Video className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground rounded-xl"><MoreVertical className="h-5 w-5" /></Button>
        </div>
      </header>

      <main ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        <div className="flex justify-center my-6">
          <span className="text-[10px] bg-white px-4 py-1.5 rounded-full text-muted-foreground shadow-sm font-bold tracking-widest uppercase">Encryption Enabled</span>
        </div>
        
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm text-sm font-medium ${
              msg.sent ? 'bg-primary text-primary-foreground rounded-tr-none' : 'bg-white text-foreground rounded-tl-none'
            }`}>
              {msg.text}
              <div className={`flex items-center justify-end gap-1 text-[9px] mt-1.5 text-right ${msg.sent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {msg.time}
                {msg.sent && (
                  <CheckCheck className={`h-3 w-3 ${msg.status === 'seen' ? 'text-white' : 'opacity-50'}`} />
                )}
              </div>
            </div>
          </div>
        ))}
        {isOtherTyping && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
              <div className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t p-4 pb-8">
        {!isAccepted ? (
          <Card className="p-6 bg-primary/5 border-none rounded-3xl space-y-5 text-center shadow-sm">
            <div className="space-y-1">
              <h3 className="text-base font-black">Connection Request</h3>
              <p className="text-xs text-muted-foreground font-medium px-6">Accept this connection to start collaborating on projects.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 h-12 rounded-xl font-bold text-muted-foreground" onClick={() => router.back()}>
                Ignore
              </Button>
              <Button className="flex-1 h-12 rounded-xl font-bold bg-primary text-white shadow-xl" onClick={() => setIsAccepted(true)}>
                Accept
              </Button>
            </div>
          </Card>
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..." 
                className="pr-14 h-14 bg-secondary/30 border-none rounded-2xl text-base font-medium focus:ring-primary px-5 shadow-inner"
              />
              <Button 
                size="icon" 
                variant="ghost" 
                className="absolute right-1.5 top-1.5 h-11 w-11 text-primary hover:bg-transparent font-medium"
                onClick={handleSend}
              >
                <Send className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
