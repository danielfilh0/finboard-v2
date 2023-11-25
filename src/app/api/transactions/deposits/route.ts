import type { NextRequest } from 'next/server'

import { validateAndReturnSearchParams } from '../_utils/validate-search-params'

import { getDepositsUseCase } from './deposits-use-case'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  try {
    const filters = validateAndReturnSearchParams(searchParams)

    const deposits = getDepositsUseCase(filters)

    return Response.json(deposits)
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 400 })
  }
}
