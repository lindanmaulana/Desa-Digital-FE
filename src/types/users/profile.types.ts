import type { QueryObserverBaseResult } from '@tanstack/react-query';
import type { UserRole } from './user.types';
import type { Image } from '../images/image.types';

export interface ProfileUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  otp_code?: string | null;
  otp_last_sen_at?: Date;
  is_active: boolean;
  is_first_login: boolean;
  image: Image
  created_at: Date;
  updated_at: Date;
}

export type ProfileUserResponse = QueryObserverBaseResult<ProfileUser>
