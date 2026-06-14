"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, MapPin, ChefHat, Star, Quote } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="py-16 md:py-20 bg-[#FAFAFA] overflow-hidden flex justify-center">
      {/* WIDER BUT COMPACT CONTAINER
        Using max-w-7xl to keep it constrained but wide enough for 4 columns.
        Reduced horizontal page padding (px-3 sm:px-4).
      */}
      <div className="w-full px-3 sm:px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-secondary tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold mb-2 block">
            The New Moon Standard
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary font-bold">
            More Than Just A Meal
          </h2>
        </div>

        {/* ULTRA-COMPACT 4x3 BENTO GRID
          - 4 Columns on Large screens.
          - Row height locked to a tight 200px.
          - Gap reduced to 16px (gap-4) to eliminate excessive margins.
          - 12 Grid units total. Mathematically leaves ZERO empty spaces.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[220px]">

          {/* 1. BRAND STORY (Spans 2 cols, 2 rows - 4 units total) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden bg-primary p-6 lg:p-8 flex flex-col justify-end group shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(11,19,32,0.4)] transition-all duration-500 min-h-[400px] lg:min-h-0"
          >
            <Image 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1500&auto=format&fit=crop" 
              alt="Restaurant Interior" 
              fill 
              className="object-cover opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
            
            <div className="relative z-10 w-full flex flex-col gap-4">
               <div>
                 <div className="flex items-center gap-3 mb-2">
                   <span className="font-heading italic text-secondary text-lg">The Heritage</span>
                   <div className="w-10 h-[1px] bg-secondary/50 group-hover:w-14 transition-all duration-500"></div>
                 </div>
                 <h3 className="font-heading text-3xl lg:text-4xl text-white font-bold leading-tight mb-2">
                   Made with Passion,<br/>Served with Love.
                 </h3>
                 <p className="text-gray-300 text-sm font-light leading-relaxed max-w-sm">
                   From selected local ingredients to traditional flavors, every dish is crafted for an experience worth remembering.
                 </p>
               </div>
               
               <Link 
                 href="/about" 
                 className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold text-xs hover:bg-secondary hover:text-white transition-colors duration-300 group/btn w-max mt-2"
               >
                 Our Story 
                 <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
               </Link>
            </div>
          </motion.div>

          {/* 2. LIGHTNING DELIVERY (1 col, 1 row) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-3xl bg-white border border-gray-200 p-5 lg:p-6 flex flex-col justify-between overflow-hidden group hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-50/50 rounded-full blur-xl group-hover:bg-blue-100 transition-colors duration-500" />
             <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 z-10">
               <Clock size={20} />
             </div>
             <div className="z-10">
               <h4 className="font-heading text-lg text-primary font-bold mb-1">Fast Delivery</h4>
               <p className="text-gray-500 text-xs font-light leading-snug">Hot & fresh within a 5 KM radius.</p>
             </div>
          </motion.div>

          {/* 3. HYGIENE (1 col, 1 row) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative rounded-3xl bg-white border border-gray-200 p-5 lg:p-6 flex flex-col justify-between overflow-hidden group hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-green-50/50 rounded-full blur-xl group-hover:bg-green-100 transition-colors duration-500" />
             <div className="w-10 h-10 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 z-10">
               <ShieldCheck size={20} />
             </div>
             <div className="z-10">
               <h4 className="font-heading text-lg text-primary font-bold mb-1">100% Secure</h4>
               <p className="text-gray-500 text-xs font-light leading-snug">Sanitized kitchens & sealed packaging.</p>
             </div>
          </motion.div>

          {/* 4. REVIEWS HIGHLIGHT (Spans 2 cols, 1 row) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 relative rounded-3xl bg-primary text-white p-5 lg:p-6 flex flex-col justify-center overflow-hidden group shadow-md"
          >
            {/* Background texture/gradient for review card */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary opacity-80" />
            
            <div className="relative z-10 flex items-start gap-4">
              <div className="text-secondary opacity-50 shrink-0">
                <Quote size={32} fill="currentColor" />
              </div>
              <div>
                <p className="italic text-sm md:text-base text-gray-200 font-light leading-relaxed mb-3">
                  "The absolute best Wazwan I've had in years. The meat was tender, the spices were perfectly balanced, and the delivery was surprisingly fast!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" width={28} height={28} alt="User" className="rounded-full border-2 border-primary object-cover" />
                    <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" width={28} height={28} alt="User" className="rounded-full border-2 border-primary object-cover" />
                    <div className="w-7 h-7 rounded-full border-2 border-primary bg-secondary flex items-center justify-center text-[10px] font-bold text-primary">+</div>
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-white block">Aisha R.</span>
                    <span className="text-secondary flex items-center gap-0.5">
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. MASTER CHEFS (1 col, 1 row) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="rounded-3xl relative overflow-hidden group min-h-[200px] lg:min-h-0"
          >
             <Image 
               src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" 
               alt="Master Chefs" 
               fill 
               className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-[#0B1320]/30 to-transparent opacity-90" />
             
             <div className="absolute bottom-0 left-0 p-5 w-full">
               <div className="flex items-center gap-1.5 mb-1 text-secondary">
                 <ChefHat size={14} />
                 <span className="text-[9px] font-bold uppercase tracking-widest">Masterful</span>
               </div>
               <h4 className="font-heading text-lg text-white font-bold leading-tight">Culinary<br/>Experts</h4>
             </div>
          </motion.div>

          {/* 6. LOCAL TRADITION (Spans 2 cols, 1 row) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 relative rounded-3xl bg-white border border-gray-200 p-5 lg:p-6 flex flex-col justify-center overflow-hidden group hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
             <div className="absolute right-0 bottom-0 opacity-5 group-hover:scale-110 transition-transform duration-500 translate-x-1/4 translate-y-1/4">
               <MapPin size={120} />
             </div>
             
             <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 z-10">
               <MapPin size={20} />
             </div>
             <div className="z-10 max-w-[85%]">
               <h4 className="font-heading text-xl text-primary font-bold mb-1">Deeply Rooted Tradition</h4>
               <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed">
                 Finest local ingredients bringing authentic Kashmiri heritage, reimagined for the modern palate.
               </p>
             </div>
          </motion.div>

          {/* 7. RATINGS SUMMARY (1 col, 1 row) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="rounded-3xl bg-[#0B1320] border border-gray-800 p-5 lg:p-6 flex flex-col items-center justify-center text-center group hover:border-secondary/50 transition-colors duration-300"
          >
            <div className="text-4xl font-heading font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
              4.9
            </div>
            <div className="flex gap-1 text-secondary mb-2">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
            </div>
            <p className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">
              Based on 1,500+<br/>Happy Guests
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}