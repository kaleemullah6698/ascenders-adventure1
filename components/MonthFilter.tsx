'use client'

import { Check } from 'lucide-react'

interface MonthFilterProps {
  selectedMonths: string[]
  onChange: (months: string[]) => void
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default function MonthFilter({ selectedMonths, onChange }: MonthFilterProps) {
  const toggleMonth = (month: string) => {
    if (selectedMonths.includes(month)) {
      onChange(selectedMonths.filter(m => m !== month))
    } else {
      onChange([...selectedMonths, month])
    }
  }

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-900">Best Months</h4>
      <div className="grid grid-cols-2 gap-2">
        {months.map((month) => (
          <label key={month} className="flex items-center space-x-2 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={selectedMonths.includes(month)}
                onChange={() => toggleMonth(month)}
                className="hidden"
              />
              <div className={`w-4 h-4 border-2 rounded flex items-center justify-center transition-colors ${
                selectedMonths.includes(month)
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300 group-hover:border-green-400'
              }`}>
                {selectedMonths.includes(month) && (
                  <Check className="h-3 w-3 text-white" />
                )}
              </div>
            </div>
            <span className="text-sm text-gray-700">{month.substring(0, 3)}</span>
          </label>
        ))}
      </div>
    </div>
  )
}