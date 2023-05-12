import { BOOK_URL } from '@/constants/endpoints'
import { ClassValue, clsx } from 'clsx'
import { camelCase, startCase } from 'lodash'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const queryFn = async (options: RequestInit) =>
  fetch(BOOK_URL, options).then((res) => res.json())

export const transformResponse = <TData>(
  response: Response & { data: TData }
) => response.data

export const pascalCase = (str: string) => startCase(camelCase(str))
