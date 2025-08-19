"use client";
import { useGetEmployee } from "@/hooks/api/use-get-employee";
import { UseGetAllBranch } from "@/hooks/api/use-get-branch";
import { UseGetAllPosition } from "@/hooks/api/use-get-position";
import { useGetCustomer } from "@/hooks/api/use-get-customer";
import DashboardCard from "./dashboard.card";
import { FaUsers } from "react-icons/fa";
import { FaBuilding, FaUsers as Customer } from "react-icons/fa6";
import { RiUserSettingsLine } from "react-icons/ri";

export default function ClientDashboardSummary() {
  const { data: dataEmployee } = useGetEmployee({});
  const { data: dataBranch } = UseGetAllBranch({});
  const { data: dataPosition } = UseGetAllPosition({});
  const { data: dataCustomer } = useGetCustomer({});

  return (
    <div className="grid grid-cols-4 gap-x-7">
      <DashboardCard Icon={FaUsers} title="Karyawan" data={dataEmployee?.meta?.totalCount ?? 0} />
      <DashboardCard Icon={FaBuilding} title="Cabang" data={dataBranch?.meta?.totalCount ?? 0} />
      <DashboardCard Icon={RiUserSettingsLine} title="Jabatan" data={dataPosition?.meta?.totalCount ?? 0} />
      <DashboardCard Icon={Customer} title="Pelanggan" data={dataCustomer?.meta?.totalCount ?? 0} />
    </div>
  );
}