import { transactionsService } from '@/data/services/transactions'
import { initialFilters } from '@/data/utils/initial-filters'

export async function usePageController() {
  const [
    transactions,
    depositsTotal,
    withdrawsTotal,
    pendingsTotal,
    tenBiggestsDeposits,
  ] = await Promise.all([
    transactionsService.getAll(initialFilters),
    transactionsService.getDepositsTotal(initialFilters),
    transactionsService.getWithdrawsTotal(initialFilters),
    transactionsService.getPendingsTotal(initialFilters),
    transactionsService.getTenBiggestsDeposits(initialFilters),
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
}
