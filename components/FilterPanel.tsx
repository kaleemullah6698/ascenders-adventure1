'use client'

import { Filter, X } from 'lucide-react'
import DifficultyFilter from './DifficultyFilter'
import SeasonFilter from './SeasonFilter'
import ServiceTypeFilter from './ServiceTypeFilter'
import RegionFilter from './RegionFilter'
import DurationFilter from './DurationFilter'
import MonthFilter from './MonthFilter'
import { useFilter } from './ClientWrapper'

interface Filters {
  difficulties: string[]
  seasons: string[]
  serviceTypes: string[]
  regions: string[]
  months: string[]
  minDuration: number
  maxDuration: number
}

export default function FilterPanel({ trekCount }: { trekCount: number }) {
  const { filters, setFilters } = useFilter()

  // Ensure filters have default values
  const safeFilters: Filters = {
    difficulties: filters?.difficulties || [],
    seasons: filters?.seasons || [],
    serviceTypes: filters?.serviceTypes || [],
    regions: filters?.regions || [],
    minDuration: filters?.minDuration || 1,
    maxDuration: filters?.maxDuration || 30,
    months: filters?.months || []
  }

  const clearAllFilters = () => {
    setFilters({
      difficulties: [],
      seasons: [],
      serviceTypes: [],
      regions: [],
      minDuration: 1,
      maxDuration: 30,
      months: []
    })
  }

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters)
  }

  const activeFilterCount = [
    safeFilters.difficulties.length,
    safeFilters.seasons.length,
    safeFilters.serviceTypes.length,
    safeFilters.regions.length,
    safeFilters.months.length,
    safeFilters.minDuration > 1 || safeFilters.maxDuration < 30 ? 1 : 0
  ].reduce((a, b) => a + b, 0)

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 p-2 rounded-lg">
            <Filter className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Filter Treks</h3>
          {activeFilterCount > 0 && (
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
              {activeFilterCount} active
            </span>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-bold text-gray-900 bg-gray-100 px-4 py-2 rounded-lg">
            {trekCount} treks
          </span>
          {activeFilterCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-red-600 hover:text-white hover:bg-red-600 flex items-center font-semibold px-4 py-2 rounded-lg transition-colors border-2 border-red-600"
            >
              <X className="h-4 w-4 mr-1" />
              Clear all
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <DifficultyFilter
          selectedDifficulties={safeFilters.difficulties}
          onChange={(difficulties) => handleFilterChange({ ...safeFilters, difficulties })}
        />
        
        <SeasonFilter
          selectedSeasons={safeFilters.seasons}
          onChange={(seasons) => handleFilterChange({ ...safeFilters, seasons })}
        />
        
        <ServiceTypeFilter
          selectedServiceTypes={safeFilters.serviceTypes}
          onChange={(serviceTypes) => handleFilterChange({ ...safeFilters, serviceTypes })}
        />
        
        <RegionFilter
          selectedRegions={safeFilters.regions}
          onChange={(regions) => handleFilterChange({ ...safeFilters, regions })}
        />
        
        <DurationFilter
          minDuration={safeFilters.minDuration}
          maxDuration={safeFilters.maxDuration}
          onChange={(min, max) => handleFilterChange({ ...safeFilters, minDuration: min, maxDuration: max })}
        />
        
        <MonthFilter
          selectedMonths={safeFilters.months}
          onChange={(months) => handleFilterChange({ ...safeFilters, months })}
        />
      </div>
    </div>
  )
}