import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MOCK_USER } from '@/lib/mock-data';

interface User {
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, isOTPVerified: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isAdmin: false,

      login: (email, isOTPVerified) => {
        if (isOTPVerified) {
          // Hardcode an admin bypass for testing the admin panel
          const role = email === 'admin@newmoon.com' ? 'admin' : 'user';
          set({
            user: { name: MOCK_USER.name, email, phone: MOCK_USER.phone, role },
            isAuthenticated: true,
            isAdmin: role === 'admin',
          });
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false, isAdmin: false });
      },
    }),
    { name: 'newmoon-auth' }
  )
);