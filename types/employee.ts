import { z } from "zod";
import { TBranch } from "./branches";
import { TSingleResponse } from "./response";
import { TPosition } from "./position";

export type RoleEnum = "USER" | "ADMIN";

export type TEmployee = {
  id: string;
  nik: string;
  email: string;
  name: string;
  phoneNumber: string;
  role: RoleEnum;
  photo: null | string;
  position: TPosition;
  address: string;
  branch: TBranch;
};
export type TEmployeeCreateForm = {
  nik: string;
  name: string;
  email: string;
  password: string;
  positionId: string;
  branchId: string;
  role: string;
  address: string;
  phoneNumber: string;
};
export interface TEmployeeEditForm extends TEmployeeCreateForm {
  id: string;
}

export type TEmployeeFilter = {
  search?: string;
  positionId?: string;
  branchId?: string;
};

export type TEmployeeFormProps = {
  dataEmployee?: TEmployee | undefined;
};

export type TEmployeeUpdateProps = {
  id: string;
  onMutateSuccess: (res: TSingleResponse<TEmployee>) => void;
  onMutateFail: (res: string) => void;
};

export const TEmployeeScheme = z.object({
  nik: z.string({
    required_error: "Nik tidak boleh kosong",
  }),
  name: z.string().min(1, { message: "Nama tidak boleh kosong." }),
  email: z
    .string()
    .min(1, { message: "Email tidak boleh kosong." })
    .email("This is not a valid email."),
  positionId: z.string({
    required_error: "Jabatan harus diisi",
  }),
  branchId: z.string({
    required_error: "Kantor harus diisi",
  }),
  role: z.string({
    required_error: "Role harus diisi",
  }),
  phoneNumber: z.string({
    required_error: "NO HP tidak boleh kosong",
  }),
  password: z.string().optional(),
  address: z.string().optional().nullish(),
});

export type TEmployeeForm = z.infer<typeof TEmployeeScheme>;
