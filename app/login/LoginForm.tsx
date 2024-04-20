"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { TLogin, TLoginScheme } from "@/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { authenticate } from "@/app/api/lib/action";

export default function LoginForm() {
  const [isTypePassword, setIsTypePassword] = useState(true);

  const formMethods = useForm<TLogin>({
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(TLoginScheme),
  });
  const { handleSubmit } = formMethods;

  const formRef = useRef(null);

  const onSubmit = handleSubmit(async (data) => {
    authenticate({
      email: data.email,
      password: data.password,
    });
    // mutate(data)
  });

  return (
    <div className="mx-auto w-[448px] max-w-full rounded-[5px] bg-[#CBD5E1] p-6">
      <h1 className="mb-4 text-[26px] font-bold text-[#0F172A]">Login</h1>

      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit} ref={formRef}>
          <Input
            label="Email"
            name="email"
            placeholder="Type email"
            labelClassName="text-white"
            containerClassName="mb-4"
            // disabled={isLoading}
          />

          <Input
            label="Password"
            name="password"
            placeholder="Type password"
            labelClassName="text-white"
            type={isTypePassword ? "password" : "text"}
            rightNode={
              <button
                className="flex h-full items-center border-0"
                onClick={() => setIsTypePassword(!isTypePassword)}
                type="button"
              >
                {isTypePassword ? <FiEyeOff /> : <FiEye />}
              </button>
            }
            // disabled={isLoading}
          />

          <Button
            variant="primary"
            className="mt-6 w-full"
            type="submit"
            // disabled={isLoading}
          >
            Login
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
