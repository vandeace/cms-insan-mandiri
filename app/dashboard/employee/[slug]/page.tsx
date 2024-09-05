import Title from '@/components/Title/page-title';
import { Suspense } from 'react';
import EmployeeForm from './components/employee-form';
import EmployeeWrapper from './components/employee-wrapper';

interface Params {
  slug: string;
}

export default function DetailEmployeePage({ params }: { params: Params }) {
  const { slug } = params;

  return (
    <div className="flex w-full flex-col">
      <Title title="Detail Karyawan" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue bg-[#fff] p-4 drop-shadow-2xl">
        <EmployeeWrapper slug={slug} />
      </section>
    </div>
  );
}
