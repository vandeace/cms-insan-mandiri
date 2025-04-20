import axiosInstance from "@/config/api";
import { useMutation } from "@tanstack/react-query";

export const useDeleteEmployee = () => {
  return useMutation({
    mutationKey: ["deleteEmployee"],
    mutationFn: async ({ id }: { id: string }) => {
      const { data } = await axiosInstance.delete(`/users/${id}`);
      return data;
    },
  });
};
