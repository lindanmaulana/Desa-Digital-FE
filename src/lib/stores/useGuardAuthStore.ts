import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthFlow {
  emailSubmitted: boolean;
  otpVerified: boolean;
  email: string
}

interface State {
  auth: AuthFlow;
}

interface Action {
  setEmailSubmitted: (val: boolean, mail: string) => void;
  setOtpVerified: (val: boolean) => void;
  reset: () => void;
}

type GuardAuthConfig = State & Action;

export const useGuardAuthStore = create<GuardAuthConfig>()(
  persist(
    (set) => ({
      auth: {
        emailSubmitted: false,
        otpVerified: false,
        email: ""
      },

      setEmailSubmitted: (isEmail: boolean, mail: string) => set((state) => ({ auth: { ...state.auth, emailSubmitted: isEmail, email: mail } })),
      setOtpVerified: (isOtp: boolean) => set((state) => ({ auth: { ...state.auth, otpVerified: isOtp } })),
      reset: () => set((state) => ({ auth: { ...state.auth, emailSubmitted: false, otpVerified: false } })),
    }),
    {
      name: 'auth-flow',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
