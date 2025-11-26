'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const [sort, order] = value.split('-');
    
    params.set('sort', sort);
    params.set('order', order);
    
    router.push(`/treks?${params.toString()}`);
  };

  const currentSort = `${searchParams.get('sort') || 'name'}-${searchParams.get('order') || 'asc'}`;

  return (
    <select 
      value={currentSort}
      onChange={(e) => handleSortChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="name-asc">Name (A-Z)</option>
      <option value="name-desc">Name (Z-A)</option>
      <option value="difficulty-asc">Difficulty (Easy to Hard)</option>
      <option value="difficulty-desc">Difficulty (Hard to Easy)</option>
      <option value="duration-asc">Duration (Short to Long)</option>
      <option value="duration-desc">Duration (Long to Short)</option>
      <option value="price-asc">Price (Low to High)</option>
      <option value="price-desc">Price (High to Low)</option>
    </select>
  );
}