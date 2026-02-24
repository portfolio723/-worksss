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
  Camera,
  Bell,
  Lock,
  FileText,
  MapPin,
  Building2,
  Link as LinkIcon
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function HirerProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/auth');
  };

  const profileData = {
    name: "Arjun Mehta",
    sub: "Founder • TechShastra",
    email: "arjun@techshastra.in",
    avatar: "https://picsum.photos/seed/avatar_in_1/200/200",
    bio: "Building The Next Generation Of Fintech Solutions. Always Looking For Ambitious Student Developers To Join Our Growing Team.",
    location: "Bangalore, KA",
    company: "TechShastra Solutions Pvt Ltd",
    industry: "Financial Technology",
    stats: [
      { label: "Total Hired", value: "8" },
      { label: "Active Roles", value: "2" },
      { label: "Profile Status", value: "Verified" }
    ]
  };

  return (
    <div className="hirer-theme min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto px-6">
        <div className="flex flex-col items-center mb-10 pt-6">
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src={profileData.avatar} 
                alt={profileData.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <Button size="icon" className="absolute -bottom-2 -right-2 h-11 w-11 rounded-2xl bg-primary text-primary-foreground shadow-xl border-4 border-background hover:bg-primary/90">
              <Camera className="h-5 w-5" />
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">{profileData.name}</h1>
          <p className="text-base text-primary font-bold mt-1">{profileData.sub}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2 font-bold uppercase tracking-widest">
            <MapPin className="h-4 w-4" />
            {profileData.location}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {profileData.stats.map((stat) => (
            <Card key={stat.label} className="p-4 text-center border-none shadow-sm bg-white rounded-2xl">
              <p className="text-lg font-bold text-primary">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground font-black tracking-tight mt-1">{stat.label}</p>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="w-full bg-secondary/50 p-1 rounded-2xl mb-8">
            <TabsTrigger value="details" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Account Details</TabsTrigger>
            <TabsTrigger value="settings" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Security</TabsTrigger>
            <TabsTrigger value="verify" className="flex-1 rounded-xl text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Trust & Verify</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6">
            <Card className="p-7 bg-white border-none shadow-sm rounded-3xl">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">About Me</h3>
                <Button variant="link" className="text-primary h-auto p-0 text-xs font-bold">Edit Bio</Button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {profileData.bio}
              </p>
            </Card>

            <Card className="p-7 bg-white border-none shadow-sm rounded-3xl">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">Company Information</h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">{profileData.company}</p>
                    <p className="text-xs text-muted-foreground font-medium">{profileData.industry}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl">
                    <LinkIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">techshastra.in</p>
                    <p className="text-xs text-muted-foreground font-medium">Official Company Website</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="verify" className="space-y-6">
            <Card className="p-7 bg-white border-none shadow-sm rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-emerald-100 p-3 rounded-2xl">
                  <ShieldCheck className="h-7 w-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Verified Recruiter</h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Status: Fully Verified</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-bold text-foreground">GST Certificate</span>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-500 text-white text-[10px] font-black border-none">VERIFIED</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-bold text-foreground">Company PAN</span>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-500 text-white text-[10px] font-black border-none">VERIFIED</Badge>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-between h-16 bg-white border-none shadow-sm rounded-2xl px-6 group hover:bg-primary/5">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <Bell className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold text-foreground">Notification Settings</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button variant="ghost" className="w-full justify-between h-16 bg-white border-none shadow-sm rounded-2xl px-6 group hover:bg-primary/5">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <Lock className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold text-foreground">Privacy & Security</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-between h-16 bg-white border-none shadow-sm rounded-2xl px-6 text-destructive hover:text-destructive hover:bg-destructive/5"
                onClick={handleLogout}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-destructive/10 p-2.5 rounded-xl group-hover:bg-destructive group-hover:text-white transition-colors">
                    <LogOut className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold">Logout From Account</span>
                </div>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav role="hirer" />
    </div>
  );
}