import { UseMutationResult } from "@tanstack/react-query";

export type TResponse<T> = {
  data: T[];
  status: string;
  message: string;
  links?: {
    first: string;
    last: string;
  };
  meta?: {
    page: number;
    size: number;
    totalCount: number;
    totalPage: number;
  };
};

export type TSingleResponse<T> = {
  data: T;
  status: string;
  message: string;
};

export type TMutationResult = {
  mutation: UseMutationResult<any, unknown, void, unknown>;
};
