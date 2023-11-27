'use client'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react'

import { useHeaderController } from './use-header-controller'

export function Header() {
  const {
    isOpenModal,
    onOpenModal,
    onCloseModal,
    register,
    errors,
    handleSubmit,
  } = useHeaderController()

  return (
    <Box as="header" w="100%" p="4" bg="white" color="black">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size={['md', null, null, 'lg']} pl={[12, null, null, 0]}>
          Dashboard Financeiro
        </Heading>

        <Button onClick={onOpenModal} colorScheme="blue">
          Filtros
        </Button>

        <Modal isOpen={isOpenModal} onClose={onCloseModal}>
          <ModalOverlay />

          <ModalContent>
            <ModalHeader>Filtros</ModalHeader>

            <ModalCloseButton />

            <form>
              <ModalBody>
                <VStack spacing="2">
                  <FormControl isInvalid={!!errors.from?.message}>
                    <FormLabel>Data de início</FormLabel>
                    <Input
                      type="date"
                      placeholder="Data de início"
                      {...register('from')}
                    />
                    {errors.from?.message && (
                      <FormErrorMessage>
                        {errors.from?.message}
                      </FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl isInvalid={!!errors.until?.message}>
                    <FormLabel>Data de fim</FormLabel>
                    <Input
                      type="date"
                      placeholder="Data de fim"
                      {...register('until')}
                    />
                    {errors.until?.message && (
                      <FormErrorMessage>
                        {errors.until?.message}
                      </FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl>
                    <FormLabel>Conta</FormLabel>
                    <Input {...register('account')} />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Indústria</FormLabel>
                    <Input {...register('industry')} />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Estado</FormLabel>
                    <Input {...register('state')} />
                  </FormControl>
                </VStack>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                  Filtrar
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  )
}
