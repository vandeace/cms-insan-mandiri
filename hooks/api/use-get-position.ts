import { useQuery } from "@tanstack/react-query";
import { TBranch, TBranchFilter } from "@/types/branches";
import { TPaginatedRequest } from "@/types/request";
import { TResponse, TSingleResponse } from "@/types/response";
import axiosInstance from "@/config/api";

export const UseGetAllPosition = (params: TPaginatedRequest<null>) => {
  return useQuery<TResponse<TBranch>>({
    queryKey: ["position", params],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/positions`, {
        params: {
          page: params.page ?? 1,
          limit: params.limit ?? 10,
        },
      });
      return data;
    },
  });
};

export const getFormattedPosition = () => {
  const { data } = UseGetAllPosition({});

  return data?.data.length
    ? data.data.map(item => ({
        value: item.id,
        label: item.name,
      }))
    : [];
};
