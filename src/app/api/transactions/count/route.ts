import type { NextRequest } from 'next/server'

import { validateAndReturnSearchParams } from '../_utils/validate-search-params'
import { getTransactionsUseCase } from '../transactions-use-case'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  try {
    const filters = validateAndReturnSearchParams(searchParams)

    const count = getTransactionsUseCase({
      ...filters,
      limit: -1,
    }).length

    return Response.json({ count })
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 400 })
  }
}
