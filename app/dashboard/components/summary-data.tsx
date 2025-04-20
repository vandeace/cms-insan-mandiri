"use client";
import { useGetEmployee } from "@/hooks/api/use-get-employee";
import Card from "./card";
import { FaUsers } from "react-icons/fa";
import { UseGetAllBranch } from "@/hooks/api/use-get-branch";
import { FaBuilding, FaUsers as Customer } from "react-icons/fa6";
import { RiUserSettingsLine } from "react-icons/ri";
import { UseGetAllPosition } from "@/hooks/api/use-get-position";
import { useGetCustomer } from "@/hooks/api/use-get-customer";

const SummaryData = () => {
  const { data: dataEmployee } = useGetEmployee({});
  const { data: dataBranch } = UseGetAllBranch({});
  const { data: dataPosition } = UseGetAllPosition({});
  const { data: dataCustomer } = useGetCustomer({});

  return (
    <div className="grid grid-cols-4 gap-x-7">
      <Card Icon={FaUsers} title="Karyawan" data={dataEmployee?.meta?.totalCount ?? 0} />
      <Card Icon={FaBuilding} title="Cabang" data={dataBranch?.meta?.totalCount ?? 0} />
      <Card Icon={RiUserSettingsLine} title="Jabatan" data={dataPosition?.meta?.totalCount ?? 0} />
      <Card Icon={Customer} title="Pelanggan" data={dataCustomer?.meta?.totalCount ?? 0} />
    </div>
  );
};

export default SummaryData;
