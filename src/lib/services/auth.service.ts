import type { ResendOtpRequest, ResendOtpResponse, SigninAuthRequest, SigninAuthResponse, VerifyAccountRequest } from '@/types/auth.types';
import type { Response } from '@/types/response.types';
import type { UserResponse } from '@/types/user.types';
import { api } from '../axios-instance';
import { errorHandler } from '../helpers';

export const signinAuthService = async (req: SigninAuthRequest): Promise< Response<SigninAuthResponse>> => {
  try {
    const response = await api.post('/auth/signin', req, {
      withCredentials: true,
    });

    return response.data;
  } catch (err) {
    const errorMessage = errorHandler(err);

    throw new Error(errorMessage);
  }
};

export const verifyAccountService = async (req: VerifyAccountRequest): Promise<Response<UserResponse>> => {
  try {
    const response = await api.post('/verify-account', req);

    return response.data;
  } catch (err) {
    const errorMessage = errorHandler(err);

    throw new Error(errorMessage);
  }
};

export const resendOtpService = async (req: ResendOtpRequest): Promise<Response<ResendOtpResponse>> => {
  try {
    const response = await api.post("/resend-otp", req)

    return response.data
  } catch (err) {
    const errorMessage = errorHandler(err)

    throw new Error(errorMessage)
  }
}
