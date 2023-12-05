import { Flex, Spinner } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Flex justifyContent="center" alignItems="center" mt="10">
      <Spinner size="xl" />
    </Flex>
  )
}
