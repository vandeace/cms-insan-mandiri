import { Button } from "@/components/ui/button";
import { useUpdateOvertime } from "@/hooks/api/use-update-overtime";
import { TOvertime } from "@/types/overtime";
import { TPermissionAction } from "@/types/permission";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { differenceInHours, format } from "date-fns";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

const customStyles = {
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
  const getDifferenceInHours = (startTime: string, endTime: string) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diffInHrs = differenceInHours(end, start);
    return `${diffInHrs} Jam`;
  };

  const { mutate } = useUpdateOvertime();

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
    let colorClass = "";
    switch (overtimeData.status) {
      case "APPROVED": {
        colorClass = "text-[#22C55E]";
        break;
      }
      case "PENDING": {
        colorClass = "text-[#DEB841]";
        break;
      }
      case "REJECTED": {
        colorClass = "text-secondary-red";
        break;
      }
      default: {
        break;
      }
    }
    return colorClass;
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex w-[400px] flex-col items-center gap-3">
          <div
            className="fixed right-[10px] top-2 cursor-pointer rounded-full border border-columbia-blue p-2"
            onClick={closeModal}
          >
            <AiOutlineClose />
          </div>
          <h2 className="text-lg font-black text-secondary-blue">DETAIL LEMBURAN</h2>
          <div className="flex flex-col gap-3 border border-columbia-blue p-4">
            {renderRow("Nama Karyawan", overtimeData.user.name)}
            {renderRow("Tanggal Lembur", format(new Date(overtimeData.startTime), "dd-MM-yyyy"))}
            {renderRow(
              "Total Jam",

              `${getDifferenceInHours(
                overtimeData.startTime as string,
                overtimeData.endTime as string,
              )}`,
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
      </Modal>
    </div>
  );
};
