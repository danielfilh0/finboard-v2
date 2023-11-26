import { TransactionWithStatus, TransactionsFilters } from '@/data/types/all'
import { parseObjToQueryParams } from '@/data/utils/parse-obj-to-query-params'

import { request } from '../http-client'

export async function getAll(
  filters: TransactionsFilters,
): Promise<TransactionWithStatus[]> {
  const params = parseObjToQueryParams(filters)
  const data = await request(`/transactions/?${params}`)

  return data
}
