import { useGuardAuthStore } from "@/lib/stores/useGuardAuthStore"

export const useGuardAuth = () => {
  const email = useGuardAuthStore((state) => state.email)
  const isEmailSubmit = useGuardAuthStore((state) => state.emailSubmitted)
  const isOtpVerified = useGuardAuthStore((state) => state.otpVerified)

  return {email, isEmailSubmit, isOtpVerified}
}
