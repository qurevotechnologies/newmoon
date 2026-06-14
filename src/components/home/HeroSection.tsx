"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Star } from "lucide-react";
import DeliveryBoy from "@/components/ui/DeliveryBoy";

// 1. High-Performance Text Reveal
const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
  >
    {text}
  </motion.div>
);

// 2. Hardware-Accelerated Glowing Aurora Background
const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute inset-0 bg-[#0B1320]" /> {/* Solid Primary Base */}
    <motion.div 
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-secondary/10 blur-[120px] will-change-transform"
    />
    <motion.div 
      animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 40, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
      className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-white/5 blur-[100px] will-change-transform"
    />
    {/* Subtle noise texture overlay for luxury feel */}
    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
  </div>
);

// 3. Orbital Food Animation Component
const OrbitingPlates = () => {
  const plates = [
    { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop", alt: "Signature Pizza", size: "w-24 h-24 md:w-32 md:h-32", delay: 0 },
    { src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=600&auto=format&fit=crop", alt: "Authentic Biryani", size: "w-20 h-20 md:w-28 md:h-28", delay: -5 },
    { src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600&auto=format&fit=crop", alt: "Premium Pasta", size: "w-16 h-16 md:w-24 md:h-24", delay: -10 },
    { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop", alt: "Fresh Salad", size: "w-20 h-20 md:w-32 md:h-32", delay: -15 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute right-16 top-16 md:right-32 md:top-32 flex items-center justify-center opacity-80 lg:opacity-100">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative w-[180px] h-[180px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center will-change-transform"
        >
          {plates.map((plate, i) => {
            const angle = (i * 360) / plates.length;
            return (
              <div 
                key={i} 
                className="absolute flex items-center justify-center w-full h-full"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                {/* Counter-rotation keeps the food plate upright while the ring spins */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className={`${plate.size} absolute -top-10 md:-top-14 lg:-top-16 rounded-full overflow-hidden border-4 border-[#0B1320] shadow-[0_0_40px_rgba(212,162,76,0.15)] will-change-transform`}
                >
                  <Image 
                    src={plate.src} 
                    alt={plate.alt} 
                    fill 
                    sizes="(max-width: 768px) 96px, 128px"
                    className="object-cover"
                    priority 
                  />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0B1320] rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-2xl">
      
      {/* Background Layers */}
      <AuroraBackground />
      <OrbitingPlates />
      
      {/* Radial fade to ensure center text is always perfectly readable over the moving plates */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,19,32,0.8)_0%,rgba(11,19,32,0.4)_50%,transparent_100%)] z-0" />

      {/* Massive Animated Delivery Boy entering from left */}
      <motion.div 
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.5 }}
        className="absolute bottom-10 -left-10 md:left-0 z-10 hidden sm:block opacity-90"
      >
        <DeliveryBoy size="xl" animation="driving" className="scale-x-[-1]" />
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center justify-center text-center pt-28 pb-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Glassmorphism Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <div className="flex gap-0.5 text-secondary">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={12} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-300 text-xs font-medium tracking-wide uppercase">Top Rated in Handwara</span>
          </motion.div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-white font-bold leading-[1.05] tracking-tight mb-6 drop-shadow-2xl flex flex-col items-center">
            <AnimatedText text="New Moon Cafe" />
            <AnimatedText text="& Restaurant" className="text-secondary italic font-light mt-2" />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-300 text-base md:text-xl mb-12 font-light max-w-2xl leading-relaxed drop-shadow-md px-4"
          >
            Experience the finest Kashmiri traditions and modern culinary mastery, crafted with passion and delivered directly to your doorstep.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
          >
            <AnimatedButton 
              href="/menu" 
              label="Explore Menu" 
              pillColor="#D4A24C" 
              baseColor="#D4A24C"
              textColor="#0B1320" 
              hoverTextColor="#0B1320" 
              fillOrigin="bottom"
            />
            <AnimatedButton 
              href="/delivery-checker" 
              label="Check Delivery" 
              pillColor="rgba(255, 255, 255, 0.15)" 
              baseColor="rgba(255, 255, 255, 0.05)" 
              textColor="#FFFFFF" 
              hoverTextColor="#FFFFFF"
              fillOrigin="left" 
              className="backdrop-blur-md border border-white/10"
            />
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Indicator (Bottom) */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-12 bg-gradient-to-b from-secondary/80 to-transparent rounded-full"
        />
      </motion.div>

    </section>
  );
}