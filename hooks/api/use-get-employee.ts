import axiosInstance from '@/config/api';
import { TEmployee, TEmployeeFilter } from '@/types/employee';
import { TPaginatedRequest } from '@/types/request';
import { TResponse, TSingleResponse } from '@/types/response';
import { useQuery } from '@tanstack/react-query';

export const useGetEmployee = (params: TPaginatedRequest<TEmployeeFilter>) => {
  return useQuery<TResponse<TEmployee>>({
    queryKey: ['employee', params],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/users`, {
        params: {
          page: params.page,
          limit: params.limit,
          search: params.filter?.search ?? undefined,
          branchId: params.filter?.branchId ?? undefined,
          positionId: params.filter?.positionId ?? undefined,
        },
      });

      return data;
    },
  });
};

// export const useGetEmployeeDetail = (id: string | undefined) => {
//   return useQuery<TSingleResponse<TEmployee>>(
//     ["employee-detail", id],
//     () => employeeDetailRequest(id ?? ""),
//     {
//       enabled: id ? true : false,
//       keepPreviousData: false,
//     }
//   );
// };
