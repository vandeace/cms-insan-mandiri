import { TBranch } from "@/types/branches";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

export const useUpdateBranch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["update-branch"],
    mutationFn: async (formData: TBranch) => {
      const requestData = {
        name: formData.name,
        address: formData.address,
        lat: Number(formData.lat),
        long: Number(formData.long),
        radius: formData.radius,
      };
      const { data } = await axiosInstance.patch(`/branches/${formData.id}`, requestData);
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["branch"] });
      queryClient.invalidateQueries({ queryKey: ["branch-detail", variables.id] });
    },
  });
};
