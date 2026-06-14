"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050A13] text-gray-300 pt-20 pb-24 md:pb-12 relative overflow-hidden border-t border-white/5">
      
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle Watermark Logo */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none select-none w-96 h-96 md:w-[600px] md:h-[600px]">
        <Image 
          src="https://res.cloudinary.com/dpqsadqxj/image/upload/q_auto/f_auto/v1781422244/logo_studio_d1hoij.png" 
          alt="Watermark" 
          fill 
          className="object-contain filter invert"
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-6 relative z-10"
      >
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Brand Info */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col items-start text-left">
            <Link href="/" className="relative w-28 h-28 mb-6 block">
              <Image 
                src="https://res.cloudinary.com/dpqsadqxj/image/upload/q_auto/f_auto/v1781422244/logo_studio_d1hoij.png" 
                alt="New Moon Logo" 
                fill 
                className="object-contain filter brightness-0 invert"
              />
            </Link>
            <h3 className="font-heading text-3xl text-white font-bold mb-4">New Moon</h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed max-w-sm font-light">
              Established in May 2026. Handwara's premium dining destination, blending exceptional food, warm hospitality, and a beautiful modern architecture.
            </p>
           
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:col-start-6 flex flex-col items-start">
            <h4 className="text-white font-heading text-xl font-bold mb-6 relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-left text-sm text-gray-400 w-full">
              {[
                { name: "Our Menu", href: "/menu" },
                { name: "About Us", href: "/about" },
                { name: "Delivery Zone", href: "/delivery-checker" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center hover:text-secondary transition-colors duration-300 w-max">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-secondary mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col items-start">
            <h4 className="text-white font-heading text-xl font-bold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-[#0B1320] transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="mt-1 group-hover:text-white transition-colors leading-relaxed">
                  New Bus Stand Road,<br/>Opposite IM95, Near Masjid Tawheed, Royal Market,<br/>Handwara, J&K 193221
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-[#0B1320] transition-colors">
                  <Phone size={18} />
                </div>
                <span className="group-hover:text-white transition-colors">+91 99063 13451</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-[#0B1320] transition-colors">
                  <Mail size={18} />
                </div>
                <span className="group-hover:text-white transition-colors">hello@newmooncafe.in</span>
              </li>
            </ul>
          </motion.div>

          {/* 4. Opening Hours */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col items-start">
             <h4 className="text-white font-heading text-xl font-bold mb-6 relative inline-block">
              Opening Hours
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary rounded-full"></span>
            </h4>
             <ul className="space-y-4 text-sm w-full text-gray-400">
               <li className="flex flex-col border-b border-white/5 pb-3">
                 <span className="text-xs uppercase tracking-wider mb-1">Monday - Friday</span>
                 <span className="text-white font-medium text-base">8:00 AM - 10:00 PM</span>
               </li>
               <li className="flex flex-col border-b border-white/5 pb-3">
                 <span className="text-xs uppercase tracking-wider mb-1">Saturday</span>
                 <span className="text-white font-medium text-base">8:00 AM - 10:30 PM</span>
               </li>
               <li className="flex flex-col pt-1">
                 <span className="text-xs uppercase tracking-wider mb-1">Sunday</span>
                 <span className="text-secondary font-medium text-base">7:00 AM - 11:00 PM</span>
               </li>
             </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4"
        >
          <p>© {currentYear} New Moon Cafe & Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Designed with precision for Handwara.</span>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}