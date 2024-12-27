"use client";
import { DataTable } from "@/components/table/table-data";
import { DataTableSkeleton } from "@/components/table/table-skeleton";
import { UseGetAllBranch } from "@/hooks/api/use-get-branch";
import { TUserData } from "@/types/auth";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { useDebounce } from "use-debounce";
import { columns, columnsAdmin } from "./column-header";

const DataNotFound = dynamic(() => import("@/components/data-not-found"));

export default function TableBranch() {
  const session = useSession();

  const user = session.data?.user as unknown as TUserData;

  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [searchDebounce] = useDebounce(search, 1000);

  const { data, isFetching } = UseGetAllBranch({
    page: page,
    filter: {
      search: searchDebounce ?? "",
    },
  });

  if (isFetching) {
    return <DataTableSkeleton />;
  }

  return (
    <div className="overflow-y-auto w-full">
      {!!data?.data ? (
        <DataTable
          columns={user?.role === "SUPER_ADMIN" ? [...columns, ...columnsAdmin] : columns}
          data={data?.data}
          totalItems={data.meta?.totalCount ?? 0}
          pageSizeOptions={[10, 20, 30, 40, 50]}
        />
      ) : (
        <DataNotFound message="Data Kantor tidak ditemukan" />
      )}
    </div>
  );
}
