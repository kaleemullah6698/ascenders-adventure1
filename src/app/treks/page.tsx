import { prisma } from '../../../lib/prisma'
import TrekCard from '../../../components/TrekCard'

async function getAllTreks() {
  try {
    console.log('🔍 Fetching all treks...')
    const treks = await prisma.trek.findMany({
      orderBy: { createdAt: 'desc' }
    })
    console.log(`✅ Found ${treks.length} treks`)
    return treks
  } catch (error) {
    console.error('❌ Error fetching treks:', error)
    return []
  }
}

export default async function AllTreksPage() {
  const treks = await getAllTreks()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Treks</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of trekking adventures across Pakistan
          </p>
        </div>

        {treks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treks.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">No Treks Available</h3>
              <p className="text-yellow-700">
                We're having trouble loading the trek data. Please try again later.
              </p>
            </div>
          </div>
        )}

        {/* Stats Section */}
        {treks.length > 0 && (
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">{treks.length}</div>
                <div className="text-gray-600">Total Treks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {treks.filter(t => t.difficulty === 'EXTREME').length}
                </div>
                <div className="text-gray-600">Extreme Treks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {treks.filter(t => t.region === 'NORTHERN_AREAS').length}
                </div>
                <div className="text-gray-600">Northern Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {treks.reduce((acc, trek) => acc + trek.duration, 0)}
                </div>
                <div className="text-gray-600">Total Days</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}