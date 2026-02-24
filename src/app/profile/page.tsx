"use client"

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TopNav } from '@/components/layout/TopNav';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  Settings, 
  LogOut, 
  ChevronRight, 
  ShieldCheck, 
  Briefcase, 
  GraduationCap, 
  Link as LinkIcon,
  Camera,
  Bell,
  Lock,
  FileText,
  MapPin,
  Building2
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProfilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [role, setRole] = useState<'worker' | 'hirer'>('worker');

  useEffect(() => {
    // In a real app, this would come from auth state or a global context
    // For the demo, we check if the user came from a hirer or worker path
    const path = window.location.href;
    if (path.includes('role=hirer')) {
      setRole('hirer');
    } else {
      setRole('worker');
    }
  }, []);

  const handleLogout = () => {
    router.push('/auth');
  };

  const isWorker = role === 'worker';

  const profileData = isWorker ? {
    name: "Rohan Gupta",
    sub: "Final Year Student • IIT Bombay",
    email: "rohan.g@iitb.ac.in",
    avatar: "https://picsum.photos/seed/avatar_in_2/200/200",
    bio: "Passionate Frontend Developer specializing in React and Next.js. Looking for summer internships and remote gigs.",
    location: "Mumbai, MH",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    education: "B.Tech in Computer Science (2020 - 2024)",
    stats: [
      { label: "Jobs Done", value: "12" },
      { label: "Rating", value: "4.8" },
      { label: "Earned", value: "₹42K" }
    ]
  } : {
    name: "Arjun Mehta",
    sub: "Founder • TechShastra",
    email: "arjun@techshastra.in",
    avatar: "https://picsum.photos/seed/avatar_in_1/200/200",
    bio: "Building the next generation of fintech solutions. Always looking for ambitious student developers to join our growing team.",
    location: "Bangalore, KA",
    company: "TechShastra Solutions Pvt Ltd",
    industry: "Financial Technology",
    stats: [
      { label: "Hired", value: "8" },
      { label: "Active", value: "2" },
      { label: "Verified", value: "Yes" }
    ]
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopNav />
      
      <main className="content-area max-w-lg mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8 pt-4">
          <div className="relative mb-4">
            <div className="w-28 h-28 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={profileData.avatar} 
                alt={profileData.name} 
                className="w-full h-full object-cover"
                data-ai-hint={isWorker ? "indian student" : "indian businessman"}
              />
            </div>
            <Button size="icon" className="absolute -bottom-2 -right-2 h-10 w-10 rounded-2xl bg-accent shadow-lg border-4 border-background">
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <h1 className="text-2xl font-bold">{profileData.name}</h1>
          <p className="text-sm text-muted-foreground font-medium">{profileData.sub}</p>
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-1">
            <MapPin className="h-3 w-3" />
            {profileData.location}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {profileData.stats.map((stat) => (
            <Card key={stat.label} className="p-3 text-center border-none shadow-sm bg-white rounded-2xl">
              <p className="text-sm font-bold text-accent">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{stat.label}</p>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="w-full bg-white/50 p-1 rounded-xl mb-6">
            <TabsTrigger value="details" className="flex-1 rounded-lg">Details</TabsTrigger>
            <TabsTrigger value="settings" className="flex-1 rounded-lg">Settings</TabsTrigger>
            <TabsTrigger value="verify" className="flex-1 rounded-lg">Verify</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6">
            <Card className="p-6 bg-white border-none shadow-sm rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">Bio</h3>
                <Button variant="link" className="text-accent h-auto p-0 text-xs">Edit</Button>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {profileData.bio}
              </p>
            </Card>

            {isWorker ? (
              <>
                <Card className="p-6 bg-white border-none shadow-sm rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold">Skills</h3>
                    <Button variant="link" className="text-accent h-auto p-0 text-xs">Manage</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/50 text-accent border-none px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-white border-none shadow-sm rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold">Education</h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-xl">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Bachelor of Technology</p>
                      <p className="text-xs text-muted-foreground">IIT Bombay • 2020-2024</p>
                    </div>
                  </div>
                </Card>
              </>
            ) : (
              <Card className="p-6 bg-white border-none shadow-sm rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Company Info</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-xl">
                      <Building2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{profileData.company}</p>
                      <p className="text-xs text-muted-foreground">{profileData.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-xl">
                      <LinkIcon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">techshastra.in</p>
                      <p className="text-xs text-muted-foreground">Official Website</p>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="verify" className="space-y-4">
            <Card className="p-6 bg-white border-none shadow-sm rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-xl">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold">Trust Badge</h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold">Verification Center</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs font-medium">{isWorker ? 'College ID' : 'GST Certificate'}</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-500 text-white text-[9px]">VERIFIED</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs font-medium">{isWorker ? 'Aadhar Card' : 'Company PAN'}</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-500 text-white text-[9px]">VERIFIED</Badge>
                </div>
              </div>

              <p className="mt-6 text-[10px] text-center text-muted-foreground leading-relaxed font-medium">
                Verified profiles receive <span className="text-accent">3x more</span> {isWorker ? 'job invitations' : 'high-quality applicants'}. 
                Your data is encrypted and secure.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-between h-14 bg-white border-none shadow-sm rounded-2xl px-6">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-accent" />
                  <span className="text-sm font-bold">Notifications</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button variant="ghost" className="w-full justify-between h-14 bg-white border-none shadow-sm rounded-2xl px-6">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-accent" />
                  <span className="text-sm font-bold">Privacy & Security</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-between h-14 bg-white border-none shadow-sm rounded-2xl px-6 text-destructive hover:text-destructive hover:bg-destructive/5"
                onClick={handleLogout}
              >
                <div className="flex items-center gap-3">
                  <LogOut className="h-5 w-5" />
                  <span className="text-sm font-bold">Logout</span>
                </div>
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-[10px] text-muted-foreground">App Version 2.4.1 (Stable)</p>
              <p className="text-[10px] text-muted-foreground mt-1">Made with ❤️ for Indian Students</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav role={role} />
    </div>
  );
}
