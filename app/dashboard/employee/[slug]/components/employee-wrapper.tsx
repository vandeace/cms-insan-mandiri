"use client";

import { Suspense } from "react";
import EmployeeForm from "./employee-form";
import { useGetDetailEmployee } from "@/hooks/api/use-get-detail-employee";

interface TEmployeeWrapper {
  slug: string | undefined;
}

const EmployeeWrapper: React.FC<TEmployeeWrapper> = ({ slug }) => {
  const userId = slug !== "add" ? (slug as string) : undefined;
  const { data: dataEmployee, isFetching } = useGetDetailEmployee(userId);

  if (isFetching) {
    return <div>loading....</div>;
  }

  return (
    <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue bg-[#fff] p-4 drop-shadow-2xl">
      <Suspense fallback={<p>Loading feed...</p>}>
        <EmployeeForm dataEmployee={dataEmployee?.data} />
      </Suspense>
    </section>
  );
};

export default EmployeeWrapper;
