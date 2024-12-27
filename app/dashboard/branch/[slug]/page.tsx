import Title from "@/components/Title/page-title";
import BranchWrapper from "./components/branch-wrapper";

interface Params {
  slug: string;
}

export default function DetailEmployeePage({ params }: { params: Params }) {
  const { slug } = params;

  return (
    <div className="flex w-full flex-col">
      <Title title="Detail Kantor" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border-t border-alice-blue  drop-shadow-2xl">
        <BranchWrapper slug={slug} />
      </section>
    </div>
  );
}
