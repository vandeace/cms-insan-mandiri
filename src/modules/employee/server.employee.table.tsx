import ClientEmployeeTableWrapper from "./client.employee.table";

export default function ServerEmployeeTable() {
  return (
    <div className="overflow-y-auto w-full">
      <ClientEmployeeTableWrapper />
    </div>
  );
}