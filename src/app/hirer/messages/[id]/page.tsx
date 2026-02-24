
"use client"

import { useState, useRef, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Send, MoreVertical, Phone, Video } from 'lucide-react';

const mockChatData: Record<string, any> = {
  'a1': { name: 'Rahul Varma', avatar: 'https://picsum.photos/seed/r1/100/100', role: 'Student • IIT Bombay' },
  'a2': { name: 'Priya Das', avatar: 'https://picsum.photos/seed/p1/100/100', role: 'Student • DTU' },
};

export default function HirerConversationPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const contact = mockChatData[id] || { name: 'Student', avatar: 'https://picsum.photos/seed/user/100/100', role: 'Applicant' };

  const [messages, setMessages] = useState([
    { id: 1, text: "Namaste! I saw your application for the React Dev role.", sent: true, time: '10:00 AM' },
    { id: 2, text: "Yes sir, I am very interested. I have experience with Next.js and Tailwind.", sent: false, time: '10:05 AM' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sent: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="flex flex-col h-screen bg-secondary/10">
      <header className="bg-white border-b px-4 h-16 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="relative">
              <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full object-cover" />
            </div>
            <div>
              <h2 className="text-sm font-bold leading-none">{contact.name}</h2>
              <p className="text-[10px] text-muted-foreground mt-1">{contact.role}</p>
            </div>
          </div>
        </div>
      </header>

      <main ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-sm text-sm ${
              msg.sent ? 'bg-accent text-white rounded-tr-none' : 'bg-white text-foreground rounded-tl-none'
            }`}>
              {msg.text}
              <div className={`text-[9px] mt-1 text-right ${msg.sent ? 'text-white/70' : 'text-muted-foreground'}`}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="bg-white border-t p-4 pb-8">
        <div className="flex items-center gap-2">
          <Input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..." 
            className="flex-1 h-12 bg-secondary/20 border-none rounded-2xl"
          />
          <Button size="icon" className="h-12 w-12 rounded-2xl bg-accent" onClick={handleSend}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
