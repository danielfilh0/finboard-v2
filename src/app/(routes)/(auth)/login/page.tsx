import { Heading, Text } from '@chakra-ui/react'
import { Metadata } from 'next'

import { LoginForm } from './_components/login-form'

export const metadata: Metadata = {
  title: 'Realize o seu login',
  description:
    'Visualize os seus saldos, receitas, despesas, transações pendentes e históricos de transações.',
}

export default function LoginPage() {
  return (
    <>
      <Heading size="md" mb="2" textAlign="center">
        Seja bem-vindo ao seu Dashboard Financeiro
      </Heading>

      <Text align="center" mb="4">
        Realize aqui o seu login
      </Text>

      <LoginForm />
    </>
  )
}
