import axiosInstance from "@/config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteEmployee"],
    mutationFn: async ({ id }: { id: string }) => {
      const { data } = await axiosInstance.delete(`/users/${id}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
  });
};
