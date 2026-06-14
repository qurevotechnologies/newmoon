"use client";

import { useState } from "react";
import { QrCode, Copy, ArrowRight, ShieldCheck, CheckCircle2, Info } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useOrderStore } from "@/store/useOrderStore";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();
  const { items, getCartTotal, clearCart } = useCartStore();
  const { placeOrder } = useOrderStore(); // Bring in the order store
  
  const [utr, setUtr] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const subtotal = getCartTotal();
  const total = subtotal > 0 ? subtotal + 40 : 0;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText("newmoon@upi");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (utr.length < 12) return;

    setIsSubmitting(true);
    
    // Mock processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      // 1. Save the order to global state
      placeOrder(items, total, utr);
      // 2. Clear the user's cart
      clearCart(); 
      // 3. Redirect to tracking
      router.push("/order-tracking");
    }, 2000);
  };

  if (subtotal === 0) {
    router.push("/menu");
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Payment Details & QR */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-soft border border-gray-100">
            <h1 className="font-heading text-3xl font-bold text-primary mb-2">Secure Payment</h1>
            <p className="text-gray-500 text-sm mb-8">Scan the QR code below using any UPI app to make the payment.</p>

            <div className="flex flex-col items-center bg-gray-50 rounded-3xl p-8 border border-gray-100 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 border border-gray-200">
                <QrCode size={160} className="text-primary opacity-80" strokeWidth={1} />
              </div>

              <div className="text-center w-full max-w-xs">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Amount to Pay</p>
                <div className="text-4xl font-bold text-primary mb-6">₹{total}</div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-between shadow-sm">
                  <span className="font-medium text-sm text-gray-700">newmoon@upi</span>
                  <button 
                    onClick={handleCopyUPI}
                    className="text-secondary hover:text-primary transition-colors flex items-center gap-1 text-xs font-bold uppercase"
                  >
                    {copied ? <CheckCircle2 size={16} className="text-success" /> : <Copy size={16} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmitPayment} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-gray-700 mb-2">Enter 12-Digit UTR / Reference No.</label>
                <input 
                  type="text" 
                  maxLength={12}
                  placeholder="e.g. 312345678901"
                  value={utr}
                  onChange={(e) => setUtr(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-secondary focus:bg-white transition-all font-mono tracking-wider"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || utr.length < 12}
                className="w-full bg-primary hover:bg-primary/95 text-white py-4 rounded-xl font-bold text-sm transition-all shadow-premium flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? "Verifying Payment..." : "Submit Payment Details"} <ArrowRight size={18} />
              </button>
            </form>
          </div>
          
          <div className="flex items-center gap-3 text-xs text-gray-500 justify-center">
            <ShieldCheck size={16} className="text-success" />
            <span>100% Secure Transaction. We verify payments instantly.</span>
          </div>
        </div>

        {/* Right Column: Billing Summary */}
        <div className="md:col-span-5">
          <div className="bg-white rounded-[2rem] p-6 shadow-soft border border-gray-100 sticky top-24">
            <h3 className="font-bold text-primary text-xl mb-6 flex items-center gap-2">Billing Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cart Subtotal</span><span className="font-medium text-primary">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 flex items-center gap-1">Delivery Fee <Info size={14} className="text-gray-400" /></span><span className="font-medium text-primary">₹30</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Packaging</span><span className="font-medium text-primary">₹10</span>
              </div>
            </div>
            <div className="h-px w-full bg-gray-100 mb-6" />
            <div className="flex justify-between items-center bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <span className="font-bold text-primary">Total Amount</span><span className="font-bold text-2xl text-secondary">₹{total}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}