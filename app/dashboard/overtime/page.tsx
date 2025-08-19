import Title from "@/components/Title/page-title";
import ServerOvertimeMain from "@/src/modules/overtime/server.overtime.main";

export default function OvertimePage() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Data Lemburan" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue p-4 drop-shadow-2xl">
        <ServerOvertimeMain />
      </section>
    </div>
  );
}
