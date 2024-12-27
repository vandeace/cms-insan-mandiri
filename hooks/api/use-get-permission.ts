import axiosInstance from "@/config/api";
import { TPermission, TPermissionFilter } from "@/types/permission";
import { TPaginatedRequest } from "@/types/request";
import { TResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

export const useGetPermission = (params: TPaginatedRequest<TPermissionFilter>) => {
  return useQuery<TResponse<TPermission>>({
    queryKey: ["permission", params],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/permissions`, {
        params: {
          search: params?.filter?.search ?? undefined,
          page: params.page ?? 1,
          size: params.limit ?? 10,
          permissionTypeId: params?.filter?.permissionTypeId ?? undefined,
          status: params.filter?.status ?? undefined,
        },
      });

      return data;
    },
  });
};
