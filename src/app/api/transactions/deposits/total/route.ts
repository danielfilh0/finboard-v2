import type { NextRequest } from 'next/server'

import { Transaction } from '@/data/types/all'

import { validateAndReturnSearchParams } from '../../_utils/validate-search-params'
import { getDepositsUseCase } from '../deposits-use-case'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  try {
    const filters = validateAndReturnSearchParams(searchParams)

    const deposits = getDepositsUseCase(filters)

    const total = deposits.reduce(
      (acc: number, deposit: Transaction) => acc + deposit.amount,
      0,
    )

    return Response.json({ total })
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 400 })
  }
}
