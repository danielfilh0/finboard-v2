import type { NextRequest } from 'next/server'

import { validateAndReturnSearchParams } from '../_utils/validate-search-params'

import { getWithdrawsUseCase } from './withdraws-use-case'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  try {
    const filters = validateAndReturnSearchParams(searchParams)

    const withdraws = getWithdrawsUseCase(filters)

    return Response.json(withdraws)
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 400 })
  }
}
