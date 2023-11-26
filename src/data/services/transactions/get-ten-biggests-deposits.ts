import { TransactionWithStatus, TransactionsFilters } from '@/data/types/all'
import { parseObjToQueryParams } from '@/data/utils/parse-obj-to-query-params'

import { request } from '../http-client'

export async function getTenBiggestsDeposits(
  filters: TransactionsFilters,
): Promise<TransactionWithStatus[]> {
  const params = parseObjToQueryParams(filters)
  const data = await request(
    `/transactions/deposits?${params}&order-by-amount=desc`,
  )

  return data.slice(0, 10)
}
