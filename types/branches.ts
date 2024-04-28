import { z } from 'zod'

export type TBranch = {
  id: string
  name: string
  address: string
  lat: number
  long: number
  radius: number
  _count: {
    users: number
  }
}

export const TBranchScheme = z.object({
  name: z.string().min(1, 'Nama Tidak Boleh Kosong'),
  address: z.string().min(1, 'Alamat Tidak Boleh Kosong'),
  lat: z.number({
    required_error: 'Latitude tidak boleh kosong',
    invalid_type_error: 'Latitude harus berupa angka',
  }),
  long: z.number({
    required_error: 'Latitude tidak boleh kosong',
    invalid_type_error: 'Latitude harus berupa angka',
  }),
})

export type TBranchForm = z.infer<typeof TBranchScheme>

export type TBranchCreateForm = {
  name: string
  address: string
  lat: number
  long: number
  radius: number
}

export type TBranchFilter = {
  search: string
}

export type TBranchFormProps = {
  dataBranch?: TBranch
}
