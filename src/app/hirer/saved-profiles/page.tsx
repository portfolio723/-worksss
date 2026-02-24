
"use client"

import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Search, Filter, MessageSquare, Trash2, MapPin, GraduationCap, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';

const savedProfiles = [
  { id: 's1', name: 'Ananya Sharma', role: 'Fullstack Developer', college: 'IIT Hyderabad', avatar: 'https://picsum.photos/seed/s1/100/100', rating: 4.9, skills: ['React', 'Node.js', 'Firebase'], location: 'Hyderabad' },
  { id: 's2', name: 'Rahul Varma', role: 'DevOps Intern', college: 'BITS Pilani', avatar: 'https://picsum.photos/seed/r1/100/100', rating: 4.7, skills: ['Docker', 'AWS', 'Python'], location: 'Remote' },
  { id: 's3', name: 'Priya Das', role: 'UI/UX Designer', college: 'DTU Delhi', avatar: 'https://picsum.photos/seed/p1/100/100', rating: 4.8, skills: ['Figma', 'Prototyping'], location: 'Delhi' },
];

export default function SavedProfilesPage() {
  const router = useRouter();

  return (
    <div className="hirer-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-black text-foreground">Saved Talent</h1>
          </div>
          <Badge className="bg-primary text-white font-black px-3 py-1 rounded-lg">3 Saved</Badge>
        </div>

        <div className="flex gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input className="pl-12 h-14 bg-white border-none shadow-sm rounded-2xl text-base font-medium" placeholder="Search Saved Names..." />
          </div>
          <Button variant="outline" className="h-14 w-14 rounded-2xl bg-white border-none shadow-sm">
            <Filter className="h-6 w-6 text-primary" />
          </Button>
        </div>

        <div className="space-y-4">
          {savedProfiles.map((profile) => (
            <Card key={profile.id} className="p-6 bg-white border-none shadow-sm rounded-[2rem] overflow-hidden">
              <div className="flex gap-5 mb-6">
                <div className="relative">
                  <img src={profile.avatar} className="w-20 h-20 rounded-2xl object-cover shadow-md" alt={profile.name} />
                  <div className="absolute -bottom-1 -right-1 bg-white px-1.5 py-0.5 rounded-lg shadow-sm border border-muted flex items-center gap-1">
                    <Star className="h-2.5 w-2.5 text-primary fill-primary" />
                    <span className="text-[10px] font-black">{profile.rating}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-foreground truncate">{profile.name}</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/5 -mt-1 -mr-2">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-primary font-bold mb-2">{profile.role}</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
                      <GraduationCap className="h-3 w-3" />
                      <span className="truncate">{profile.college}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
                      <MapPin className="h-3 w-3" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {profile.skills.map(skill => (
                  <span key={skill} className="text-[9px] bg-secondary text-primary px-2.5 py-1 rounded-md font-black uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12 rounded-xl border-primary text-primary font-bold text-xs" onClick={() => router.push(`/worker/profile/${profile.id}`)}>
                  View Profile
                </Button>
                <Button className="h-12 rounded-xl bg-primary text-white font-bold text-xs shadow-md gap-2" onClick={() => router.push(`/hirer/messages/${profile.id}`)}>
                  <MessageSquare className="h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}
