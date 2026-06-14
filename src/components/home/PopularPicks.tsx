"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCK_MENU } from "@/lib/mock-data";
import DishCard from "@/components/shared/DishCard";

export default function PopularPicks() {
  // Ensure we have exactly 15 items for the UI demo by repeating MOCK_MENU if needed
  const displayItems = [...MOCK_MENU, ...MOCK_MENU, ...MOCK_MENU].slice(0, 15);

  return (
    <section className="py-24 container mx-auto bg-background">
      <div className="text-center mb-12 px-4 flex flex-col items-center">
        <span className="text-secondary tracking-[0.2em] uppercase text-[10px] font-bold mb-2">
          Customer Favorites
        </span>
        <h2 className="font-heading text-4xl md:text-5xl text-primary font-bold">
          Popular Picks
        </h2>
        <div className="w-16 h-1 bg-secondary mt-6 rounded-full" />
      </div>
      
      {/* 
        Dynamic 15-item Grid 
        Mobile: 1 column (listed downwards)
        Small Tablet: 2 columns
        Laptop: 3+ columns
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-6">
        {displayItems.map((dish, idx) => (
          <motion.div 
            key={`${dish.id}-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (idx % 5) * 0.1, duration: 0.5 }}
            className="w-full"
          >
            <DishCard dish={dish} />
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-center mt-14"
      >
        <Link 
          href="/menu" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-primary font-bold rounded-full hover:border-secondary hover:text-secondary transition-all shadow-sm group uppercase tracking-widest text-xs"
        >
          View Full Menu 
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}