import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { z } from 'zod'

import { BarChart } from '@/app/_components/bar-chart'
import { LineChart } from '@/app/_components/line-chart'
import { useTransactions } from '@/data/hooks/use-transactions'

import { FiltersModal } from '../_components/filters-modal'
import { TransactionsValuesCard } from '../_components/transactions-values-card'

const schema = z.object({
  from: z.string().refine((from) => !!from.length, {
    message: 'Data de início não pode estar vazia.',
  }),
  until: z.string().refine((until) => !!until.length, {
    message: 'Data de fim não pode estar vazia.',
  }),
  account: z.string().default(''),
  industry: z.string().default(''),
  state: z.string().default(''),
})

type Filters = z.infer<typeof schema>

interface SearchProps {
  searchParams: Filters
}

export default async function Search({ searchParams }: SearchProps) {
  const filters = searchParams

  const {
    balance,
    barChartData,
    barChartLabels,
    lineChartData,
    lineChartLabels,
    depositsTotal,
    withdrawsTotal,
    pendingsTotal,
  } = await useTransactions(filters)

  return (
    <>
      <Box as="header" w="100%" p="4" bg="white" color="black">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size={['md', null, null, 'lg']} pl={[12, null, null, 0]}>
            Dashboard Financeiro
          </Heading>

          <FiltersModal navigateToSearchPage />
        </Flex>
      </Box>

      <SimpleGrid columns={[1, 2, null, 4]} spacing="4" p={4} overflowY="auto">
        <TransactionsValuesCard title="Receitas" value={depositsTotal} />
        <TransactionsValuesCard title="Despesas" value={withdrawsTotal} />
        <TransactionsValuesCard title="Saldos" value={balance} />
        <TransactionsValuesCard
          title="Transações pendentes"
          value={pendingsTotal}
        />
      </SimpleGrid>

      <Box>
        <BarChart labels={barChartLabels} data={barChartData} />
      </Box>

      <Box>
        <LineChart labels={lineChartLabels} data={lineChartData} />
      </Box>
    </>
  )
}
