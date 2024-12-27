"use client";
import SkeletonTable from "@/components/skeleton-state/skeleton-table";
import { DataTable } from "@/components/table/table-data";
import { Calendar } from "@/components/ui/calendar";
import { useGetDetailEmployee } from "@/hooks/api/use-get-detail-employee";
import { useGetEmployeeReport } from "@/hooks/api/use-get-employee-report";
import { useGetEmployeeReportStats } from "@/hooks/api/use-get-employee-report-stats";
import { useParams } from "next/navigation";
import { parseAsIsoDate, useQueryState } from "nuqs";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { columns } from "./column-header";

const TableEmployeeMonthlyReport = () => {
  const { slug } = useParams<{ slug: string }>();
  const [month] = useQueryState(
    "month",
    parseAsIsoDate.withDefault(new Date(new Date().toISOString().split("T")[0])),
  );

  const { data, isFetching } = useGetEmployeeReportStats({
    month: month,
    userId: slug,
  });

  const { data: userData, isFetching: isFetchingDataUser } = useGetDetailEmployee(slug);

  const { data: dataEmployeeReport, isFetching: isFetchingEmployeeReport } = useGetEmployeeReport({
    month: month,
    userId: slug,
  });

  const selectedDay = useMemo(() => {
    return (
      dataEmployeeReport?.data
        .filter(report => report.attendance)
        .map(report => new Date(report.date)) ?? []
    );
  }, [dataEmployeeReport]);

  if (isFetching || isFetchingEmployeeReport || isFetchingDataUser) {
    return <SkeletonTable />;
  }

  const renderRow = (label: string, value: string, valueClassName?: string) => {
    return (
      <div className="grid grid-cols-2 text-base font-semibold text-[#202124]">
        <div className="flex min-w-[200px] justify-between p-2">
          <span>{label}</span> <span>:</span>
        </div>
        <span className={twMerge("p-2 font-normal text-[#202124]", valueClassName)}>{value}</span>
      </div>
    );
  };

  return (
    <div>
      <div className="w-full flex flex-row border rounded-md">
        <div className="flex gap-2 flex-col flex-1 border-r p-4">
          <div className="text-xl font-bold p-2">Informasi Karyawan</div>
          {renderRow("Nama Karyawan", userData?.data.name ?? "-")}
          {renderRow("NIK", userData?.data.nik ?? "-")}
          {renderRow("Jabatan", userData?.data.position.name ?? "-")}
          <div className="text-xl font-bold p-2 text-center">
            {`Performa Bulan ${month?.toLocaleString("id-ID", { month: "long", year: "numeric" })}`}
          </div>
          <div className="flex flex-row p-2 flex-1 justify-center">
            <div className="flex flex-col items-center w-1/3 text-base">
              <div className="font-bold">Hadir</div>
              <div className="text-base">{data?.data.attendances} Hari</div>
            </div>
            <div className="flex flex-col items-center w-1/3 text-base">
              <div className="font-bold">Izin</div>
              <div className="text-base">{data?.data.permissions} Hari</div>
            </div>
            <div className="flex flex-col items-center w-1/3 text-base">
              <div className="font-bold">Lemburan</div>
              <div className="text-base">{data?.data.overtimes} Jam</div>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col">
          <Calendar
            mode="multiple"
            selected={selectedDay}
            className="rounded-md border p-0.5"
            disableNavigation
            disabled
            defaultMonth={month}
            modifiersStyles={{
              selected: {
                backgroundColor: "#009F57",
                color: "white",
                borderRadius: "50px",
              },
            }}
          />
        </div>
      </div>

      <div className="w-full rounded-md mt-4 border p-4">
        <div className="text-xl font-bold p-2">List Absensi</div>
        <DataTable
          columns={columns}
          data={dataEmployeeReport?.data ?? []}
          totalItems={dataEmployeeReport?.data.length ?? 0}
          showPagination={false}
        />
      </div>
    </div>
  );
};

export default TableEmployeeMonthlyReport;
