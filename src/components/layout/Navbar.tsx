"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { useRouter, usePathname } from "next/navigation";
import PillNav from "./PillNav";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, getCartTotal, removeItem } = useCartStore();
  
  const router = useRouter();
  const pathname = usePathname();

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = getCartTotal();
  const total = subtotal > 0 ? subtotal + 40 : 0;

  // Hide global navbar in admin panel
  if (pathname.startsWith('/admin')) return null;

  // The custom Cart button injected into PillNav
  const cartButton = (
    <button 
      onClick={() => setIsCartOpen(true)}
      className="relative hidden md:flex w-10 h-10 rounded-full bg-secondary text-primary items-center justify-center hover:bg-secondary/90 transition-transform active:scale-95 shadow-sm"
    >
      <ShoppingBag size={18} strokeWidth={2.5} />
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.span 
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 bg-white text-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm"
          >
            {cartCount}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );

  return (
    <>
      <PillNav
        logo="https://res.cloudinary.com/dpqsadqxj/image/upload/q_auto/f_auto/v1781422244/logo_studio_d1hoij.png"
        logoAlt="New Moon Cafe Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Menu', href: '/menu' },
          { label: 'Offers', href: '/offers' },
          { label: 'Account', href: '/account' }
        ]}
        activeHref={pathname}
        baseColor="rgba(11, 19, 32, 0.7)" // Primary Navy (Translucent for glass effect)
        pillColor="#D4A24C" // Secondary Gold
        hoveredPillTextColor="#0B1320" 
        pillTextColor="#FFFFFF"
        actionNode={cartButton}
      />

      {/* Desktop Slide-out Billing Summary Panel */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="hidden md:block fixed inset-0 bg-primary/40 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} 
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="hidden md:flex fixed top-0 right-0 h-full w-[380px] bg-background shadow-2xl z-50 flex-col"
            >
              <div className="bg-white p-5 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-xl font-bold text-primary">Billing Summary</h2>
                  <p className="text-[11px] text-gray-500">{cartCount} items selected</p>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-1.5 hover:bg-gray-100 rounded-xl transition-colors text-gray-400">
                  <X size={18} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-5 space-y-3.5 hide-scrollbar">
                {items.length === 0 ? (
                  <div className="text-center py-20 text-gray-400 flex flex-col items-center justify-center h-full">
                    <ShoppingBag size={40} className="mb-3 opacity-20" />
                    <p className="text-sm">Your bill stack is currently empty.</p>
                  </div>
                ) : (
                  items.map(item => (
                    <div key={item.id} className="bg-white p-3 rounded-xl border border-gray-50 flex gap-3 relative group">
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-gray-50">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col justify-center flex-grow pr-4">
                        <h4 className="font-semibold text-xs text-primary leading-tight line-clamp-1">{item.name}</h4>
                        <p className="text-[10px] text-gray-400 mt-0.5">Qty: {item.quantity}</p>
                        <span className="font-bold text-primary text-xs mt-1">₹{item.price * item.quantity}</span>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500 rounded-lg p-1 transition-colors">
                        <X size={12} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="bg-white p-5 border-t border-gray-100 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex justify-between text-gray-500"><span>Subtotal</span><span className="font-medium text-primary">₹{subtotal}</span></div>
                    <div className="flex justify-between text-gray-500"><span>Fixed Route Handling</span><span className="font-medium text-primary">₹40</span></div>
                    <div className="h-px w-full bg-gray-100 my-2" />
                    <div className="flex justify-between items-center"><span className="font-bold text-primary text-sm">Grand Total</span><span className="font-bold text-secondary text-lg">₹{total}</span></div>
                  </div>
                  <button 
                    onClick={() => { setIsCartOpen(false); router.push('/delivery-checker'); }}
                    className="w-full bg-primary hover:bg-primary/95 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-premium transition-all"
                  >
                    Proceed to Payment <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}