import { api } from '../../axios-instance';
import { errorHandler } from '../../helpers';

export const ProfileService = {
  getProfile: async () => {
    try {
      const response = await api.get('/auth/profile/detail');

      return response.data;
    } catch (err) {
      const errorMessage = errorHandler(err);

      throw new Error(errorMessage);
    }
  },
};
