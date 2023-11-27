import { redirect } from 'next/navigation'

import { transactionsService } from '@/data/services/transactions'

import { TransactionsFilters } from '../types/all'

export async function useTransactions(filters: TransactionsFilters) {
  try {
    const [
      transactions,
      depositsTotal,
      withdrawsTotal,
      pendingsTotal,
      tenBiggestsDeposits,
    ] = await Promise.all([
      transactionsService.getAll(filters),
      transactionsService.getDepositsTotal(filters),
      transactionsService.getWithdrawsTotal(filters),
      transactionsService.getPendingsTotal(filters),
      transactionsService.getTenBiggestsDeposits(filters),
    ])

    const balance = depositsTotal - withdrawsTotal

    const barChartLabels = tenBiggestsDeposits.map((deposit) => deposit.account)
    const barChartData = tenBiggestsDeposits.map((deposit) => deposit.amount)

    const lineChartLabels = transactions
      .map((deposit) => deposit.account)
      .slice(0, 20)
    const lineChartData = transactions
      .map((deposit) => deposit.amount)
      .slice(0, 20)

    return {
      depositsTotal,
      withdrawsTotal,
      lineChartData,
      lineChartLabels,
      barChartLabels,
      barChartData,
      balance,
      pendingsTotal,
      tenBiggestsDeposits,
    }
  } catch (err: Any) {
    redirect('/login')
  }
}
