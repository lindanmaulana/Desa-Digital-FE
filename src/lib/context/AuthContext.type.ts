import { createContext } from "react";

export interface ActionContext {
  handleEmailSubmitted: (val: boolean) => void
  handleOtpVerified: (val: boolean) => void
}

export interface StateContext {
  emailSubmitted: boolean;
  otpVerified: boolean;
  useEmail: string
}

export type AuthContext = StateContext & ActionContext

export const AuthContext = createContext<AuthContext | null>(null)
