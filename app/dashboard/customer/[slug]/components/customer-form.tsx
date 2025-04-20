"use client";

import InputForm from "@/components/form-input/input";
import TextAreaForm from "@/components/form-input/text-area";
import { Button } from "@/components/ui/button";
import { useCreateCustomer } from "@/hooks/api/use-create-customer";
import { useUpdateCustomer } from "@/hooks/api/use-update-customer";
import { TCustomerCreateForm, TCustomerScheme, TCustomerFormProps } from "@/types/customer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CustomerForm: React.FC<TCustomerFormProps> = ({ dataCustomer }) => {
  const router = useRouter();

  const formMethods = useForm<TCustomerCreateForm>({
    defaultValues: {
      companyName: dataCustomer?.companyName ?? "",
      contactPerson: dataCustomer?.contactPerson ?? "",
      phone: dataCustomer?.phone ?? "",
      address: dataCustomer?.address ?? "",
      email: dataCustomer?.email ?? "",
    },
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(TCustomerScheme),
  });

  const { handleSubmit, reset, control } = formMethods;

  const { mutate: mutateUpdate } = useUpdateCustomer();
  const { mutate } = useCreateCustomer();

  const onSuccessHandle = () => {
    reset();
    router.push("/dashboard/customer");
    toast.success(`Success ${!!dataCustomer ? "Update" : "Create"} Data`, {
      position: "top-center",
    });
  };
  const onErrorHandle = () => {
    toast.error(`Fail ${!!dataCustomer ? "Update" : "Create"} Data`, {
      position: "top-center",
    });
  };

  const onSubmit = handleSubmit(data => {
    if (!!dataCustomer) {
      mutateUpdate(
        { ...dataCustomer, ...data },
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
              name="companyName"
              label="Nama Perusahaan"
              placeholder="Masukkan Nama Perusahaan"
            />
            <InputForm
              control={control}
              name="contactPerson"
              label="Nama Kontak"
              placeholder="Masukkan Nama Kontak"
            />
            <InputForm
              control={control}
              name="phone"
              label="Nomor Telepon"
              placeholder="Masukkan Nomor Telepon"
            />
            <InputForm
              control={control}
              name="email"
              label="Email"
              placeholder="Masukkan Email (Opsional)"
            />
            <div className="col-span-2">
              <TextAreaForm
                control={control}
                name="address"
                label="Alamat"
                placeholder="Masukkan Alamat"
              />
            </div>
          </div>
          <div className="p-4 flex justify-end gap-x-4">
            <Button size="lg" variant="destructive" type="button" onClick={() => router.back()}>
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

export default CustomerForm;
