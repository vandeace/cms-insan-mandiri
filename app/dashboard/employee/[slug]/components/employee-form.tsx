"use client";

import InputForm from "@/components/form-input/input";
import InputSelectForm from "@/components/form-input/select";
import TextAreaForm from "@/components/form-input/text-area";
import { Button } from "@/components/ui/button";
import { useCreateEmployee } from "@/hooks/api/use-create-employee";
import { getFormattedBranch } from "@/hooks/api/use-get-branch";
import { getFormattedPosition } from "@/hooks/api/use-get-position";
import { useUpdateEmployee } from "@/hooks/api/use-update-employee";
import {
  TEmployeeCreateForm,
  TEmployeeScheme,
  TEmployeeFormProps,
} from "@/types/employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const roleOption = [
  {
    value: "USER",
    label: "User",
  },
  {
    value: "ADMIN",
    label: "Admin",
  },
  {
    value: "SUPER_ADMIN",
    label: "Super Admin",
  },
];

const EmployeeForm: React.FC<TEmployeeFormProps> = ({ dataEmployee }) => {
  const router = useRouter();
  const positionOption = getFormattedPosition();
  const branchOption = getFormattedBranch();

  const formMethods = useForm<TEmployeeCreateForm>({
    defaultValues: {
      name: dataEmployee?.name,
      address: dataEmployee?.address,
      nik: dataEmployee?.nik,
      email: dataEmployee?.email,
      phoneNumber: dataEmployee?.phoneNumber,
      positionId: dataEmployee?.position.id,
      branchId: dataEmployee?.branch.id,
      role: dataEmployee?.role,
    },
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(TEmployeeScheme),
  });

  const { handleSubmit, reset, control } = formMethods;

  const { mutate: mutateUpdate } = useUpdateEmployee();
  const { mutate } = useCreateEmployee();

  const onSuccessHandle = () => {
    reset();
    router.push("/dashboard/employee");
    toast.success(`Success ${!!dataEmployee ? "Update" : "Create"} Data`, {
      position: "top-center",
    });
  };
  const onErrorHandle = () => {
    toast.error(`Fail ${!!dataEmployee ? "Update" : "Create"} Data`, {
      position: "top-center",
    });
  };

  const onSubmit = handleSubmit((data) => {
    if (!!dataEmployee) {
      mutateUpdate(
        { ...dataEmployee, ...data },
        {
          onSuccess: onSuccessHandle,
          onError: onErrorHandle,
        },
      );
    } else {
      mutate(data, {
        onSuccess: onSuccessHandle,
        onError: onErrorHandle,
      });
    }
    reset();
  });

  return (
    <div className="">
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 p-4 sm:grid-cols-2">
            <InputForm
              control={control}
              name="nik"
              label="NIK"
              placeholder="Masukkan Nik Karyawan"
            />
            <InputForm
              control={control}
              name="name"
              label="Nama"
              placeholder="Masukkan Nama Karyawan"
            />
            <InputForm
              control={control}
              name="email"
              label="Email"
              placeholder="Masukkan Email Karyawan"
            />
            <InputForm
              control={control}
              name="password"
              label="Password"
              placeholder="Masukkan Password"
            />
            <InputSelectForm
              option={positionOption}
              control={control}
              name="positionId"
              label="Jabatan"
              placeholder="Masukkan Jabatan Karyawan"
            />
            <InputSelectForm
              option={branchOption}
              control={control}
              name="branchId"
              label="Kantor"
              placeholder="Masukkan Kantor Karyawan"
            />
            <InputForm
              control={control}
              name="phoneNumber"
              label="Nomor HP"
              type="number"
              placeholder="Masukkan Nomor HP Karyawan"
            />
            <InputSelectForm
              option={roleOption}
              control={control}
              name="role"
              label="Role"
              placeholder="Masukkan Role Karyawan"
            />
            <div className="col-span-2">
              <TextAreaForm
                control={control}
                name="address"
                label="Alamat"
                type="text"
                placeholder="Masukkan Alamat Karyawan"
              />
            </div>
          </div>
          <div className="p-4 flex justify-end gap-x-4">
            <Button
              size="lg"
              variant="destructive"
              type="button"
              onClick={() => router.back()}
            >
              Batal
            </Button>
            <Button size="lg" variant="success" type="submit">
              Simpan
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default EmployeeForm;
