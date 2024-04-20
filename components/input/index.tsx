import { useId } from 'react'
import { useFormContext, get } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { TProps } from './type'

export const Input = <TFormValues extends Record<string, unknown>>(
  props: TProps<TFormValues>
) => {
  const {
    id,
    label,
    rules,
    className,
    type,
    name,
    hint,
    labelClassName,
    inputClassName,
    containerClassName,
    leftNodeClassName,
    rightNodeClassName,
    rightNode,
    leftNode,
    readOnly,
    maxLength,
    onClick,
    isRequired,
    min,
    max,
    value,
    ...rest
  } = props

  const generatedId = useId()

  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = get(errors, name)

  return (
    <div className={twMerge(containerClassName)}>
      {label && (
        <label
          htmlFor={id}
          className={twMerge('mb-2 block text-sm font-bold', labelClassName)}
        >
          {label}
          {isRequired && <sup className="text-[#DF0000]">*</sup>}
        </label>
      )}

      <div
        className={twMerge(
          'mb-1 flex h-10 items-center overflow-hidden rounded-[5px] border border-[#C1C1C1]',
          className
        )}
      >
        {leftNode && (
          <div
            className={twMerge('bg-white h-full px-4 py-3', leftNodeClassName)}
          >
            {leftNode}
          </div>
        )}

        <input
          id={id ?? generatedId}
          className={twMerge(
            'w-full border-0 px-4 py-3 text-sm focus:ring-0 focus-visible:outline-0 disabled:bg-[#F1F1F1] disabled:text-[#C1C1C1]',
            inputClassName
          )}
          min={min}
          max={max}
          type={type}
          readOnly={readOnly}
          maxLength={maxLength}
          value={value}
          onClick={onClick}
          {...register(name, rules)}
          {...rest}
        />

        {rightNode && (
          <div
            className={twMerge('bg-white h-full px-4 py-3', rightNodeClassName)}
          >
            {rightNode}
          </div>
        )}
      </div>

      {hint && <p className="text-xs italic text-[#DF0000]">{hint}</p>}
      {error && (
        <p className="text-xs italic text-[#DF0000]">
          {error?.message?.toString()}
        </p>
      )}
    </div>
  )
}
