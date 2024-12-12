"use client";
import { DataTableX } from "@/components/datatable";
import { useSession } from "next-auth/react";
import { columnsAdmin, columnsSuperAdmin } from "./column-header";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { TUserData } from "@/types/auth";
import useMutableSearchParams from "@/hooks/param";
import { useDebounce } from "use-debounce";
import { UseGetAllBranch } from "@/hooks/api/use-get-branch";
import Image from "next/image";
import emptyImage from "@/public/images/no-data.webp";
import SkeletonTable from "@/components/skeleton-state/skeleton-table";

export default function TableBranch() {
  const session = useSession();

  const user = session.data?.user as unknown as TUserData;
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const searchParams = useMutableSearchParams();

  const [search] = useDebounce(searchParams.get("search"), 1000);

  const { data, isFetching } = UseGetAllBranch({
    page: pagination.pageIndex + 1,
    filter: {
      search: search ?? "",
    },
  });

  if (isFetching) {
    return <SkeletonTable />;
  }

  return (
    <div className="overflow-y-auto w-full">
      {!!data?.data ? (
        <DataTableX
          columns={user?.role === "SUPER_ADMIN" ? columnsSuperAdmin : columnsAdmin}
          data={data?.data}
          pageSize={10}
          totalData={data?.meta && data?.meta.totalCount}
          pagination={pagination}
          setPagination={setPagination}
          pageCount={data?.meta && data?.meta.totalPage}
        />
      ) : (
        <div className="flex w-full flex-col items-center justify-center h-96">
          <Image src={emptyImage} alt="empty data" width={300} height={300} />
          <p className="text-sm font-bold">Data Kantor tidak ditemukan</p>
        </div>
      )}
    </div>
  );
}
