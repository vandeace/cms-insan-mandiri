"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { toast } from "react-toastify";
import { useDeleteEmployee } from "@/hooks/api/use-delete-employee";
import { useDeleteCustomer } from "@/hooks/api/use-delete-customer";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading?: boolean;
  tipe: "employee" | "branch" | "customer";
  id: string | number;
}

export const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose, loading, id, tipe }) => {
  const [isMounted, setIsMounted] = useState(false);

  const { mutate: mutateEmployee } = useDeleteEmployee();
  const { mutate: mutateCustomer } = useDeleteCustomer();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onSuccessHandle = () => {
    toast.success(`Success Delete Data`, {
      position: "top-center",
    });
    onClose();
  };
  const onErrorHandle = () => {
    toast.error(`Fail Delete Data`, {
      position: "top-center",
    });
  };

  const onDeleteConfirm = () => {
    console.log("deleteid:", id);
    if (tipe === "employee") {
      mutateEmployee(
        {
          id: String(id),
        },
        {
          onSuccess: onSuccessHandle,
          onError: onErrorHandle,
        },
      );
    } else if (tipe === "customer") {
      mutateCustomer(
        {
          id: String(id),
        },
        {
          onSuccess: onSuccessHandle,
          onError: onErrorHandle,
        },
      );
    } else {
      //TODO: add branch delete
    }
  };

  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex w-full items-center justify-end space-x-2 pt-6">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onDeleteConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
