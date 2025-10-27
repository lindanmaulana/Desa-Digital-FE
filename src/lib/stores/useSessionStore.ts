import type { Session } from '@/types/auth.types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';


interface State {
  session: Session | null;
}

interface Action {
  setSessionUser: (req: Session) => void;
}

type UserStoreConfig = State & Action;

export const useSessionStore = create<UserStoreConfig>()(
  persist(
    (set) => ({
      session: null,
      setSessionUser: (req: Session) => set({ session: req }),
    }),
    {
      name: 'session-user',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
