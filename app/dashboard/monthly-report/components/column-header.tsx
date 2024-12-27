import { TMonthlyAbsenceReport } from "@/types/absence";
import { createColumn } from "@/utils/table";
import { createColumnHelper } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import Link from "next/link";
import { parseAsIsoDate, useQueryState } from "nuqs";

export const columnHelper = createColumnHelper<TMonthlyAbsenceReport>();

export const columns = [
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
    id: "position",
    size: 80,
    header: () => createColumn("Jabatan", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.position.name}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "attendances",
    size: 80,
    header: () => createColumn("Kehadiran", "text-center text-[#202124] font-bold text-sm"),
    cell: info => {
      return (
        <div className="text-sm">
          <p className="py-1 text-center">{info.row.original.stats.attendances} Hari</p>
        </div>
      );
    },
  }),
  columnHelper.display({
    id: "overtimes",
    size: 80,
    header: () => createColumn("Lemburan", "text-center text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1 text-center">{info.row.original.stats.overtimes} Jam</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "permissions",
    size: 80,
    header: () => createColumn("Izin", "text-center text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1 text-center">{info.row.original.stats.permissions} Hari</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "action",
    size: 80,
    header: () => createColumn("Action", "text-center text-[#202124] font-bold text-sm"),
    cell: info => {
      const [month] = useQueryState(
        "month",
        parseAsIsoDate.withDefault(new Date(new Date().toISOString().split("T")[0])),
      );
      return (
        <div className="flex items-center justify-center w-full">
          <Link
            href={`/dashboard/monthly-report/${info.row.original.id}${
              month
                ? `?month=${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}-01`
                : ""
            }`}
          >
            <Eye />
          </Link>
        </div>
      );
    },
  }),
];
