import { TCustomerEditForm } from "@/types/customer";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

export const useUpdateCustomer = () => {
  return useMutation({
    mutationFn: async (formData: TCustomerEditForm) => {
      const { data } = await axiosInstance.patch(`/customers/${formData.id}`, formData);
      return data;
    },
  });
};
