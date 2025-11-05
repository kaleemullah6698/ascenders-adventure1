'use client'

import { Check } from 'lucide-react'

interface RegionFilterProps {
  selectedRegions: string[]
  onChange: (regions: string[]) => void
}

const regions = [
  { value: 'NORTHERN_AREAS', label: 'Northern Areas' },
  { value: 'KASHMIR', label: 'Kashmir' },
  { value: 'KHYBER_PAKHTUNKHWA', label: 'Khyber Pakhtunkhwa' },
  { value: 'BALOCHISTAN', label: 'Balochistan' },
  { value: 'PUNJAB', label: 'Punjab' },
  { value: 'SINDH', label: 'Sindh' },
  { value: 'GILGIT_BALTISTAN', label: 'Gilgit Baltistan' }
]

export default function RegionFilter({ selectedRegions, onChange }: RegionFilterProps) {
  const toggleRegion = (region: string) => {
    if (selectedRegions.includes(region)) {
      onChange(selectedRegions.filter(r => r !== region))
    } else {
      onChange([...selectedRegions, region])
    }
  }

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-900">Region of Pakistan</h4>
      <div className="space-y-2">
        {regions.map((region) => (
          <label key={region.value} className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={selectedRegions.includes(region.value)}
                onChange={() => toggleRegion(region.value)}
                className="hidden"
              />
              <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                selectedRegions.includes(region.value)
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300 group-hover:border-green-400'
              }`}>
                {selectedRegions.includes(region.value) && (
                  <Check className="h-3 w-3 text-white" />
                )}
              </div>
            </div>
            <span className="text-sm text-gray-700">{region.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}