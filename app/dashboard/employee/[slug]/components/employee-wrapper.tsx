"use client";

import EmployeeForm from "./employee-form";
import { useGetDetailEmployee } from "@/hooks/api/use-get-detail-employee";
import SkeletonForm from "@/components/skeleton-state/skeleton-form";
import { useParams } from "next/navigation";

const EmployeeWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: dataEmployee, isFetching } = useGetDetailEmployee(
    slug === "add" ? undefined : slug,
  );

  if (isFetching) {
    return <SkeletonForm />;
  }

  return <EmployeeForm dataEmployee={dataEmployee?.data} />;
};

export default EmployeeWrapper;
