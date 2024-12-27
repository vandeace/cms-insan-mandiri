import Title from "@/components/Title/page-title";
import InformationSection from "./components/information-section";
import BackButton from "@/components/back-button";

function Page() {
  return (
    <div className="flex w-full flex-col">
      <BackButton />
      <Title title="Laporan Bulanan Karyawan" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border-t border-t-alice-blue p-4">
        <InformationSection />
      </section>
    </div>
  );
}

export default Page;
