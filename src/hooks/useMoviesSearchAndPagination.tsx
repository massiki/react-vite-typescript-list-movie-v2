import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"
import { useDebounce } from "./useDebounce"
import type { movieType } from "@/lib/utility"
import { useApiMovies } from "@/api/useApiMovies"

const DELAY = 1000

interface UseMovieSearchAndPaginationProps {
  defaultMovies: movieType[]
  onMoviesChange?: (movies: movieType[]) => void
}

export const useMovieSearchAndPagination = ({
  defaultMovies,
  onMoviesChange,
}: UseMovieSearchAndPaginationProps) => {
  const [searchMovies, setSearchMovies] = useState<movieType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [query, setQuery] = useSearchParams()
  const { debounce } = useDebounce()
  const { apiSearch } = useApiMovies()

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
        const result = await apiSearch(currentSearch, currentPage)
        setSearchMovies(result)
        onMoviesChange?.(result)
      } else {
        setSearchMovies(defaultMovies)
        onMoviesChange?.(defaultMovies)
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
  }, [currentSearch, currentPage, defaultMovies])

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
    searchMovies,
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