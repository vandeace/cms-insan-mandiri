import { TEmployeeCreateForm } from "@/types/employee";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-employee"],
    mutationFn: async (formData: TEmployeeCreateForm) => {
      const requestData = {
        nik: formData.nik,
        name: formData.name,
        email: formData.email,
        password: formData.password,
        positionId: formData.positionId,
        branchId: formData.branchId,
        phoneNumber: formData.phoneNumber.toString(),
        role: formData.role,
        address: formData.address,
      };
      const { data } = await axiosInstance.post("/users", requestData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
  });
};
