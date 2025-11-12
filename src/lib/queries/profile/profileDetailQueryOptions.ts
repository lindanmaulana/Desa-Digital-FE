import { profileService } from '@/lib/services/users/profile.service';
import type { ProfileUserResponse } from '@/types/users/profile.types';
import { queryOptions, type QueryOptions } from '@tanstack/react-query';
import { profileKeys } from './queryKeys';

export const profileDetailQueryOptions = (options?: Partial<QueryOptions<ProfileUserResponse>>) => queryOptions({
  queryKey: profileKeys.detail(),
  queryFn: profileService.getProfile,
  staleTime: 1 * 60 * 60 * 1000,
  ...options
})
