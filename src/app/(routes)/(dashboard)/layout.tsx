'use client'

import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { FiltersProvider } from '@/data/contexts/filters-context'

import { Sidebar } from './_components/sidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <FiltersProvider>
      <Flex maxHeight="100vh">
        <Sidebar />

        <Flex flex="1" flexDirection="column" overflowY="auto">
          <Box as="div" flex="1" h="100%">
            {children}
          </Box>
        </Flex>
      </Flex>
    </FiltersProvider>
  )
}
