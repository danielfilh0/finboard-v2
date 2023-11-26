import { format } from 'date-fns'

export const initialFilters = {
  from: format(new Date(), 'yyyy-MM-01'),
  until: format(new Date(), 'yyyy-MM-dd'),
}
