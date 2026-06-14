"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Search, Plus, Download, Filter, MoreHorizontal, 
  Mail, Star, TrendingUp, Users, ArrowUpDown, ChevronLeft, ChevronRight
} from "lucide-react";

// --- MOCK DATA ---
const MOCK_CUSTOMERS = [
  {
    id: "CUS-001",
    name: "Aisha Rahman",
    email: "aisha.r@example.com",
    phone: "+91 98765 43210",
    orders: 24,
    ltv: 12450, // Lifetime Value
    points: 1200,
    status: "VIP",
    lastOrder: "2 hours ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
  {
    id: "CUS-002",
    name: "Tariq Bhat",
    email: "tariq.bhat88@example.com",
    phone: "+91 91234 56789",
    orders: 3,
    ltv: 1850,
    points: 150,
    status: "Active",
    lastOrder: "1 day ago",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
  },
  {
    id: "CUS-003",
    name: "Zoya Khan",
    email: "zoya.khan.designs@example.com",
    phone: "+91 99887 76655",
    orders: 1,
    ltv: 450,
    points: 45,
    status: "New",
    lastOrder: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: "CUS-004",
    name: "Imran Dar",
    email: "idar_tech@example.com",
    phone: "+91 98765 11223",
    orders: 12,
    ltv: 8900,
    points: 890,
    status: "Active",
    lastOrder: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: "CUS-005",
    name: "Mehwish Mir",
    email: "mehwish.mir@example.com",
    phone: "+91 97766 55443",
    orders: 0,
    ltv: 0,
    points: 0,
    status: "Inactive",
    lastOrder: "2 months ago",
    avatar: null
  }
];

export default function CustomersSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("All");

  const TABS = ["All", "VIP", "Active", "New", "Inactive"];

  // Toggle selection for bulk actions
  const toggleSelection = (id: string) => {
    setSelectedCustomers(prev => 
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedCustomers.length === MOCK_CUSTOMERS.length) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(MOCK_CUSTOMERS.map(c => c.id));
    }
  };

  // Status Badge Styling Logic
  const getStatusStyle = (status: string) => {
    switch(status) {
      case "VIP": return "bg-amber-100 text-amber-700 border-amber-200";
      case "Active": return "bg-green-100 text-green-700 border-green-200";
      case "New": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Inactive": return "bg-gray-100 text-gray-600 border-gray-200";
      default: return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Customers</h1>
            <p className="text-sm text-gray-500 mt-1">Manage client profiles, track lifetime value, and reward loyalty.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all shadow-sm">
              <Download size={16} />
              Export CSV
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <Plus size={16} />
              Add Customer
            </button>
          </div>
        </div>

        {/* TOP BRAND METRICS (KPIs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Customers", value: "2,845", trend: "+12% this month", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Average LTV", value: "₹4,250", trend: "+5% vs last month", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
            { label: "VIP Members", value: "156", trend: "Top 5% of spenders", icon: Star, color: "text-amber-600", bg: "bg-amber-50" },
            { label: "Email Subscribers", value: "1,920", trend: "68% opt-in rate", icon: Mail, color: "text-purple-600", bg: "bg-purple-50" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col group hover:border-primary/20 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon size={20} />
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
                <p className="text-xs text-gray-400 mt-2 font-light">{stat.trend}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TOOLBAR & DATA TABLE CONTAINER */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          
          {/* Toolbar (Search, Filter, Tabs) */}
          <div className="p-4 border-b border-gray-100 space-y-4">
            {/* Tabs & Search Row */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              
              {/* Dynamic Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 w-full lg:w-auto scrollbar-hide">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab 
                        ? "bg-gray-100 text-gray-900" 
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search & Filter */}
              <div className="flex items-center gap-3 w-full lg:w-auto">
                <div className="relative w-full lg:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search name, email, phone..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors shrink-0">
                  <Filter size={16} />
                  <span className="hidden sm:inline">Filters</span>
                </button>
              </div>
            </div>

            {/* Bulk Actions Bar (Appears when items are selected) */}
            {selectedCustomers.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-primary/5 border border-primary/20 rounded-xl p-3 flex items-center justify-between"
              >
                <span className="text-sm font-medium text-primary ml-2">
                  {selectedCustomers.length} customer{selectedCustomers.length > 1 ? 's' : ''} selected
                </span>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-white text-gray-700 border border-gray-200 rounded-lg text-xs font-medium hover:bg-gray-50 shadow-sm">Send Email</button>
                  <button className="px-3 py-1.5 bg-white text-gray-700 border border-gray-200 rounded-lg text-xs font-medium hover:bg-gray-50 shadow-sm">Add Tags</button>
                  <button className="px-3 py-1.5 bg-white text-red-600 border border-gray-200 rounded-lg text-xs font-medium hover:bg-red-50 shadow-sm">Delete</button>
                </div>
              </motion.div>
            )}
          </div>

          {/* TABLE DATA */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  <th className="px-6 py-4 w-12">
                    <input 
                      type="checkbox" 
                      checked={selectedCustomers.length === MOCK_CUSTOMERS.length}
                      onChange={selectAll}
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20 cursor-pointer" 
                    />
                  </th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Contact</th>
                  <th className="px-6 py-4 cursor-pointer hover:text-gray-700 group">
                    <div className="flex items-center gap-1">Orders <ArrowUpDown size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                  </th>
                  <th className="px-6 py-4 cursor-pointer hover:text-gray-700 group">
                    <div className="flex items-center gap-1">LTV <ArrowUpDown size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                  </th>
                  <th className="px-6 py-4">Loyalty</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_CUSTOMERS.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        checked={selectedCustomers.includes(customer.id)}
                        onChange={() => toggleSelection(customer.id)}
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary/20 cursor-pointer" 
                      />
                    </td>
                    
                    {/* Customer Profile Cell */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary font-bold text-sm shrink-0 overflow-hidden border border-gray-200">
                          {customer.avatar ? (
                            <Image src={customer.avatar} alt={customer.name} fill className="object-cover" />
                          ) : (
                            customer.name.charAt(0)
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{customer.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">Last order: {customer.lastOrder}</div>
                        </div>
                      </div>
                    </td>

                    {/* Contact Info */}
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{customer.email}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{customer.phone}</div>
                    </td>

                    {/* Orders */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-900">{customer.orders}</span>
                    </td>

                    {/* Lifetime Value (LTV) */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-gray-900">₹{customer.ltv.toLocaleString()}</span>
                    </td>

                    {/* Loyalty Points */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <Star size={14} className={customer.points > 0 ? "text-amber-500 fill-amber-500" : "text-gray-300"} />
                        <span className="text-sm text-gray-700 font-medium">{customer.points} pts</span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${getStatusStyle(customer.status)}`}>
                        {customer.status}
                      </span>
                    </td>

                    {/* Actions Menu */}
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TABLE PAGINATION */}
          <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
            <span className="text-sm text-gray-500">Showing 1 to 5 of 2,845 customers</span>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                <ChevronLeft size={18} />
              </button>
              <button className="px-3 py-1 rounded-lg bg-primary text-white text-sm font-medium shadow-sm">1</button>
              <button className="px-3 py-1 rounded-lg hover:bg-gray-100 text-sm text-gray-600 font-medium">2</button>
              <button className="px-3 py-1 rounded-lg hover:bg-gray-100 text-sm text-gray-600 font-medium">3</button>
              <span className="px-2 text-gray-400">...</span>
              <button className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}