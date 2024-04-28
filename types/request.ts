export type TPaginatedRequest<T> = {
  page?: number;
  filter?: T;
  sort?: string;
  limit?: number;
};
