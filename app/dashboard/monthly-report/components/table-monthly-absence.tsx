"use client";
import { DataTable } from "@/components/table/table-data";
import { DataTableSkeleton } from "@/components/table/table-skeleton";
import { useGetMonthlyReport } from "@/hooks/api/use-get-monthly-report";
import dynamic from "next/dynamic";
import { parseAsInteger, parseAsIsoDate, parseAsString, useQueryState } from "nuqs";
import { columns } from "./column-header";

const DataNotFound = dynamic(() => import("@/components/data-not-found"));

const TableAbsenceMonthly = () => {
  const [month] = useQueryState(
    "month",
    parseAsIsoDate.withDefault(new Date(new Date().toISOString().split("T")[0])),
  );

  const [branch] = useQueryState("branch", parseAsString.withDefault(""));
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const { data, isFetching } = useGetMonthlyReport({
    month: month,
    branchId: branch,
    page: page,
    search,
    limit,
  });

  if (isFetching) {
    return <DataTableSkeleton />;
  }

  return (
    <div className="overflow-y-auto w-full">
      {!!data?.data.length ? (
        <DataTable
          columns={columns}
          data={data.data}
          totalItems={data.meta?.totalCount ?? 0}
          pageSizeOptions={[10, 20, 30, 40, 50]}
        />
      ) : (
        <DataNotFound message="Data Absence tidak ditemukan" />
      )}
    </div>
  );
};

export default TableAbsenceMonthly;
