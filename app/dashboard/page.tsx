import Title from "@/components/Title/page-title";
import SummaryData from "./components/summary-data";

function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Dashboard" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue bg-[#fff] p-4 drop-shadow-2xl">
        <SummaryData />
      </section>
    </div>
  );
}

export default Page;
