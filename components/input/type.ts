import { MouseEventHandler, ReactNode } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

export type TProps<TFormValues extends FieldValues> = {
  id?: string
  name: Path<TFormValues>
  label?: string
  type?: string
  placeholder?: string
  className?: string
  labelClassName?: string
  inputClassName?: string
  containerClassName?: string
  leftNodeClassName?: string
  rightNodeClassName?: string
  rules?: RegisterOptions
  disabled?: boolean
  hint?: string
  rightNode?: ReactNode
  leftNode?: ReactNode
  readOnly?: boolean
  maxLength?: number
  onClick?: MouseEventHandler<HTMLInputElement>
  isRequired?: boolean
  min?: number
  max?: number
  value?: any
}
