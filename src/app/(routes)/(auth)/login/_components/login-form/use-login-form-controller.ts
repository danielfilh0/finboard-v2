import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export function useLoginFormController() {
  const router = useRouter()

  const toast = useToast()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const { email, password } = data

    if (!email || !password) {
      toast({
        title: 'Email ou senha não preenchidos.',
        status: 'error',
        position: 'top',
        isClosable: true,
      })

      return
    }

    router.push('/')
  }

  return { handleSubmit }
}
