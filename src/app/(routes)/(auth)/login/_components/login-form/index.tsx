'use client'

import { Box, Button, Input, Stack } from '@chakra-ui/react'

import { useLoginFormController } from './use-login-form-controller'

export function LoginForm() {
  const { handleSubmit } = useLoginFormController()

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Stack spacing="2" mb="4">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          borderColor="black"
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          borderColor="black"
        />
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
