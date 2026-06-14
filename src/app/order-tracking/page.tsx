"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChefHat, Bike, PackageOpen, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OrderTrackingPage() {
  const currentStep = 2; // 0: Pending, 1: Verified, 2: Preparing, 3: Out for Delivery, 4: Delivered

  const steps = [
    { title: "Payment Verified", time: "11:30 AM", icon: CheckCircle2 },
    { title: "Preparing Order", time: "11:35 AM", icon: ChefHat },
    { title: "Out for Delivery", time: "Pending", icon: Bike },
    { title: "Delivered", time: "Pending", icon: PackageOpen },
  ];

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-xl">
        
        {/* Success Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-primary rounded-[2rem] p-8 text-center shadow-premium relative overflow-hidden mb-8"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1500&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center text-success mb-6 border-2 border-success/30">
              <CheckCircle2 size={40} strokeWidth={2} />
            </div>
            <h1 className="font-heading text-3xl font-bold text-white mb-2">Order Confirmed!</h1>
            <p className="text-gray-300 text-sm mb-6">Your order #1026 has been successfully placed.</p>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 flex items-center gap-4">
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Est. Delivery</p>
                <p className="font-bold text-white">30 - 35 mins</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Amount Paid</p>
                <p className="font-bold text-white">₹600</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="bg-white rounded-[2rem] p-6 shadow-soft border border-gray-100 mb-8">
          <h3 className="font-bold text-primary text-lg mb-6">Order Status</h3>
          
          <div className="relative pl-6">
            {/* Timeline Line */}
            <div className="absolute left-[35px] top-4 bottom-4 w-0.5 bg-gray-100" />
            <div 
              className="absolute left-[35px] top-4 w-0.5 bg-success transition-all duration-1000 ease-in-out" 
              style={{ height: `${(currentStep / (steps.length - 1)) * 100}%` }} 
            />

            <div className="space-y-8 relative z-10">
              {steps.map((step, idx) => {
                const isCompleted = idx <= currentStep;
                const isCurrent = idx === currentStep;

                return (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
                    key={idx} className="flex items-start gap-4"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 border-4 border-white shadow-sm ${isCompleted ? 'bg-success text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <step.icon size={14} strokeWidth={isCompleted ? 3 : 2} />
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm ${isCurrent ? 'text-primary' : isCompleted ? 'text-gray-800' : 'text-gray-400'}`}>
                        {step.title}
                      </h4>
                      <p className={`text-xs ${isCurrent ? 'text-secondary font-medium' : 'text-gray-400'}`}>
                        {step.time}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/menu" className="flex-1">
            <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-primary py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm">
              Back to Menu
            </button>
          </Link>
          <a href="tel:+917006123456" className="flex-1">
            <button className="w-full bg-primary hover:bg-primary/95 text-white py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-premium">
              <Phone size={16} /> Contact Support
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}