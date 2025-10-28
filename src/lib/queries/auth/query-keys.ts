const all = ["auth"] as const

export const authKeys = {
  signin: () => [...all, "signin"],
  resend_otp: () => [...all, 'resend-otp'],
  verify_account: () => [...all, "verify-account"]
}
