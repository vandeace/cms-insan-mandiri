"use client";
import { DataTable } from "@/components/table/table-data";
import { DataTableSkeleton } from "@/components/table/table-skeleton";
import { useGetOvertime } from "@/hooks/api/use-get-overtime";
import dynamic from "next/dynamic";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { columns } from "./column-header";

const DataNotFound = dynamic(() => import("@/components/data-not-found"));

export default function TablePermission() {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [status] = useQueryState("status", parseAsString.withDefault(""));

  const { data, isFetching } = useGetOvertime({
    page: page,
    limit: limit,
    filter: {
      status: status ?? undefined,
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
        <DataNotFound message="Data Lemburan tidak ditemukan" />
      )}
    </div>
  );
}
