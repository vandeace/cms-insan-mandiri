import TableMachineModel from "./components/table-machine-model";
import TableFilter from "./components/table-filter";

export default function MachineModelPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Model Mesin</h1>
        <TableFilter />
        <TableMachineModel />
      </div>
    </div>
  );
}
