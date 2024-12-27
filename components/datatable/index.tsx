import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { twMerge } from "tailwind-merge";

import { TProps } from "./type";
import { Pagination } from "../pagination";

export const DataTableX = <T,>(props: TProps<T>) => {
  const {
    columns,
    data = [],
    pageCount,
    rowSelection,
    setRowSelection,
    meta,
    totalData,
    pagination,
    setPagination,
    columnVisibility,
    setColumnVisibility,
  } = props;

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      pagination,
      columnVisibility,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    onPaginationChange: setPagination,
    pageCount,
    meta,
  });

  return (
    <div>
      <table className="w-full text-sm">
        <thead className="border-b bg-alice-blue pb-2">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className={`w-[${header.getSize()}px] p-2.5`}>
                  {header.isPlaceholder
                    ? undefined
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr
              key={row.id}
              className="dark:bg-black-300 border-b border-[#C1C1C1] transition-colors hover:bg-alice-blue"
              style={{
                backgroundColor: (row.original as any).colour_code,
                height: "1px",
              }}
            >
              {row.getVisibleCells().map((cell, index) => (
                <td
                  style={{
                    width: cell.column.getSize(),
                    height: "inherit",
                  }}
                  key={cell.id}
                  className={twMerge(
                    "border-b p-2.5",
                    index === row.getVisibleCells().length - 1 ? "pr-0 max-w-2" : "",
                    `max-w-[50px]`,
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">{pagination && <Pagination totalData={totalData} table={table} />}</div>
    </div>
  );
};
