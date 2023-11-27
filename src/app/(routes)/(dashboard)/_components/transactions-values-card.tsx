import { Flex, Heading, Text } from '@chakra-ui/react'

import { formatCurrency } from '@/data/utils/format-currency'

interface TransactionsValuesCardProps {
  title: string
  value: number
  valueColor?: string
}

export function TransactionsValuesCard({
  title,
  value,
  valueColor,
}: TransactionsValuesCardProps) {
  return (
    <Flex
      bg="black"
      height="100px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
      rounded="lg"
    >
      <Heading as="h2" size="sm">
        {title}
      </Heading>

      <Text
        fontSize={['2xl', null, null, null, '3xl']}
        color={valueColor ?? 'white'}
      >
        {formatCurrency(value)}
      </Text>
    </Flex>
  )
}
