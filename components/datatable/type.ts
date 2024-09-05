import type {
  ColumnDef,
  PaginationState,
  RowSelectionState,
  TableMeta,
  VisibilityState,
} from "@tanstack/react-table";
import { Dispatch, ReactNode, SetStateAction } from "react";

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
