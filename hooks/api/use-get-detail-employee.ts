import { TEmployee } from "@/types/employee";
import { TSingleResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

export const useGetDetailEmployee = (id: string | undefined) => {
  return useQuery<TSingleResponse<TEmployee>>({
    queryKey: ["branch", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/users/${id}`);
      return data;
    },
    enabled: !!id,
  });
};
