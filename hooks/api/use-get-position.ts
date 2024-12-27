import axiosInstance from "@/config/api";
import { TBranch } from "@/types/branches";
import { TPaginatedRequest } from "@/types/request";
import { TResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

export const UseGetAllPosition = (params: TPaginatedRequest<null>) => {
  return useQuery<TResponse<TBranch>>({
    queryKey: ["position", params],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/positions`, {
        params: {
          page: params.page ?? 1,
          size: params.limit ?? 10,
        },
      });
      return data;
    },
  });
};

export const getFormattedPosition = () => {
  const { data } = UseGetAllPosition({
    limit: 0,
  });

  return data?.data.length
    ? data.data.map(item => ({
        value: item.id,
        label: item.name,
      }))
    : [];
};
