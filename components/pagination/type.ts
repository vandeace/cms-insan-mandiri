import { Table } from '@tanstack/react-table';

export type TProps<T> = {
  table: Table<T>;
  totalData?: number;
};
