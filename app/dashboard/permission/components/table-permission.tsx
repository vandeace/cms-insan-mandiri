"use client";
import { DataTableX } from "@/components/datatable";
import { columns } from "./column-header";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import useMutableSearchParams from "@/hooks/param";
import SkeletonTable from "@/components/skeleton-state/skeleton-table";
import Image from "next/image";
import emptyImage from "@/public/images/no-data.webp";
import { useGetPermission } from "@/hooks/api/use-get-permission";
export default function TablePermission() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const searchParams = useMutableSearchParams();

  const { data, isFetching } = useGetPermission({
    page: pagination.pageIndex + 1,
    filter: {
      permissionTypeId: searchParams.get("permissionTypeId") ?? "",
      status: searchParams.get("status") ?? "",
    },
  });

  if (isFetching) {
    return <SkeletonTable />;
  }

  return (
    <div className="overflow-y-auto w-full">
      {!!data?.data.length ? (
        <DataTableX
          columns={columns}
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
          <p className="text-sm font-bold">Data Perizinan tidak ditemukan</p>
        </div>
      )}
    </div>
  );
}
