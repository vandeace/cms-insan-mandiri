import { TBranch } from "@/types/branches";
import { TSingleResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

export const useGetBranchDetail = (id: string | undefined) => {
  return useQuery<TSingleResponse<TBranch>>({
    queryKey: ["branch-detail", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/branches/${id}`);

      return data;
    },
  });
};
