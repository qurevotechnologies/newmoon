"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, Edit3, Info, ArrowRight, ShoppingBag, Bike, PartyPopper, Ticket } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

const VegMark = () => (
  <div className="w-3 h-3 border border-success flex items-center justify-center rounded-sm bg-white">
    <div className="w-1.5 h-1.5 bg-success rounded-full" />
  </div>
);

const NonVegMark = () => (
  <div className="w-3 h-3 border border-danger flex items-center justify-center rounded-sm bg-white">
    <div className="w-1.5 h-1.5 bg-danger rounded-full" />
  </div>
);

export default function CartPage() {
  const { items, updateQuantity, removeItem, getCartTotal } = useCartStore();

  const subtotal = getCartTotal();
  const deliveryCharges = 30; // Mock fixed charge
  const packagingCharges = 10; // Mock fixed charge
  const mockDiscount = subtotal > 500 ? 54 : 0; // Show offer only if subtotal > 500
  
  const totalAmount = subtotal + deliveryCharges + packagingCharges - mockDiscount;

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-background">
        <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary/40 mb-6">
          <ShoppingBag size={48} strokeWidth={1.5} />
        </div>
        <h2 className="font-heading text-3xl font-bold text-primary mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 text-center mb-8 max-w-sm">
          Looks like you haven't added anything to your cart yet. Let's get you some delicious food!
        </p>
        <Link href="/menu">
          <button className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-3.5 rounded-xl font-semibold transition-all shadow-sm">
            Browse Menu
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32 md:pb-12 pt-6">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">Your Cart</h1>
            <p className="text-sm text-gray-500">Review your items and proceed to checkout</p>
          </div>
          <div className="bg-orange-50 border border-orange-100 px-4 py-2 rounded-xl flex flex-col items-center shadow-sm">
            <div className="flex items-center gap-1.5 text-accent font-semibold text-sm">
              <Bike size={16} /> Delivery
            </div>
            <span className="text-[10px] text-orange-600/80 font-medium">Within 5 km</span>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex flex-col gap-4 mb-6">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={item.id} 
                className="bg-white rounded-3xl p-4 shadow-soft border border-gray-100 flex gap-4 relative"
              >
                {/* Item Image */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-50">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                {/* Item Details */}
                <div className="flex flex-col flex-grow py-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-primary leading-tight pr-6">{item.name}</h3>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors bg-red-50 p-1.5 rounded-lg"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
                    {item.isVeg ? <VegMark /> : <NonVegMark />}
                    <span className={`text-[10px] font-medium uppercase tracking-wider ${item.isVeg ? 'text-success' : 'text-danger'}`}>
                      {item.isVeg ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 line-clamp-2 mb-3 pr-8">{item.description}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-primary">₹{item.price}</span>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-full px-1 py-1 shadow-sm">
                      <button 
                        onClick={() => {
                          if (item.quantity > 1) updateQuantity(item.id, item.quantity - 1);
                          else removeItem(item.id);
                        }}
                        className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-primary shadow-sm active:scale-95 transition-transform"
                      >
                        <Minus size={14} strokeWidth={2.5} />
                      </button>
                      <span className="font-semibold text-sm w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-primary shadow-sm active:scale-95 transition-transform"
                      >
                        <Plus size={14} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Special Instructions */}
        <div className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100 flex items-center justify-between mb-8 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-xl text-primary">
              <Edit3 size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-primary">Special Instructions</h4>
              <p className="text-xs text-gray-500">Add a note for the restaurant (optional)</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-gray-400" />
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 mb-6">
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal ({items.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
              <span className="font-medium">₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 flex items-center gap-1">
                Delivery Charges <Info size={14} className="text-gray-400" />
              </span>
              <span className="font-medium">₹{deliveryCharges}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Packaging Charges</span>
              <span className="font-medium">₹{packagingCharges}</span>
            </div>
          </div>
          
          <div className="h-[1px] w-full bg-gray-100 mb-6" />
          
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-lg text-primary">Total Amount</span>
            <span className="font-bold text-2xl text-secondary">₹{totalAmount}</span>
          </div>
        </div>

        {/* Discount Badge */}
        {mockDiscount > 0 && (
          <div className="bg-green-50 border border-green-100 rounded-2xl p-4 mb-8 flex items-center justify-between">
            <div className="flex items-start gap-3">
              <Ticket className="text-success mt-0.5" size={20} />
              <div>
                <h4 className="font-semibold text-success text-sm flex items-center gap-1">
                  Yay! You saved ₹{mockDiscount} on this order
                </h4>
                <p className="text-xs text-success/80 mt-0.5 flex items-center gap-1">
                  with our special offers <PartyPopper size={12} />
                </p>
              </div>
            </div>
            <button className="text-success text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:underline">
              View offers <ArrowRight size={12} />
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Link href="/delivery-checker">
            <button className="w-full bg-primary hover:bg-primary/95 text-white py-4 rounded-2xl font-semibold text-lg transition-all shadow-premium flex items-center justify-center gap-2">
              Proceed to Checkout <ArrowRight size={20} className="bg-white/20 rounded-full p-1" />
            </button>
          </Link>
          <Link href="/menu">
            <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-primary py-4 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2">
              <ShoppingBag size={18} /> Continue Shopping
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}