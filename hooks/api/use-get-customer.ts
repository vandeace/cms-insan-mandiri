import axiosInstance from "@/config/api";
import { TCustomer, TCustomerFilter } from "@/types/customer";
import { TPaginatedRequest } from "@/types/request";
import { TResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

export const useGetCustomer = (params: TPaginatedRequest<TCustomerFilter>) => {
  return useQuery<TResponse<TCustomer>>({
    queryKey: ["customer", params],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/customers`, {
        params: {
          page: params.page,
          size: params.limit,
          search: params.filter?.search ?? undefined,
        },
      });

      return data;
    },
  });
};
