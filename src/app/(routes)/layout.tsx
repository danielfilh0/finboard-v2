import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { ChakraUIProvider } from '@/data/contexts/chakra-ui-context'

export const metadata: Metadata = {
  title: 'Finboard - Dashboard Financeiro',
  description:
    'Visualize os seus saldos, receitas, despesas, transações pendentes e históricos de transações',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>
        <ChakraUIProvider>{children}</ChakraUIProvider>
      </body>
    </html>
  )
}
