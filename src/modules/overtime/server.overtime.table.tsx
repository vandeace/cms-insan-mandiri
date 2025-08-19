import ClientOvertimeTableWrapper from "./client.overtime.table";

export default function ServerOvertimeTable() {
  return (
    <div className="overflow-y-auto w-full">
      <ClientOvertimeTableWrapper />
    </div>
  );
}