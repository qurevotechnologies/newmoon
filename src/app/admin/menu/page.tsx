"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Plus, Search, Edit2, Trash2, Image as ImageIcon, 
  MoreVertical, Filter, ArrowUpDown, X, Check
} from "lucide-react";

// --- MOCK DATA ---
const CATEGORIES = ["All", "Starters", "Main Course", "Wazwan", "Desserts", "Beverages"];

const MOCK_MENU = [
  {
    id: "1",
    name: "Classic Rogan Josh",
    category: "Wazwan",
    price: 450,
    status: "available",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1544025162-81111420d4d7?w=500&q=80",
    description: "Tender lamb cooked in traditional Kashmiri spices and rich gravy."
  },
  {
    id: "2",
    name: "Gushtaba",
    category: "Wazwan",
    price: 550,
    status: "out_of_stock",
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&q=80",
    description: "Minced mutton balls cooked in a flavorful yogurt gravy."
  },
  {
    id: "3",
    name: "Nadru Yakhni",
    category: "Main Course",
    price: 320,
    status: "available",
    type: "veg",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80",
    description: "Lotus stem cooked in a mild, aromatic yogurt sauce."
  },
];

export default function MenuEditor() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter logic
  const filteredMenu = MOCK_MENU.filter(item => {
    const matchesCategory = activeTab === "All" || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Menu Editor</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your restaurant offerings, pricing, and availability.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <Plus size={18} />
            <span>Add New Dish</span>
          </button>
        </div>

        {/* METRICS / STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Total Items", value: "124", color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Active Categories", value: "8", color: "text-green-600", bg: "bg-green-50" },
            { label: "Out of Stock", value: "12", color: "text-red-600", bg: "bg-red-50" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <Filter size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS & FILTERS */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search dishes..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            
            {/* Sort & Filter Actions */}
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
                <ArrowUpDown size={16} /> Sort
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === cat 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* MENU LIST (Compact Data Table format) */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50/50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <div className="col-span-5 md:col-span-4">Dish details</div>
            <div className="hidden md:block col-span-2">Category</div>
            <div className="col-span-3 md:col-span-2">Price</div>
            <div className="col-span-4 md:col-span-3 text-center">Status</div>
            <div className="hidden md:block col-span-1 text-right">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {filteredMenu.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={item.id} 
                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50/50 transition-colors group"
              >
                {/* Dish Info */}
                <div className="col-span-8 md:col-span-4 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-gray-200">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                      {item.name}
                      <span className={`w-2 h-2 rounded-full ${item.type === 'veg' ? 'bg-green-500' : 'bg-red-500'}`} />
                    </h4>
                    <p className="text-xs text-gray-500 truncate max-w-[200px] mt-0.5">{item.description}</p>
                  </div>
                </div>

                {/* Category */}
                <div className="hidden md:flex col-span-2 items-center">
                  <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md">
                    {item.category}
                  </span>
                </div>

                {/* Price */}
                <div className="col-span-4 md:col-span-2 flex items-center">
                  <span className="font-semibold text-gray-900">₹{item.price}</span>
                </div>

                {/* Quick Status Toggle */}
                <div className="col-span-4 md:col-span-3 flex justify-center">
                  <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${item.status === 'available' ? 'bg-green-500' : 'bg-gray-300'}`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${item.status === 'available' ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                {/* Actions */}
                <div className="hidden md:flex col-span-1 justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                    <Edit2 size={16} />
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ADD/EDIT MODAL (Slide-over / Centered Dialog) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-900">Add New Dish</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
                
                {/* Image Upload Area */}
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <ImageIcon size={24} />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Click to upload image</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Dish Name */}
                  <div className="col-span-2 md:col-span-1 space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Dish Name</label>
                    <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="e.g. Chicken Tikka" />
                  </div>

                  {/* Price */}
                  <div className="col-span-2 md:col-span-1 space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Price (₹)</label>
                    <input type="number" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="0.00" />
                  </div>

                  {/* Category */}
                  <div className="col-span-2 md:col-span-1 space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Category</label>
                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none">
                      {CATEGORIES.filter(c => c !== "All").map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>

                  {/* Dietary Type */}
                  <div className="col-span-2 md:col-span-1 space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Dietary Preference</label>
                    <div className="flex gap-4 h-[42px] items-center">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="diet" className="w-4 h-4 text-green-500 focus:ring-green-500" />
                        <span className="text-sm font-medium text-gray-700">Veg</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="diet" className="w-4 h-4 text-red-500 focus:ring-red-500" />
                        <span className="text-sm font-medium text-gray-700">Non-Veg</span>
                      </label>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-span-2 space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">Description</label>
                    <textarea rows={3} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none" placeholder="Brief description of ingredients..." />
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50 mt-auto">
                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                  Cancel
                </button>
                <button className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-all shadow-sm">
                  <Check size={16} />
                  Save Dish
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}