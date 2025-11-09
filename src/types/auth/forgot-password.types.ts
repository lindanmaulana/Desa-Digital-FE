export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  email: string;
  otp_last_sent_at: Date;
  otp_expiry_seconds?: number;
}

export interface VerifyOtpForgotPasswordRequest {
  email: string;
  otp_code: string
}

export interface VerifyOtpForgotPasswordResponse {
  verify_token_last_sen_at: Date | null
}

export interface ResendOtpForgotPasswordRequest {
  email: string;
}

export interface ResendOtpForgotPasswordResponse {
  email: string;
  otp_last_sent_at: Date;
  otp_expiry_seconds: number;
}

export interface ResetPasswordForgotPasswordRequest {
  token: string
  password: string
  confirm_password: string
}
