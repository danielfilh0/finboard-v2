import { TransactionsFilters } from '@/data/types/all'
import { parseJson } from '@/data/utils/parse-json'

import { filterTransactions } from './_utils/filter-transactions'
import transactionsJson from './transactions.json'

export function getTransactionsUseCase(filters: TransactionsFilters) {
  const transactions = parseJson(transactionsJson)

  const filteredTransactions = filterTransactions(transactions, filters)

  return filteredTransactions
}
