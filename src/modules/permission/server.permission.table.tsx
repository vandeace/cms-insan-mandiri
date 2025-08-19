import ClientPermissionTableWrapper from "./client.permission.table";

export default function ServerPermissionTable() {
  return (
    <div className="overflow-y-auto w-full">
      <ClientPermissionTableWrapper />
    </div>
  );
}