import Title from "@/components/Title/page-title";
import ServerPermissionMain from "@/src/modules/permission/server.permission.main";

export default function PermissionPage() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Data Perizinan" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue p-4">
        <ServerPermissionMain />
      </section>
    </div>
  );
}
