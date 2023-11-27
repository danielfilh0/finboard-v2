import { Flex, Heading, Text } from '@chakra-ui/react'
import { Metadata } from 'next'
import Link from 'next/link'

import { Logo } from '@/app/_components/logo'

export const metadata: Metadata = {
  title: '404 - Página não encontrada',
  description: 'A página solicitada não foi encontrada',
}

export default function NotFound() {
  return (
    <Flex
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Link href="/login">
        <Logo />
      </Link>

      <Heading mt={10}>404</Heading>
      <Text>Página não encontrada</Text>
    </Flex>
  )
}
