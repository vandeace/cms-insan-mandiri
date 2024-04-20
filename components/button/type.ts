import { TPolymorphicComponentPropWithRef } from "@/types/component";
import { ElementType, ReactElement } from "react";

/**
 * Custom props
 */
type TProps = {
  variant?: "primary" | "secondary" | "error" | "outline" | "success";
  isDisabled?: boolean;
};

/**
 * Component props with ref
 */
export type TButtonProps<C extends ElementType> =
  TPolymorphicComponentPropWithRef<C, TProps>;

/**
 * Component type to make polymorphic component typing work
 */
export type TButtonComponent = <C extends ElementType = "button">(
  props: TButtonProps<C>
) => ReactElement | null;
