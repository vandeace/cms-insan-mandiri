import Title from "@/components/Title/page-title";
import EmployeeWrapper from "./components/employee-wrapper";
import { Suspense } from "react";

async function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Detail Karyawan" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border-t border-alice-blue">
        <Suspense fallback={<div>Loading...</div>}>
          <EmployeeWrapper />
        </Suspense>
      </section>
    </div>
  );
}

export default Page;
