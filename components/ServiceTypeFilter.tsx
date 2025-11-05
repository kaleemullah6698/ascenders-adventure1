'use client'

import { Check } from 'lucide-react'

interface ServiceTypeFilterProps {
  selectedServiceTypes: string[]
  onChange: (serviceTypes: string[]) => void
}

const serviceTypes = [
  { value: 'BASIC', label: 'Basic', description: 'Essential services' },
  { value: 'STANDARD', label: 'Standard', description: 'Comfortable experience' },
  { value: 'ELITE', label: 'Elite', description: 'Premium services' },
  { value: 'PREMIUM', label: 'Premium', description: 'Luxury experience' }
]

export default function ServiceTypeFilter({ selectedServiceTypes, onChange }: ServiceTypeFilterProps) {
  const toggleServiceType = (serviceType: string) => {
    if (selectedServiceTypes.includes(serviceType)) {
      onChange(selectedServiceTypes.filter(s => s !== serviceType))
    } else {
      onChange([...selectedServiceTypes, serviceType])
    }
  }

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-900">Service Type</h4>
      <div className="space-y-3">
        {serviceTypes.map((service) => (
          <label key={service.value} className="flex items-start space-x-3 cursor-pointer group">
            <div className="relative mt-1">
              <input
                type="checkbox"
                checked={selectedServiceTypes.includes(service.value)}
                onChange={() => toggleServiceType(service.value)}
                className="hidden"
              />
              <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                selectedServiceTypes.includes(service.value)
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300 group-hover:border-green-400'
              }`}>
                {selectedServiceTypes.includes(service.value) && (
                  <Check className="h-3 w-3 text-white" />
                )}
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-900">{service.label}</div>
              <div className="text-xs text-gray-500">{service.description}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}