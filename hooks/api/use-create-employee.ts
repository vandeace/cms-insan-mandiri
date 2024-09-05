import { TEmployeeCreateForm } from '@/types/employee';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/config/api';

export const useCreateEmployee = () => {
  return useMutation({
    mutationFn: async (formData: TEmployeeCreateForm) => {
      const requestData = {
        nik: formData.nik,
        name: formData.name,
        email: formData.email,
        password: formData.password,
        positionId: formData.positionId,
        branchId: formData.branchId,
        phoneNumber: formData.phoneNumber,
      };

      const { data } = await axiosInstance.post(`/users`, requestData);

      return data;
    },
  });
};
