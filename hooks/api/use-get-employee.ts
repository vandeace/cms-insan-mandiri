import axiosInstance from "@/config/api";
import { TEmployee, TEmployeeFilter } from "@/types/employee";
import { TPaginatedRequest } from "@/types/request";
import { TResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

export const useGetEmployee = (params: TPaginatedRequest<TEmployeeFilter>) => {
  return useQuery<TResponse<TEmployee>>({
    queryKey: ["employee", params],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/users`, {
        params: {
          page: params.page,
          size: params.limit,
          search: params.filter?.search ?? undefined,
          branchId: params.filter?.branchId ?? undefined,
          positionId: params.filter?.positionId ?? undefined,
        },
      });

      return data;
    },
  });
};
