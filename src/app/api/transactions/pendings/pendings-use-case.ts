import { TransactionWithStatus, TransactionsFilters } from '@/data/types/all'
import { parseJson } from '@/data/utils/parse-json'

import { filterTransactions } from '../_utils/filter-transactions'
import transactionsJson from '../transactions.json'

export function getPendingsUseCase(filters: TransactionsFilters) {
  const transactions = parseJson(transactionsJson)

  const filteredTransactions = filterTransactions(transactions, filters)

  const pending = filteredTransactions.filter(
    (transaction: TransactionWithStatus) => transaction.status === 'pending',
  )

  return pending
}
