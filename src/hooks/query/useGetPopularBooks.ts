import { queryFn, transformResponse } from '@/lib/utils'
import { Book } from '@/store'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

export const useGetPopularBooks = () => {
  const { data, ...rest }: UseQueryResult<Book[], Error> = useQuery(
    ['book'],
    queryFn,
    {
      select: transformResponse<Book[]>,
    }
  )

  return {
    ...rest,
    data,
  }
}
