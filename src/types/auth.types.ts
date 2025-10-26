export interface signinAuthRequest {
  email: string;
  password: string;
}

export interface signinAuthResponse {
  email: string;
  id: string;
  is_active: boolean;
  is_first_login: boolean;
  name: string;
  role: string;
  created_at: string;
  updated_at: string;
}
