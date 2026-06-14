"use client";

import { useEffect, useRef, useState } from 'react';

interface CircularGalleryProps {
  items?: Array<{ image: string; text: string }>;
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  fontUrl?: string;
  scrollSpeed?: number;
  scrollEase?: number;
}

export default function CircularGallery(props: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    let app: any;
    
    // We dynamically import the heavily customized React Bits logic 
    // to prevent Next.js SSR from crashing on WebGL variables
    const initGallery = async () => {
      // Because the actual React Bits WebGL code is 300+ lines, we load it safely on the client
      // @ts-ignore
      const { App, resolveFont } = await import('./ogl-gallery-logic');
      
      const resolvedFont = await resolveFont(props.font || 'bold 30px sans-serif', props.fontUrl);
      app = new App(containerRef.current, {
        ...props,
        font: resolvedFont,
      });
    };

    initGallery();

    return () => {
      if (app && typeof app.destroy === 'function') app.destroy();
    };
  }, [isClient, props]);

  if (!isClient) return <div className="w-full h-full bg-primary/5 rounded-3xl animate-pulse" />;

  return <div className="w-full h-full cursor-grab active:cursor-grabbing overflow-hidden rounded-[3rem]" ref={containerRef} />;
}