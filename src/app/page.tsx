import { prisma } from '../../lib/prisma'
import FilterPanel from '../../components/FilterPanel'
import ClientWrapper from '../../components/ClientWrapper'

// Define enums matching your schema
enum Difficulty {
  EASY = 'EASY',
  MODERATE = 'MODERATE',
  HARD = 'HARD',
  EXTREME = 'EXTREME'
}

enum Season {
  SPRING = 'SPRING',
  SUMMER = 'SUMMER',
  AUTUMN = 'AUTUMN',
  WINTER = 'WINTER'
}

enum Region {
  NORTHERN_AREAS = 'NORTHERN_AREAS',
  KASHMIR = 'KASHMIR',
  KHYBER_PAKHTUNKHWA = 'KHYBER_PAKHTUNKHWA',
  BALOCHISTAN = 'BALOCHISTAN',
  PUNJAB = 'PUNJAB',
  SINDH = 'SINDH',
  GILGIT_BALTISTAN = 'GILGIT_BALTISTAN',
  CHITRAL = 'CHITRAL'
}

enum ServiceType {
  BASIC = 'BASIC',
  STANDARD = 'STANDARD',
  ELITE = 'ELITE',
  PREMIUM = 'PREMIUM'
}

interface Filters {
  difficulties: Difficulty[]  // Use enum type
  seasons: Season[]          // Use enum type
  serviceTypes: ServiceType[] // Use enum type
  regions: Region[]          // Use enum type
  months: string[]           // months are strings in your schema (bestMonths: String[])
  minDuration: number
  maxDuration: number
}

// Or better, import Prisma types directly:
// import type { Difficulty, Season, Region, ServiceType } from '@prisma/client'

async function getTreks(filters: Filters = {
  difficulties: [],
  seasons: [],
  serviceTypes: [],
  regions: [],
  months: [],
  minDuration: 1,
  maxDuration: 30
}) {
  try {
    const where: any = {}  // Use 'any' or Prisma.TrekWhereInput if imported

    if (filters.difficulties?.length > 0) {
      where.difficulty = { in: filters.difficulties }
    }

    if (filters.seasons?.length > 0) {
      where.season = { hasSome: filters.seasons }
    }

    if (filters.serviceTypes?.length > 0) {
      where.serviceType = { in: filters.serviceTypes }
    }

    if (filters.regions?.length > 0) {
      where.region = { in: filters.regions }
    }

    if (filters.minDuration > 1 || filters.maxDuration < 30) {
      where.duration = {
        gte: filters.minDuration || 1,
        lte: filters.maxDuration || 30
      }
    }

    if (filters.months?.length > 0) {
      where.bestMonths = { hasSome: filters.months }
    }

    const treks = await prisma.trek.findMany({
      where: Object.keys(where).length > 0 ? where : undefined,
      orderBy: { createdAt: 'desc' }
    })

    return treks
  } catch (error) {
    console.error('Error fetching treks:', error)
    return []
  }
}

// Fix: Add searchParams as prop with proper type
interface HomePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function HomePage({ searchParams }: HomePageProps) {
  // Fix: Await searchParams
  const params = await searchParams
  
  // Helper function to parse enum values safely
  const parseEnumArray = <T extends string>(value: string | string[] | undefined, enumValues: Record<string, T>): T[] => {
    if (!value) return []
    
    const stringValues = typeof value === 'string' ? value.split(',') : value
    const validValues = Object.values(enumValues) as T[]
    
    return stringValues
      .filter(val => val && validValues.includes(val as T))
      .map(val => val as T)
  }

  // Parse filter parameters from URL
  const filters: Filters = {
    difficulties: parseEnumArray(params.difficulties, Difficulty),
    seasons: parseEnumArray(params.seasons, Season),
    serviceTypes: parseEnumArray(params.serviceTypes, ServiceType),
    regions: parseEnumArray(params.regions, Region),
    minDuration: parseInt(typeof params.minDuration === 'string' ? params.minDuration : '1'),
    maxDuration: parseInt(typeof params.maxDuration === 'string' ? params.maxDuration : '30'),
    months: typeof params.months === 'string' ? params.months.split(',') : []
  }

  const treks = await getTreks(filters)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ascenders Adventure
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-200">
              Trekking & Mountaineer Services - Discover Pakistan&apos;s Majestic Mountains
            </p>
            <a href="#treks" className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block">
              Explore 100+ Treks
            </a>
          </div>
        </div>
      </section>

      {/* Main Content with Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ClientWrapper initialTreks={treks} initialFilters={filters}>
          <FilterPanel trekCount={treks.length} />
          {/* TrekList is now inside ClientWrapper */}
        </ClientWrapper>
      </section>
    </div>
  )
}