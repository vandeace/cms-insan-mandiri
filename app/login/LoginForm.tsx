"use client";

import { TLogin, TLoginScheme } from "@/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { authenticate } from "@/app/api/lib/action";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import InputForm from "@/components/input-form";

export default function LoginForm() {
  const [isError, setIsError] = useState(false);

  const form = useForm<TLogin>({
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(TLoginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { control } = form;

  const onSubmit = async (values: z.infer<typeof TLoginScheme>) => {
    setIsError(false);
    const res = await authenticate({
      email: values.email,
      password: values.password,
    });

    if (res) {
      setIsError(true);
    }
  };

  return (
    <div className="mx-auto w-[448px] max-w-full rounded-[5px] bg-white p-6">
      <h1 className="mb-4 text-[26px] font-bold text-[#0F172A]">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <InputForm name="email" control={control} label="Email" />
          <InputForm
            name="password"
            control={control}
            label="Password"
            type="password"
          />
          {isError && (
            <h5 className="text-red-500 text-sm mt-3">
              Email atau Password salah !!
            </h5>
          )}
          <div className="mt-4">
            <Button type="submit" className="mt-4 w-full">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
