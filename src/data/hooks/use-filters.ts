import { useContext } from 'react'

import { FiltersContext } from '../contexts/filters-context'

export function useFilters() {
  return useContext(FiltersContext)
}
