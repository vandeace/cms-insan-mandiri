import { employeeRequest } from "@/api/employee";
import { TEmployee, TEmployeeFilter } from "@/types/employee";
import { TPaginatedRequest } from "@/types/request";
import { TResponse, TSingleResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

export const useGetEmployee = (params: TPaginatedRequest<TEmployeeFilter>) => {
  return useQuery<TResponse<TEmployee>>({
    queryKey: ["employee", params],
    queryFn: () => employeeRequest(params),
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
