interface PaginationParams {
  page: number | null | undefined
  limit: number | null | undefined
}

export function paginate(arr: any, { page = 1, limit = -1 }: PaginationParams) {
  if (limit === -1 || !limit) return arr

  const pageCount = Math.ceil(arr.length / limit)

  if ((page as number) > pageCount) return []

  const start = ((page as number) - 1) * limit
  const end = start + limit

  return arr.slice(start, end)
}
