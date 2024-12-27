"use client";
import { DataTable } from "@/components/table/table-data";
import { DataTableSkeleton } from "@/components/table/table-skeleton";
import { useGetDailyReportQuery } from "@/hooks/api/use-get-daily-report";
import { formatTime } from "@/utils/parsed-time";
import dynamic from "next/dynamic";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { columns } from "./column-header";

const DataNotFound = dynamic(() => import("@/components/data-not-found"));

const TableAbsence = () => {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [branch] = useQueryState("branch", parseAsString.withDefault(""));
  const [date] = useQueryState("date", parseAsString.withDefault(formatTime(new Date())));

  const { data, isFetching } = useGetDailyReportQuery({
    limit: limit,
    page: page,
    filter: {
      search: search ?? undefined,
      branchId: branch ?? undefined,
      date: date,
    },
  });

  if (isFetching) {
    return <DataTableSkeleton />;
  }

  return (
    <div className="overflow-y-auto w-full">
      {!!data?.data.length ? (
        <DataTable
          columns={columns}
          data={data?.data}
          totalItems={data.meta?.totalCount ?? 0}
          pageSizeOptions={[10, 20, 30, 40, 50]}
        />
      ) : (
        <DataNotFound message="Data Absence tidak ditemukan" />
      )}
    </div>
  );
};

export default TableAbsence;
