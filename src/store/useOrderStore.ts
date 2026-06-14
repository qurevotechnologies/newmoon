import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '@/types';

export type OrderStatus = 'Pending' | 'Verified' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  date: string;
  utr?: string;
}

interface OrderState {
  orders: Order[];
  placeOrder: (items: CartItem[], total: number, utr: string) => string;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  getUserOrders: () => Order[];
  getAdminOrders: () => Order[];
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [
        // Inject a mock active order for UI population
        {
          id: '1025',
          items: [{ id: '15', name: 'White Sauce Pasta', price: 199, quantity: 2, category: 'Fast Food', isVeg: true, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800', description: '' }],
          total: 438,
          status: 'Preparing',
          date: new Date().toISOString(),
          utr: '123456789012'
        }
      ],

      placeOrder: (items, total, utr) => {
        const newOrderId = Math.floor(1000 + Math.random() * 9000).toString();
        const newOrder: Order = {
          id: newOrderId,
          items,
          total,
          status: 'Pending',
          date: new Date().toISOString(),
          utr,
        };
        set((state) => ({ orders: [newOrder, ...state.orders] }));
        return newOrderId;
      },

      updateOrderStatus: (id, status) => {
        set((state) => ({
          orders: state.orders.map((o) => (o.id === id ? { ...o, status } : o)),
        }));
      },

      getUserOrders: () => get().orders,
      getAdminOrders: () => get().orders, // In a real app, this would fetch all users' orders
    }),
    { name: 'newmoon-orders' }
  )
);