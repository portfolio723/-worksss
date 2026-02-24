"use client"

import { useRouter } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Settings, 
  LogOut, 
  ChevronRight, 
  ShieldCheck, 
  GraduationCap, 
  Camera,
  Bell,
  Lock,
  FileText,
  MapPin
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WorkerProfilePage() {
  const router = useRouter();
  const workerAvatar = PlaceHolderImages.find(img => img.id === 'avatar-worker-default');

  const handleLogout = () => {
    router.push('/auth');
  };

  const profileData = {
    name: "Rohan Gupta",
    sub: "Final Year Student • IIT Hyderabad",
    email: "rohan.g@iith.ac.in",
    avatar: workerAvatar?.imageUrl || "https://picsum.photos/seed/student-male/200/200",
    bio: "Passionate Frontend Developer Specializing In React And Next.js. Looking For Summer Internships And Remote Gigs.",
    location: "Hyderabad, TS",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    education: "B.Tech In Computer Science (2020 - 2024)",
    stats: [
      { label: "Jobs Done", value: "12" },
      { label: "Rating", value: "4.8" },
      { label: "Earned", value: "₹42K" }
    ]
  };

  return (
    <div className="worker-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto">
        <div className="flex flex-col items-center mb-8 pt-4">
          <div className="relative mb-4">
            <div className="w-28 h-28 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={profileData.avatar} 
                alt={profileData.name} 
                className="w-full h-full object-cover"
                data-ai-hint={workerAvatar?.imageHint}
              />
            </div>
            <Button size="icon" className="absolute -bottom-2 -right-2 h-10 w-10 rounded-2xl bg-primary shadow-lg border-4 border-background">
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <h1 className="text-3xl font-black">{profileData.name}</h1>
          <p className="text-sm text-muted-foreground font-bold mt-1">{profileData.sub}</p>
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-2 font-bold uppercase tracking-tight">
            <MapPin className="h-3 w-3" />
            {profileData.location}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {profileData.stats.map((stat) => (
            <Card key={stat.label} className="p-3 text-center border-border/50 shadow-sm bg-white rounded-2xl">
              <p className="text-sm font-black text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-bold tracking-tight mt-1">{stat.label}</p>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="w-full bg-secondary p-1 rounded-xl mb-6">
            <TabsTrigger value="details" className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Details</TabsTrigger>
            <TabsTrigger value="settings" className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Settings</TabsTrigger>
            <TabsTrigger value="verify" className="flex-1 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Verify</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6">
            <Card className="p-6 bg-white border-border/50 shadow-sm rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-black tracking-tight">Bio</h3>
                <Button variant="link" className="text-primary h-auto p-0 text-xs font-black">Edit</Button>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                {profileData.bio}
              </p>
            </Card>

            <Card className="p-6 bg-white border-border/50 shadow-sm rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-black tracking-tight">Skills</h3>
                <Button variant="link" className="text-primary h-auto p-0 text-xs font-black">Manage</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="bg-secondary text-primary border-none px-4 py-1.5 font-black text-[10px]">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white border-border/50 shadow-sm rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-black tracking-tight">Education</h3>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary p-2.5 rounded-xl">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-black">Bachelor Of Technology</p>
                  <p className="text-xs text-muted-foreground font-bold">IIT Hyderabad • 2020-2024</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="verify" className="space-y-4">
            <Card className="p-6 bg-white border-border/50 shadow-sm rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary p-2.5 rounded-xl">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-black tracking-tight">Trust Badge</h3>
                  <p className="text-[10px] text-muted-foreground font-black tracking-tight uppercase">Verification Center</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs font-bold">College ID</span>
                  </div>
                  <Badge variant="secondary" className="bg-primary text-white text-[9px] font-black border-none">VERIFIED</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs font-bold">Aadhar Card</span>
                  </div>
                  <Badge variant="secondary" className="bg-primary text-white text-[9px] font-black border-none">VERIFIED</Badge>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-between h-14 bg-white border border-border/30 shadow-sm rounded-2xl px-6 group hover:bg-secondary">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-primary" />
                  <span className="text-sm font-black tracking-tight">Notifications</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Button>
              <Button variant="ghost" className="w-full justify-between h-14 bg-white border border-border/30 shadow-sm rounded-2xl px-6 group hover:bg-secondary">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-black tracking-tight">Privacy & Security</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-between h-14 bg-white border border-border/30 shadow-sm rounded-2xl px-6 text-destructive hover:text-destructive hover:bg-destructive/5"
                onClick={handleLogout}
              >
                <div className="flex items-center gap-3">
                  <LogOut className="h-5 w-5" />
                  <span className="text-sm font-black tracking-tight">Logout</span>
                </div>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav role="worker" />
    </div>
  );
}