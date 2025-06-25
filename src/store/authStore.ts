import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  language: 'es' | 'en';
  setUser: (user: User | null) => void;
  setLanguage: (language: 'es' | 'en') => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  language: 'es',
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setLanguage: (language) => set({ language }),
  logout: () => set({ user: null, isAuthenticated: false })
}));