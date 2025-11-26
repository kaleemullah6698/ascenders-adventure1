import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  const sort = searchParams.get('sort') || 'name';
  const order = searchParams.get('order') || 'asc';

  try {
    const treks = await prisma.trek.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          // Remove region from OR if it's an enum, or convert enum to string for search
        ]
      },
      orderBy: {
        [sort]: order
      }
    });

    // If you need to search by region (enum), you might need to filter client-side
    // or convert enum values to string in the query
    let filteredTreks = trek;
    
    if (query) {
      filteredTreks = treks.filter(trek => 
        trek.name.toLowerCase().includes(query.toLowerCase()) ||
        trek.description.toLowerCase().includes(query.toLowerCase()) ||
        trek.region.toLowerCase().includes(query.toLowerCase())
      );
    }

    return NextResponse.json(filteredTreks);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ error: 'Failed to fetch treks' }, { status: 500 });
  }
}