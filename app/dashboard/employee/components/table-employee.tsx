"use client";
import { DataTable } from "@/components/table/table-data";
import { DataTableSkeleton } from "@/components/table/table-skeleton";
import { useGetEmployee } from "@/hooks/api/use-get-employee";
import useMutableSearchParams from "@/hooks/param";
import { TUserData } from "@/types/auth";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useDebounce } from "use-debounce";
import { columns, columnsAdmin } from "./column-header";

const DataNotFound = dynamic(() => import("@/components/data-not-found"));

export default function TableEmployee() {
  const session = useSession();

  const user = session.data?.user as unknown as TUserData;

  const searchParams = useMutableSearchParams();

  const page = searchParams.get("page");

  const [search] = useDebounce(searchParams.get("search"), 1000);

  const { data, isFetching } = useGetEmployee({
    page: !!page ? Number(page) : 1,
    filter: {
      search: search ?? "",
      branchId: searchParams.get("branch") ?? "",
      positionId: searchParams.get("role") ?? "",
    },
  });

  if (isFetching) {
    return <DataTableSkeleton />;
  }

  return (
    <div className="overflow-y-auto w-full">
      {!!data?.data.length ? (
        <DataTable
          columns={user?.role === "SUPER_ADMIN" ? [...columns, ...columnsAdmin] : columns}
          data={data?.data}
          totalItems={data.meta?.totalCount ?? 0}
          pageSizeOptions={[10, 20, 30, 40, 50]}
        />
      ) : (
        <DataNotFound message="Data karyawan tidak ditemukan" />
      )}
    </div>
  );
}
