"use client";

import InputForm from "@/components/form-input/input";
import TextAreaForm from "@/components/form-input/text-area";
import { Button } from "@/components/ui/button";
import { useCreateBranch } from "@/hooks/api/use-create-branch";
import { useUpdateBranch } from "@/hooks/api/use-update-branch";
import { TBranch, TBranchFormProps, TBranchScheme } from "@/types/branches";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BranchForm: React.FC<TBranchFormProps> = ({ dataBranch }) => {
  const router = useRouter();

  const formMethods = useForm<TBranch>({
    defaultValues: {
      id: dataBranch?.id,
      name: dataBranch?.name,
      address: dataBranch?.address,
      lat: dataBranch?.lat,
      long: dataBranch?.long,
    },
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(TBranchScheme),
  });

  const { handleSubmit, reset, control } = formMethods;

  const { mutate: mutateUpdate } = useUpdateBranch();
  const { mutate } = useCreateBranch();

  const onSuccessHandle = () => {
    reset();
    router.push("/dashboard/employee");
    toast.success(`Success ${!!dataBranch ? "Update" : "Create"} Data`, {
      position: "top-center",
    });
  };
  const onErrorHandle = () => {
    toast.error(`Fail ${!!dataBranch ? "Update" : "Create"} Data`, {
      position: "top-center",
    });
  };

  const onSubmit = handleSubmit(data => {
    if (!!dataBranch) {
      mutateUpdate(
        { ...dataBranch, ...data },
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
            <div className="col-span-2">
              <InputForm
                control={control}
                name="name"
                label="Nama Kantor"
                placeholder="Masukkan Nama Kantor"
              />
            </div>
            <div className="col-span-2">
              <TextAreaForm
                control={control}
                name="address"
                label="Alamat"
                type="text"
                placeholder="Masukkan Alamat Kantor"
              />
            </div>
            <InputForm
              control={control}
              name="lat"
              label="Latitude"
              placeholder="Masukkan Latitude Kantor"
            />
            <InputForm
              control={control}
              name="long"
              label="Longitude"
              placeholder="Masukkan Latitude Kantor"
            />
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

export default BranchForm;
