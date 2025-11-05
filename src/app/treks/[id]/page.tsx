import { notFound } from 'next/navigation'
import { Calendar, Users, MapPin, Mountain, Star, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { prisma } from '../../../lib/prisma'
import TrekCard from '../../../components/TrekCard'

async function getTrek(id: string) {
  try {
    const trek = await prisma.trek.findUnique({
      where: { id }
    })
    return trek
  } catch (error) {
    console.error('Error fetching trek:', error)
    return null
  }
}

async function getSimilarTreks(currentTrek: any) {
  try {
    const treks = await prisma.trek.findMany({
      where: {
        AND: [
          { id: { not: currentTrek.id } },
          {
            OR: [
              { region: currentTrek.region },
              { difficulty: currentTrek.difficulty },
              { season: { hasSome: currentTrek.season } }
            ]
          }
        ]
      },
      take: 3
    })
    return treks
  } catch (error) {
    console.error('Error fetching similar treks:', error)
    return []
  }
}

export default async function TrekDetailPage({ params }: { params: { id: string } }) {
  const trek = await getTrek(params.id)

  if (!trek) {
    notFound()
  }

  const similarTreks = await getSimilarTreks(trek)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY': return 'bg-green-100 text-green-800'
      case 'MODERATE': return 'bg-yellow-100 text-yellow-800'
      case 'HARD': return 'bg-orange-100 text-orange-800'
      case 'EXTREME': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  // Parse itinerary if it's a string
  let itineraryData = []
  try {
    itineraryData = typeof trek.itinerary === 'string' 
      ? JSON.parse(trek.itinerary)?.days || []
      : trek.itinerary?.days || []
  } catch {
    itineraryData = []
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/treks" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Treks
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-96">
            <img
              src={trek.image}
              alt={trek.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{trek.name}</h1>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(trek.difficulty)}`}>
                  {trek.difficulty}
                </span>
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {trek.serviceType}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 mb-6">{trek.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold">{trek.duration} Days</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Mountain className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold">{trek.elevation}m</div>
                  <div className="text-sm text-gray-600">Max Elevation</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold">{trek.groupSize}</div>
                  <div className="text-sm text-gray-600">Group Size</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-sm">{trek.region.replace(/_/g, ' ')}</div>
                  <div className="text-sm text-gray-600">Region</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                {trek.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4">Best Time to Visit</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {trek.bestMonths.map((month: string, index: number) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {month}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Available Seasons</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {trek.season.map((season: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {season}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Pricing</h3>
                <div className="text-2xl font-bold text-green-800 mb-2">
                  PKR {trek.minCost.toLocaleString()} - {trek.maxCost.toLocaleString()}
                </div>
                <p className="text-green-700 text-sm mb-4">
                  Price varies based on group size and services
                </p>
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Book This Trek
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-semibold">{trek.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Level:</span>
                    <span className="font-semibold">{trek.serviceType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance:</span>
                    <span className="font-semibold">{trek.distance} km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Region:</span>
                    <span className="font-semibold">{trek.region.replace(/_/g, ' ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Treks Section */}
        {similarTreks.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Treks You Might Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarTreks.map((trek) => (
                <TrekCard key={trek.id} trek={trek} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}