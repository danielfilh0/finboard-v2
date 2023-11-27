'use client'

import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { List } from '@phosphor-icons/react'
import React from 'react'

import { Logo } from '@/app/_components/logo'
import { useBreakpoint } from '@/data/hooks/use-breakpoint'

import { SidebarLinks } from './_components/sidebar-links'
import { useSidebarController } from './use-sidebar-controller'

export function Sidebar() {
  const { handleLogout } = useSidebarController()
  const { isDesktop } = useBreakpoint()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  if (!isDesktop)
    return (
      <>
        <Button
          ref={btnRef}
          onClick={onOpen}
          mt={4}
          position="fixed"
          left={0}
          top={0}
        >
          <List size={24} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Flex
              as="aside"
              w="100%"
              h="100vh"
              flexDirection="column"
              bgColor="black"
            >
              <Box as="header" w="max-content" mx="auto" my="4">
                <Link href="/" color="white">
                  <Logo size={150} />
                </Link>
              </Box>

              <Flex as="div" flex="1" color="white">
                <SidebarLinks onLogout={handleLogout} />
              </Flex>

              <Divider />

              <Flex
                as="footer"
                justifyContent="space-between"
                px="4"
                py="2"
                color="white"
              >
                <Text>finboard</Text>

                <Text>© {new Date().getFullYear()}</Text>
              </Flex>
            </Flex>
          </DrawerContent>
        </Drawer>
      </>
    )

  return (
    <Flex
      as="aside"
      maxW={[null, null, 200, 320]}
      w="100%"
      h="100vh"
      flexDirection="column"
      bgColor="black"
    >
      <Box as="header" w="max-content" mx="auto" my="4">
        <Link href="/" color="white">
          <Logo size={150} />
        </Link>
      </Box>

      <Flex as="div" flex="1" color="white">
        <SidebarLinks onLogout={handleLogout} />
      </Flex>

      <Divider />

      <Flex
        as="footer"
        justifyContent="space-between"
        px="4"
        py="2"
        color="white"
      >
        <Text>finboard</Text>

        <Text>© {new Date().getFullYear()}</Text>
      </Flex>
    </Flex>
  )
}
