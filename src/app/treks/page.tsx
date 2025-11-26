'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchBar from '../../../components/SearchBar';
import SortDropdown from '../../../components/SortDropdown';
import TrekCard from '../../../components/TrekCard';

interface Trek {
  id: string;
  name: string;
  description: string;
  difficulty: string;
  duration: number;
  region: string;
  price: number;
  season: string;
  serviceType: string;
  createdAt: string;
}

export default function AllTreksPage() {
  const searchParams = useSearchParams();
  const [treks, setTreks] = useState<Trek[]>([]);
  const [filteredTreks, setFilteredTreks] = useState<Trek[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch treks based on search and sort parameters
  useEffect(() => {
    async function fetchTreks() {
      try {
        setLoading(true);
        const query = searchParams.get('q') || '';
        const sort = searchParams.get('sort') || 'name';
        const order = searchParams.get('order') || 'asc';

        const params = new URLSearchParams();
        if (query) params.set('q', query);
        if (sort) params.set('sort', sort);
        if (order) params.set('order', order);

        const response = await fetch(`/api/treks/search?${params.toString()}`);
        const data = await response.json();
        
        setTreks(data);
        setFilteredTreks(data);
      } catch (error) {
        console.error('Error fetching treks:', error);
        setTreks([]);
        setFilteredTreks([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTreks();
  }, [searchParams]);

  // Update the API route to handle the new structure
  // Let's also update our API to work with your Prisma schema

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Treks</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of trekking adventures across Pakistan
          </p>
        </div>

        {/* Search and Sort Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
          <div className="w-full md:w-auto">
            <SearchBar />
          </div>
          <div className="flex gap-4">
            <SortDropdown />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading treks...</p>
          </div>
        ) : filteredTreks.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreks.map((trek) => (
                <TrekCard key={trek.id} trek={trek} />
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{filteredTreks.length}</div>
                  <div className="text-gray-600">Showing Treks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {filteredTreks.filter(t => t.difficulty === 'EXTREME').length}
                  </div>
                  <div className="text-gray-600">Extreme Treks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {filteredTreks.filter(t => t.region === 'NORTHERN_AREAS').length}
                  </div>
                  <div className="text-gray-600">Northern Areas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {filteredTreks.reduce((acc, trek) => acc + trek.duration, 0)}
                  </div>
                  <div className="text-gray-600">Total Days</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">No Treks Found</h3>
              <p className="text-yellow-700">
                {searchParams.get('q') 
                  ? `No treks found matching "${searchParams.get('q')}". Try adjusting your search.`
                  : "We're having trouble loading the trek data. Please try again later."
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}