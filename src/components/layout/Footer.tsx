"use client";

import Image from "next/image";
import Link from "next/link";
import {MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-24 md:pb-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative w-24 h-24 mb-4">
              <Image 
                src="https://res.cloudinary.com/dpqsadqxj/image/upload/q_auto/f_auto/v1781422244/logo_studio_d1hoij.png" 
                alt="New Moon Logo" fill className="object-contain filter brightness-0 invert"
              />
            </div>
            <h3 className="font-heading text-2xl text-white font-bold mb-3">New Moon</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Where traditional Kashmiri warmth meets modern culinary excellence. Premium dining and swift delivery in Handwara.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 text-center md:text-left text-sm">
              <li><Link href="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/delivery-checker" className="hover:text-white transition-colors">Check Delivery Zone</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>Main Market, Handwara,<br/>Jammu & Kashmir 193221</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>+91 7006 123456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>hello@newmooncafe.in</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center md:items-start">
             <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-6">Opening Hours</h4>
             <ul className="space-y-3 text-sm w-full max-w-[200px]">
               <li className="flex justify-between border-b border-white/10 pb-2">
                 <span>Mon - Sat</span>
                 <span className="text-white font-medium">10:00 AM - 11:00 PM</span>
               </li>
               <li className="flex justify-between pt-1">
                 <span>Sunday</span>
                 <span className="text-white font-medium">11:00 AM - 11:30 PM</span>
               </li>
             </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} New Moon Cafe & Restaurant. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision for Handwara.</p>
        </div>
      </div>
    </footer>
  );
}