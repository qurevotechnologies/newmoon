"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2, ShieldCheck, Quote } from "lucide-react";

const REVIEWS = [
  { 
    name: "Aadil M.", 
    date: "2 days ago", 
    text: "Easily the best cafe in Handwara! The food was incredibly fresh, and the delivery was much faster than expected.",
    verified: true 
  },
  { 
    name: "Sadiya J.", 
    date: "1 week ago", 
    text: "The premium packaging blew my mind. The taste of their signature dishes brings a luxurious vibe right to my dining table.",
    verified: true 
  },
  { 
    name: "Irfan W.", 
    date: "2 weeks ago", 
    text: "Finally a production-quality ordering system for our town. Menu is diverse and the user experience is phenomenal.",
    verified: true 
  }
];

// ==========================================
// DESKTOP CARD: Spacious, Elegant, Premium
// ==========================================
const DesktopReviewCard = ({ review }: { review: typeof REVIEWS[0] }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
    
    <Quote className="absolute -top-4 -right-4 text-gray-50/50 group-hover:text-secondary/5 transition-colors duration-500 rotate-12" size={120} />

    <div className="flex justify-between items-start mb-6 relative z-10">
      <div className="flex gap-1 text-secondary">
        {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
      </div>
      {review.verified && (
        <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-green-100">
          <CheckCircle2 size={12} strokeWidth={3} /> Verified
        </div>
      )}
    </div>
    
    <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow relative z-10 text-base">
      "{review.text}"
    </p>
    
    <div className="flex items-center gap-3 mt-auto relative z-10 pt-4 border-t border-gray-50">
      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-inner">
        {review.name.charAt(0)}
      </div>
      <div className="flex flex-col">
        {/* Hand-written signature vibe using Satisfy font */}
        <span className="text-primary text-xl" style={{ fontFamily: "'Satisfy', cursive" }}>{review.name}</span>
        <span className="text-xs text-gray-400 font-light">{review.date}</span>
      </div>
    </div>
  </div>
);

// ==========================================
// MOBILE CARD: App-Inspired, Compact, Tight
// ==========================================
const MobileReviewCard = ({ review }: { review: typeof REVIEWS[0] }) => (
  <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-[0_4px_15px_rgb(0,0,0,0.04)] flex flex-col h-full relative">
    
    {/* Compact App-Style Header */}
    <div className="flex justify-between items-center mb-3">
      <div className="flex flex-col">
        {/* Hand-written signature vibe using Satisfy font */}
        <span className="text-primary text-xl leading-none mb-1" style={{ fontFamily: "'Satisfy', cursive" }}>
          {review.name}
        </span>
        <div className="flex gap-0.5 text-secondary">
          {[...Array(5)].map((_, idx) => <Star key={idx} size={10} fill="currentColor" />)}
        </div>
      </div>
      <span className="text-[10px] text-gray-400">{review.date}</span>
    </div>
    
    {/* Tightly packed text for easy mobile reading */}
    <p className="text-gray-600 text-sm leading-snug mb-4 flex-grow">
      "{review.text}"
    </p>

    {review.verified && (
      <div className="flex items-center gap-1 text-green-600 text-[9px] font-bold uppercase tracking-wider mt-auto">
        <CheckCircle2 size={10} strokeWidth={3} /> Verified Buyer
      </div>
    )}
  </div>
);

export default function ReviewSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Responsive Header Block */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-16 gap-6 md:gap-8">
          
          {/* Title Area */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            {/* Cafe-style accent using Chelsea Market font */}
            <span 
              className="text-secondary text-lg mb-1 block"
              style={{ fontFamily: "'Chelsea Market', cursive" }}
            >
              Real Feedback
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-primary font-bold mb-3 md:mb-4">
              Trusted by Locals
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-500 font-light text-xs md:text-sm">
              <ShieldCheck className="text-green-500" size={16} />
              <span>100% Genuine Customer Reviews</span>
            </div>
          </div>
          
          {/* Trust Score Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white px-5 py-3 md:px-6 md:py-4 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="text-3xl md:text-5xl font-heading font-bold text-primary">4.9</div>
            <div className="flex flex-col gap-1">
              <div className="flex text-secondary">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={12} className="md:w-3.5 md:h-3.5" fill="currentColor" />)}
              </div>
              <span className="text-[9px] md:text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                Average Rating
              </span>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            MOBILE-FIRST DESIGN: App-Style Carousel
            ========================================= */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-4 px-4 pb-6 gap-3">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={`mobile-${i}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="w-[75vw] max-w-[280px] snap-center shrink-0"
            >
              <MobileReviewCard review={review} />
            </motion.div>
          ))}
        </div>

        {/* =========================================
            DESKTOP DESIGN: Staggered Premium Grid
            ========================================= */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={`desktop-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`${i === 1 ? 'mt-8' : ''}`}
            >
              <DesktopReviewCard review={review} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}