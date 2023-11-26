import type { NextRequest } from 'next/server'

import { validateAndReturnSearchParams } from '../_utils/validate-search-params'

import { getPendingsUseCase } from './pendings-use-case'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  try {
    const filters = validateAndReturnSearchParams(searchParams)

    const pendings = getPendingsUseCase(filters)

    return Response.json(pendings)
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 400 })
  }
}
