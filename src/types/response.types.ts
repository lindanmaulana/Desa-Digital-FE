export interface Response<T> {
  code: number;
  data: T;
  pagination?: IPagination
  message: string;
  status: string;
}

export interface IPagination {
  total_page: number;
  limit: number;
  current_page: number;
  links: number[];
  next_page: number | null;
  prev_page: number | null;
}
