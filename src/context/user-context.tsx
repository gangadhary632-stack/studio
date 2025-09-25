"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
}

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  login: (name: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('brainblitz_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('brainblitz_user');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (name: string) => {
    const newUser = { name };
    localStorage.setItem('brainblitz_user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('brainblitz_user');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
