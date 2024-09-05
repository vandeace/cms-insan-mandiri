export type TOvertime = {
  id: string;
  userId: string;
  startTime: string;
  endTime: string;
  notes: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  approvedById: null | string;
  approvedBy: null | {
    name: string;
  };
  user: {
    name: string;
    email: string;
  };
};

export type TOvertimeFilter = {
  search?: string;
  status?: string;
};

export type TOvertimeAction = {
  id: string;
  action: "approve" | "reject";
};
