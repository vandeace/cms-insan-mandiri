import { CellAction } from "@/components/table/cell-action";
import { TCustomer } from "@/types/customer";
import { createColumn } from "@/utils/table";
import { createColumnHelper } from "@tanstack/react-table";

export const columnHelper = createColumnHelper<TCustomer>();

export const columns = [
  columnHelper.display({
    id: "companyName",
    size: 80,
    header: () => createColumn("Nama Perusahaan", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm md:min-w-[200px]">
        <p className="py-1">{info.row.original.companyName}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "contactPerson",
    size: 80,
    header: () => createColumn("Nama Kontak", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.contactPerson}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "phone",
    size: 80,
    header: () => createColumn("Nomor Telepon", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.phone}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "email",
    size: 80,
    header: () => createColumn("Email", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.email ?? "-"}</p>
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
    id: "actions",
    size: 80,
    header: () => createColumn("Aksi", "text-center text-[#202124] font-bold text-sm"),
    cell: props => <CellAction data={props.row.original} tipe="customer" />,
  }),
];
