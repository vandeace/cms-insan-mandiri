import axiosInstance from "@/config/api";
import { TMonthlyAbsenceReport, TMonthlyReportParams } from "@/types/absence";
import { TResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

export const useGetMonthlyReport = (params: TMonthlyReportParams) => {
  return useQuery<TResponse<TMonthlyAbsenceReport>>({
    queryKey: ["monthlyReport", params],
    queryFn: async () => {
      try {
        const year = new Date(params.month).getFullYear();
        const monthNumber = params.month.getMonth();
        const startDate = new Date(year, monthNumber, 1);
        const endDate = new Date(year, monthNumber + 1, 0);
        const formattedStartDate = startDate.toISOString().split("T")[0];
        const formattedEndDate = endDate.toISOString().split("T")[0];

        const { data } = await axiosInstance.get("/reports/stats", {
          params: {
            startDate: formattedStartDate,
            endDate: formattedEndDate,
            branchId: params?.branchId,
            page: params?.page,
            size: params?.limit,
            search: params?.search ?? undefined,
          },
        });
        return data;
      } catch {
        throw new Error("Failed to fetch monthly report");
      }
    },
  });
};
