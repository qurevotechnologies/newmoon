"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, MapPin, ChefHat } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="py-20 md:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold mb-3 block">
            The New Moon Standard
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-bold">
            More Than Just A Meal
          </h2>
        </div>

        {/* 
          BENTO BOX GRID
          Mobile: Single column stack
          Tablet: 2 columns
          Laptop: 3 columns with strict 300px row heights for perfect alignment
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[300px]">

          {/* 1. BRAND STORY (Anchor Card: Spans 2 cols & 2 rows) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-primary p-8 md:p-12 flex flex-col justify-between group min-h-[450px] md:min-h-0 shadow-premium"
          >
            {/* Background Image with subtle zoom on hover */}
            <Image 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1500&auto=format&fit=crop" 
              alt="Restaurant Interior" 
              fill 
              className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
            
            <div className="relative z-10 flex items-center gap-3">
               <span className="font-heading italic text-secondary text-xl md:text-2xl">The Heritage</span>
               <div className="w-12 h-[1px] bg-secondary/50"></div>
            </div>
            
            <div className="relative z-10 mt-auto">
               <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-4 md:mb-6">
                 Made with Passion,<br/>Served with Love.
               </h3>
               <p className="text-gray-400 max-w-md mb-8 text-sm md:text-base font-light leading-relaxed">
                 At New Moon Cafe and Restaurant, we believe good food brings people together. From carefully selected local ingredients to delightful traditional flavors, every dish is crafted to give you an experience worth remembering.
               </p>
               <Link 
                 href="/about" 
                 className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-full font-bold text-sm hover:bg-secondary transition-colors duration-300 w-max"
               >
                 Discover Our Story <ArrowRight size={16} />
               </Link>
            </div>
          </motion.div>

          {/* 2. LIGHTNING DELIVERY (Top Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[2rem] bg-white border border-gray-100 p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow min-h-[250px] md:min-h-0"
          >
             <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-auto">
               <Clock size={24} />
             </div>
             <div className="mt-8">
               <h4 className="font-heading text-2xl text-primary font-bold mb-2">Lightning Delivery</h4>
               <p className="text-gray-500 text-sm font-light leading-relaxed">Hot, fresh, and perfectly timed within our 5 KM scooter delivery radius.</p>
             </div>
          </motion.div>

          {/* 3. PREMIUM HYGIENE (Middle Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] bg-white border border-gray-100 p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow min-h-[250px] md:min-h-0"
          >
             <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-auto">
               <ShieldCheck size={24} />
             </div>
             <div className="mt-8">
               <h4 className="font-heading text-2xl text-primary font-bold mb-2">Premium Hygiene</h4>
               <p className="text-gray-500 text-sm font-light leading-relaxed">Ultra-sanitized kitchens and tamper-proof packaging for absolute peace of mind.</p>
             </div>
          </motion.div>

          {/* 4. MASTER CHEFS (Bottom Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-[2rem] relative overflow-hidden group shadow-sm min-h-[300px] md:min-h-0"
          >
             <Image 
               src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" 
               alt="Master Chefs" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/90 via-[#0B1320]/20 to-transparent" />
             <div className="absolute bottom-0 left-0 p-8">
               <div className="flex items-center gap-2 mb-2 text-secondary">
                 <ChefHat size={18} />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Masterful</span>
               </div>
               <h4 className="font-heading text-2xl text-white font-bold">Culinary Experts</h4>
             </div>
          </motion.div>

          {/* 5. LOCAL TRADITION (Bottom Right - Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 rounded-[2rem] bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row min-h-[350px] md:min-h-0"
          >
             <div className="p-8 md:p-10 flex flex-col justify-center sm:w-1/2 lg:w-3/5 order-2 sm:order-1">
               <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6">
                 <MapPin size={24} />
               </div>
               <h4 className="font-heading text-2xl text-primary font-bold mb-3">Deeply Rooted Tradition</h4>
               <p className="text-gray-500 text-sm font-light leading-relaxed">
                 We source the finest local ingredients to bring you authentic Kashmiri heritage, meticulously reimagined for the modern palate.
               </p>
             </div>
             <div className="relative h-48 sm:h-full sm:w-1/2 lg:w-2/5 order-1 sm:order-2">
               <Image 
                 src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop" 
                 alt="Local Food" 
                 fill 
                 className="object-cover" 
               />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}