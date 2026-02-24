
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
  UserCheck,
  MoreVertical 
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const mockChatData: Record<string, any> = {
  'h1': { name: 'Arjun (Recruiter)', avatar: 'https://picsum.photos/seed/avatar_in_1/100/100', role: 'Hirer • TechShastra', verified: true },
};

export default function WorkerConversationPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const isInternalContact = !!mockChatData[id];
  const contact = mockChatData[id] || { name: 'Unknown Hirer', avatar: 'https://picsum.photos/seed/unknown/100/100', role: 'External Link', verified: false };

  const [isAccepted, setIsAccepted] = useState(id === 'h1');
  const [isOtherTyping, setIsOtherTyping] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Namaste! Are you available for a quick call at 4 PM?", sent: false, time: '09:00 AM', status: 'delivered' },
    { id: 2, text: "Yes sir, that works for me.", sent: true, time: '09:30 AM', status: 'seen' },
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
      const timer = setTimeout(() => setIsOtherTyping(true), 2500);
      const stopTimer = setTimeout(() => setIsOtherTyping(false), 5000);
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
      <div className="worker-theme flex flex-col h-screen bg-background">
        <header className="bg-white border-b px-4 h-16 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => router.back()}><ArrowLeft className="h-5 w-5" /></Button>
          <h2 className="font-black text-sm tracking-tight">Security Alert</h2>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center p-10 text-center space-y-8">
          <div className="w-24 h-24 bg-rose-50 rounded-3xl flex items-center justify-center">
            <ShieldAlert className="h-12 w-12 text-rose-500" />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-black text-foreground tracking-tight">External Contact Blocked</h1>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
              Safety first. You can only message recruiters who have posted active jobs on #works. Communication with unverified external users is disabled.
            </p>
          </div>
          <Button className="w-full max-w-xs h-14 rounded-2xl font-bold bg-primary text-white shadow-xl" onClick={() => router.back()}>
            Return to Dashboard
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="worker-theme flex flex-col h-screen bg-background">
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 px-4 h-16 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-secondary font-medium" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="relative">
              <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h2 className="text-sm font-black leading-none tracking-tight">{contact.name}</h2>
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
            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-sm text-sm font-medium ${
              msg.sent ? 'bg-primary text-white rounded-tr-none' : 'bg-secondary text-foreground rounded-tl-none'
            }`}>
              {msg.text}
              <div className={`flex items-center justify-end gap-1 text-[9px] mt-1 text-right ${msg.sent ? 'text-white/70' : 'text-muted-foreground'}`}>
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
            <div className="bg-secondary px-4 py-2 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </main>

      <footer className="bg-background border-t border-border/50 p-4 pb-8">
        {!isAccepted ? (
          <Card className="p-6 border-2 border-dashed border-primary/20 bg-primary/5 rounded-[2rem] space-y-5 text-center">
            <div className="space-y-1">
              <h3 className="text-base font-black tracking-tight">New Message Request</h3>
              <p className="text-xs text-muted-foreground font-medium px-4">This recruiter wants to discuss a project with you.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" className="flex-1 h-12 rounded-xl font-bold text-muted-foreground" onClick={() => router.back()}>
                Decline
              </Button>
              <Button className="flex-1 h-12 rounded-xl font-bold bg-primary text-white shadow-lg" onClick={() => setIsAccepted(true)}>
                Accept & Chat
              </Button>
            </div>
          </Card>
        ) : (
          <div className="flex items-center gap-2">
            <Input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type A Message..." 
              className="flex-1 h-12 bg-secondary border-none rounded-2xl text-sm font-medium"
            />
            <Button size="icon" className="h-12 w-12 rounded-2xl bg-primary text-white shadow-lg font-medium" onClick={handleSend}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        )}
      </footer>
    </div>
  );
}
