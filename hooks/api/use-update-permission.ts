import axiosInstance from "@/config/api";
import { TPermissionAction } from "@/types/permission";
import { useMutation } from "@tanstack/react-query";

export const useUpdatePermission = () => {
  return useMutation({
    mutationKey: ["updatePermission"],
    mutationFn: async (param: TPermissionAction) => {
      const { data } = await axiosInstance.patch(
        `/permissions/${param.id}/${param.action}`,
      );
      return data;
    },
  });
};
