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
      <h4 className="font-bold text-gray-900 text-base">Duration (Days)</h4>
      
      <div className="space-y-4">
        <div className="flex space-x-3">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Min</label>
            <input
              type="number"
              min="1"
              max="29"
              value={minDuration}
              onChange={(e) => handleMinChange(parseInt(e.target.value) || 1)}
              suppressHydrationWarning
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-semibold bg-white"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Max</label>
            <input
              type="number"
              min="2"
              max="30"
              value={maxDuration}
              onChange={(e) => handleMaxChange(parseInt(e.target.value) || 30)}
              suppressHydrationWarning
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 font-semibold bg-white"
            />
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-sm font-semibold text-gray-900 mb-3">
            Selected: {minDuration} - {maxDuration} days
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">Minimum Duration</label>
              <input
                type="range"
                min="1"
                max="30"
                value={minDuration}
                onChange={(e) => handleMinChange(parseInt(e.target.value))}
                suppressHydrationWarning
                className="w-full h-2 bg-gradient-to-r from-green-200 to-green-600 rounded-lg appearance-none cursor-pointer accent-green-600"
                style={{
                  background: `linear-gradient(to right, #10b981 0%, #10b981 ${(minDuration / 30) * 100}%, #e5e7eb ${(minDuration / 30) * 100}%, #e5e7eb 100%)`
                }}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">Maximum Duration</label>
              <input
                type="range"
                min="1"
                max="30"
                value={maxDuration}
                onChange={(e) => handleMaxChange(parseInt(e.target.value))}
                suppressHydrationWarning
                className="w-full h-2 bg-gradient-to-r from-green-200 to-green-600 rounded-lg appearance-none cursor-pointer accent-green-600"
                style={{
                  background: `linear-gradient(to right, #10b981 0%, #10b981 ${(maxDuration / 30) * 100}%, #e5e7eb ${(maxDuration / 30) * 100}%, #e5e7eb 100%)`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}