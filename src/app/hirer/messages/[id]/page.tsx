
"use client"

import { useState, useRef, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, 
  Send, 
  CheckCheck, 
  ShieldAlert, 
  MoreVertical,
  UserCheck
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const mockChatData: Record<string, any> = {
  'a1': { name: 'Rahul Varma', avatar: 'https://picsum.photos/seed/r1/100/100', role: 'Student • IIT Bombay', verified: true },
  'a2': { name: 'Priya Das', avatar: 'https://picsum.photos/seed/p1/100/100', role: 'Student • DTU', verified: true },
};

export default function HirerConversationPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  // Check if contact is internal/verified
  const isInternalContact = !!mockChatData[id];
  const contact = mockChatData[id] || { name: 'Unknown User', avatar: 'https://picsum.photos/seed/unknown/100/100', role: 'External Contact', verified: false };

  const [isAccepted, setIsAccepted] = useState(id === 'a1'); // a1 is pre-accepted for demo
  const [isOtherTyping, setIsOtherTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Namaste! I saw your application for the React Dev role.", sent: true, time: '10:00 AM', status: 'seen' },
    { id: 2, text: "Yes sir, I am very interested. I have experience with Next.js and Tailwind.", sent: false, time: '10:05 AM', status: 'delivered' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOtherTyping]);

  // Simulate typing indicator
  useEffect(() => {
    if (isAccepted && isInternalContact) {
      const timer = setTimeout(() => setIsOtherTyping(true), 3000);
      const stopTimer = setTimeout(() => setIsOtherTyping(false), 6000);
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
    
    // Simulate message becoming "seen" after 2 seconds
    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === newMessage.id ? { ...m, status: 'seen' } : m));
    }, 2000);
  };

  if (!isInternalContact) {
    return (
      <div className="hirer-theme flex flex-col h-screen bg-background">
        <header className="bg-white border-b px-4 h-16 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => router.back()}><ArrowLeft className="h-5 w-5" /></Button>
          <h2 className="font-bold">Access Blocked</h2>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center">
            <ShieldAlert className="h-10 w-10 text-rose-500" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-black text-foreground tracking-tight">External Contact Blocked</h1>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
              For your security, you can only message verified students who have applied to your jobs. This contact is not registered on #works.
            </p>
          </div>
          <Button variant="outline" className="rounded-xl px-8 h-12 font-bold border-rose-200 text-rose-600 hover:bg-rose-50" onClick={() => router.back()}>
            Go Back
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
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl"><MoreVertical className="h-5 w-5 text-muted-foreground" /></Button>
      </header>

      <main ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm text-sm font-medium ${
              msg.sent ? 'bg-primary text-primary-foreground rounded-tr-none' : 'bg-white text-foreground rounded-tl-none'
            }`}>
              {msg.text}
              <div className={`flex items-center justify-end gap-1 text-[9px] mt-1.5 ${msg.sent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
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
              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t p-4 pb-8">
        {!isAccepted ? (
          <Card className="p-5 border-none bg-primary/5 rounded-2xl space-y-4 shadow-sm text-center">
            <div className="space-y-1">
              <h3 className="text-sm font-black text-foreground">Chat Request</h3>
              <p className="text-xs text-muted-foreground font-medium">Accept this request to start messaging with {contact.name}.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 h-11 rounded-xl font-bold border-primary text-primary" onClick={() => router.back()}>
                Decline
              </Button>
              <Button className="flex-1 h-11 rounded-xl font-bold bg-primary text-white shadow-md" onClick={() => setIsAccepted(true)}>
                Accept
              </Button>
            </div>
          </Card>
        ) : (
          <div className="flex items-center gap-3">
            <Input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..." 
              className="flex-1 h-14 bg-secondary/30 border-none rounded-2xl text-base font-medium focus:ring-primary px-5"
            />
            <Button size="icon" className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 font-medium" onClick={handleSend}>
              <Send className="h-6 w-6" />
            </Button>
          </div>
        )}
      </footer>
    </div>
  );
}
