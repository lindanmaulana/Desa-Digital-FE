import { useCallback, type ChangeEvent } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router';
import { useDebouncedCallback } from 'use-debounce';

export const useToolbar = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const router = useNavigate();

  const setSearchDebounce = useDebouncedCallback((value: string) => {
    const url = new URLSearchParams(searchParams.toString());

    switch (value) {
      case '':
        url.delete('keyword');
        break;
      default:
        url.set('keyword', value);
        url.set('page', '1');
        break;
    }

    router(`${location.pathname}?${url.toString()}`);
  }, 1000);
  
  const handleSearchFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => setSearchDebounce(e.target.value), [setSearchDebounce]);

  const handleLimitFilter = useCallback(
    (value: string) => {
      const url = new URLSearchParams(searchParams.toString());
      switch (value) {
        case '':
          url.set('limit', '5');
          break;
        default:
          url.set('limit', value);
          url.set('page', '1');
          break;
      }

      router(`${location.pathname}?${url.toString()}`);
    },
    [location.pathname, router, searchParams]
  );

  const handleSortFilter = useCallback((val: string) => {
    const url = new URLSearchParams(searchParams.toString());

    switch (val) {
      case 'example':
        url.delete('sort');
        break;
      default:
        url.set('sort', val);
        break;
    }

    router(`${location.pathname}?${url.toString()}`);
  }, [location.pathname, router, searchParams]);

  return { handleSearchFilter, handleLimitFilter, handleSortFilter };
};
