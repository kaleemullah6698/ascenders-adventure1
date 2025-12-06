import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Users, MapPin } from 'lucide-react'

interface TrekCardProps {
  trek: {
    id: string
    name: string
    description: string
    image: string
    duration: number
    difficulty: string
    minCost: number
    maxCost: number
    region: string
    serviceType: string
    bestMonths: string[]
    groupSize: number
    elevation: number
    distance: number
    highlights: string[]
  }
}

export default function TrekCard({ trek }: TrekCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY': return 'bg-green-100 text-green-800'
      case 'MODERATE': return 'bg-yellow-100 text-yellow-800'
      case 'HARD': return 'bg-orange-100 text-orange-800'
      case 'EXTREME': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Link href={`/treks/${trek.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="relative h-48 bg-gray-200">
          <Image
            src={trek.image}
            alt={trek.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(trek.difficulty)}`}>
              {trek.difficulty}
            </span>
          </div>
          <div className="absolute bottom-2 left-2">
            <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
              {trek.serviceType}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-1">{trek.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{trek.description}</p>
          
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{trek.duration} days</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{trek.region.replace(/_/g, ' ')}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2" />
              <span>Group: {trek.groupSize} people</span>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <div className="text-lg font-bold text-green-600">
              PKR {trek.minCost.toLocaleString()} - {trek.maxCost.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">
              Best: {trek.bestMonths.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}