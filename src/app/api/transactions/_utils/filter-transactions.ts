import { isFuture } from 'date-fns'

import { Transaction, TransactionsFilters } from '@/data/types/all'
import { filterByString } from '@/data/utils/filter-by-string'
import { sortByOrder } from '@/data/utils/sort'

import { formatAmount } from './format-amount'
import { paginate } from './paginate'

export function filterTransactions(
  transactions: Transaction[],
  {
    from,
    until,
    account,
    industry,
    state,
    status,
    limit,
    page,
    orderByAmount,
  }: TransactionsFilters,
) {
  const formatted = transactions.map(
    ({ amount, date, ...transaction }: Transaction) => ({
      amount: formatAmount(amount),
      date: new Date(date),
      status: isFuture(new Date(date)) ? 'pending' : 'pay',
      ...transaction,
    }),
  )

  const ordered = orderByAmount
    ? sortByOrder({
        arr: formatted,
        attr: 'amount',
        type: orderByAmount,
      })
    : sortByOrder({
        arr: formatted,
        attr: 'date',
        type: 'desc',
      })

  const filteredByDate = ordered.filter(
    ({ date }: Transaction) =>
      new Date(date) > new Date(from) && new Date(date) < new Date(until),
  )

  const filtered = filterByString(filteredByDate, {
    account,
    industry,
    state,
    status,
  })

  return paginate(filtered, { page, limit })
}
