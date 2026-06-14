"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Utensils, Heart, ShieldCheck, MapPin, CheckCircle2, Car, Coffee, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pb-20 pt-24 md:pt-32">
      
      {/* 1. Header Section */}
      <section className="container mx-auto px-6 mb-16 md:mb-24 text-center max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="text-secondary tracking-[0.2em] uppercase text-xs font-bold mb-4 block"
        >
          Est. May 2026 • Handwara
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-6 leading-tight"
        >
          Welcome to New Moon <br className="hidden md:block" /> Cafe and Restaurant
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
        >
          Nestled in the heart of Handwara, we have quickly become one of the most loved dining destinations in North Kashmir. A place where exceptional food, warm hospitality, and memorable experiences come together.
        </motion.p>
      </section>

      {/* 2. Architecture & Ambience Image Grid */}
      <section className="container mx-auto px-4 md:px-6 mb-20 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[600px]"
        >
          <div className="md:col-span-8 relative h-[300px] md:h-full rounded-3xl overflow-hidden shadow-sm group">
            <Image 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1500&auto=format&fit=crop" 
              alt="Premium Architecture" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-8">
              <div>
                <h3 className="text-white font-heading text-2xl font-bold mb-2">Beautiful Ambience</h3>
                <p className="text-gray-300 font-light max-w-md text-sm">Elegant lighting, modern seating, and carefully curated décor designed for comfort and sophistication.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
            <div className="relative h-[200px] md:h-1/2 rounded-3xl overflow-hidden shadow-sm group">
              <Image 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" 
                alt="Family Dining" fill className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="relative h-[200px] md:h-1/2 rounded-3xl overflow-hidden shadow-sm bg-primary flex flex-col items-center justify-center text-center p-6 border border-white/10">
              <Users className="text-secondary mb-3" size={32} />
              <h3 className="text-white font-heading text-xl font-bold mb-2">Safe & Welcoming</h3>
              <p className="text-gray-400 text-sm font-light">Family-friendly, safe for women, and ideal for celebrations.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. A New Standard for Dining (Split Section) */}
      <section className="container mx-auto px-6 mb-24 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2">
            <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-6">A New Standard for Dining in Handwara</h2>
            <div className="space-y-4 text-gray-500 font-light leading-relaxed">
              <p>At New Moon Cafe and Restaurant, we believe that dining is more than just eating. It is about creating moments, sharing conversations, and enjoying food crafted with passion and attention to detail.</p>
              <p>Our team focuses on providing a modern dining experience that combines premium-quality ingredients, innovative recipes, and outstanding customer service.</p>
              <p>Whether you're planning a family dinner, a casual coffee meetup, a business meeting, or simply craving delicious food delivered to your doorstep, our mission is to redefine the dining experience and exceed your expectations.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop" alt="Master Chefs" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* 4. Menu Highlights & Delivery */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Menu List */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Utensils className="text-secondary" size={24} />
                <h2 className="font-heading text-3xl text-primary font-bold">Crafted for Food Lovers</h2>
              </div>
              <p className="text-gray-500 font-light mb-8">We specialize in a variety of continental, cafe-style, and non-vegetarian dishes. Every dish is prepared using carefully selected ingredients to ensure freshness and consistency.</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Crispy Mozzarella Crumb Fried Fish", "Tandoori Fish", "Creamy White Sauce Pasta",
                  "Mushroom & Cheddar Sandwiches", "Juicy Grilled Chicken", "Chicken Specialties",
                  "Signature Burgers", "Premium Desserts", "Fresh Tiramisu", "Mocktails & Beverages"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 font-medium text-sm">
                    <span className="text-secondary mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Why Choose Us List */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-secondary" size={24} />
                <h2 className="font-heading text-3xl text-primary font-bold">Why Customers Choose Us</h2>
              </div>
              <p className="text-gray-500 font-light mb-8">Thousands of customers choose New Moon Cafe and Restaurant because of our dedication to quality and service.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                {[
                  "Premium Quality Food", "Fresh Ingredients", "Modern Cafe Experience",
                  "Elegant Interior Design", "Family-Friendly Environment", "Professional Service",
                  "Home Delivery Available", "Convenient Location", "Free Parking Facilities",
                  "Comfortable Seating", "Consistent Food Quality", "Memorable Dining Experience"
                ].map((reason, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                    <span className="text-sm text-gray-700 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Location & Accessibility */}
      <section className="container mx-auto px-6 py-24 max-w-5xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-primary font-bold mb-6">Visit Us Today</h2>
        <p className="text-gray-500 font-light max-w-2xl mx-auto mb-12">
          Conveniently located in one of Handwara's most accessible areas, making it easy to stop by and enjoy a meal. We offer free street and lot parking, easy access, and comfortable entry points for a stress-free experience.
        </p>
        
        <div className="bg-primary text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between text-left gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-6 w-full md:w-1/2">
            <h3 className="text-2xl font-bold font-heading text-secondary">New Moon Cafe & Restaurant</h3>
            <div className="flex items-start gap-4">
              <MapPin className="text-secondary shrink-0 mt-1" size={24} />
              <p className="text-gray-300 font-light leading-relaxed">
                Royal Market, New Bus Stand Road<br/>
                Opposite IM95, Near Masjid Tawheed<br/>
                Handwara, Jammu and Kashmir – 193221
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-6 w-full md:w-1/3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <h3 className="text-xl font-bold font-heading text-white">Contact & Amenities</h3>
            <div className="space-y-3">
              <p className="text-gray-300 font-light flex items-center gap-3">
                <Car className="text-secondary" size={18}/> Free Parking Lot
              </p>
              <p className="text-gray-300 font-light flex items-center gap-3">
                <Coffee className="text-secondary" size={18}/> Home Delivery
              </p>
              <p className="text-gray-300 font-bold flex items-center gap-3 mt-4 text-lg">
                📞 +91 99063 13451
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}