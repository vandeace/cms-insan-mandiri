import { PropsWithChildren } from 'react'

export const PageTitle = ({ children }: PropsWithChildren) => {
  return <h1 className="text-xl font-bold">{children}</h1>
}
