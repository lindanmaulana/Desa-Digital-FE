import type { signinAuthRequest } from '@/types/auth.types';
import axiosInstance from '../axios-instance';
import helpers from '../helpers';

export const signinAuthService = async (req: signinAuthRequest) => {
  try {
    const response = await axiosInstance.api.post('/auth/signin', req, {
      withCredentials: true
    });

    return response.data;
  } catch (err) {
    const errorMessage = helpers.errorHandler(err);

    throw new Error(errorMessage);
  }
};
