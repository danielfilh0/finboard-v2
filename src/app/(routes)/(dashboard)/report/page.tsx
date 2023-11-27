import { Box, Flex, Heading } from '@chakra-ui/react'
import { Metadata } from 'next'

import { ReportTable } from '@/app/_components/report-table'
import { transactionsService } from '@/data/services/transactions'
import { initialFilters } from '@/data/utils/initial-filters'

import { FiltersModal } from '../_components/filters-modal'

export const metadata: Metadata = {
  title: 'Relatório financeiro',
  description:
    'Visualize os seus saldos, receitas, despesas, transações pendentes e históricos de transações.',
}

export default async function Reports() {
  const [transactions, count] = await Promise.all([
    transactionsService.getAll({
      ...initialFilters,
      page: 1,
      limit: 10,
    }),
    transactionsService.getCount(initialFilters),
  ])

  return (
    <Flex flexDir="column" height="100%" flex={1}>
      <Box as="header" w="100%" p="4" mb="4" bg="white" color="black">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size={['md', null, null, 'lg']} pl={[12, null, null, 0]}>
            Relatório financeiro
          </Heading>

          <FiltersModal />
        </Flex>
      </Box>

      <ReportTable
        tableHead={[
          'Data',
          'Empresa',
          'Ramo industrial',
          'Estado',
          'Valor',
          'Status',
          'Tipo de transação',
        ]}
        data={transactions}
        count={count.count}
      />
    </Flex>
  )
}
