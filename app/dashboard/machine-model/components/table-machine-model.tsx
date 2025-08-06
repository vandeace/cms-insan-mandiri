"use client";
import { DataTable } from "@/components/table/table-data";
import { DataTableSkeleton } from "@/components/table/table-skeleton";
import { useGetMachineModel } from "@/hooks/api/use-get-machine-model";
import { TUserData } from "@/types/auth";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { useDebounce } from "use-debounce";
import { columns, columnsAdmin } from "./column-header";

const DataNotFound = dynamic(() => import("@/components/data-not-found"));

export default function TableMachineModel() {
  const session = useSession();
  const user = session.data?.user as unknown as TUserData;

  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [machineTypeBrand] = useQueryState("machineTypeBrand", parseAsString.withDefault(""));
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [searchDebounce] = useDebounce(search, 1000);

  const { data, isFetching } = useGetMachineModel({
    page: page,
    filter: {
      search: searchDebounce ?? "",
      machineTypeBrandId: machineTypeBrand,
    },
  });

  if (isFetching) {
    return <DataTableSkeleton />;
  }

  return (
    <div className="w-full">
      {!!data?.data.length ? (
        <DataTable
          columns={user?.role === "SUPER_ADMIN" ? [...columns, ...columnsAdmin] : columns}
          data={data?.data}
          totalItems={data.meta?.totalCount ?? 0}
          pageSizeOptions={[10, 20, 30, 40, 50]}
        />
      ) : (
        <DataNotFound message="Data model mesin tidak ditemukan" />
      )}
    </div>
  );
}
