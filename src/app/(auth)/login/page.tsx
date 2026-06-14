"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { loginSchema, LoginInput } from "@/lib/validations";
import { Mail, ArrowRight, Loader2, KeyRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginInput) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOtpSent(true);
    }, 1500);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/menu");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:grid md:grid-cols-12">
      {/* Left Column: Visual Brand Panel (Desktop only) */}
      <div className="hidden md:flex md:col-span-5 lg:col-span-6 bg-primary relative flex-col items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1500&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/90" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-sm aspect-[1081/985]"
        >
          <Image 
            src="https://res.cloudinary.com/dpqsadqxj/image/upload/q_auto/f_auto/v1781422244/full_logo_xrrovu.png" 
            alt="New Moon Cafe Full Logo" 
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Right Column: Interaction Form Shell */}
      <div className="flex-grow md:col-span-7 lg:col-span-6 flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24 bg-white">
        <div className="w-full max-w-md mx-auto">
          
          {/* Form Top Branding Header (Visible on Mobile) */}
          <div className="flex flex-col items-center md:items-start mb-8 text-center md:text-left">
            <div className="relative w-16 h-16 mb-4 md:hidden">
              <Image 
                src="https://res.cloudinary.com/dpqsadqxj/image/upload/q_auto/f_auto/v1781422244/logo_studio_d1hoij.png" 
                alt="New Moon Icon Logo" 
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-heading text-3xl font-bold text-primary mb-2">Welcome Back</h2>
            <p className="text-gray-500 text-sm">Sign in with an instantaneous secure verification code.</p>
          </div>

          <AnimatePresence mode="wait">
            {!isOtpSent ? (
              <motion.form 
                key="email-stage"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-2">Email Address</label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-4 text-gray-400" size={18} />
                    <input 
                      type="email" 
                      placeholder="name@domain.com"
                      className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} rounded-2xl pl-12 pr-4 py-3.5 text-sm text-primary outline-none focus:border-secondary focus:bg-white transition-all`}
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs font-medium text-red-500 mt-1.5 pl-1">{errors.email.message}</p>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/95 text-white py-4 rounded-2xl font-semibold text-sm transition-all shadow-premium flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin" /> : <>SEND OTP <ArrowRight size={16} /></>}
                </button>
              </motion.form>
            ) : (
              <motion.form 
                key="otp-stage"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onSubmit={handleVerifyOtp}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-2">One-Time Password</label>
                  <div className="relative flex items-center">
                    <KeyRound className="absolute left-4 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      maxLength={6}
                      placeholder="Enter 6-digit verification code"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-primary font-mono tracking-widest text-center outline-none focus:border-secondary focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-secondary hover:bg-secondary/90 text-primary py-4 rounded-2xl font-bold text-sm transition-all shadow-premium flex items-center justify-center gap-2"
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin text-primary" /> : "VERIFY & LOGIN"}
                </button>

                <button 
                  type="button" 
                  onClick={() => setIsOtpSent(false)} 
                  className="w-full text-center text-xs font-semibold text-gray-500 hover:text-primary transition-colors mt-2"
                >
                  Change Email Address
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              New to New Moon?{" "}
              <Link href="/register" className="text-secondary font-bold hover:underline">
                Create an account
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}