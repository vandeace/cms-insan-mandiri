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
  attendances?: AttendancesEntity[] | null;
  permissions?: null[] | null;
  overtimes?: null[] | null;
  position: PositionOrBranch;
  branch: PositionOrBranch;
  status: string;
}
export interface AttendancesEntity {
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
