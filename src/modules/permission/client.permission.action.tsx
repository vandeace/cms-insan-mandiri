"use client";
import { Button } from "@/components/ui/button";
import { TUserData } from "@/types/auth";
import { TPermission } from "@/types/permission";
import { Eye, Pencil } from "lucide-react";
import { useSession } from "next-auth/react";

interface ClientPermissionActionProps {
  tipe: "approve" | "detail";
  permissionData: TPermission;
}

export default function ClientPermissionAction(props: ClientPermissionActionProps) {
  // const [modal, setModal] = useState(false);

  const onClick = () => {
    // setModal(true);
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
