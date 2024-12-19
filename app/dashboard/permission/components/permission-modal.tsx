import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useUpdatePermission } from "@/hooks/api/use-update-permission";
import { TPermission } from "@/types/permission";
import { useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

interface PermissionModalActionProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  permissionData: TPermission;
}

export const PermissionModalAction: React.FC<PermissionModalActionProps> = ({
  modalIsOpen,
  closeModal,
  permissionData,
}) => {
  const { mutate } = useUpdatePermission();
  const queryClient = useQueryClient();

  const renderRow = (label: string, value: string, valueClassName?: string) => {
    return (
      <div className="grid grid-cols-2 text-sm font-bold text-[#202124]">
        <div className="flex min-w-[150px] justify-between p-2">
          <span>{label}</span> <span>:</span>
        </div>
        <span className={twMerge("p-2 text-sm font-normal text-[#202124]", valueClassName)}>
          {value}
        </span>
      </div>
    );
  };

  const getStatusColor = () => {
    switch (permissionData.status) {
      case "APPROVED":
        return "text-[#22C55E]";
      case "PENDING":
        return "text-[#DEB841]";
      case "REJECTED":
        return "text-secondary-red";
      default:
        return "";
    }
  };

  return (
    <Dialog open={modalIsOpen} onOpenChange={closeModal}>
      <DialogContent className="w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-black text-secondary-blue">
            DETAIL PERIZINAN
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 border border-columbia-blue p-4">
            {renderRow("Nama Karyawan", permissionData.userPermission.name)}
            {renderRow("Jenis Perizinan", permissionData.permissionType.name)}
            {renderRow("Tanggal Izin", format(new Date(permissionData.startTime), "dd-MM-yyyy"))}
            {renderRow("Keterangan", permissionData.notes)}
            {renderRow("Status Izin", permissionData.status, `${getStatusColor()} font-black`)}
            {permissionData.status === "APPROVED" &&
              renderRow("Disetujui Oleh", permissionData.approvedBy.name)}
            {permissionData.status === "REJECTED" &&
              renderRow("Alasan Ditolak", permissionData.rejectNotes)}
          </div>

          {permissionData.status === "PENDING" && (
            <div className="flex items-center justify-center gap-x-3">
              <Button
                variant="destructive"
                onClick={() =>
                  mutate(
                    {
                      id: permissionData.id,
                      action: "reject",
                    },
                    {
                      onSuccess: () => {
                        closeModal();
                        toast.success(`Berhasil Menolak Perizinan`, {
                          position: "top-center",
                        });
                        queryClient.invalidateQueries({
                          queryKey: ["permission-data"],
                        });
                      },
                      onError: () => {
                        toast.error("Gagal Menolak Perizinan", {
                          position: "top-center",
                        });
                      },
                    },
                  )
                }
              >
                Tolak
              </Button>
              <Button
                variant="secondary"
                className="bg-success-green hover:bg-green-900"
                onClick={() =>
                  mutate(
                    {
                      id: permissionData.id,
                      action: "approve",
                    },
                    {
                      onSuccess: () => {
                        queryClient.resetQueries({
                          queryKey: ["permission"],
                          exact: true,
                        });
                        closeModal();
                        toast.success(`Berhasil setujui Perizinan`, {
                          position: "top-center",
                        });
                      },
                      onError: () => {
                        toast.error("Gagal Menyetujui Perizinan", {
                          position: "top-center",
                        });
                      },
                    },
                  )
                }
              >
                Setujui
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
