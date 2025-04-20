import { TCustomer } from "@/types/customer";
import { TSingleResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

export const useGetDetailCustomer = (id: string | undefined) => {
  return useQuery<TSingleResponse<TCustomer>>({
    queryKey: ["customer", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/customers/${id}`);
      return data;
    },
    enabled: !!id,
  });
};
