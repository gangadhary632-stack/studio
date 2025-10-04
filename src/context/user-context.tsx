"use client";

import { createContext, useContext, ReactNode } from 'react';
import { User } from 'firebase/auth';
import { useUser as useFirebaseUser, UserHookResult } from '@/firebase';

// The context will now provide the User object from Firebase,
// along with the loading state and any potential errors.
type UserContextType = UserHookResult;

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const userHookResult = useFirebaseUser();

  return (
    <UserContext.Provider value={userHookResult}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
