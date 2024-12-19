import { TBranch } from "@/types/branches";
import { createColumn } from "@/utils/table";
import { createColumnHelper } from "@tanstack/react-table";
import { CellAction } from "@/components/table/cell-action";

export const columnHelper = createColumnHelper<TBranch>();

export const columns = [
  columnHelper.display({
    id: "No",
    size: 5,
    maxSize: 5,
    header: () => createColumn("No", "text-center text-[#202124] font-bold text-sm w-[20px]"),
    cell: info => <div className="py-1 text-center">{info.row.index + 1}</div>,
  }),
  columnHelper.display({
    id: "Nama",
    size: 80,
    header: () => createColumn("Nama", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.name}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "address",
    size: 80,
    header: () => createColumn("Alamat", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.address}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "Total Karyawan",
    size: 80,
    header: () => createColumn("Total Karyawan", "text-center text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-center text-sm">
        <p className="py-1">{info.row.original._count.users}</p>
      </div>
    ),
  }),
];

export const columnsAdmin = [
  columnHelper.display({
    id: "action",
    size: 80,
    header: () => createColumn("Action", "text-center text-[#202124] font-bold text-sm"),
    cell: info => <CellAction data={info.row.original} onConfirm={() => {}} tipe="branch" />,
  }),
];
