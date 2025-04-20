import axiosInstance from "@/config/api";
import { useMutation } from "@tanstack/react-query";

export const useDeleteCustomer = () => {
  return useMutation({
    mutationKey: ["deleteCustomer"],
    mutationFn: async ({ id }: { id: string }) => {
      const { data } = await axiosInstance.delete(`/customers/${id}`);
      return data;
    },
  });
};
