import axiosInstance from "@/config/api";
import { TMonthlyAbsenceReport, TMonthlyReportParams } from "@/types/absence";
import { TResponse } from "@/types/response";
import { parsedTime } from "@/utils/parsed-time";
import { useQuery } from "@tanstack/react-query";

export const useGetMonthlyReport = (params: TMonthlyReportParams) => {
  return useQuery<TResponse<TMonthlyAbsenceReport>>({
    queryKey: ["monthlyReport", params],
    queryFn: async () => {
      try {
        const { formattedEndDate, formattedStartDate } = parsedTime(params.month);

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
