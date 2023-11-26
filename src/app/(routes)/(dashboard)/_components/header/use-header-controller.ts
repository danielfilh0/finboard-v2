'use client'

import { useDisclosure } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { parseObjToQueryParams } from '@/data/utils/parse-obj-to-query-params'

const schema = z.object({
  from: z.string().refine((from) => !!from.length, {
    message: 'Data de início não pode estar vazia.',
  }),
  until: z.string().refine((until) => !!until.length, {
    message: 'Data de fim não pode estar vazia.',
  }),
  account: z.string(),
  industry: z.string(),
  state: z.string(),
})

type FormData = z.infer<typeof schema>

export function useHeaderController() {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure()
  const router = useRouter()

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      from: format(new Date(), 'yyyy-MM-01'),
      until: format(new Date(), 'yyyy-MM-dd'),
    },
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    router.push(`/search?${parseObjToQueryParams(data)}`)
    onCloseModal()
  })

  return {
    register,
    errors,
    isOpenModal,
    onOpenModal,
    onCloseModal,
    handleSubmit,
  }
}
