import { TAbsenceResponse } from "@/types/absence";
import { getTime } from "@/utils/date-time";
import { createColumn } from "@/utils/table";
import { createColumnHelper } from "@tanstack/react-table";
import { twMerge } from "tailwind-merge";

export const columnHelper = createColumnHelper<TAbsenceResponse>();

export const columns = [
  columnHelper.display({
    id: "No",
    size: 5,
    header: () => createColumn("No", "text-left text-[#202124] font-bold text-sm max-w-[10px]"),
    cell: info => <div className="py-1">{info.row.index + 1}</div>,
  }),
  columnHelper.display({
    id: "Nama",
    size: 80,
    header: () => createColumn("Nama", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.name}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "jabatan",
    size: 80,
    header: () => createColumn("Jabatan", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original?.position?.name}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "Status",
    size: 80,
    header: () => createColumn("Status", "text-left text-[#202124] font-bold text-sm"),
    cell: info => {
      const status = info.row.original.status;

      return (
        <div className="text-sm">
          <p
            className={twMerge(
              "py-1",
              status === "TIDAK HADIR" && "font-bold text-secondary-red",
              status === "HADIR" && "font-bold text-[#01C46B]",
              !["TIDAK HADIR", "HADIR"].includes(status) && "font-bold text-[#5bb4e1]",
            )}
          >
            {status.toUpperCase()}
          </p>
        </div>
      );
    },
  }),
  columnHelper.display({
    id: "check_in",
    size: 80,
    header: () => createColumn("Check In", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">
          {info.row.original.attendances?.[0]?.checkInTime
            ? getTime(info.row.original.attendances?.[0]?.checkInTime ?? "") || "-"
            : "-"}
        </p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "check_out",
    size: 80,
    header: () => createColumn("Kantor", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">
          {info.row.original.attendances?.[0]?.checkOutTime
            ? getTime(info.row.original.attendances?.[0]?.checkOutTime ?? "") || "-"
            : "-"}
        </p>
      </div>
    ),
  }),
];
