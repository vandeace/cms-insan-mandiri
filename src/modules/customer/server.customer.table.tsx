import ClientCustomerTableWrapper from "./client.customer.table";

export default function ServerCustomerTable() {
  return (
    <div className="overflow-y-auto w-full">
      <ClientCustomerTableWrapper />
    </div>
  );
}