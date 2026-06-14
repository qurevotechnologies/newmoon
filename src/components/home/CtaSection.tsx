"use client";

import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function CtaSection() {
  return (
    <section className="py-24 container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary rounded-[3rem] p-12 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white font-bold mb-6">
            Ready to Taste the Magic?
          </h2>
          <p className="text-gray-300 mb-10 font-light">
            Browse our exclusive menu and get Handwara's finest culinary experience delivered straight to your door in minutes.
          </p>
          <AnimatedButton 
            href="/menu" label="Order Now" pillColor="#D4A24C" baseColor="#FFFFFF"
            textColor="#0B1320" hoverTextColor="#0B1320" fillOrigin="bottom"
          />
        </div>
      </motion.div>
    </section>
  );
}