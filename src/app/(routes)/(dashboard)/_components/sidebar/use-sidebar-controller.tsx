import { useRouter } from 'next/navigation'

import { localStorageKeys } from '@/data/config/local-storage-keys'
import { useLocalStorage } from '@/data/hooks/use-local-storage'

export function useSidebarController() {
  const [_, __, remove] = useLocalStorage(localStorageKeys.user)
  const router = useRouter()

  function handleLogout() {
    remove()
    router.push('/login')
  }

  return { handleLogout }
}
