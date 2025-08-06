import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

interface UseDeleteMachineModelProps {
  id: string;
}

export const useDeleteMachineModel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: UseDeleteMachineModelProps) => {
      const { data } = await axiosInstance.delete(`/machine-model/${id}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["machine-model"] });
    },
  });
};
