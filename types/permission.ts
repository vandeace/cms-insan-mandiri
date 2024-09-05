export type TPermission = {
  id: string;
  userId: string;
  permissionTypeId: string;
  startTime: string | Date;
  endTime: string | Date;
  notes: string;
  status: "REJECTED" | "APPROVED" | "PENDING";
  rejectNotes: string;
  photo: string;
  approvedById: string;
  approvedBy: {
    name: string;
  };
  userPermission: {
    name: string;
    email: string;
  };
  permissionType: {
    name: "Izin" | "Sakit";
  };
};

export type TPermissionFilter = {
  permissionTypeId?: string;
  status?: string;
};

export type TPermissionAction = {
  id: string;
  action: "approve" | "reject";
};
