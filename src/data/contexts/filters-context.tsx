import { format } from 'date-fns'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react'

interface Filters {
  from: string
  until: string
  account: string
  industry: string
  state: string
}

interface FiltersContextValue {
  filters: Filters
  setFilters: Dispatch<SetStateAction<Filters>>
}

export const FiltersContext = createContext<FiltersContextValue>(
  {} as FiltersContextValue,
)

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
    from: format(new Date(), 'yyyy-MM-01'),
    until: format(new Date(), 'yyyy-MM-dd'),
    account: '',
    industry: '',
    state: '',
  })

  const contextValue = useMemo(
    () => ({ filters, setFilters }),
    [filters, setFilters],
  )

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  )
}
