"use client";

import { useState } from "react";
import { useOrderStore, OrderStatus } from "@/store/useOrderStore";
import { Search, ChevronDown, CheckCircle2, PackageOpen, Bike, ChefHat, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminOrdersPage() {
  const { orders, updateOrderStatus } = useOrderStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<OrderStatus | 'All'>('All');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.includes(searchQuery) || (order.utr && order.utr.includes(searchQuery));
    const matchesFilter = filter === 'All' || order.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status: OrderStatus) => {
    switch(status) {
      case 'Pending': return <Clock size={16} className="text-yellow-500" />;
      case 'Verified': return <CheckCircle2 size={16} className="text-blue-500" />;
      case 'Preparing': return <ChefHat size={16} className="text-orange-500" />;
      case 'Out for Delivery': return <Bike size={16} className="text-purple-500" />;
      case 'Delivered': return <PackageOpen size={16} className="text-green-500" />;
      default: return null;
    }
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    updateOrderStatus(id, newStatus as OrderStatus);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-primary mb-2">Order Management</h1>
          <p className="text-gray-500">Verify payments and update delivery statuses.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" placeholder="Search ID or UTR..."
              className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-secondary shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-secondary shadow-sm font-medium"
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
          >
            <option value="All">All Orders</option>
            <option value="Pending">Pending</option>
            <option value="Verified">Verified</option>
            <option value="Preparing">Preparing</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {filteredOrders.map((order) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              key={order.id} 
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              {/* Order Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg text-primary">#{order.id}</h3>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-md">
                    {new Date(order.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {order.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}
                </div>
                {order.utr && (
                  <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-600">
                    <span className="text-gray-400">UTR:</span> {order.utr}
                  </div>
                )}
              </div>

              {/* Price & Status Controls */}
              <div className="flex items-center justify-between md:justify-end gap-6 md:w-auto w-full border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-1">Total</p>
                  <p className="font-bold text-xl text-primary">₹{order.total}</p>
                </div>
                
                <div className="w-px h-12 bg-gray-100 hidden md:block" />

                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-1">Update Status</p>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      {getStatusIcon(order.status)}
                    </div>
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className="pl-9 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-primary focus:outline-none focus:border-secondary appearance-none cursor-pointer"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Verified">Verified</option>
                      <option value="Preparing">Preparing</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredOrders.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <PackageOpen size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="font-bold text-primary text-xl mb-2">No orders found</h3>
            <p className="text-gray-500 text-sm">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}