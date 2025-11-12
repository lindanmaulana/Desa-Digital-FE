import { api } from '@/lib/axios-instance';
import { errorHandler } from '@/lib/helpers';
import type { ForgotPasswordRequest, ForgotPasswordResponse, ResetPasswordForgotPasswordRequest, VerifyOtpForgotPasswordRequest, VerifyOtpForgotPasswordResponse } from '@/types/auth/forgot-password.types';
import type { Response } from '@/types/response.types';
import type { UserResponse } from '@/types/users/user.types';

export const forgotPasswordService = {
  sendOtp: async (req: ForgotPasswordRequest): Promise<Response<ForgotPasswordResponse>> => {
    try {
      const response = await api.post('/auth/forgot-password/request', req);

      return response.data;
    } catch (err) {
      const errorMessage = errorHandler(err);

      throw new Error(errorMessage);
    }
  },

  resendOtp: async (req: ForgotPasswordRequest): Promise<Response<ForgotPasswordResponse>> => {
    try {
      const response = await api.post('/auth/forgot-password/resend-otp', req);

      return response.data;
    } catch (err) {
      const errorMessage = errorHandler(err);

      throw new Error(errorMessage);
    }
  },

  verifyOtp: async (req: VerifyOtpForgotPasswordRequest): Promise<Response<VerifyOtpForgotPasswordResponse>> => {
    try {
      const response = await api.post('/auth/forgot-password/verify-otp', req);

      return response.data;
    } catch (err) {
      const errorMessage = errorHandler(err);

      throw new Error(errorMessage);
    }
  },

  reset: async (req: ResetPasswordForgotPasswordRequest): Promise<Response<UserResponse>> => {
    try {
      const response = await api.post('/auth/forgot-password/reset-password', req);

      return response.data;
    } catch (err) {
      const errorMessage = errorHandler(err);

      throw new Error(errorMessage);
    }
  },
};
