"use client";
import { Button } from "@/components/ui/button";
import { TOvertime } from "@/types/overtime";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { Eye, Pencil } from "lucide-react";
import { TUserData } from "@/types/auth";
// Import the modal when it's available
// import { OvertimeModalAction } from "./overtime-modal";

interface ClientOvertimeActionProps {
  tipe: "approve" | "detail";
  overtimeData: TOvertime;
}

export default function ClientOvertimeAction(props: ClientOvertimeActionProps) {
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal(true);
  };

  const session = useSession();
  const user = session.data?.user as unknown as TUserData;

  return (
    <>
      {/* {modal && (
        <OvertimeModalAction
          closeModal={() => setModal(!modal)}
          modalIsOpen={modal}
          overtimeData={props.overtimeData}
        />
      )} */}

      <Button variant="ghost" className="h-8 w-8 p-0" onClick={onClick}>
        {props.tipe === "approve" && user.role === "SUPER_ADMIN" ? (
          <>
            <Pencil className="mr-2" />
          </>
        ) : (
          <>
            <Eye className="h-4 w-4" />
          </>
        )}
      </Button>
    </>
  );
}
