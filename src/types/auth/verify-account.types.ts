export interface VerifyAccountRequest {
  otp_code: string;
}

export interface ResendOtpVerifyAccountRequest {
  token: string;
}

export interface ResendOtpVerifyAccountResponse {
  email: string;
  otp_last_sent_at: Date;
  otp_expiry_seconds: number;
}

export interface ResendTokenVerifyAccountRequest {
  email: string;
}

export interface ResendTokenVerifyAccountResponse {
  verify_token_last_sen_at: Date | null;
}
