'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import TrekCard from './TrekCard'

interface FilterContextType {
  treks: any[]
  filters: any
  setFilters: (filters: any) => void
  loading: boolean
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function useFilter() {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error('useFilter must be used within a ClientWrapper')
  }
  return context
}

export default function ClientWrapper({ 
  children, 
  initialTreks, 
  initialFilters 
}: { 
  children: React.ReactNode
  initialTreks: any[]
  initialFilters: any
}) {
  const [treks, setTreks] = useState<any[]>(initialTreks)
  const [filters, setFiltersState] = useState(initialFilters)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Update filters and trigger API call
  const setFilters = async (newFilters: any) => {
    setFiltersState(newFilters)
    setLoading(true)
    
    // Build query string
    const params = new URLSearchParams()
    
    if (newFilters.difficulties.length > 0) {
      params.set('difficulties', newFilters.difficulties.join(','))
    }
    if (newFilters.seasons.length > 0) {
      params.set('seasons', newFilters.seasons.join(','))
    }
    if (newFilters.serviceTypes.length > 0) {
      params.set('serviceTypes', newFilters.serviceTypes.join(','))
    }
    if (newFilters.regions.length > 0) {
      params.set('regions', newFilters.regions.join(','))
    }
    if (newFilters.months.length > 0) {
      params.set('months', newFilters.months.join(','))
    }
    if (newFilters.minDuration > 1) {
      params.set('minDuration', newFilters.minDuration.toString())
    }
    if (newFilters.maxDuration < 30) {
      params.set('maxDuration', newFilters.maxDuration.toString())
    }

    // Update URL
    const queryString = params.toString()
    const newUrl = queryString ? `/?${queryString}` : '/'
    router.push(newUrl, { scroll: false })

    // Fetch filtered treks
    try {
      const response = await fetch(`/api/treks/filter?${params.toString()}`)
      const result = await response.json()
      
      if (result.success) {
        setTreks(result.data)
      }
    } catch (error) {
      console.error('Error fetching filtered treks:', error)
    } finally {
      setLoading(false)
    }
  }

  // Update TrekList component to show actual treks
  const TrekList = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="treks">
      {loading ? (
        // Loading skeleton
        Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
            <div className="h-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))
      ) : (
        // Actual trek cards
        treks.map((trek) => (
          <TrekCard key={trek.id} trek={trek} />
        ))
      )}
    </div>
  )

  return (
    <FilterContext.Provider value={{ treks, filters, setFilters, loading }}>
      {children}
      <TrekList />
    </FilterContext.Provider>
  )
}