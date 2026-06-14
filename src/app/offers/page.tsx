"use client";

import { motion } from "framer-motion";
import { Ticket, Copy, CheckCircle2, Clock, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const OFFERS = [
  {
    id: 1,
    title: "Flat 15% OFF",
    description: "Valid on all orders above ₹500. Get up to ₹150 discount on your favorite meals.",
    code: "NEWMOON15",
    color: "bg-secondary",
    textColor: "text-primary",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    expires: "Ends in 2 days"
  },
  {
    id: 2,
    title: "Free Delivery",
    description: "Craving a midnight snack? Get free delivery on all orders placed between 10 PM and 11 PM.",
    code: "FREEDEL",
    color: "bg-primary",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1626804475297-4160aeae2114?q=80&w=800&auto=format&fit=crop",
    expires: "Valid Daily (10PM - 11PM)"
  },
  {
    id: 3,
    title: "Welcome Bonus",
    description: "New to New Moon? Sign up and get a flat ₹100 off on your very first order.",
    code: "WELCOME100",
    color: "bg-orange-500",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?q=80&w=800&auto=format&fit=crop",
    expires: "First Order Only"
  }
];

export default function OffersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-12">
      
      {/* Header Banner */}
      <div className="relative w-full h-40 md:h-56 bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-2/3 h-full opacity-30">
           <Image src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1500&auto=format&fit=crop" alt="Background" fill className="object-cover" />
        </div>
        
        <div className="relative z-20 text-center px-4 w-full container mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="flex items-center justify-center gap-2 font-heading italic text-secondary text-xl mb-1">
              <Sparkles size={18} /> Exclusive Deals
            </span>
            <h1 className="font-heading text-4xl md:text-5xl text-white font-bold tracking-tight">Offers & Coupons</h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-30 max-w-4xl">
        <div className="grid grid-cols-1 gap-6">
          
          {OFFERS.map((offer, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={offer.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 flex flex-col md:flex-row relative group"
            >
              {/* Offer Image (Left on Desktop, Top on Mobile) */}
              <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                <Image src={offer.image} alt={offer.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className={`absolute top-4 left-4 ${offer.color} ${offer.textColor} text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md`}>
                  Special Offer
                </div>
              </div>

              {/* Offer Details */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-white relative">
                {/* Perforated edge effect for desktop */}
                <div className="hidden md:flex flex-col absolute -left-3 top-0 bottom-0 justify-between py-2 z-10">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-white rounded-full shadow-[inset_4px_0_4px_rgba(0,0,0,0.03)] -ml-3" />
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-orange-500 font-bold uppercase tracking-wider mb-2">
                  <Clock size={14} /> {offer.expires}
                </div>
                
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">{offer.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{offer.description}</p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className="flex-grow border-2 border-dashed border-gray-200 rounded-xl p-1 relative flex items-center bg-gray-50">
                    <span className="font-mono font-bold text-primary tracking-widest px-4">{offer.code}</span>
                    <button 
                      onClick={() => handleCopy(offer.code)}
                      className={`ml-auto mr-1 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${copiedCode === offer.code ? 'bg-success text-white' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}
                    >
                      {copiedCode === offer.code ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Have you found the perfect deal?</p>
          <Link href="/menu">
            <button className="bg-primary hover:bg-primary/95 text-white px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-premium flex items-center gap-2 mx-auto transition-all">
              Order Now <ArrowRight size={16} />
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}