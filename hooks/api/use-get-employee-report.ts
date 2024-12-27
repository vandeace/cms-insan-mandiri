import axiosInstance from "@/config/api";
import { TEmployeeReport, TEmployeeReportParams } from "@/types/absence";
import { TSingleResponse } from "@/types/response";
import { parsedTime } from "@/utils/parsed-time";
import { useQuery } from "@tanstack/react-query";

export const useGetEmployeeReport = (params: TEmployeeReportParams) => {
  return useQuery<TSingleResponse<TEmployeeReport[]>>({
    queryKey: ["employeeReport", params],
    queryFn: async () => {
      try {
        const { formattedEndDate, formattedStartDate } = parsedTime(params.month);
        const { data } = await axiosInstance.get(`/reports/${params.userId}`, {
          params: {
            startDate: formattedStartDate,
            endDate: formattedEndDate,
          },
        });
        return data;
      } catch {
        throw new Error("Failed to fetch employee report");
      }
    },
  });
};
