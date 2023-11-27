import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'

import { BarChart } from '@/app/_components/bar-chart'
import { LineChart } from '@/app/_components/line-chart'
import { useTransactions } from '@/data/hooks/use-transactions'
import { initialFilters } from '@/data/utils/initial-filters'

import { FiltersModal } from './_components/filters-modal'
import { TransactionsValuesCard } from './_components/transactions-values-card'

export default async function Home() {
  const {
    balance,
    barChartData,
    barChartLabels,
    lineChartData,
    lineChartLabels,
    depositsTotal,
    withdrawsTotal,
    pendingsTotal,
  } = await useTransactions(initialFilters)

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

      <Box bg="gray.100" p={4} m={4}>
        <Heading size="md" mb={4}>
          10 maiores receitas
        </Heading>
        <BarChart labels={barChartLabels} data={barChartData} />
      </Box>

      <Box bg="gray.100" p={4} m={4}>
        <Heading size="md" mb={4}>
          10 transações de empresas
        </Heading>
        <LineChart labels={lineChartLabels} data={lineChartData} />
      </Box>
    </>
  )
}
