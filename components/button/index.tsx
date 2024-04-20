import { twMerge } from "tailwind-merge";
import React, { ButtonHTMLAttributes } from "react";
import { variants } from "./data";

type TProps = {
  variant?: "primary" | "secondary" | "error" | "outline" | "success";
  isDisabled?: boolean;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & TProps;

export const Button = ({
  children,
  variant = "primary",
  isDisabled = false,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "group inline-flex h-[34px] w-[120px] items-center justify-center rounded-full px-4 py-2 text-sm font-semibold duration-200",
        variants[isDisabled ? "disabled" : variant],
        className
      )}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};
