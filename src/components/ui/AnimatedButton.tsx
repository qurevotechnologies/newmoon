"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface AnimatedButtonProps {
  href?: string;
  label: string;
  baseColor?: string;
  pillColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  fillOrigin?: "bottom" | "top" | "left" | "right";
  className?: string;
  onClick?: () => void;
}

export default function AnimatedButton({
  href,
  label,
  baseColor = "#0B1320", // Primary Navy
  pillColor = "#D4A24C", // Secondary Gold
  textColor = "#FFFFFF",
  hoverTextColor = "#0B1320",
  fillOrigin = "bottom",
  className = "",
  onClick
}: AnimatedButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!containerRef.current || !circleRef.current) return;

    const btn = containerRef.current;
    const circle = circleRef.current;
    const labelStack = btn.querySelector('.btn-label-stack');
    const normalLabel = btn.querySelector('.btn-label-normal');
    const hoverLabel = btn.querySelector('.btn-label-hover');

    const rect = btn.getBoundingClientRect();
    const { width: w, height: h } = rect;
    
    // Calculate circle size to perfectly cover the button
    const R = Math.sqrt(w * w + h * h);
    circle.style.width = `${R * 2}px`;
    circle.style.height = `${R * 2}px`;

    // Set origin based on prop
    let xOffset = "-50%";
    let yOffset = "-50%";
    
    if (fillOrigin === "bottom") { yOffset = "0%"; circle.style.bottom = `-${R}px`; circle.style.left = "50%"; }
    if (fillOrigin === "top") { yOffset = "-100%"; circle.style.top = `-${R}px`; circle.style.left = "50%"; }
    if (fillOrigin === "left") { xOffset = "-100%"; circle.style.left = `-${R}px`; circle.style.top = "50%"; }
    if (fillOrigin === "right") { xOffset = "0%"; circle.style.right = `-${R}px`; circle.style.top = "50%"; }

    gsap.set(circle, { xPercent: -50, yPercent: -50, scale: 0 });
    if (fillOrigin === "bottom" || fillOrigin === "top") gsap.set(circle, { xPercent: -50, yPercent: fillOrigin === "bottom" ? 0 : -100 });
    if (fillOrigin === "left" || fillOrigin === "right") gsap.set(circle, { xPercent: fillOrigin === "left" ? -100 : 0, yPercent: -50 });

    if (normalLabel) gsap.set(normalLabel, { y: 0 });
    if (hoverLabel) gsap.set(hoverLabel, { y: h + 10, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(circle, { scale: 1, duration: 0.4, ease: "power3.inOut" }, 0);

    if (normalLabel) tl.to(normalLabel, { y: -(h + 10), duration: 0.4, ease: "power3.inOut" }, 0);
    if (hoverLabel) {
      gsap.set(hoverLabel, { y: h + 10, opacity: 0 });
      tl.to(hoverLabel, { y: 0, opacity: 1, duration: 0.4, ease: "power3.inOut" }, 0);
    }

    tlRef.current = tl;
  }, [fillOrigin]);

  const handleEnter = () => {
    if (!tlRef.current) return;
    tweenRef.current?.kill();
    tweenRef.current = tlRef.current.tweenTo(tlRef.current.duration(), { duration: 0.4, ease: "power3.out", overwrite: 'auto' });
  };

  const handleLeave = () => {
    if (!tlRef.current) return;
    tweenRef.current?.kill();
    tweenRef.current = tlRef.current.tweenTo(0, { duration: 0.3, ease: "power3.out", overwrite: 'auto' });
  };

  const content = (
    <>
      <span className="absolute z-0 block rounded-full pointer-events-none will-change-transform" style={{ backgroundColor: baseColor }} ref={circleRef} />
      <span className="relative z-10 block overflow-hidden leading-none btn-label-stack">
        <span className="relative z-10 block will-change-transform btn-label-normal">{label}</span>
        <span className="absolute top-0 left-0 z-20 block will-change-transform btn-label-hover" style={{ color: hoverTextColor }}>{label}</span>
      </span>
    </>
  );

  const wrapperClass = `relative inline-flex items-center justify-center overflow-hidden font-bold uppercase tracking-widest rounded-full cursor-pointer select-none ${className}`;

  if (href) {
    return (
      <Link href={href} className={wrapperClass} style={{ backgroundColor: pillColor, color: textColor }} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={onClick}>
        <div ref={containerRef as any} className="w-full h-full flex items-center justify-center px-8 py-4">
          {content}
        </div>
      </Link>
    );
  }

  return (
    <button className={wrapperClass} style={{ backgroundColor: pillColor, color: textColor }} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={onClick}>
      <div ref={containerRef as any} className="w-full h-full flex items-center justify-center px-8 py-4">
        {content}
      </div>
    </button>
  );
}