import type { FieldValues, Noop, UseFormReturn } from "react-hook-form";

export interface Session {
  id: string;
  name: string;
  email: string;
  role: string;
  is_active: boolean;
  is_first_login: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuthFormSubmissingProps<T extends FieldValues> {
  formMethods: UseFormReturn<T>
  handleForm: Noop
  isPending: boolean
}

export interface SigninAuthRequest {
  email: string;
  password: string;
}

export interface SigninAuthResponse {
  email: string;
  id: string;
  is_active: boolean;
  is_first_login: boolean;
  name: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface VerifyAccountRequest {
  otp_code: string;
}

export interface ResendOtpRequest {
  token: string;
}

export interface ResendOtpResponse {
  email: string;
  otp_last_sent_at: Date;
  otp_expiry_seconds: number
}

export interface ResendVerifyAccountRequest {
  email: string;
}

export interface ResendVerifyAccountResponse {
  verify_token_last_sen_at: Date | null
}
