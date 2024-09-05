import Title from "@/components/Title/page-title";
import React, { Suspense } from "react";
import TablePermission from "./components/table-permission";

function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Data Perizinan" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue bg-[#fff] p-4 drop-shadow-2xl">
        <Suspense fallback={<p>Loading feed...</p>}>
          <TablePermission />
        </Suspense>
      </section>
    </div>
  );
}

export default Page;
