"use client";
import { DataTableX } from "@/components/datatable";
import { useGetEmployee } from "@/hooks/api/use-get-employee";
import { useSession } from "next-auth/react";
import { columnsAdmin, columnsSuperAdmin } from "./column-header";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { TTokenData } from "@/types/auth";
import useMutableSearchParams from "@/hooks/param";
import { useDebounce } from "use-debounce";

export default function TableEmployee() {
  const session = useSession();

  const user = session?.data?.user as unknown as TTokenData;

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const searchParams = useMutableSearchParams();

  const [search] = useDebounce(searchParams.get("search"), 1000);

  const { data } = useGetEmployee({
    page: pagination.pageIndex + 1,
    filter: {
      search: search ?? "",
    },
  });

  return (
    <div className="overflow-y-auto w-full">
      <DataTableX
        columns={
          user?.role === "SUPER_ADMIN" ? columnsSuperAdmin : columnsAdmin
        }
        data={data?.data}
        pageSize={10}
        totalData={data?.meta && data?.meta.totalCount}
        pagination={pagination}
        setPagination={setPagination}
        pageCount={data?.meta && data?.meta.totalPage}
      />
    </div>
  );
}
