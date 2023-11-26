import { TransactionsFilters } from '@/data/types/all'
import { parseObjToQueryParams } from '@/data/utils/parse-obj-to-query-params'

import { request } from '../http-client'

export async function getPendingsTotal(
  filters: TransactionsFilters,
): Promise<number> {
  const params = parseObjToQueryParams(filters)
  const data = await request(`/transactions/pendings/total?${params}`, {
    cache: 'no-store',
  })

  return data.total
}
