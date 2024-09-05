import { TPermission } from '@/types/permission';
import { createColumn } from '@/utils/table';
import { createColumnHelper } from '@tanstack/react-table';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { PermissionAction } from './permission-action';

export const columnHelper = createColumnHelper<TPermission>();

export const columns = [
  columnHelper.display({
    id: 'No',
    size: 5,
    maxSize: 5,
    header: () => createColumn('No', 'text-left text-[#202124] font-bold text-sm w-[20px]'),
    cell: info => <div className="py-1">{info.row.index + 1}</div>,
  }),
  columnHelper.display({
    id: 'Tanggal',
    size: 80,
    header: () => createColumn('Tanggal Izin', 'text-left text-[#202124] font-bold text-sm'),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{format(new Date(info.row.original.startTime), 'dd-MM-yyyy')}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: 'Nama Karyawan',
    size: 80,
    header: () => createColumn('Nama Karyawan', 'text-left text-[#202124] font-bold text-sm'),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.userPermission.name}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: 'tipe',
    size: 80,
    header: () => createColumn('Tipe', 'text-left text-[#202124] font-bold text-sm'),
    cell: info => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.permissionType.name}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: 'Status',
    size: 80,
    header: () => createColumn('Status', 'text-left text-[#202124] font-bold text-sm'),
    cell: info => (
      <div className="text-sm">
        <p
          className={twMerge(
            'py-1 font-black',
            info.row.original.status === 'APPROVED' && 'text-[#22C55E]',
            info.row.original.status === 'PENDING' && 'text-[#DEB841]',
            info.row.original.status === 'REJECTED' && 'text-secondary-red',
          )}
        >
          {info.row.original.status}
        </p>
      </div>
    ),
  }),
  columnHelper.display({
    id: 'action',
    size: 200,
    header: () =>
      createColumn('Action', 'text-center text-[#202124] font-bold text-sm max-w-[150px]'),
    maxSize: 10,
    cell: info => {
      const tipe = info.row.original.status === 'PENDING' ? 'approve' : 'detail';
      return (
        <div className="flex justify-center">
          <PermissionAction permissionData={info.row.original} tipe={tipe} />
        </div>
      );
    },
  }),
];
