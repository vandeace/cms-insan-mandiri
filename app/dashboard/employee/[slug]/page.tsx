import Title from "@/components/Title/page-title";
import EmployeeWrapper from "./components/employee-wrapper";

interface Params {
  slug: string;
}

export default function DetailEmployeePage({ params }: { params: Params }) {
  const { slug } = params;

  return (
    <div className="flex w-full flex-col">
      <Title title="Detail Karyawan" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border-t border-alice-blue">
        <EmployeeWrapper slug={slug} />
      </section>
    </div>
  );
}
