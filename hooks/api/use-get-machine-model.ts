import { useQuery } from "@tanstack/react-query";
import { MachineModel } from "@/types/machine-model";
import axiosInstance from "@/config/api";

interface UseGetMachineModelProps {
  page?: number;
  filter?: {
    search?: string;
    machineTypeBrandId?: string;
  };
}

export const useGetMachineModel = ({ page = 1, filter }: UseGetMachineModelProps = {}) => {
  return useQuery({
    queryKey: ["machine-type", page, filter],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/machine-type", {
        params: {
          page,
          search: filter?.search ?? undefined,
          machineTypeBrandId:
            filter?.machineTypeBrandId === "all" ? undefined : filter?.machineTypeBrandId,
        },
      });
      return data;
    },
  });
};
