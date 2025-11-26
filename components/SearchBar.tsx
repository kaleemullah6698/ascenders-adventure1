'use client';
import { useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    const params = new URLSearchParams(searchParams.toString());
    
    if (value) {
      params.set('q', value);
    } else {
      params.delete('q');
    }
    
    router.push(`/treks?${params.toString()}`);
  }, [router, searchParams]);

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search treks by name, description, or region..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute right-3 top-2">
        🔍
      </div>
    </div>
  );
}