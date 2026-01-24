import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"
import { useDebounce } from "./useDebounce"
import type { seriesTvType } from "@/lib/utility"
import { useApiSeriesTv } from "@/api/useApiSeriesTv"

const DELAY = 1000

interface UseSeriesTvSearchAndPaginationProps {
  defaultSeriesTv: seriesTvType[]
  onSeriesTvChange?: (seriesTv: seriesTvType[]) => void
}

export const useSeriesTvSearchAndPagination = ({
  defaultSeriesTv,
  onSeriesTvChange,
}: UseSeriesTvSearchAndPaginationProps) => {
  const [searchSeriesTv, setSearchSeriesTv] = useState<seriesTvType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [query, setQuery] = useSearchParams()
  const { debounce } = useDebounce()
  const { apiSearchSeriesTv } = useApiSeriesTv()

  const currentSearch = query.get('search')
  const currentPage = Number(query.get('page')) || 1

  // Initialize page jika belum ada
  useEffect(() => {
    if (!query.get('page')) {
      setQuery({ page: '1' })
    }
  }, [query, setQuery])

  // Perform search function
  const performSearch = async () => {
    try {
      setIsLoading(true)
      if (currentSearch) {
        const result = await apiSearchSeriesTv(currentSearch, currentPage)
        setSearchSeriesTv(result)
        onSeriesTvChange?.(result)
      } else {
        setSearchSeriesTv(defaultSeriesTv)
        onSeriesTvChange?.(defaultSeriesTv)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  // Debounced search effect
  useEffect(() => {
    const debouncedSearch = debounce(performSearch, DELAY)
    debouncedSearch()
  }, [currentSearch, currentPage, defaultSeriesTv])

  // Pagination handlers
  const handlePrevPage = (searchQuery: string = currentSearch || '') => {
    setIsLoading(true)
    if (currentPage < 2) return
    setQuery({ page: (currentPage - 1).toString(), search: searchQuery })
  }

  const handleNextPage = (searchQuery: string = currentSearch || '') => {
    setIsLoading(true)
    setQuery({ page: (currentPage + 1).toString(), search: searchQuery })
  }

  // Search input handler
  const handleSearchChange = (value: string) => {
    setQuery({ search: value, page: "1" })
  }

  return {
    searchSeriesTv,
    isLoading,
    currentSearch,
    currentPage,
    handlePrevPage,
    handleNextPage,
    handleSearchChange,
    setQuery,
    setIsLoading,
  }
}