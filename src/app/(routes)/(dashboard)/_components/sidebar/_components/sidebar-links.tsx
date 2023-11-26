'use client'

import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { SignOut } from '@phosphor-icons/react'
import Link from 'next/link'

export function SidebarLinks() {
  return (
    <Flex flexDirection="column" w="100%">
      <Box flex="1" px="4" />

      <Link href="/login">
        <HStack p="4" w="100%" mb="10" color="red.300">
          <SignOut size={32} />
          <Text>Sair</Text>
        </HStack>
      </Link>
    </Flex>
  )
}
