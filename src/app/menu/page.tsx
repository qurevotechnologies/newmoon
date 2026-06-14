"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Leaf, Drumstick } from "lucide-react";
import DishCard from "@/components/shared/DishCard";
import { MOCK_MENU } from "@/lib/mock-data";

const CATEGORIES = ["All", "Starters", "Main Course", "Fast Food", "Breads", "Desserts", "Beverages"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterVeg, setFilterVeg] = useState(false);
  const [filterNonVeg, setFilterNonVeg] = useState(false);

  // Dynamic Filtering Logic
  const filteredMenu = useMemo(() => {
    return MOCK_MENU.filter((dish) => {
      const matchesCategory = activeCategory === "All" || dish.category === activeCategory;
      const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            dish.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesType = true;
      if (filterVeg && !filterNonVeg) matchesType = dish.isVeg === true;
      if (filterNonVeg && !filterVeg) matchesType = dish.isVeg === false;

      return matchesCategory && matchesSearch && matchesType;
    });
  }, [activeCategory, searchQuery, filterVeg, filterNonVeg]);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-12">
      
      {/* Header Banner */}
      <div className="relative w-full h-48 md:h-64 bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <span className="font-heading italic text-secondary text-xl md:text-2xl mb-1 block">Our Menu</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">Good Food, Great Mood</h1>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-20">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-premium p-2.5 flex items-center gap-2.5 mb-8 border border-gray-100 backdrop-blur-md bg-white/95">
          <div className="flex-grow flex items-center bg-gray-50/80 rounded-xl px-4 py-3 border border-transparent focus-within:border-secondary/30 focus-within:bg-white transition-all">
            <Search size={20} className="text-gray-400 mr-2 shrink-0" />
            <input 
              type="text" 
              placeholder="Search for dishes, ingredients..." 
              className="bg-transparent border-none outline-none w-full text-sm text-primary placeholder:text-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="bg-primary hover:bg-primary/95 text-white p-3.5 rounded-xl transition-transform active:scale-95 flex items-center justify-center shadow-sm shrink-0">
            <SlidersHorizontal size={18} />
          </button>
        </div>

        {/* Quick Dietary Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button 
            onClick={() => { setFilterVeg(!filterVeg); setFilterNonVeg(false); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border shadow-sm ${filterVeg ? 'border-success bg-success text-white' : 'border-gray-200 bg-white text-gray-600 hover:border-success/50 hover:text-success'}`}
          >
            <Leaf size={16} /> Veg Only
          </button>
          <button 
            onClick={() => { setFilterNonVeg(!filterNonVeg); setFilterVeg(false); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border shadow-sm ${filterNonVeg ? 'border-danger bg-danger text-white' : 'border-gray-200 bg-white text-gray-600 hover:border-danger/50 hover:text-danger'}`}
          >
            <Drumstick size={16} /> Non-Veg
          </button>
        </div>

        {/* Categories Horizontal Scroll */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 sm:gap-3 mb-8 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-gray-500 border border-gray-100 hover:border-secondary/50 hover:text-primary shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Highly Dense Grid Architecture tailored for Compact Multi-Row scan arrays */}
        {filteredMenu.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredMenu.map((dish) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2, type: "spring", bounce: 0.2 }}
                  key={dish.id}
                  className="w-full"
                >
                  <DishCard dish={dish} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">No dishes found</h3>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">We couldn't find anything matching your current filters or search query.</p>
            <button 
              onClick={() => { setSearchQuery(""); setFilterVeg(false); setFilterNonVeg(false); setActiveCategory("All"); }}
              className="mt-6 text-secondary font-bold text-sm uppercase tracking-wider hover:underline flex items-center justify-center gap-1 mx-auto"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
}