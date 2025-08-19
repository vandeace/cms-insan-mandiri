import Title from "@/components/Title/page-title";
import ServerCustomerMain from "@/src/modules/customer/server.customer.main";

export default function CustomerPage() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Data Pelanggan" urlBtn="/dashboard/customer/add" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue p-4 drop-shadow-2xl">
        <ServerCustomerMain />
      </section>
    </div>
  );
}
