import { CellAction } from "@/components/table/cell-action";
import { TEmployee } from "@/types/employee";
import { createColumn } from "@/utils/table";
import { createColumnHelper } from "@tanstack/react-table";

export const columnHelper = createColumnHelper<TEmployee>();

export const columns = [
  columnHelper.display({
    id: "No",
    size: 5,
    header: () => createColumn("No", "text-center text-[#202124] font-bold text-sm"),
    cell: info => <div className="py-1 text-center">{info.row.index + 1}</div>,
  }),
  columnHelper.display({
    id: "Nama",
    size: 80,
    header: () => createColumn("Nama", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm md:min-w-[200px]">
        <p className="py-1">{info.row.original.name}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "nik",
    size: 40,
    header: () => createColumn("NIK", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.nik}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "telephone_number",
    size: 80,
    header: () => createColumn("No Telepon", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.phoneNumber}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "branch",
    size: 80,
    header: () => createColumn("Kantor", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.branch.name}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "jabatan",
    size: 80,
    header: () => createColumn("Jabatan", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original?.position?.name}</p>
      </div>
    ),
  }),
];

export const columnsAdmin = [
  columnHelper.display({
    id: "action",
    size: 80,
    header: () => createColumn("Action", "text-center text-[#202124] font-bold text-sm"),
    cell: info => <CellAction data={info.row.original} onConfirm={() => {}} tipe="employee" />,
  }),
];
