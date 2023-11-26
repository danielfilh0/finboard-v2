import { TransactionWithStatus, TransactionsFilters } from '@/data/types/all'
import { parseJson } from '@/data/utils/parse-json'

import { filterTransactions } from '../_utils/filter-transactions'
import transactionsJson from '../transactions.json'

export function getDepositsUseCase(filters: TransactionsFilters) {
  const transactions = parseJson(transactionsJson)

  const filteredTransactions = filterTransactions(transactions, filters)

  const deposits = filteredTransactions.filter(
    (transaction: TransactionWithStatus) =>
      transaction.transaction_type === 'deposit' &&
      transaction.status === 'pay',
  )

  return deposits
}
