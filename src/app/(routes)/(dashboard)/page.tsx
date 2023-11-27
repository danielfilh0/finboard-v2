import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'

import { BarChart } from '@/app/_components/bar-chart'
import { LineChart } from '@/app/_components/line-chart'

import { FiltersModal } from './_components/filters-modal'
import { TransactionsValuesCard } from './_components/transactions-values-card'
import { usePageController } from './use-page-controller'

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
  } = await usePageController()

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
