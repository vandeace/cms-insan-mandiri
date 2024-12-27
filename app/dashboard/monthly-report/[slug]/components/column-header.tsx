import { Badge } from "@/components/ui/badge";
import { TEmployeeReport } from "@/types/absence";
import { getTime } from "@/utils/date-time";
import { createColumn } from "@/utils/table";
import { createColumnHelper } from "@tanstack/react-table";

export const columnHelper = createColumnHelper<TEmployeeReport>();

export const columns = [
  columnHelper.display({
    id: "Tanggal",
    size: 80,
    header: () => createColumn("Tanggal", "text-center text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1 text-center">
          {new Date(info.row.original.date).toLocaleString("id-ID", {
            weekday: "long",
          })}
          {", "}
          {new Date(info.row.original.date).toLocaleString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "Status",
    size: 80,
    header: () => createColumn("Status", "text-center text-[#202124] font-bold text-sm"),
    cell: info => {
      const data = info.row.original;
      return (
        <div className="text-sm flex justify-center items-center">
          <Badge variant={data.status === "HADIR" ? "success" : "destructive"}>{data.status}</Badge>
        </div>
      );
    },
  }),
  columnHelper.display({
    id: "Check-In",
    size: 80,
    header: () => createColumn("Check-In", "text-center text-[#202124] font-bold text-sm"),
    cell: info => {
      return (
        <div className="text-sm">
          <p className="py-1 text-center">
            {info.row.original.attendance?.checkInTime
              ? getTime(info.row.original.attendance?.checkInTime ?? "") || "-"
              : "-"}
          </p>
        </div>
      );
    },
  }),
  columnHelper.display({
    id: "Check-Out",
    size: 80,
    header: () => createColumn("Check-Out", "text-center text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1 text-center">
          {info.row.original.attendance?.checkOutTime
            ? getTime(info.row.original.attendance?.checkOutTime ?? "") || "-"
            : "-"}
        </p>
      </div>
    ),
  }),
];
