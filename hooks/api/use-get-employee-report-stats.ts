import axiosInstance from "@/config/api";
import { TEmployeeReportParams, TStats } from "@/types/absence";
import { TSingleResponse } from "@/types/response";
import { parsedTime } from "@/utils/parsed-time";
import { useQuery } from "@tanstack/react-query";

export const useGetEmployeeReportStats = (params: TEmployeeReportParams) => {
  return useQuery<TSingleResponse<TStats>>({
    queryKey: ["employeeReportStats", params],
    queryFn: async () => {
      try {
        const { formattedEndDate, formattedStartDate } = parsedTime(params.month);
        const { data } = await axiosInstance.get(`/reports/${params.userId}/stats`, {
          params: {
            startDate: formattedStartDate,
            endDate: formattedEndDate,
          },
        });
        return data;
      } catch {
        throw new Error("Failed to fetch employee report stats");
      }
    },
  });
};
