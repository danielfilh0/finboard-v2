'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

import { localStorageKeys } from '@/data/config/local-storage-keys'
import { useLocalStorage } from '@/data/hooks/use-local-storage'

export function AuthGuard({ children }: { children: ReactNode }) {
  const [user] = useLocalStorage(localStorageKeys.user)
  const router = useRouter()

  useEffect(() => {
    if (!user) router.push('/login')
  }, [user, router])

  return <div>{children}</div>
}
