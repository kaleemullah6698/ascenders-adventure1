'use client'

import { Check } from 'lucide-react'

interface SeasonFilterProps {
  selectedSeasons: string[]
  onChange: (seasons: string[]) => void
}

const seasons = [
  { value: 'SPRING', label: 'Spring', color: 'bg-pink-100 text-pink-800' },
  { value: 'SUMMER', label: 'Summer', color: 'bg-green-100 text-green-800' },
  { value: 'AUTUMN', label: 'Autumn', color: 'bg-orange-100 text-orange-800' },
  { value: 'WINTER', label: 'Winter', color: 'bg-blue-100 text-blue-800' }
]

export default function SeasonFilter({ selectedSeasons, onChange }: SeasonFilterProps) {
  const toggleSeason = (season: string) => {
    if (selectedSeasons.includes(season)) {
      onChange(selectedSeasons.filter(s => s !== season))
    } else {
      onChange([...selectedSeasons, season])
    }
  }

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-900">Season</h4>
      <div className="space-y-2">
        {seasons.map((season) => (
          <label key={season.value} className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={selectedSeasons.includes(season.value)}
                onChange={() => toggleSeason(season.value)}
                className="hidden"
              />
              <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                selectedSeasons.includes(season.value)
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300 group-hover:border-green-400'
              }`}>
                {selectedSeasons.includes(season.value) && (
                  <Check className="h-3 w-3 text-white" />
                )}
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${season.color}`}>
              {season.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}