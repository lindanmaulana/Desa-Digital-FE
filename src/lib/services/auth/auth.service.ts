import { api } from '@/lib/axios-instance';
import { errorHandler } from '@/lib/helpers';
import type { SigninAuthRequest, SigninAuthResponse } from '@/types/auth/auth.types';
import type { Response } from '@/types/response.types';

export const authService = {
  signin: async (req: SigninAuthRequest): Promise<Response<SigninAuthResponse>> => {
    try {
      const response = await api.post('/auth/signin', req);

      return response.data;
    } catch (err) {
      const errorMessage = errorHandler(err);

      throw new Error(errorMessage);
    }
  },
};
