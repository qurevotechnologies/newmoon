"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Map, CheckCircle2, XCircle, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DeliveryBoy from "@/components/ui/DeliveryBoy";

type LocationState = 'idle' | 'requesting' | 'verifying' | 'success' | 'failed' | 'error';

// Restaurant Coordinates: Handwara, J&K
const RESTAURANT_LAT = 34.40049331296672;
const RESTAURANT_LNG = 74.28534926893782;
const MAX_DELIVERY_RADIUS_KM = 5;

export default function DeliveryCheckerPage() {
  const router = useRouter();
  const [locationState, setLocationState] = useState<LocationState>('idle');
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [distanceKm, setDistanceKm] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckDelivery = () => {
    setShowPermissionModal(true);
  };

  const calculateDistance = async (userLat: number, userLng: number) => {
    setLocationState('verifying');
    
    try {
      // Attempt 1: 100% Accurate Road Distance using public OSRM API
      // Note: OSRM expects Longitude, Latitude order
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${RESTAURANT_LNG},${RESTAURANT_LAT};${userLng},${userLat}?overview=false`
      );
      
      if (response.ok) {
        const data = await response.json();
        if (data.routes && data.routes.length > 0) {
          const distanceInMeters = data.routes[0].distance;
          const roadDistanceKm = Number((distanceInMeters / 1000).toFixed(2));
          setDistanceKm(roadDistanceKm);
          setLocationState(roadDistanceKm <= MAX_DELIVERY_RADIUS_KM ? 'success' : 'failed');
          return;
        }
      }
      throw new Error("Routing API failed, falling back to Haversine");

    } catch (error) {
      // Fallback: Haversine Formula (Displacement) + Urban Road Factor (1.3)
      const toRad = (value: number) => (value * Math.PI) / 180;
      const R = 6371; // Earth Radius in KM
      
      const dLat = toRad(userLat - RESTAURANT_LAT);
      const dLon = toRad(userLng - RESTAURANT_LNG);
      
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(RESTAURANT_LAT)) *
        Math.cos(toRad(userLat)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
        
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const displacementKm = R * c;
      
      // Multiply by 1.3 to estimate road distance for a scooter
      const estimatedRoadKm = Number((displacementKm * 1.3).toFixed(2));
      
      setDistanceKm(estimatedRoadKm);
      setLocationState(estimatedRoadKm <= MAX_DELIVERY_RADIUS_KM ? 'success' : 'failed');
    }
  };

  const handleAllowLocation = () => {
    setShowPermissionModal(false);
    setLocationState('requesting');

    if (!navigator.geolocation) {
      setErrorMessage("Geolocation is not supported by your browser");
      setLocationState('error');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        calculateDistance(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        setErrorMessage("Please enable location services in your browser settings to continue.");
        setLocationState('error');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
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
                  We deliver within a 5 KM scooter-route radius of our restaurant in Handwara.
                </p>
                <button 
                  onClick={handleCheckDelivery}
                  className="w-full bg-primary hover:bg-primary/95 text-white py-4 rounded-2xl font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Navigation size={18} /> Use Current Location
                </button>
              </motion.div>
            )}

            {/* STATE: REQUESTING / VERIFYING */}
            {(locationState === 'requesting' || locationState === 'verifying') && (
              <motion.div 
                key="verifying"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center w-full"
              >
                {/* Brand Delivery Boy Loading Animation */}
                <div className="relative w-48 h-32 flex items-center justify-center overflow-hidden mb-4">
                  <div className="absolute bottom-4 w-[200%] h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-secondary w-1/4"
                      animate={{ x: ["-100%", "400%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  {/* We flip him on the X-axis using scale-x-[-1] so he drives to the right */}
                  <DeliveryBoy size="md" animation="driving" className="scale-x-[-1] z-10 relative pb-4" />
                </div>
                
                <h3 className="font-bold text-xl text-primary mb-2">
                  {locationState === 'requesting' ? "Locating you..." : "Calculating Route..."}
                </h3>
                <p className="text-center text-gray-500 text-sm">Please wait while our rider checks the delivery zone.</p>
              </motion.div>
            )}

            {/* STATE: SUCCESS */}
            {locationState === 'success' && distanceKm !== null && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center w-full"
              >
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <CheckCircle2 size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-2xl text-primary mb-2">Great News!</h3>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 w-full mb-8 text-center">
                  <p className="text-sm text-gray-600 mb-1">Your location is approx.</p>
                  <p className="text-lg font-bold text-primary">{distanceKm} KM by road</p>
                  <p className="text-xs text-green-600 font-medium mt-2">Delivery Available</p>
                </div>
                <Link href="/register" className="w-full">
                  <button className="w-full bg-secondary hover:bg-secondary/90 text-primary py-4 rounded-2xl font-bold transition-all shadow-premium flex items-center justify-center gap-2">
                    Continue to Register <ArrowRight size={18} />
                  </button>
                </Link>
              </motion.div>
            )}

            {/* STATE: FAILED */}
            {locationState === 'failed' && distanceKm !== null && (
              <motion.div 
                key="failed"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center w-full"
              >
                <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-6">
                  <XCircle size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-2xl text-primary mb-2">Out of Range</h3>
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 w-full mb-6 text-center">
                  <p className="text-sm text-gray-600 mb-1">Distance:</p>
                  <p className="text-lg font-bold text-primary">{distanceKm} KM by road</p>
                  <p className="text-xs text-red-500 font-medium mt-2">Maximum radius is 5 KM</p>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <button onClick={() => setLocationState('idle')} className="w-full bg-primary text-white py-3.5 rounded-2xl font-semibold transition-all">
                    Try Another Location
                  </button>
                  <Link href="/menu" className="w-full">
                    <button className="w-full bg-white border border-gray-200 text-primary py-3.5 rounded-2xl font-semibold transition-all hover:bg-gray-50">
                      Switch to Pick-up
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}

            {/* STATE: ERROR */}
            {locationState === 'error' && (
              <motion.div 
                key="error"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center w-full"
              >
                <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6">
                  <AlertCircle size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-2xl text-primary mb-2">Location Required</h3>
                <p className="text-center text-gray-500 text-sm mb-6 px-4">
                  {errorMessage}
                </p>
                <button onClick={() => setLocationState('idle')} className="w-full bg-primary text-white py-3.5 rounded-2xl font-semibold transition-all">
                  Try Again
                </button>
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
              <h3 className="font-bold text-xl text-center text-primary mb-2">Location Access Required</h3>
              <p className="text-center text-sm text-gray-500 mb-8">
                We need your GPS coordinates to map the exact driving route and verify delivery availability at your location.
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
                  Allow GPS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}