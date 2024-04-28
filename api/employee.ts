import axiosInstance from "@/config/api";
import { TEmployeeFilter } from "@/types/employee";
import { TPaginatedRequest } from "@/types/request";

export const employeeRequest = async (
  params: TPaginatedRequest<TEmployeeFilter>
) => {
  const { page, limit = 10, filter } = params;

  const filterParams = filter as TEmployeeFilter;

  try {
    const { data } = await axiosInstance.get(`/users`, {
      params: {
        page: page,
        limit: limit,
        search: filterParams?.search ?? undefined,
        branchId: filterParams?.branchId?.value ?? undefined,
        positionId: filterParams?.positionId?.value ?? undefined,
      },
    });

    return data;
  } catch {
    throw new Error("Unexpected Error");
  }
};
