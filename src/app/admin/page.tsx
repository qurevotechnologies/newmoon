"use client";

import { useOrderStore, OrderStatus } from "@/store/useOrderStore";
import { Clock, ChefHat, Bike, PackageOpen, ChevronDown, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const { orders, updateOrderStatus } = useOrderStore();
  const [isMounted, setIsMounted] = useState(false);

  // Hydration Fix: Wait for the client to mount before rendering local storage/dates
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-secondary" />
      </div>
    );
  }

  const pendingOrders = orders.filter(o => o.status === 'Pending').length;
  const preparingOrders = orders.filter(o => o.status === 'Preparing' || o.status === 'Verified').length;
  const deliveryOrders = orders.filter(o => o.status === 'Out for Delivery').length;

  const stats = [
    { label: "New / Pending", value: pendingOrders.toString(), icon: AlertCircle, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
    { label: "In Kitchen", value: preparingOrders.toString(), icon: ChefHat, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
    { label: "Out for Delivery", value: deliveryOrders.toString(), icon: Bike, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
  ];

  const handleStatusChange = (id: string, newStatus: string) => {
    updateOrderStatus(id, newStatus as OrderStatus);
  };

  const getStatusBadge = (status: OrderStatus) => {
    switch(status) {
      case 'Pending': return "bg-red-100 text-red-700 border-red-200";
      case 'Verified': return "bg-blue-100 text-blue-700 border-blue-200";
      case 'Preparing': return "bg-orange-100 text-orange-700 border-orange-200";
      case 'Out for Delivery': return "bg-purple-100 text-purple-700 border-purple-200";
      case 'Delivered': return "bg-green-100 text-green-700 border-green-200";
      case 'Cancelled': return "bg-gray-100 text-gray-700 border-gray-200";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-primary mb-2">Live Orders</h1>
        <p className="text-gray-500">Monitor and manage incoming requests in real-time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
            key={idx} className={`p-6 rounded-3xl shadow-sm border ${stat.border} ${stat.bg} flex items-center gap-5`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm ${stat.color}`}>
              <stat.icon size={28} strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-bold uppercase tracking-wider mb-1">{stat.label}</p>
              <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="font-bold text-primary text-xl mb-4 flex items-center gap-2">
          <Clock size={20} className="text-secondary" /> Active Queue
        </h2>
        
        <AnimatePresence>
          {orders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled').map((order) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              key={order.id} 
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-soft flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden group hover:border-secondary/30 transition-colors"
            >
              {order.status === 'Pending' && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500" />}

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-heading font-bold text-2xl text-primary">#{order.id}</h3>
                  <span className="text-sm font-medium text-gray-400 flex items-center gap-1">
                    <Clock size={14} /> 
                    {new Date(order.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusBadge(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                {order.utr && (
                  <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-600 mb-4">
                    <span className="text-gray-400 font-sans font-bold text-[10px] uppercase tracking-widest">UTR Verified:</span> {order.utr}
                  </div>
                )}

                <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100">
                  <ul className="space-y-2">
                    {order.items.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-primary">
                          <span className="text-secondary mr-2">{item.quantity}x</span> 
                          {item.name}
                        </span>
                        <span className="text-gray-500 font-medium">₹{item.price * item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Value</span>
                    <span className="font-bold text-lg text-primary">₹{order.total}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:w-64 shrink-0 border-t lg:border-t-0 border-gray-100 pt-4 lg:pt-0">
                <label className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Update Order Status</label>
                <div className="relative">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="w-full pl-4 pr-10 py-3.5 bg-white border-2 border-gray-100 hover:border-secondary/50 rounded-xl text-sm font-bold text-primary focus:outline-none focus:border-secondary appearance-none cursor-pointer shadow-sm transition-colors"
                  >
                    <option value="Pending">Pending Approval</option>
                    <option value="Verified">Payment Verified</option>
                    <option value="Preparing">Preparing in Kitchen</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Mark Delivered</option>
                    <option value="Cancelled">Cancel Order</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                
                {order.status === 'Pending' && (
                  <button onClick={() => handleStatusChange(order.id, 'Preparing')} className="w-full bg-secondary hover:bg-secondary/90 text-primary py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm">
                    <CheckCircle2 size={18} /> Accept & Start
                  </button>
                )}
                {order.status === 'Preparing' && (
                  <button onClick={() => handleStatusChange(order.id, 'Out for Delivery')} className="w-full bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm">
                    <Bike size={18} /> Send to Delivery
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {orders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled').length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <PackageOpen size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="font-bold text-primary text-xl mb-2">Queue is clear</h3>
            <p className="text-gray-500 text-sm">No active orders at the moment. Time for a breather!</p>
          </div>
        )}
      </div>
    </div>
  );
}