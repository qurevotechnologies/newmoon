"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { registerSchema, RegisterInput } from "@/lib/validations";
import { User, Mail, Phone, Home, MapPin, Hash, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      district: "Kupwara",
      state: "Jammu & Kashmir"
    }
  });

  const onSubmit = (data: RegisterInput) => {
    setIsLoading(true);
    // Simulate user creation and dynamic persistence rules mapping
    setTimeout(() => {
      setIsLoading(false);
      router.push("/account");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:grid lg:grid-cols-12">
      {/* Brand Column (Visible on Desktop layout variants) */}
      <div className="hidden lg:flex lg:col-span-5 bg-primary relative flex-col items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1500&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/90" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-xs aspect-[1081/985]"
        >
          <Image 
            src="https://res.cloudinary.com/dpqsadqxj/image/upload/q_auto/f_auto/v1781422244/full_logo_xrrovu.png" 
            alt="New Moon Full Branding" 
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Form Content Column */}
      <div className="flex-grow lg:col-span-7 bg-white px-4 py-10 sm:px-6 md:p-16 lg:p-20 overflow-y-auto">
        <div className="w-full max-w-xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col items-center lg:items-start mb-8 text-center lg:text-left">
            <div className="relative w-12 h-12 mb-3 lg:hidden">
              <Image 
                src="https://res.cloudinary.com/dpqsadqxj/image/upload/q_auto/f_auto/v1781422244/logo_studio_d1hoij.png" 
                alt="New Moon Icon Mark" 
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-heading text-3xl font-bold text-primary mb-1">Create Account</h2>
            <p className="text-gray-500 text-xs sm:text-sm">Register your profile data parameters for direct route confirmation.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* General Profile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1.5">Full Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-4 text-gray-400" size={16} />
                  <input 
                    type="text" placeholder="John Doe"
                    className={`w-full bg-gray-50 border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-xl pl-11 pr-4 py-3 text-xs outline-none focus:border-secondary focus:bg-white transition-all`}
                    {...register("fullName")}
                  />
                </div>
                {errors.fullName && <p className="text-[10px] font-medium text-red-500 mt-1 pl-1">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1.5">Email</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 text-gray-400" size={16} />
                  <input 
                    type="email" placeholder="name@domain.com"
                    className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl pl-11 pr-4 py-3 text-xs outline-none focus:border-secondary focus:bg-white transition-all`}
                    {...register("email")}
                  />
                </div>
                {errors.email && <p className="text-[10px] font-medium text-red-500 mt-1 pl-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1.5">Phone Number</label>
                <div className="relative flex items-center">
                  <Phone className="absolute left-4 text-gray-400" size={16} />
                  <input 
                    type="tel" placeholder="7006123456"
                    className={`w-full bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl pl-11 pr-4 py-3 text-xs outline-none focus:border-secondary focus:bg-white transition-all`}
                    {...register("phone")}
                  />
                </div>
                {errors.phone && <p className="text-[10px] font-medium text-red-500 mt-1 pl-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1.5">Village / Town</label>
                <div className="relative flex items-center">
                  <Home className="absolute left-4 text-gray-400" size={16} />
                  <input 
                    type="text" placeholder="Handwara Village"
                    className={`w-full bg-gray-50 border ${errors.village ? 'border-red-500' : 'border-gray-200'} rounded-xl pl-11 pr-4 py-3 text-xs outline-none focus:border-secondary focus:bg-white transition-all`}
                    {...register("village")}
                  />
                </div>
                {errors.village && <p className="text-[10px] font-medium text-red-500 mt-1 pl-1">{errors.village.message}</p>}
              </div>
            </div>

            {/* Address Specification Inputs */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1.5">Address Line 1</label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-4 text-gray-400" size={16} />
                <input 
                  type="text" placeholder="House No, Street Area, Landmark near main hub"
                  className={`w-full bg-gray-50 border ${errors.addressLine1 ? 'border-red-500' : 'border-gray-200'} rounded-xl pl-11 pr-4 py-3 text-xs outline-none focus:border-secondary focus:bg-white transition-all`}
                  {...register("addressLine1")}
                />
              </div>
              {errors.addressLine1 && <p className="text-[10px] font-medium text-red-500 mt-1 pl-1">{errors.addressLine1.message}</p>}
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1.5">Address Line 2 (Optional)</label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-4 text-gray-400" size={16} />
                <input 
                  type="text" placeholder="Apartment, suite, unit metadata description"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-xs outline-none focus:border-secondary focus:bg-white transition-all"
                  {...register("addressLine2")}
                />
              </div>
            </div>

            {/* Regional Routing Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1.5">District</label>
                <input 
                  type="text" readOnly
                  className="w-full bg-gray-100 border border-gray-200 text-gray-400 rounded-xl px-4 py-3 text-xs cursor-not-allowed outline-none"
                  {...register("district")}
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1.5">State</label>
                <input 
                  type="text" readOnly
                  className="w-full bg-gray-100 border border-gray-200 text-gray-400 rounded-xl px-4 py-3 text-xs cursor-not-allowed outline-none"
                  {...register("state")}
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-1.5">Pincode</label>
                <div className="relative flex items-center">
                  <Hash className="absolute left-4 text-gray-400" size={16} />
                  <input 
                    type="text" maxLength={6} placeholder="193221"
                    className={`w-full bg-gray-50 border ${errors.pincode ? 'border-red-500' : 'border-gray-200'} rounded-xl pl-11 pr-4 py-3 text-xs outline-none focus:border-secondary focus:bg-white transition-all`}
                    {...register("pincode")}
                  />
                </div>
                {errors.pincode && <p className="text-[10px] font-medium text-red-500 mt-1 pl-1">{errors.pincode.message}</p>}
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/95 text-white py-4 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all shadow-premium flex items-center justify-center gap-2 disabled:opacity-50 mt-6"
            >
              {isLoading ? <Loader2 size={16} className="animate-spin" /> : "Verify and Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-secondary font-bold hover:underline">
                Sign in
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}