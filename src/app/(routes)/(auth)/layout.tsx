import { Card, CardBody, CardHeader, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { Logo } from '@/app/_components/logo'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Flex as="main" p="3" h="100vh" justifyContent="center" alignItems="center">
      <Card>
        <CardHeader>
          <Flex justifyContent="center">
            <Logo />
          </Flex>
        </CardHeader>

        <CardBody>{children}</CardBody>
      </Card>
    </Flex>
  )
}
