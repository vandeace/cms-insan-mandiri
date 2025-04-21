import { TEmployeeEditForm } from "@/types/employee";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

export const useUpdateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["update-employee"],
    mutationFn: async (formData: TEmployeeEditForm) => {
      const requestData = {
        nik: formData.nik,
        name: formData.name,
        email: formData.email,
        password: formData.password !== "" ? formData.password : undefined,
        positionId: formData.positionId,
        branchId: formData.branchId,
        phoneNumber: formData.phoneNumber.toString(),
      };

      const { data } = await axiosInstance.patch(`/users/${formData.id}`, requestData);

      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["employee"] });
      queryClient.invalidateQueries({ queryKey: ["employee-detail", variables.id] });
    },
  });
};
