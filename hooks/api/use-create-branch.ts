import { TBranch } from "@/types/branches";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

export const useCreateBranch = () => {
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
      const { data } = await axiosInstance.post("/branches", requestData);
      return data;
    },
  });
};
