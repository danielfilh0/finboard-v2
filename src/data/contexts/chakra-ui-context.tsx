'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function ChakraUIProvider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Box minW="100vw" minH="100vh">
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}
