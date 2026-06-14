"use client";

import { Home, Search, ShoppingBag, User, Ticket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";

export default function BottomNav() {
  const pathname = usePathname();
  const { items } = useCartStore();
  
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Menu", href: "/menu", icon: Search },
    { label: "Offers", href: "/offers", icon: Ticket },
    { label: "Account", href: "/account", icon: User },
  ];

  return (
    <>
      {/* Floating Action Cart (Visible only on mobile when items are in cart) */}
      {cartCount > 0 && pathname !== '/cart' && pathname !== '/payment' && pathname !== '/delivery-checker' && (
        <div className="md:hidden fixed bottom-20 left-4 right-4 z-40">
          <Link href="/cart">
            <div className="bg-primary text-white rounded-2xl p-4 shadow-premium flex items-center justify-between border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="bg-secondary text-primary font-bold w-8 h-8 rounded-full flex items-center justify-center text-xs">
                  {cartCount}
                </div>
                <span className="font-semibold text-sm">View your cart</span>
              </div>
              <ShoppingBag size={20} className="text-secondary" />
            </div>
          </Link>
        </div>
      )}

      {/* Main Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-100 z-50 px-6 py-2 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname === '/' && item.href === '/');
            const Icon = item.icon;

            return (
              <Link key={item.label} href={item.href} className="relative flex flex-col items-center gap-1 p-2">
                <div className={`transition-all duration-300 ${isActive ? 'text-secondary -translate-y-1' : 'text-gray-400'}`}>
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full" />
                  )}
                </div>
                <span className={`text-[9px] font-bold tracking-wider transition-colors uppercase ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}