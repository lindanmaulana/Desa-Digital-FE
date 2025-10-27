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
