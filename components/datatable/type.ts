import type {
  ColumnDef,
  PaginationState,
  VisibilityState,
  RowData,
  RowSelectionState,
  TableMeta,
} from "@tanstack/react-table";
import { Dispatch, ReactNode, SetStateAction } from "react";

declare module "@tanstack/react-table" {
  /* eslint-disable unused-imports/no-unused-vars */
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}

export type TProps<T> = {
  data?: T[];
  totalData?: number;
  columns: ColumnDef<T, any>[];
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  onPaginationChange?: (pagination: PaginationState) => void;
  className?: string;
  rowSelection?: RowSelectionState;
  pagination?: PaginationState;
  columnVisibility?: VisibilityState;
  setPagination?: Dispatch<SetStateAction<PaginationState>>;
  setRowSelection?: Dispatch<SetStateAction<RowSelectionState>>;
  setColumnVisibility?: Dispatch<SetStateAction<VisibilityState>>;
  sort?: string;
  setSort?: Dispatch<SetStateAction<string>>;
  meta?: TableMeta<T>;
  rightHeaderNode?: ReactNode;
  reset?: number;
};
