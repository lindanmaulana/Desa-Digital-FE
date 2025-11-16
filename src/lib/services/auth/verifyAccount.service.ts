import { api } from '@/lib/axios-instance';
import { errorHandler } from '@/lib/helpers';
import type { ResendOtpVerifyAccountRequest, ResendOtpVerifyAccountResponse, ResendTokenVerifyAccountRequest, ResendTokenVerifyAccountResponse, VerifyAccountRequest } from '@/types/auth/verify-account.types';
import type { Response } from '@/types/response.types';
import type { User } from '@/types/users/user.types';

export const verifyAccountService = {
  verify: async (req: VerifyAccountRequest): Promise<Response<User>> => {
    try {
      const response = await api.post('/auth/verify-account/verify', req);

      return response.data;
    } catch (err) {
      const errorMessage = errorHandler(err);

      throw new Error(errorMessage);
    }
  },

  resendToken: async (req: ResendTokenVerifyAccountRequest): Promise<Response<ResendTokenVerifyAccountResponse>> => {
    try {
      const response = await api.post('/auth/verify-account/resend-token', req);

      return response.data;
    } catch (err) {
      const errorMessage = errorHandler(err);

      throw new Error(errorMessage);
    }
  },

  resendOtp: async (req: ResendOtpVerifyAccountRequest): Promise<Response<ResendOtpVerifyAccountResponse>> => {
    try {
      const response = await api.post('/auth/verify-account/resend-otp', req);

      return response.data;
    } catch (err) {
      const errorMessage = errorHandler(err);

      throw new Error(errorMessage);
    }
  },
};
