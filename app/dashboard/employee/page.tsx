import Title from "@/components/Title/page-title";
import ServerEmployeeMain from "@/src/modules/employee/server.employee.main";

export default function EmployeePage() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Data Karyawan" urlBtn="/dashboard/employee/add" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue p-4 drop-shadow-2xl">
        <ServerEmployeeMain />
      </section>
    </div>
  );
}
