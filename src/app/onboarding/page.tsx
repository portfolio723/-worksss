
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Briefcase, 
  ChevronRight, 
  Camera, 
  ShieldCheck, 
  CheckCircle2,
  Rocket,
  ArrowLeft,
  Smartphone,
  MessageSquare,
  Lock,
  Search,
  Building2,
  FileText,
  CreditCard,
  AlertCircle
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';

type Role = 'hirer' | 'worker' | null;

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role>(null);
  const router = useRouter();

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFinish = () => {
    router.push(role === 'hirer' ? '/hirer' : '/worker');
  };

  return (
    <div className="min-h-screen bg-[#F0F8FF] flex flex-col items-center py-12 px-6">
      <div className="w-full max-w-lg space-y-8">
        {/* Progress Indicator */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-1.5 bg-slate-200" />
        </div>

        {/* Dynamic Content */}
        <main className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {step === 1 && <RoleSelectionStep onSelect={(r) => { setRole(r); nextStep(); }} />}
          {step === 2 && <ProfileSetupStep role={role} onNext={nextStep} onBack={prevStep} />}
          {step === 3 && <PreferencesStep role={role} onNext={nextStep} onBack={prevStep} />}
          {step === 4 && <KYCVerificationStep role={role} onNext={nextStep} onBack={prevStep} />}
          {step === 5 && <WalkthroughStep onNext={nextStep} />}
          {step === 6 && <SuccessStep onFinish={handleFinish} />}
        </main>
      </div>
    </div>
  );
}

// --- Step 1: Role Selection ---
function RoleSelectionStep({ onSelect }: { onSelect: (r: Role) => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-black tracking-tight">How will you use the platform?</h1>
        <p className="text-sm text-muted-foreground font-medium">Choose your primary goal. You can switch later anytime.</p>
      </div>
      <div className="space-y-4">
        <Card 
          className="p-6 border-2 border-transparent hover:border-primary bg-white cursor-pointer transition-all rounded-3xl group"
          onClick={() => onSelect('hirer')}
        >
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-2xl bg-[#B0E2FF]/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Users className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black tracking-tight">I Want to Hire</h3>
              <p className="text-xs text-muted-foreground font-medium">Post jobs, review candidates, and hire talent.</p>
            </div>
          </div>
        </Card>
        <Card 
          className="p-6 border-2 border-transparent hover:border-primary bg-white cursor-pointer transition-all rounded-3xl group"
          onClick={() => onSelect('worker')}
        >
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-2xl bg-[#B0E2FF]/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Briefcase className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black tracking-tight">I Want to Work</h3>
              <p className="text-xs text-muted-foreground font-medium">Find jobs, connect with clients, and earn money.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

// --- Step 2: Basic Profile Setup ---
function ProfileSetupStep({ role, onNext, onBack }: { role: Role, onNext: () => void, onBack: () => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-black tracking-tight">
          {role === 'hirer' ? 'Set Up Your Hiring Profile' : 'Build Your Professional Profile'}
        </h1>
        <p className="text-sm text-muted-foreground font-medium">
          {role === 'hirer' ? 'This helps candidates trust your job posts.' : 'Profiles with photos get 3x more responses.'}
        </p>
      </div>

      <Card className="p-8 bg-white rounded-3xl space-y-6">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-slate-100 rounded-[2rem] flex items-center justify-center border-2 border-dashed border-slate-300">
              <Camera className="h-8 w-8 text-slate-400" />
            </div>
            <Button size="icon" className="absolute -bottom-2 -right-2 h-10 w-10 rounded-2xl bg-primary shadow-lg border-4 border-white">
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</Label>
            <Input placeholder="Arjun Mehta" className="h-14 rounded-2xl bg-slate-50 border-none px-5" />
          </div>
          
          {role === 'hirer' ? (
            <>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Company Name</Label>
                <Input placeholder="TechShastra Solutions" className="h-14 rounded-2xl bg-slate-50 border-none px-5" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Industry</Label>
                <Select>
                  <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-none px-5">
                    <SelectValue placeholder="Select Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Headline</Label>
                <Input placeholder="UI/UX Designer | 2+ Years Experience" className="h-14 rounded-2xl bg-slate-50 border-none px-5" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Skills</Label>
                <div className="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-2xl min-h-[56px]">
                  <Badge variant="secondary" className="rounded-lg">Figma</Badge>
                  <Badge variant="secondary" className="rounded-lg">React</Badge>
                  <Input placeholder="Add skill..." className="border-none bg-transparent h-8 w-24 p-0 focus-visible:ring-0 text-xs" />
                </div>
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Location</Label>
            <Input placeholder="Hyderabad, TS" className="h-14 rounded-2xl bg-slate-50 border-none px-5" />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button variant="ghost" className="flex-1 h-14 rounded-2xl font-medium" onClick={onBack}>Back</Button>
          <Button className="flex-2 h-14 rounded-2xl bg-primary text-white font-medium shadow-xl px-10" onClick={onNext}>Continue</Button>
        </div>
      </Card>
    </div>
  );
}

// --- Step 3: Preferences Setup ---
function PreferencesStep({ role, onNext, onBack }: { role: Role, onNext: () => void, onBack: () => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-black tracking-tight">
          {role === 'hirer' ? 'What Are You Hiring For?' : 'What Jobs Are You Looking For?'}
        </h1>
        <p className="text-sm text-muted-foreground font-medium">Set your preferences to find the best matches.</p>
      </div>

      <Card className="p-8 bg-white rounded-3xl space-y-6">
        <div className="space-y-6">
          <div className="space-y-3">
            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Categories</Label>
            <div className="flex flex-wrap gap-2">
              {['Development', 'Design', 'Marketing', 'Writing', 'Sales'].map(cat => (
                <Badge key={cat} variant="outline" className="h-10 px-4 rounded-xl cursor-pointer hover:bg-primary/5 hover:border-primary transition-colors">
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Budget / Expected Pay</Label>
            <Select>
              <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-none px-5">
                <SelectValue placeholder="Select Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">₹10,000 - ₹20,000</SelectItem>
                <SelectItem value="med">₹20,000 - ₹50,000</SelectItem>
                <SelectItem value="high">₹50,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Work Type</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-14 rounded-2xl border-primary bg-primary/5 text-primary">Remote</Button>
              <Button variant="outline" className="h-14 rounded-2xl">On-site</Button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <Button variant="ghost" className="flex-1 h-14 rounded-2xl font-medium" onClick={onBack}>Back</Button>
          <Button className="flex-2 h-14 rounded-2xl bg-primary text-white font-medium shadow-xl px-10" onClick={onNext}>Save & Continue</Button>
        </div>
      </Card>
    </div>
  );
}

// --- Step 4: KYC Verification (Enhanced) ---
function KYCVerificationStep({ role, onNext, onBack }: { role: Role, onNext: () => void, onBack: () => void }) {
  const [kycStage, setKycStage] = useState<'id' | 'bank'>('id');

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-black tracking-tight">Trust & Safety KYC</h1>
        <p className="text-sm text-muted-foreground font-medium">Verify your identity and setup payments to start {role === 'hirer' ? 'hiring' : 'working'}.</p>
      </div>

      <Card className="p-8 bg-white rounded-[2.5rem] shadow-xl space-y-8 border-none overflow-hidden relative">
        {/* Payment Required Info Banner */}
        <div className="bg-primary/5 -mx-8 -mt-8 p-5 flex items-start gap-3 border-b border-primary/10">
          <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <p className="text-[11px] text-primary/80 font-bold leading-relaxed">
            <span className="text-primary font-black uppercase">Escrow Notice:</span> {role === 'hirer' ? 'Payment is required to be held in escrow before work starts to ensure talent security.' : 'All projects require hirers to deposit funds into escrow before you begin working.'}
          </p>
        </div>

        {kycStage === 'id' ? (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> Identity Verification
              </h3>
              
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted-foreground ml-1">Government ID (Aadhar/PAN)</Label>
                <div className="h-16 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center gap-3 cursor-pointer hover:bg-slate-100 transition-colors">
                  <FileText className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-bold text-slate-500">Upload ID Front & Back</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted-foreground ml-1">Selfie Verification</Label>
                <Button variant="outline" className="w-full h-16 rounded-2xl gap-3 border-2 hover:bg-primary/5 hover:border-primary transition-all">
                  <Camera className="h-5 w-5 text-primary" />
                  <span className="font-bold">Take Live Selfie</span>
                </Button>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted-foreground ml-1">Phone Number</Label>
                <div className="flex h-14 rounded-2xl bg-slate-50 overflow-hidden border border-transparent focus-within:border-primary transition-all">
                  <div className="w-16 flex items-center justify-center font-black text-sm border-r border-slate-200 text-slate-500 bg-slate-100/50">+91</div>
                  <Input placeholder="Enter Mobile Number" className="border-none bg-transparent h-full px-4 font-bold text-sm" />
                </div>
              </div>
            </div>

            <Button className="w-full h-14 rounded-2xl bg-primary text-white font-bold shadow-lg" onClick={() => setKycStage('bank')}>
              Continue to Bank Setup
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" /> {role === 'hirer' ? 'Payment Source' : 'Withdrawal Account'}
              </h3>
              
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted-foreground ml-1">Bank Name</Label>
                <Input placeholder="e.g. HDFC Bank" className="h-14 rounded-2xl bg-slate-50 border-none px-5 font-medium" />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted-foreground ml-1">Account Number</Label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input placeholder="•••• •••• •••• 4291" className="h-14 rounded-2xl bg-slate-50 border-none pl-12 font-medium" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase text-muted-foreground ml-1">IFSC Code</Label>
                <Input placeholder="HDFC0001234" className="h-14 rounded-2xl bg-slate-50 border-none px-5 font-medium" />
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="ghost" className="flex-1 h-14 rounded-2xl font-bold" onClick={() => setKycStage('id')}>Back</Button>
              <Button className="flex-2 h-14 rounded-2xl bg-primary text-white font-bold shadow-lg px-10" onClick={onNext}>Verify & Finish</Button>
            </div>
          </div>
        )}
      </Card>
      
      <p className="text-center text-[10px] text-muted-foreground font-black uppercase tracking-widest px-10 leading-relaxed">
        Your Data is Encrypted with AES-256 and stored securely in India.
      </p>
    </div>
  );
}

// --- Step 5: Walkthrough ---
function WalkthroughStep({ onNext }: { onNext: () => void }) {
  const [slide, setSlide] = useState(0);
  const slides = [
    { title: "Post or Apply in Minutes", desc: "Create a job post or apply with one click.", icon: Search },
    { title: "Chat & Collaborate", desc: "Message securely inside the platform.", icon: MessageSquare },
    { title: "Safe Payments", desc: "Protected transactions and reviews.", icon: Lock }
  ];

  const current = slides[slide];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-black tracking-tight">Here's How It Works</h1>
      </div>

      <Card className="p-8 bg-white rounded-[3rem] shadow-xl text-center space-y-8 min-h-[400px] flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center animate-bounce">
            <current.icon className="h-10 w-10 text-primary" />
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-black tracking-tight">{current.title}</h2>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed px-4">{current.desc}</p>
        </div>
        
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all ${i === slide ? 'w-8 bg-primary' : 'w-2 bg-slate-200'}`} />
          ))}
        </div>

        <Button 
          className="w-full h-16 rounded-2xl bg-primary text-white font-medium text-lg shadow-xl"
          onClick={() => {
            if (slide < slides.length - 1) setSlide(slide + 1);
            else onNext();
          }}
        >
          {slide === slides.length - 1 ? 'Get Started 🚀' : 'Next'}
        </Button>
      </Card>
    </div>
  );
}

// --- Step 6: Success State ---
function SuccessStep({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-emerald-100 rounded-[2.5rem] flex items-center justify-center animate-in zoom-in duration-500">
            <Rocket className="h-10 w-10 text-emerald-600" />
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-black tracking-tight">You're All Set!</h1>
          <p className="text-sm text-muted-foreground font-medium px-4 leading-relaxed">
            Your dashboard is ready. Start exploring opportunities now.
          </p>
        </div>
      </div>

      <Button 
        className="w-full h-16 rounded-2xl bg-primary text-white font-medium text-lg shadow-xl"
        onClick={onFinish}
      >
        Go to Dashboard
      </Button>
    </div>
  );
}

function PlusIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
