'use client';
import { createContext, useContext } from 'react';

interface IAuthContext {
  user: any;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthContext');
  }
  return context;
};

interface AuthContextProviderProps {
  children: React.ReactNode;
  user: any;
}

export function AuthContextProvider({ children, user }: AuthContextProviderProps) {
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}
