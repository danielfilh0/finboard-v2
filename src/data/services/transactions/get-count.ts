import { TransactionsFilters } from '@/data/types/all'
import { parseObjToQueryParams } from '@/data/utils/parse-obj-to-query-params'

import { request } from '../http-client'

interface GetCountParams {
  count: number
}

export async function getCount(
  filters: TransactionsFilters,
): Promise<GetCountParams> {
  const params = parseObjToQueryParams(filters)
  const data = await request(`/transactions/count?${params}`)

  return data
}
