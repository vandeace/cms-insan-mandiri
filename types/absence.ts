export type TAbsenceFilter = {
  search?: string;
  date?: string | Date;
  branchId?: string;
};

export interface TAbsenceResponse {
  id: string;
  nik: string;
  email: string;
  name: string;
  phoneNumber: string;
  role: string;
  photo?: null;
  address: string;
  positionId: string;
  branchId: string;
  createdAt: string;
  updatedAt: string;
  attendances?: TAttendancesEntity[] | null;
  permissions?: null[] | null;
  overtimes?: null[] | null;
  position: PositionOrBranch;
  branch: PositionOrBranch;
  status: string;
}
export interface TAttendancesEntity {
  id: string;
  userId: string;
  date: string;
  checkInTime: string;
  checkInStatus: string;
  afternoonCheckInTime?: null;
  afternoonCheckInStatus?: null;
  checkOutTime?: null;
  checkInLat: number;
  checkInLong: number;
  photo: string;
  createdAt: string;
  updatedAt: string;
}
export interface PositionOrBranch {
  name: string;
}

export interface TMonthlyReportParams {
  month: Date;
  branchId?: string;
  page?: number;
  limit?: number;
  search?: string;
}
export interface TEmployeeReportParams {
  month: Date;
  userId: string;
}

export interface TMonthlyAbsenceReport {
  id: string;
  name: string;
  nik: string;
  email: string;
  stats: TStats;
  position: PositionOrBranch;
}
export interface TStats {
  attendances: number;
  overtimes: number;
  permissions: number;
}

export interface TEmployeeReport {
  date: Date;
  isWeekend: boolean;
  isHoliday: boolean;
  attendance?: TAttendancesEntity;
  status: "HADIR" | "TIDAK HADIR";
}
