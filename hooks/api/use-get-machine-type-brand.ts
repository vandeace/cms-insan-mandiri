import { useQuery } from "@tanstack/react-query";
import { MachineTypeBrand } from "@/types/machine-type-brand";
import axiosInstance from "@/config/api";

export const useGetMachineTypeBrand = () => {
  return useQuery({
    queryKey: ["machine-type-brand"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<{
        data: MachineTypeBrand[];
      }>("/machine-type-brand");
      return data;
    },
  });
};
