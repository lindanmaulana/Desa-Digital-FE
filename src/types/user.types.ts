export type UserRole = "ADMIN" | "STAFF" | "HEAD_OF_FAMILY" | "RESIDENT"

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  otp_code?: string | null;
  otp_last_sen_at?: Date;
  is_active: boolean;
  is_first_login: boolean;

  created_at: Date;
  updated_at: Date;
}
