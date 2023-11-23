import { Heading, Text } from '@chakra-ui/react'

import { LoginForm } from './_components/login-form'

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
