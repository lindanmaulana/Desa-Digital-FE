import { create } from 'zustand';

interface State {
  emailSubmitted: boolean;
  otpVerified: boolean;
  email: string;
}

interface Action {
  setEmailSubmitted: (val: boolean) => void;
  setOtpVerified: (val: boolean) => void;
  setEmail: (email: string) => void
}

type GuardAuthConfig = State & Action;

export const useGuardAuthStore = create<GuardAuthConfig>((set) => ({
  emailSubmitted: false,
  otpVerified: false,
  email: '',
  setEmailSubmitted: (isEmail: boolean) => set((state) => ({ ...state, emailSubmitted: isEmail })),
  setOtpVerified: (isOtp: boolean) => set((state) => ({ ...state, otpVerified: isOtp })),
  setEmail: (email: string) => set((state) => ({...state, email}))
}));
