export interface Transaction {
  date: number
  amount: string
  transaction_type: 'deposit' | 'withdraw'
  currency: string
  industry: string
  state: string
  account: string
}

export interface TransactionWithStatus extends Transaction {
  status: 'pending' | 'pay'
}

export interface TransactionsFilters {
  from: string
  until: string
  account?: string | null
  industry?: string | null
  state?: string | null
  status?: 'pending' | 'pay' | null
  page?: number | null
  limit?: number | null
}
