import { Box, Divider, Flex, Link, Text } from '@chakra-ui/react'

import { Logo } from '@/app/_components/logo'

import { SidebarLinks } from './_components/sidebar-links'

export function Sidebar() {
  return (
    <Flex
      as="aside"
      maxW={320}
      w="100%"
      h="100vh"
      flexDirection="column"
      bgColor="gray.900"
    >
      <Box as="header" w="max-content" mx="auto" my="4">
        <Link href="/">
          <Logo size={150} />
        </Link>
      </Box>

      <Flex as="div" flex="1">
        <SidebarLinks />
      </Flex>

      <Divider />

      <Flex as="footer" justifyContent="space-between" px="4" py="2">
        <Text>finboard</Text>

        <Text>© {new Date().getFullYear()}</Text>
      </Flex>
    </Flex>
  )
}
