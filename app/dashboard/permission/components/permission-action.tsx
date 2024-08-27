import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { FiEdit2, FiEye } from "react-icons/fi";

import { TTokenData } from "@/types/auth";
import { PermissionModalAction } from "./permission-modal";
import { TPermission } from "@/types/permission";
import { Button } from "@/components/ui/button";

interface PermissionActionProps {
  tipe: "approve" | "detail";
  permissionData: TPermission;
}

export const PermissionAction = (props: PermissionActionProps) => {
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal(true);
  };
  const session = useSession();
  const user = session?.data?.user as unknown as TTokenData;

  return (
    <>
      {modal && (
        <PermissionModalAction
          closeModal={() => setModal(!modal)}
          modalIsOpen={modal}
          permissionData={props.permissionData}
        />
      )}

      <Button
        onClick={() => onClick()}
        variant="secondary"
        className="bg-secondary-blue text-white hover:bg-primary-blue"
      >
        {props.tipe === "approve" && user.role === "SUPER_ADMIN" ? (
          <>
            <FiEdit2 className="mr-2" /> <span>Approve</span>
          </>
        ) : (
          <>
            <FiEye className="mr-2" />
            <span>Detail</span>
          </>
        )}
      </Button>
    </>
  );
};
