"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Map, CheckCircle2, XCircle, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type LocationState = 'idle' | 'requesting' | 'verifying' | 'success' | 'failed';

export default function DeliveryCheckerPage() {
  const router = useRouter();
  const [locationState, setLocationState] = useState<LocationState>('idle');
  const [showPermissionModal, setShowPermissionModal] = useState(false);

  const handleCheckDelivery = () => {
    setShowPermissionModal(true);
  };

  const handleAllowLocation = () => {
    setShowPermissionModal(false);
    setLocationState('verifying');
    
    // Mock the GPS delay and distance calculation logic
    setTimeout(() => {
      // 80% chance of success for mock purposes
      const isDeliverable = Math.random() > 0.2; 
      setLocationState(isDeliverable ? 'success' : 'failed');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pt-8 md:pt-16 pb-20">
      <div className="container mx-auto px-4 max-w-md flex-grow flex flex-col">
        
        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-1/3 h-1.5 bg-secondary rounded-full" />
          <div className="w-1/3 h-1.5 bg-gray-200 rounded-full" />
          <div className="w-1/3 h-1.5 bg-gray-200 rounded-full" />
        </div>

        <div className="text-center mb-8">
          <span className="font-heading italic text-secondary text-xl mb-1 block">Step 1</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">Delivery Check</h1>
          <p className="text-gray-500 text-sm">Let's verify if we can deliver hot and fresh food to your doorstep.</p>
        </div>

        {/* Main Interaction Area */}
        <div className="bg-white rounded-3xl p-6 shadow-premium border border-gray-100 flex-grow flex flex-col items-center justify-center relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {/* STATE: IDLE */}
            {locationState === 'idle' && (
              <motion.div 
                key="idle"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center w-full"
              >
                <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 relative">
                  <Map size={40} strokeWidth={1.5} />
                  <div className="absolute top-2 right-2 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center border-2 border-white">
                    <MapPin size={12} />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-primary mb-2">Find Your Location</h3>
                <p className="text-center text-gray-500 text-sm mb-8 px-4">
                  We deliver within a 5 KM radius of our restaurant in Handwara.
                </p>
                <button 
                  onClick={handleCheckDelivery}
                  className="w-full bg-primary hover:bg-primary/95 text-white py-4 rounded-2xl font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Navigation size={18} /> Use Current Location
                </button>
              </motion.div>
            )}

            {/* STATE: VERIFYING */}
            {locationState === 'verifying' && (
              <motion.div 
                key="verifying"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center w-full"
              >
                <div className="relative w-32 h-32 mb-6">
                  <div className="absolute inset-0 border-4 border-gray-100 rounded-full" />
                  <div className="absolute inset-0 border-4 border-secondary rounded-full border-t-transparent animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center text-secondary">
                    <Navigation size={32} className="animate-pulse" />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-primary mb-2">Calculating Distance...</h3>
                <p className="text-center text-gray-500 text-sm">Please wait while we check our delivery zones.</p>
              </motion.div>
            )}

            {/* STATE: SUCCESS */}
            {locationState === 'success' && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center w-full"
              >
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-success mb-6">
                  <CheckCircle2 size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-2xl text-primary mb-2">Great News!</h3>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 w-full mb-8 text-center">
                  <p className="text-sm text-gray-600 mb-1">Your location is approx.</p>
                  <p className="text-lg font-bold text-primary">2.4 KM away</p>
                  <p className="text-xs text-success font-medium mt-2">Delivery Available</p>
                </div>
                <Link href="/register" className="w-full">
                  <button className="w-full bg-secondary hover:bg-secondary/90 text-primary py-4 rounded-2xl font-bold transition-all shadow-premium flex items-center justify-center gap-2">
                    Continue to Register <ArrowRight size={18} />
                  </button>
                </Link>
              </motion.div>
            )}

            {/* STATE: FAILED */}
            {locationState === 'failed' && (
              <motion.div 
                key="failed"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center w-full"
              >
                <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-danger mb-6">
                  <XCircle size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-2xl text-primary mb-2">Out of Range</h3>
                <p className="text-center text-gray-500 text-sm mb-6 px-4">
                  Sorry, you are currently outside our 5 KM delivery radius.
                </p>
                <div className="w-full flex flex-col gap-3">
                  <button onClick={() => setLocationState('idle')} className="w-full bg-primary text-white py-3.5 rounded-2xl font-semibold transition-all">
                    Try Another Location
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-primary py-3.5 rounded-2xl font-semibold transition-all">
                    Switch to Pick-up
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* Permission Modal */}
      <AnimatePresence>
        {showPermissionModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
              onClick={() => setShowPermissionModal(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl z-10"
            >
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-xl text-center text-primary mb-2">Location Access</h3>
              <p className="text-center text-sm text-gray-500 mb-8">
                We need your location to verify whether delivery is available at your address.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowPermissionModal(false)}
                  className="flex-1 py-3 rounded-xl font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAllowLocation}
                  className="flex-1 bg-primary text-white py-3 rounded-xl font-medium shadow-md transition-transform active:scale-95"
                >
                  Allow
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}