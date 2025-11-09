const all = ['auth'] as const;

export const authKeys = {
  signin: () => [...all, 'signin'],
  verification_account: {
    resend: {
      token: () => [...all, 'verification-account', 'resend', 'token'],
      otp: () => [...all, 'verification-account', 'resend', 'otp'],
    },
  },
  forgot_password: {
    index: () => [...all, "forgot-password"],
    verify_otp: () => [...all, "forgot-password", "verify-otp"],
    resend: {
      token: () => [...all, 'forgot-password', 'resend', 'token'],
      otp: () => [...all, 'forgot-password', 'resend', 'otp'],
    },

    reset_password: () => [...all, "forgot-password", "reset"]
  },
  resend_otp: () => [...all, 'resend-otp'],
  resend_verify_token: () => [...all, 'resend-verify-token'],
  verify_account: () => [...all, 'verify-account'],
  // forgot_password: () => [...all, 'forgot-password'],
  resend_forgot_password: () => [...all, 'resend-forgot-password'],
};
