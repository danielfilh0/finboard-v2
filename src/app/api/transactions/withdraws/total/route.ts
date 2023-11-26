import type { NextRequest } from 'next/server'

import { Transaction } from '@/data/types/all'

import { validateAndReturnSearchParams } from '../../_utils/validate-search-params'
import { getWithdrawsUseCase } from '../withdraws-use-case'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  try {
    const filters = validateAndReturnSearchParams(searchParams)

    const withdraws = getWithdrawsUseCase(filters)

    const total = withdraws.reduce(
      (acc: number, withdraw: Transaction) => acc + withdraw.amount,
      0,
    )

    return Response.json({ total })
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 400 })
  }
}
