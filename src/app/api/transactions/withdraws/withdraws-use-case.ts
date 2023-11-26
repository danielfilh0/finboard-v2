import { TransactionWithStatus, TransactionsFilters } from '@/data/types/all'
import { parseJson } from '@/data/utils/parse-json'

import { filterTransactions } from '../_utils/filter-transactions'
import transactionsJson from '../transactions.json'

export function getWithdrawsUseCase(filters: TransactionsFilters) {
  const transactions = parseJson(transactionsJson)

  const filteredTransactions = filterTransactions(transactions, filters)

  const withdraws = filteredTransactions.filter(
    (transaction: TransactionWithStatus) =>
      transaction.transaction_type === 'withdraw' &&
      transaction.status === 'pay',
  )

  return withdraws
}
