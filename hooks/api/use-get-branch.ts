import { useQuery } from "@tanstack/react-query";
import { TBranch, TBranchFilter } from "@/types/branches";
import { TPaginatedRequest } from "@/types/request";
import { TResponse, TSingleResponse } from "@/types/response";
import axiosInstance from "@/config/api";

export const UseGetAllBranch = (params: TPaginatedRequest<TBranchFilter>) => {
  return useQuery<TResponse<TBranch>>({
    queryKey: ["branch", params],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/branches`, {
        params: {
          page: params.page ?? 1,
          limit: params.limit ?? 10,
          search: params.filter?.search,
        },
      });
      return data;
    },
  });
};

export const getFormattedBranch = () => {
  const { data } = UseGetAllBranch({});

  return data?.data.length
    ? data.data.map(item => ({
        value: item.id,
        label: item.name,
      }))
    : [];
};

export const useGetBranchDetail = (id: string | undefined) => {
  return useQuery<TSingleResponse<TBranch>>({
    queryKey: ["branch-detail", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/branches/${id}`);
      return data;
    },
    enabled: !!id,
  });
};
