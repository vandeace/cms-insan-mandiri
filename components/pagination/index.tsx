import { ArrowIcon } from "../icons/arrow";
import { ArrowCollapseIcon } from "../icons/arrow-collapse";
import { TProps } from "./type";

export const Pagination = <T,>(props: TProps<T>) => {
  const { table, totalData } = props;

  return (
    <div className="flex items-center justify-between">
      <div className="mr-3 text-xs font-semibold">Jumlah Data : {totalData ?? 0}</div>

      <div className="mr-3 flex items-center space-x-1">
        <button
          className="hover:text-white disabled:hover:bg-transparent flex h-[30px] w-[30px] items-center justify-center rounded-full transition-colors hover:bg-[#FCB017] disabled:text-[#C1C1C1]"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowCollapseIcon />
        </button>

        <button
          className="hover:text-white disabled:hover:bg-transparent flex h-[30px] w-[30px] rotate-90 items-center justify-center rounded-full transition-colors hover:bg-[#FCB017] disabled:text-[#C1C1C1]"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowIcon />
        </button>

        <p className="mx-1 w-8 text-center text-xs font-semibold">
          {table.getState().pagination.pageIndex + 1}
        </p>

        <button
          className="hover:text-white disabled:hover:bg-transparent flex h-[30px] w-[30px] -rotate-90 items-center justify-center rounded-full transition-colors hover:bg-[#FCB017] disabled:text-[#C1C1C1]"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ArrowIcon />
        </button>

        <button
          className="hover:text-white disabled:hover:bg-transparent flex h-[30px] w-[30px] rotate-180 items-center justify-center rounded-full transition-colors hover:bg-[#FCB017] disabled:text-[#C1C1C1]"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ArrowCollapseIcon />
        </button>
      </div>
    </div>
  );
};
