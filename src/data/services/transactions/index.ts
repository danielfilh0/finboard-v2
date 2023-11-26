import { getDepositsTotal } from './get-deposits-total'
import { getPendingsTotal } from './get-pendings-total'
import { getWithdrawsTotal } from './get-withdraws-total'

export const transactionsService = {
  getWithdrawsTotal,
  getDepositsTotal,
  getPendingsTotal,
}
