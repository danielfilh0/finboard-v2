import { useToast } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useFilters } from '@/data/hooks/use-filters'
import { transactionsService } from '@/data/services/transactions'
import { TransactionWithStatus } from '@/data/types/all'

interface UseReportTableControllerProps {
  data: Array<TransactionWithStatus>
  count: number
}

export function useReportTableController({
  data,
  count,
}: UseReportTableControllerProps) {
  const firstRendering = useRef(true)

  const { filters } = useFilters()

  const toast = useToast()

  const [transactions, setTransactions] = useState(data)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(count)

  const handlePageChange = useCallback(
    async (event: { selected: number }) => {
      setIsLoading(true)

      try {
        const [transactionsResult, countResult] = await Promise.all([
          transactionsService.getAll({
            ...filters,
            page: event.selected + 1,
            limit: 10,
          }),
          transactionsService.getCount(filters),
        ])

        setTransactions(transactionsResult)
        setTotalPages(countResult.count)

        setIsLoading(false)
        setPage(event.selected)
      } catch (e: any) {
        toast({
          title: e.message,
          status: 'error',
          position: 'top',
          isClosable: true,
        })
      } finally {
        setIsLoading(false)
      }
    },
    [filters, toast],
  )

  useEffect(() => {
    if (firstRendering.current) {
      firstRendering.current = false
      return
    }

    handlePageChange({ selected: 0 })
  }, [filters, handlePageChange])

  return {
    transactions,
    isLoading,
    page,
    totalPages,
    handlePageChange,
  }
}
