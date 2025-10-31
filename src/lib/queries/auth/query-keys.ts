const all = ["auth"] as const

export const authKeys = {
  signin: () => [...all, "signin"],
  resend_otp: () => [...all, 'resend-otp'],
  resend_verify_token: () => [...all, 'resend-verify-token'],
  verify_account: () => [...all, "verify-account"]
}
