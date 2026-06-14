"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Star, ShieldCheck, Smartphone, Play } from "lucide-react";
import { MOCK_MENU } from "@/lib/mock-data";
import DishCard from "@/components/shared/DishCard";
import AnimatedButton from "@/components/ui/AnimatedButton";

// Clean, elegant text reveal
const AnimatedText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

// Aurora Floating Background (Native Framer Motion)
const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-secondary/15 blur-[120px]"
    />
    <motion.div 
      animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 40, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
      className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-white/10 blur-[100px]"
    />
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col w-full pb-10 overflow-hidden bg-background">
      
      {/* 1. BRAND HERO SECTION (Background clearly visible) */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem]">
        
        {/* Parallax Background - Mixed blend mode exposes interior details */}
        <div className="absolute inset-0 z-0 bg-primary">
          <Image 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2500&auto=format&fit=crop" 
            alt="New Moon Restaurant Interior" 
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          {/* Radial gradient keeps edges dark for text readability, but center clear */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/60 to-primary" />
        </div>

        <AuroraBackground />
        
        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-6 flex flex-col items-center justify-center text-center pt-24">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            <AnimatedText 
              text="Est. 2024 • Handwara" 
              className="text-secondary tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-6" 
            />

            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-white font-bold leading-[1.1] mb-6 drop-shadow-2xl flex flex-col">
              <AnimatedText text="New Moon Cafe" />
              <AnimatedText text="& Restaurant" className="text-white/90 italic font-light" />
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
              className="text-gray-200 text-lg md:text-xl mb-12 font-light max-w-2xl leading-relaxed drop-shadow-md"
            >
              Experience the finest Kashmiri traditions and modern culinary mastery, crafted with passion and delivered directly to your doorstep.
            </motion.p>
            
            {/* React Bits GSAP Animated Buttons deployed at different angles */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <AnimatedButton 
                href="/menu" 
                label="Explore Menu" 
                pillColor="#D4A24C"
                baseColor="#0B1320"
                textColor="#0B1320"
                hoverTextColor="#FFFFFF"
                fillOrigin="bottom"
              />
              <AnimatedButton 
                href="/delivery-checker" 
                label="Check Delivery" 
                pillColor="rgba(255,255,255,0.1)" 
                baseColor="#FFFFFF" 
                textColor="#FFFFFF"
                hoverTextColor="#0B1320"
                fillOrigin="left"
                className="backdrop-blur-md border border-white/20"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. POPULAR PICKS SECTION */}
      <section className="py-24 container mx-auto">
        <div className="text-center mb-12 px-4">
          <span className="text-secondary tracking-[0.2em] uppercase text-[10px] font-bold">Our Specialties</span>
          <h2 className="font-heading text-4xl text-primary font-bold mt-2">Popular Picks</h2>
        </div>
        
        <div className="flex overflow-x-auto hide-scrollbar gap-4 px-6 pb-8 -mx-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {MOCK_MENU.slice(0, 5).map((dish) => (
            <div key={dish.id} className="min-w-[280px] sm:min-w-0 w-full">
              <DishCard dish={dish} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/menu" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors uppercase tracking-widest text-sm">
            View Full Menu <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 3. BRAND STORY SPLIT SECTION */}
      <section className="container mx-auto px-4 pb-12">
        <div className="bg-primary rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-premium relative group">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
          
          <div className="relative z-10 w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
               <span className="font-heading italic text-secondary text-xl">The Heritage</span>
               <div className="w-12 h-[1px] bg-secondary/50"></div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white font-bold leading-[1.1] mb-6">
              Made with Passion,<br/> Served with Love
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-light">
              At New Moon Cafe and Restaurant, we believe good food brings people together. From carefully selected local ingredients to delightful traditional flavors, every dish is crafted to give you an experience worth remembering.
            </p>
            <AnimatedButton 
              href="/about" 
              label="Discover Our Story" 
              pillColor="rgba(255,255,255,0.1)"
              baseColor="#D4A24C"
              textColor="#FFFFFF"
              hoverTextColor="#0B1320"
              fillOrigin="right"
              className="w-fit border border-white/20"
            />
          </div>
          <div className="relative z-10 w-full md:w-1/2 min-h-[350px] md:min-h-full">
            <Image 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1500&auto=format&fit=crop" 
              alt="Restaurant Interior" fill className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent md:hidden" />
          </div>
        </div>
      </section>

    

    </div>
  );
}