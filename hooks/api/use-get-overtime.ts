import axiosInstance from "@/config/api";
import { TOvertimeFilter, TOvertime } from "@/types/overtime";
import { TPaginatedRequest } from "@/types/request";
import { TResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

export const useGetOvertime = (params: TPaginatedRequest<TOvertimeFilter>) => {
  return useQuery<TResponse<TOvertime>>({
    queryKey: ["overtimes", params],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/overtimes`, {
        params: {
          page: params.page ?? 1,
          size: params.limit ?? 10,
          status: params.filter?.status ?? undefined,
        },
      });
      return data;
    },
  });
};
