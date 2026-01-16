import { useRef } from "react"

export const useDebounce = () => {
  const debounceTimeOut = useRef<ReturnType<typeof setTimeout> | null>(null)

  const debounce = (func: () => void, delay: number) => {
    return () => {
      if (debounceTimeOut.current) clearTimeout(debounceTimeOut.current)
      debounceTimeOut.current = setTimeout(() => {
        func()
        debounceTimeOut.current = null
      }, delay);
    }
  }

  return { debounce }
}