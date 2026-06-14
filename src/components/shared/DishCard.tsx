"use client";

import { motion } from "framer-motion";
import { Plus, ShieldCheck, Clock, Star } from "lucide-react";
import Image from "next/image";
import { MenuItem } from "@/types";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";

const VegMark = () => (
  <div className="w-2.5 h-2.5 border border-success flex items-center justify-center rounded-[2px] bg-white shrink-0">
    <div className="w-1.5 h-1.5 bg-success rounded-full" />
  </div>
);

const NonVegMark = () => (
  <div className="w-2.5 h-2.5 border border-danger flex items-center justify-center rounded-[2px] bg-white shrink-0">
    <div className="w-1.5 h-1.5 bg-danger rounded-full" />
  </div>
);

export default function DishCard({ dish }: { dish: MenuItem }) {
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(dish);
    router.push("/cart");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-[1.25rem] p-2.5 shadow-soft border border-gray-100 flex flex-row md:flex-col gap-3 group relative h-full w-full justify-between overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Reduced Height for Laptops (md:h-28 instead of md:h-36) */}
      <div className="relative w-24 h-24 md:w-full md:h-28 shrink-0 rounded-xl overflow-hidden bg-gray-50 order-1 md:order-none">
        <Image 
          src={dish.image} alt={dish.name} fill sizes="(max-width: 768px) 96px, 200px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
        />
        {dish.bestseller && (
          <div className="absolute top-2 left-2 z-10 bg-accent text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm uppercase tracking-wider">
            Popular
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow order-2 md:order-none justify-between">
        <div>
          <div className="flex items-start gap-1.5 mb-1">
            <div className="mt-[3px] shrink-0">{dish.isVeg ? <VegMark /> : <NonVegMark />}</div>
            <h3 className="font-semibold text-sm text-primary leading-tight line-clamp-1 group-hover:text-secondary transition-colors">
              {dish.name}
            </h3>
          </div>
          
          <p className="text-[10px] text-gray-500 line-clamp-2 mb-2 pr-1 leading-relaxed">
            {dish.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 text-[9px] text-gray-400 border-t border-gray-50 pt-1.5 uppercase font-semibold">
            <span className="flex items-center gap-0.5 text-orange-600"><Star size={10} fill="currentColor" /> 4.6</span>
            <span className="flex items-center gap-0.5"><Clock size={10} /> 20m</span>
            <span className="hidden sm:flex items-center gap-0.5 text-success"><ShieldCheck size={10} /> Fresh</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 mt-auto border-t border-gray-50 pt-2">
          <span className="font-bold text-sm text-primary">₹{dish.price}</span>
          
          <div className="flex items-center gap-1.5">
            <button 
              onClick={(e) => { e.stopPropagation(); addItem(dish); }}
              className="w-7 h-7 bg-gray-50 hover:bg-primary hover:text-white text-primary rounded-lg flex items-center justify-center transition-all active:scale-95 border border-gray-100"
            >
              <Plus size={14} strokeWidth={2.5} />
            </button>
            <button 
              onClick={handleBuyNow}
              className="hidden sm:inline-flex bg-secondary hover:bg-secondary/90 text-primary px-2.5 py-1.5 rounded-lg font-bold text-[9px] uppercase tracking-wider transition-all active:scale-95"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}