import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'
import { Difficulty, Season, ServiceType, Region } from '@prisma/client'

interface WhereClause {
  AND?: Array<{
    difficulty?: { in: Difficulty[] }
    season?: { hasSome: Season[] }
    serviceType?: { in: ServiceType[] }
    region?: { in: Region[] }
    bestMonths?: { hasSome: string[] }
    duration?: { gte: number; lte: number }
  }>
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Get all filter parameters
    const difficulties = searchParams.get('difficulties')?.split(',') || []
    const seasons = searchParams.get('seasons')?.split(',') || []
    const serviceTypes = searchParams.get('serviceTypes')?.split(',') || []
    const regions = searchParams.get('regions')?.split(',') || []
    const minDuration = parseInt(searchParams.get('minDuration') || '1')
    const maxDuration = parseInt(searchParams.get('maxDuration') || '30')
    const months = searchParams.get('months')?.split(',') || []

    console.log('🔍 Filtering treks with:', {
      difficulties,
      seasons,
      serviceTypes,
      regions,
      minDuration,
      maxDuration,
      months
    })

    // Build the WHERE clause
    const where: WhereClause = {
      AND: []
    }

    if (difficulties.length > 0) {
      where.AND!.push({
        difficulty: { in: difficulties as Difficulty[] }
      })
    }

    if (seasons.length > 0) {
      where.AND!.push({
        season: { hasSome: seasons as Season[] }
      })
    }

    if (serviceTypes.length > 0) {
      where.AND!.push({
        serviceType: { in: serviceTypes as ServiceType[] }
      })
    }

    if (regions.length > 0) {
      where.AND!.push({
        region: { in: regions as Region[] }
      })
    }

    if (minDuration > 1 || maxDuration < 30) {
      where.AND!.push({
        duration: {
          gte: minDuration,
          lte: maxDuration
        }
      })
    }

    if (months.length > 0) {
      where.AND!.push({
        bestMonths: { hasSome: months }
      })
    }

    // Remove AND if no filters are applied
    if (where.AND!.length === 0) {
      delete where.AND
    }

    console.log('📋 Final WHERE clause:', JSON.stringify(where, null, 2))

    const treks = await prisma.trek.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    })

    console.log(`✅ Found ${treks.length} treks`)

    return NextResponse.json({
      success: true,
      data: treks,
      count: treks.length
    })

  } catch (error) {
    console.error('❌ Error filtering treks:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to filter treks' },
      { status: 500 }
    )
  }
}