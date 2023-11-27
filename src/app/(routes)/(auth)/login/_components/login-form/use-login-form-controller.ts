import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

import { localStorageKeys } from '@/data/config/local-storage-keys'
import { useLocalStorage } from '@/data/hooks/use-local-storage'

export function useLoginFormController() {
  const router = useRouter()
  const [_, setUser] = useLocalStorage(localStorageKeys.user)

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

    setUser(email)

    router.push('/')
  }

  return { handleSubmit }
}
