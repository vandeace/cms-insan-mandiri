import { TAbsenceFilter } from "@/types/absence";
import { TPaginatedRequest } from "@/types/request";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/config/api";

export const useGetDailyReportQuery = (params: TPaginatedRequest<TAbsenceFilter>) => {
  return useQuery({
    queryKey: ["dailyReport", params],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/reports", {
        params: {
          page: params.page,
          limit: params.limit,
          search: params.filter?.search,
          branchId: params.filter?.branchId,
          date: params.filter?.date === "" ? new Date() : params.filter?.date,
        },
      });
      return data;
    },
  });
};
