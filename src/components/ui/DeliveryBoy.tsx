"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface DeliveryBoyProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animation?: "driving" | "floating" | "drive-across";
}

export default function DeliveryBoy({ 
  className = "", 
  size = "md", 
  animation = "driving" 
}: DeliveryBoyProps) {
  
  // Responsive sizing mapping
  const sizeClasses = {
    sm: "w-20 h-20 md:w-24 md:h-24",
    md: "w-32 h-32 md:w-48 md:h-48",
    lg: "w-48 h-48 md:w-64 md:h-64",
    xl: "w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]", // Massive for Hero
  };

  // Framer Motion Animation Variants
  const animations: Variants = {
    // Simulates driving over small road bumps
    driving: {
      y: [0, -6, 0, -3, 0],
      rotate: [0, -2, 0, 1, 0],
      transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
    },
    // Smooth floating for non-urgent areas
    floating: {
      y: [0, -15, 0],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
    },
    // Drives completely across the screen (Good for loaders)
    "drive-across": {
      x: ["-100%", "200%"],
      y: [0, -4, 0, -2, 0],
      transition: { 
        x: { duration: 3, repeat: Infinity, ease: "linear" },
        y: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
      }
    }
  };

  return (
    <motion.div 
      className={`relative ${sizeClasses[size]} ${className}`}
      variants={animations}
      animate={animation}
    >
      <Image 
        src="https://res.cloudinary.com/dpqsadqxj/image/upload/q_auto/f_auto/v1781438314/c77b1ff4-0952-467c-8131-fe4a9fa72e8a.png"
        alt="New Moon Delivery Rider"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain drop-shadow-2xl"
        priority
      />
    </motion.div>
  );
}