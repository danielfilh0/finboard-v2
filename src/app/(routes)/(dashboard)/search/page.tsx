import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { z } from 'zod'

import { transactionsService } from '@/data/services/transactions'
import { formatCurrency } from '@/data/utils/format-currency'

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
  const params = searchParams

  const promises = [
    transactionsService.getDepositsTotal(params),
    transactionsService.getWithdrawsTotal(params),
    transactionsService.getPendingsTotal(params),
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
