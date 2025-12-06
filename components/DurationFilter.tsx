'use client'

interface DurationFilterProps {
  minDuration: number
  maxDuration: number
  onChange: (min: number, max: number) => void
}

export default function DurationFilter({ minDuration, maxDuration, onChange }: DurationFilterProps) {
  const handleMinChange = (value: number) => {
    const newMin = Math.min(value, maxDuration - 1)
    onChange(newMin, maxDuration)
  }

  const handleMaxChange = (value: number) => {
    const newMax = Math.max(value, minDuration + 1)
    onChange(minDuration, newMax)
  }

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-gray-900">Duration (Days)</h4>
      
      <div className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Days</label>
            <input
              type="number"
              min="1"
              max="29"
              value={minDuration}
              onChange={(e) => handleMinChange(parseInt(e.target.value) || 1)}
              suppressHydrationWarning
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Max Days</label>
            <input
              type="number"
              min="2"
              max="30"
              value={maxDuration}
              onChange={(e) => handleMaxChange(parseInt(e.target.value) || 30)}
              suppressHydrationWarning
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="px-2">
          <div className="text-xs text-gray-500 mb-2">
            Selected: {minDuration} - {maxDuration} days
          </div>
          <div className="space-y-2">
            <input
              type="range"
              min="1"
              max="30"
              value={minDuration}
              onChange={(e) => handleMinChange(parseInt(e.target.value))}
              suppressHydrationWarning
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <input
              type="range"
              min="1"
              max="30"
              value={maxDuration}
              onChange={(e) => handleMaxChange(parseInt(e.target.value))}
              suppressHydrationWarning
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      </div>
    </div>
  )
}