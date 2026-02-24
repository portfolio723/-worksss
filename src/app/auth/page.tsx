
"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Facebook, Apple, Smartphone } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/role-selection');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-[340px] space-y-8">
        {/* Branding Logo */}
        <div className="flex justify-center">
          <span className="text-4xl font-black text-foreground">#</span>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight text-foreground">Get Started now</h1>
          <p className="text-sm text-muted-foreground font-medium px-4">
            Create an account or log in to explore about our app
          </p>
        </div>

        {/* Tabs Segmented Control */}
        <div className="bg-secondary/50 p-1.5 rounded-2xl flex">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${isLogin ? 'bg-white shadow-sm text-foreground' : 'text-muted-foreground'}`}
          >
            Log In
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${!isLogin ? 'bg-white shadow-sm text-foreground' : 'text-muted-foreground'}`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleAuth} className="space-y-5 text-left">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-bold text-muted-foreground ml-1">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="username@gmail.com" 
              className="h-14 rounded-2xl bg-white border-muted-foreground/20 text-base font-medium focus:ring-primary px-4"
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-bold text-muted-foreground ml-1">Password</Label>
            <div className="relative">
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******" 
                className="h-14 rounded-2xl bg-white border-muted-foreground/20 text-base font-medium focus:ring-primary px-4"
                required 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-5 w-5 opacity-50" /> : <Eye className="h-5 w-5 opacity-50" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="rounded-md border-muted-foreground/30" />
              <label htmlFor="remember" className="text-xs font-bold text-muted-foreground leading-none cursor-pointer">
                Remember me
              </label>
            </div>
            <Button variant="link" className="p-0 h-auto text-xs font-bold text-primary">
              Forgot Password ?
            </Button>
          </div>

          <Button type="submit" className="w-full h-14 text-base font-black bg-[#222] text-white hover:bg-black rounded-2xl shadow-lg mt-2">
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-muted" />
          </div>
          <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest">
            <span className="bg-white px-4 text-muted-foreground">Or login with</span>
          </div>
        </div>

        {/* Social Buttons Row */}
        <div className="grid grid-cols-4 gap-3">
          <Button variant="outline" className="h-14 rounded-2xl border-muted/30 hover:bg-secondary/50">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </Button>
          <Button variant="outline" className="h-14 rounded-2xl border-muted/30 hover:bg-secondary/50">
            <Facebook className="h-6 w-6 text-[#1877F2] fill-[#1877F2]" />
          </Button>
          <Button variant="outline" className="h-14 rounded-2xl border-muted/30 hover:bg-secondary/50">
            <Apple className="h-6 w-6 text-black fill-black" />
          </Button>
          <Button variant="outline" className="h-14 rounded-2xl border-muted/30 hover:bg-secondary/50">
            <Smartphone className="h-6 w-6 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </div>
  );
}
