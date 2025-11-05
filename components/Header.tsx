'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Mountain } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Mountain className="h-8 w-8 text-green-600" />
            <div className="ml-2">
              <h1 className="text-xl font-bold text-gray-900">Ascenders Adventure</h1>
              <p className="text-xs text-gray-600">Trekking & Mountaineer Services</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/treks" className="text-gray-700 hover:text-green-600 font-medium">
              All Treks
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link href="/treks" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                All Treks
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}