"use client";
import { DataTable } from "@/components/table/table-data";
import { DataTableSkeleton } from "@/components/table/table-skeleton";
import { useGetPermission } from "@/hooks/api/use-get-permission";
import { columns } from "./column-header";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import dynamic from "next/dynamic";

const DataNotFound = dynamic(() => import("@/components/data-not-found"));

export default function TablePermission() {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [limit] = useQueryState("limit", parseAsInteger.withDefault(10));
  const [permissionTypeId] = useQueryState("permissionTypeId", parseAsString.withDefault(""));
  const [status] = useQueryState("status", parseAsString.withDefault(""));
  const [search] = useQueryState("search", parseAsString.withDefault(""));

  const { data, isFetching } = useGetPermission({
    page: page,
    limit: limit,
    filter: {
      search: search,
      permissionTypeId: permissionTypeId ?? undefined,
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
        <DataNotFound message="Data Perizinan tidak ditemukan" />
      )}
    </div>
  );
}
