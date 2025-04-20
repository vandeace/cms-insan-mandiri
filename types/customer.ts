import { z } from "zod";
import { TSingleResponse } from "./response";

export type TCustomer = {
  id: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  address: string;
  email: string | null;
};

export type TCustomerCreateForm = {
  companyName: string;
  contactPerson: string;
  phone: string;
  address: string;
  email?: string;
};

export interface TCustomerEditForm extends Omit<TCustomerCreateForm, "email"> {
  id: string;
  email?: string | null;
}

export type TCustomerFilter = {
  search?: string;
};

export type TCustomerFormProps = {
  dataCustomer?: TCustomer | undefined;
};

export type TCustomerUpdateProps = {
  id: string;
  onMutateSuccess: (res: TSingleResponse<TCustomer>) => void;
  onMutateFail: (res: string) => void;
};

export const TCustomerScheme = z.object({
  companyName: z.string({
    required_error: "Nama perusahaan tidak boleh kosong",
  }),
  contactPerson: z.string({
    required_error: "Nama kontak tidak boleh kosong",
  }),
  phone: z.string({
    required_error: "Nomor telepon tidak boleh kosong",
  }),
  address: z.string({
    required_error: "Alamat tidak boleh kosong",
  }),
  email: z.string().optional().nullable(),
});

export type TCustomerForm = z.infer<typeof TCustomerScheme>;
