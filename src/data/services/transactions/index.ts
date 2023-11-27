import { getAll } from './get-all'
import { getCount } from './get-count'
import { getDepositsTotal } from './get-deposits-total'
import { getPendingsTotal } from './get-pendings-total'
import { getTenBiggestsDeposits } from './get-ten-biggests-deposits'
import { getTenBiggestsWithdraws } from './get-ten-biggests-withdraws'
import { getWithdrawsTotal } from './get-withdraws-total'

export const transactionsService = {
  getAll,
  getCount,
  getWithdrawsTotal,
  getDepositsTotal,
  getPendingsTotal,
  getTenBiggestsDeposits,
  getTenBiggestsWithdraws,
}
