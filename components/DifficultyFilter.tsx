'use client'

import { Check } from 'lucide-react'

interface DifficultyFilterProps {
  selectedDifficulties: string[]
  onChange: (difficulties: string[]) => void
}

const difficulties = [
  { value: 'EASY', label: 'Easy', color: 'bg-green-100 text-green-800' },
  { value: 'MODERATE', label: 'Moderate', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'HARD', label: 'Hard', color: 'bg-orange-100 text-orange-800' },
  { value: 'EXTREME', label: 'Extreme', color: 'bg-red-100 text-red-800' }
]

export default function DifficultyFilter({ selectedDifficulties, onChange }: DifficultyFilterProps) {
  const toggleDifficulty = (difficulty: string) => {
    if (selectedDifficulties.includes(difficulty)) {
      onChange(selectedDifficulties.filter(d => d !== difficulty))
    } else {
      onChange([...selectedDifficulties, difficulty])
    }
  }

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-900">Difficulty Level</h4>
      <div className="space-y-2">
        {difficulties.map((difficulty) => (
          <label key={difficulty.value} className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={selectedDifficulties.includes(difficulty.value)}
                onChange={() => toggleDifficulty(difficulty.value)}
                className="hidden"
              />
              <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                selectedDifficulties.includes(difficulty.value)
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300 group-hover:border-green-400'
              }`}>
                {selectedDifficulties.includes(difficulty.value) && (
                  <Check className="h-3 w-3 text-white" />
                )}
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficulty.color}`}>
              {difficulty.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}