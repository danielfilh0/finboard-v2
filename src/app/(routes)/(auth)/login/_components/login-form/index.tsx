'use client'

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
} from '@chakra-ui/react'

import { useLoginFormController } from './use-login-form-controller'

export function LoginForm() {
  const { register, handleSubmit, errors } = useLoginFormController()

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Stack spacing="2" mb="4">
        <FormControl isInvalid={!!errors.email?.message}>
          <Input
            type="email"
            placeholder="Email"
            borderColor="black"
            {...register('email')}
          />
          {errors.email?.message && (
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.email?.message}>
          <Input
            type="password"
            placeholder="Senha"
            borderColor="black"
            {...register('password')}
          />
          {errors.password?.message && (
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          )}
        </FormControl>
      </Stack>

      <Button
        w="100%"
        bg="black"
        color="white"
        colorScheme="blackAlpha"
        type="submit"
      >
        Entrar
      </Button>
    </Box>
  )
}
