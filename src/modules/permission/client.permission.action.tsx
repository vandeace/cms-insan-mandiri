"use client";
import { Button } from "@/components/ui/button";
import { TPermission } from "@/types/permission";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { Eye, Pencil } from "lucide-react";
import { TUserData } from "@/types/auth";

interface ClientPermissionActionProps {
  tipe: "approve" | "detail";
  permissionData: TPermission;
}

export default function ClientPermissionAction(props: ClientPermissionActionProps) {
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal(true);
  };

  const session = useSession();
  const user = session.data?.user as unknown as TUserData;

  return (
    <>
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
