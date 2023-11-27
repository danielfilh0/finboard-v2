'use client'

import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { GridNine, House, SignOut } from '@phosphor-icons/react'
import Link from 'next/link'

interface SidebarLinksProps {
  onLogout: () => void
}

export function SidebarLinks({ onLogout }: SidebarLinksProps) {
  return (
    <Flex flexDirection="column" w="100%">
      <Box flex="1" px="4">
        <Link href="/">
          <HStack p="4" w="100%">
            <House size={32} />
            <Text>Início</Text>
          </HStack>
        </Link>

        <Link href="/report">
          <HStack p="4" w="100%">
            <GridNine size={32} />
            <Text>Relatórios</Text>
          </HStack>
        </Link>
      </Box>

      <Button
        onClick={onLogout}
        variant="link"
        color="white"
        textDecoration="none"
      >
        <HStack p="4" w="100%" mb="10">
          <SignOut size={32} />
          <Text>Sair</Text>
        </HStack>
      </Button>
    </Flex>
  )
}
