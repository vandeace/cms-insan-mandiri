import { TCustomerCreateForm } from "@/types/customer";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

export const useCreateCustomer = () => {
  return useMutation({
    mutationFn: async (formData: TCustomerCreateForm) => {
      const { data } = await axiosInstance.post(`/customers`, formData);
      return data;
    },
  });
};
