"use client";
import { DataTableX } from "@/components/datatable";
import SkeletonTable from "@/components/skeleton-state/skeleton-table";
import { useGetDailyReportQuery } from "@/hooks/api/use-get-daily-report";
import { PaginationState } from "@tanstack/react-table";
import Image from "next/image";
import emptyImage from "@/public/images/no-data.webp";
import React, { useEffect, useState } from "react";
import { columns } from "./column-header";
import { getFormattedBranch } from "@/hooks/api/use-get-branch";
import useMutableSearchParams from "@/hooks/param";

const TableAbsence = () => {
  const branchData = getFormattedBranch();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const searchParam = useMutableSearchParams();

  const date = searchParam.get("date") ?? undefined;
  const branch = searchParam.get("branch") ?? undefined;
  const search = searchParam.get("search") ?? undefined;

  const { data, isFetching } = useGetDailyReportQuery({
    limit: 10,
    page: pagination.pageIndex + 1,
    filter: {
      search: search ?? "",
      branchId: branch ?? branchData?.[0]?.value,
      date: date,
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
          <p className="text-sm font-bold">Data Absence tidak ditemukan</p>
        </div>
      )}
    </div>
  );
};

export default TableAbsence;
