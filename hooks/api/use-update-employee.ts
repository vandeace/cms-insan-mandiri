import { TEmployeeEditForm } from "@/types/employee";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

export const useUpdateEmployee = () => {
  return useMutation({
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

      const { data } = await axiosInstance.patch(
        `/users/${formData.id}`,
        requestData,
      );

      return data;
    },
  });
};
