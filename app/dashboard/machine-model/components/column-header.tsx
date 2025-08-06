import { CellAction } from "@/components/table/cell-action";
import { MachineModel } from "@/types/machine-model";
import { createColumn } from "@/utils/table";
import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";

export const columnHelper = createColumnHelper<MachineModel>();

export const columns = [
  columnHelper.display({
    id: "photos",
    size: 80,
    header: () => createColumn("Foto", "text-left text-[#202124] font-bold text-sm"),
    cell: info => {
      const photoUrl = info.row.original.photos?.[0]?.url || "/images/fallback.png";

      return (
        <div className="text-sm">
          <Image
            src={photoUrl}
            alt="Gambar"
            width={100}
            height={100}
            className="object-cover rounded-md"
          />
        </div>
      );
    },
  }),
  columnHelper.display({
    id: "No",
    size: 5,
    header: () => createColumn("No", "text-center text-[#202124] font-bold text-sm"),
    cell: info => <div className="py-1 text-center">{info.row.index + 1}</div>,
  }),
  columnHelper.display({
    id: "modelName",
    size: 80,
    header: () => createColumn("Nama Model", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm md:min-w-[200px]">
        <p className="py-1">{info.row.original.modelName}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "machineTypeBrand",
    size: 80,
    header: () => createColumn("Merek", "text-left text-[#202124] font-bold text-sm"),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.machineTypeBrand.name}</p>
      </div>
    ),
  }),
];

export const columnsAdmin = [
  columnHelper.display({
    id: "action",
    size: 80,
    header: () => createColumn("Action", "text-center text-[#202124] font-bold text-sm"),
    cell: info => <CellAction data={info.row.original} tipe="machine-model" />,
  }),
];
