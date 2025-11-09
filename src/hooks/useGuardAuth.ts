import { useGuardAuthStore } from "@/lib/stores/useGuardAuthStore"

export const useGuardAuth = () => {
  const isEmailSubmit = useGuardAuthStore((state) => state.auth.emailSubmitted)
  const isOtpVerified = useGuardAuthStore((state) => state.auth.otpVerified)
  const email = useGuardAuthStore((state) => state.auth.email)
  const handleSetEmailSubmitted = useGuardAuthStore((state) => state.setEmailSubmitted)
  const handleSetOtpVerified = useGuardAuthStore((state) => state.setOtpVerified)

  return {isEmailSubmit, isOtpVerified, email, handleSetEmailSubmitted, handleSetOtpVerified}
}
