import ClientBranchTableWrapper from "./client.branch.table";

export default function ServerBranchTable() {
  return (
    <div className="overflow-y-auto w-full">
      <ClientBranchTableWrapper />
    </div>
  );
}