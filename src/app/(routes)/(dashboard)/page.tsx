import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'

import { transactionsService } from '@/data/services/transactions'
import { formatCurrency } from '@/data/utils/format-currency'
import { initialFilters } from '@/data/utils/initial-filters'

export default async function Home() {
  const promises = [
    transactionsService.getDepositsTotal(initialFilters),
    transactionsService.getWithdrawsTotal(initialFilters),
    transactionsService.getPendingsTotal(initialFilters),
  ]

  const [depositsTotal, withdrawsTotal, pendingsTotal] =
    await Promise.all(promises)
  const balance = depositsTotal - withdrawsTotal

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="4" p={4} overflowY="auto">
      <Flex
        bg="gray.900"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h2" size="sm">
          Receitas
        </Heading>

        <Text fontSize="4xl" color="green.200">
          {formatCurrency(depositsTotal)}
        </Text>
      </Flex>

      <Flex
        bg="gray.900"
        height="100px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h2" size="sm">
          Despesas
        </Heading>

        <Text fontSize="4xl" color="red.200">
          {formatCurrency(withdrawsTotal)}
        </Text>
      </Flex>

      <Flex
        bg="gray.900"
        height="100px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h2" size="sm">
          Saldos
        </Heading>

        <Text fontSize="4xl" color={balance < 0 ? 'red.200' : 'green.200'}>
          {formatCurrency(balance)}
        </Text>
      </Flex>

      <Flex
        bg="gray.900"
        height="100px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h2" size="sm">
          Transações pendentes
        </Heading>

        <Text fontSize="4xl">{formatCurrency(pendingsTotal)}</Text>
      </Flex>
    </SimpleGrid>
  )
}
