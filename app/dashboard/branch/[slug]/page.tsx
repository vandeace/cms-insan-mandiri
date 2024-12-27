import Title from "@/components/Title/page-title";
import BranchWrapper from "./components/branch-wrapper";
import { Suspense } from "react";

async function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Detail Kantor" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border-t border-alice-blue  drop-shadow-2xl">
        <Suspense fallback={<div>Loading...</div>}>
          <BranchWrapper />
        </Suspense>
      </section>
    </div>
  );
}

export default Page;
