import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useUpdateOvertime } from "@/hooks/api/use-update-overtime";
import { TOvertime } from "@/types/overtime";
import { useQueryClient } from "@tanstack/react-query";
import { differenceInHours, format } from "date-fns";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

interface OvertimeModalActionProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  overtimeData: TOvertime;
}

export const OvertimeModalAction: React.FC<OvertimeModalActionProps> = ({
  modalIsOpen,
  closeModal,
  overtimeData,
}) => {
  const queryClient = useQueryClient();
  const { mutate } = useUpdateOvertime();

  const getDifferenceInHours = (startTime: string, endTime: string) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diffInHrs = differenceInHours(end, start);
    return `${diffInHrs} Jam`;
  };

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
    switch (overtimeData.status) {
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
            DETAIL LEMBURAN
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 border border-columbia-blue p-4">
            {renderRow("Nama Karyawan", overtimeData.user.name)}
            {renderRow("Tanggal Lembur", format(new Date(overtimeData.startTime), "dd-MM-yyyy"))}
            {renderRow(
              "Total Jam",
              getDifferenceInHours(
                overtimeData.startTime as string,
                overtimeData.endTime as string,
              ),
            )}
            {renderRow("Keterangan", overtimeData.notes)}
            {renderRow("Status", overtimeData.status, `${getStatusColor()} font-black`)}
            {overtimeData.status === "APPROVED" &&
              overtimeData.approvedBy?.name &&
              renderRow("Disetujui Oleh", overtimeData.approvedBy.name)}
          </div>

          {overtimeData.status === "PENDING" && (
            <div className="flex items-center justify-center gap-x-3">
              <Button
                variant="destructive"
                onClick={() =>
                  mutate(
                    {
                      id: overtimeData.id,
                      action: "reject",
                    },
                    {
                      onSuccess() {
                        closeModal();
                        toast.success(`Berhasil Menolak Lemburan`, {
                          position: "top-center",
                        });
                        queryClient.invalidateQueries({
                          queryKey: ["overtime"],
                        });
                      },
                      onError: () => {
                        toast.error("Gagal Menolak Lemburan", {
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
                variant="default"
                onClick={() =>
                  mutate(
                    {
                      id: overtimeData.id,
                      action: "approve",
                    },
                    {
                      onSuccess() {
                        closeModal();
                        toast.success(`Berhasil Setujui Lemburan`, {
                          position: "top-center",
                        });
                        queryClient.invalidateQueries({
                          queryKey: ["overtime"],
                        });
                      },
                      onError: () => {
                        toast.error("Gagal Menyetujui Lemburan", {
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
