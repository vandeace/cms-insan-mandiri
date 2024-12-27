import Title from "@/components/Title/page-title";
import { Suspense } from "react";
import TablePermission from "./components/table-permission";
import TableFilter from "./components/table-filter";

async function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Data Perizinan" />

      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue  p-4">
        <TableFilter />
        <Suspense fallback={<p>Loading feed...</p>}>
          <TablePermission />
        </Suspense>
      </section>
    </div>
  );
}

export default Page;
