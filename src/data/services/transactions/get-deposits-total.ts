import { TransactionsFilters } from '@/data/types/all'
import { parseObjToQueryParams } from '@/data/utils/parse-obj-to-query-params'

import { request } from '../http-client'

export async function getDepositsTotal(
  filters: TransactionsFilters,
): Promise<number> {
  const params = parseObjToQueryParams(filters)
  const data = await request(`/transactions/deposits/total?${params}`, {
    cache: 'no-store',
  })

  return data.total
}
