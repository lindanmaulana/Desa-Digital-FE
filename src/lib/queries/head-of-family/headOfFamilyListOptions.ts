import { queryOptions } from '@tanstack/react-query';
import { headOfFamilyKeys } from './queryKeys';
import { headOfFamilyService } from '@/lib/services/head-of-family/headOfFamily.service';

export const headOfFamilyListOptions = (params: string) =>
  queryOptions({
    queryKey: headOfFamilyKeys.list(params),
    queryFn: () => headOfFamilyService.getAll(params),
    staleTime: 1 * 60 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
