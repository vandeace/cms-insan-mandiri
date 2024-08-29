import { Button } from "@/components/ui/button";
import { TBranch } from "@/types/branches";
import { createColumn } from "@/utils/table";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

export const columnHelper = createColumnHelper<TBranch>();

export const columnsSuperAdmin = [
  columnHelper.display({
    id: "No",
    size: 5,
    maxSize: 5,
    header: () =>
      createColumn("No", "text-left text-[#202124] font-bold text-sm w-[20px]"),
    cell: (info) => <div className="py-1">{info.row.index + 1}</div>,
  }),
  columnHelper.display({
    id: "Nama",
    size: 80,
    header: () =>
      createColumn("Nama", "text-left text-[#202124] font-bold text-sm"),
    cell: (info) => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.name}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "address",
    size: 80,
    header: () =>
      createColumn("Alamat", "text-left text-[#202124] font-bold text-sm"),
    cell: (info) => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.address}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "Total Karyawan",
    size: 80,
    header: () =>
      createColumn(
        "Total Karyawan",
        "text-center text-[#202124] font-bold text-sm",
      ),
    cell: (info) => (
      <div className="text-center text-sm">
        <p className="py-1">{info.row.original._count.users}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "action",
    size: 80,
    header: () =>
      createColumn("Action", "text-center text-[#202124] font-bold text-sm"),
    cell: (info) => (
      <div className="flex items-center justify-center">
        <Link href={`/branches/${info.row.original.id}`}>
          <Button variant="secondary" className="bg-secondary-blue text-[#fff]">
            <FaEdit className="mr-2" />
            Edit
          </Button>
        </Link>
      </div>
    ),
  }),
];

export const columnsAdmin = [
  columnHelper.display({
    id: "No",
    size: 5,
    maxSize: 5,
    header: () =>
      createColumn("No", "text-left text-[#202124] font-bold text-sm w-[20px]"),
    cell: (info) => <div className="py-1">{info.row.index + 1}</div>,
  }),
  columnHelper.display({
    id: "Nama",
    size: 80,
    header: () =>
      createColumn("Nama", "text-left text-[#202124] font-bold text-sm"),
    cell: (info) => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.name}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "address",
    size: 80,
    header: () =>
      createColumn("Alamat", "text-left text-[#202124] font-bold text-sm"),
    cell: (info) => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.address}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "Total Karyawan",
    size: 80,
    header: () =>
      createColumn(
        "Total Karyawan",
        "text-center text-[#202124] font-bold text-sm",
      ),
    cell: (info) => (
      <div className="text-center text-sm">
        <p className="py-1">{info.row.original._count.users}</p>
      </div>
    ),
  }),
];
