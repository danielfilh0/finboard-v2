import { useCallback, useState } from 'react'

export function useLocalStorage(key: string, initialValue: string = '') {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key)

      return storedValue ? JSON.parse(storedValue) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: any) => {
      try {
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error: any) {
        console.log(error)
      }
    },
    [key],
  )

  const deleteValue = useCallback(() => {
    try {
      setState(null)
      localStorage.removeItem(key)
    } catch (error: any) {
      console.log(error)
    }
  }, [key])

  return [state, setValue, deleteValue]
}
