'use client'

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
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

import { useFiltersModalController } from './use-filters-modal-controller'

interface FiltersModalProps {
  navigateToSearchPage?: boolean
}

export function FiltersModal({
  navigateToSearchPage = false,
}: FiltersModalProps) {
  const {
    isOpenModal,
    onOpenModal,
    onCloseModal,
    register,
    errors,
    handleSubmit,
  } = useFiltersModalController(navigateToSearchPage)

  return (
    <>
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
                    <FormErrorMessage>{errors.from?.message}</FormErrorMessage>
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
                    <FormErrorMessage>{errors.until?.message}</FormErrorMessage>
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
    </>
  )
}
