import Title from "@/components/Title/page-title";
import ServerBranchMain from "@/src/modules/branch/server.branch.main";

export default function BranchPage() {
  return (
    <div className="flex w-full flex-col">
      <Title urlBtn="/dashboard/branch/add" title="Data Kantor" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border-t border-t-alice-blue p-4">
        <ServerBranchMain />
      </section>
    </div>
  );
}
