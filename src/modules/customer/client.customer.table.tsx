"use client";
import { DataTable } from "@/components/table/table-data";
import { DataTableSkeleton } from "@/components/table/table-skeleton";
import { useGetCustomer } from "@/hooks/api/use-get-customer";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { useDebounce } from "use-debounce";
import { columns } from "./customer.columns";
import dynamic from "next/dynamic";

const DataNotFound = dynamic(() => import("@/components/data-not-found"));

export default function ClientCustomerTableWrapper() {
  const [search] = useQueryState("search", parseAsString.withDefault(""));
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [searchDebounce] = useDebounce(search, 1000);

  const { data, isFetching } = useGetCustomer({
    page: page,
    filter: {
      search: searchDebounce ?? "",
    },
  });

  if (isFetching) {
    return <DataTableSkeleton />;
  }

  return (
    <>
      {!!data?.data.length ? (
        <DataTable
          columns={columns}
          data={data?.data}
          totalItems={data.meta?.totalCount ?? 0}
          pageSizeOptions={[10, 20, 30, 40, 50]}
        />
      ) : (
        <DataNotFound message="Data pelanggan tidak ditemukan" />
      )}
    </>
  );
}
