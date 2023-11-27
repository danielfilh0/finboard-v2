import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { ChakraUIProvider } from '@/data/contexts/chakra-ui-context'

import { AuthGuard } from './_components/AuthGuard'

export const metadata: Metadata = {
  title: {
    template: '%s | Finboard',
    default: 'Finboard',
  },
  description:
    'Visualize os seus saldos, receitas, despesas, transações pendentes e históricos de transações.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>
        <AuthGuard>
          <ChakraUIProvider>{children}</ChakraUIProvider>
        </AuthGuard>
      </body>
    </html>
  )
}
