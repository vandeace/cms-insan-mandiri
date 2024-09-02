import axiosInstance from "@/config/api";
import { TPermissionAction } from "@/types/permission";
import { useMutation } from "@tanstack/react-query";

export const useUpdateOvertime = () => {
  return useMutation({
    mutationFn: async (params: TPermissionAction) => {
      const { data } = await axiosInstance.patch(
        `/overtimes/${params.id}/${params.action}`,
      );
      return data;
    },
  });
};
