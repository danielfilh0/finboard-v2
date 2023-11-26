import { isValid } from 'date-fns'
import { z } from 'zod'

export function validateAndReturnSearchParams(searchParams: URLSearchParams) {
  const from = z
    .string()
    .refine((date) => !!isValid(new Date(date)))
    .safeParse(searchParams.get('from'))
  const until = z
    .string()
    .refine((date) => !!isValid(new Date(date)))
    .safeParse(searchParams.get('until'))

  const account = z.string().nullish().safeParse(searchParams.get('account'))
  const industry = z.string().nullish().safeParse(searchParams.get('industry'))
  const state = z.string().nullish().safeParse(searchParams.get('state'))
  const status = z
    .enum(['pay', 'pending'])
    .nullish()
    .safeParse(searchParams.get('status'))

  const page = z.coerce.number().optional().safeParse(searchParams.get('page'))
  const limit = z.coerce
    .number()
    .optional()
    .safeParse(searchParams.get('limit'))

  const orderByAmount = z
    .enum(['asc', 'desc'])
    .nullish()
    .safeParse(searchParams.get('order-by-amount'))

  if (!from.success) throw new Error('Data de início inválida.')
  if (!until.success) throw new Error('Data de fim inválida.')

  if (!account.success) throw new Error('Conta informada está inválida.')
  if (!industry.success) throw new Error('Indústria informada está inválida.')
  if (!state.success) throw new Error('Estado informado está inválida.')
  if (!status.success) throw new Error('Status informado está inválido.')

  if (!page.success) throw new Error('Dado para paginação está inválido.')
  if (!limit.success) throw new Error('Dado para paginação está inválido.')

  if (!orderByAmount.success)
    throw new Error('Dado para ordenação está incorreto.')

  return {
    from: from.data,
    until: until.data,
    account: account.data,
    industry: industry.data,
    state: state.data,
    status: status.data,
    page: page.data ? page.data : 1,
    limit: limit.data ? limit.data : -1,
    orderByAmount: orderByAmount.data,
  }
}
