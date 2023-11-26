'use client'

import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { Header } from './_components/header'
import { Sidebar } from './_components/sidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Flex maxHeight="100vh">
      <Sidebar />

      <Box flex="1" flexDirection="column" overflowY="auto">
        <Header />

        <Box as="div" flex="1">
          {children}
        </Box>
      </Box>
    </Flex>
  )
}
