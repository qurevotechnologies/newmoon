"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Edit3, MapPin, Phone, Star, Package, RotateCcw, 
  Heart, Settings, Headphones, Info, LogOut, 
  ChevronRight, CheckCircle2, Bike, User
} from "lucide-react";
import { MOCK_USER } from "@/lib/mock-data";

const ACTIVE_ORDER = {
  id: "#1025",
  time: "Today, 11:35 AM",
  status: "Preparing your order",
  estimated: "30 - 35 min",
  total: 560,
  image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=200",
};

const ORDER_HISTORY = [
  { id: "#1024", date: "23 May, 8:40 PM", status: "Delivered", total: 430, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=200" },
  { id: "#1023", date: "21 May, 1:15 PM", status: "Delivered", total: 390, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=200" },
];

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background pb-32 md:pb-12 pt-4">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Profile Card (No Profile Image) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary rounded-[2rem] p-6 shadow-premium mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 flex items-start justify-between mb-6">
            <div>
              <h1 className="font-heading text-3xl font-bold text-white mb-2">{MOCK_USER.name}</h1>
              <div className="bg-secondary/20 border border-secondary/30 text-secondary text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-flex items-center gap-1 mb-3">
                <Star size={10} fill="currentColor" /> {MOCK_USER.status}
              </div>
              <div className="flex flex-col gap-1.5 mt-1">
                <span className="text-gray-300 text-sm flex items-center gap-2"><Phone size={14} className="text-secondary"/> {MOCK_USER.phone}</span>
                <span className="text-gray-300 text-sm flex items-center gap-2"><MapPin size={14} className="text-secondary"/> {MOCK_USER.location}</span>
              </div>
            </div>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-xl flex items-center gap-2 transition-colors mt-1">
              <Edit3 size={14} /> Edit
            </button>
          </div>

          <div className="relative z-10 flex items-center justify-around bg-black/20 rounded-2xl py-4 border border-white/5">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-secondary mb-0.5">
                <Package size={18} /> <span className="font-bold text-white text-xl">{MOCK_USER.totalOrders}</span>
              </div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Total Orders</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-secondary mb-0.5">
                <Heart size={18} /> <span className="font-bold text-white text-xl">{MOCK_USER.favorites}</span>
              </div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Favorites</span>
            </div>
          </div>
        </motion.div>

        {/* Active Order */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-bold text-primary text-lg">Active Order</h2>
            <button className="text-secondary text-sm font-semibold hover:underline flex items-center gap-1">
              View Details <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="bg-white rounded-3xl p-5 shadow-soft border border-gray-100 relative overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 shrink-0">
                  <Bike size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg leading-tight">Order {ACTIVE_ORDER.id}</h3>
                  <p className="text-xs text-gray-500 mb-2">{ACTIVE_ORDER.time}</p>
                  <div className="flex items-center gap-1.5 text-success text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    {ACTIVE_ORDER.status}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Estimated delivery: {ACTIVE_ORDER.estimated}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden relative shadow-sm border border-gray-100">
                  <Image src={ACTIVE_ORDER.image} alt="Order item" fill className="object-cover" />
                </div>
                <span className="font-bold text-primary">₹{ACTIVE_ORDER.total}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Grid (Removed Payment Methods) */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { icon: MapPin, title: "Saved Addresses", desc: "2 Addresses" },
            { icon: Heart, title: "Favorites", desc: "4 Items" },
            { icon: Settings, title: "Settings", desc: "Notifications, Language" },
            { icon: Headphones, title: "Help & Support", desc: "FAQs, Contact Us" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100 flex items-start gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gray-50 text-gray-500 flex items-center justify-center shrink-0">
                <item.icon size={20} />
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-primary text-sm mb-0.5">{item.title}</h4>
                <p className="text-[10px] text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logout */}
        <button className="w-full bg-white rounded-2xl p-4 shadow-soft border border-gray-100 flex items-center justify-between text-red-500 hover:bg-red-50 transition-colors mb-6">
          <div className="flex items-center gap-3">
            <LogOut size={20} />
            <div className="text-left">
              <span className="font-semibold text-sm block">Logout</span>
              <span className="text-[10px] text-gray-500">Sign out from your account</span>
            </div>
          </div>
        </button>

      </div>
    </div>
  );
}