import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { localStorageKeys } from '@/data/config/local-storage-keys'
import { useLocalStorage } from '@/data/hooks/use-local-storage'

const schema = z.object({
  email: z
    .string()
    .min(1, 'E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z
    .string()
    .min(1, 'Senha é obrigatória')
    .min(8, 'Senha deve conter pelo menos 8 dígitos'),
})

type FormData = z.infer<typeof schema>

export function useLoginFormController() {
  const router = useRouter()
  const [_, setUser] = useLocalStorage(localStorageKeys.user)

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    setUser(data.email)
    router.push('/')
  })

  return { register, errors, handleSubmit }
}
