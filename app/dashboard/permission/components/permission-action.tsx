import { useSession } from "next-auth/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { TUserData } from "@/types/auth";
import { TPermission } from "@/types/permission";
import { Eye, Pencil } from "lucide-react";
import dynamic from "next/dynamic";

const PermissionModalAction = dynamic(() =>
  import("./permission-modal").then(mod => mod.PermissionModalAction),
);

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
  const user = session.data?.user as unknown as TUserData;

  return (
    <>
      {modal && (
        <PermissionModalAction
          closeModal={() => setModal(!modal)}
          modalIsOpen={modal}
          permissionData={props.permissionData}
        />
      )}

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
};
