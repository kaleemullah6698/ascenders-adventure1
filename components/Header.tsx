'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Mountain, Search, Loader } from 'lucide-react'

// Mock search suggestions - replace with your actual trek data
const mockSuggestions = [
  'Thalo Pass Trek',
  'Lohigol Pass',
  'Fairy Meadows & Nanga Parbat',
  'Rush Lake Trek',
  'Snow Lake Trek',
  'Rakaposhi Base Camp'
]

// Debounce utility function
function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const searchInputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
      if (e.key === 'Escape') {
        setShowSuggestions(false)
        searchInputRef.current?.blur()
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Debounced search suggestions
  const debouncedSearch = useRef(
    debounce((query: string) => {
      if (query.trim().length > 1) {
        const filtered = mockSuggestions.filter(suggestion =>
          suggestion.toLowerCase().includes(query.toLowerCase())
        )
        setSuggestions(filtered)
        setShowSuggestions(filtered.length > 0)
      } else {
        setShowSuggestions(false)
        setSuggestions([])
      }
    }, 300)
  ).current

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    
    if (query.trim().length > 1) {
      debouncedSearch(query)
    } else {
      setShowSuggestions(false)
      setSuggestions([])
    }
  }

  // Handle search submission
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearching(true)
      setShowSuggestions(false)
      
      await new Promise(resolve => setTimeout(resolve, 500))
      
      console.log('Searching for:', searchQuery)
      setIsSearching(false)
    }
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
    console.log('Searching for suggestion:', suggestion)
  }

  // Handle input focus
  const handleInputFocus = () => {
    if (searchQuery.length > 1 && suggestions.length > 0) {
      setShowSuggestions(true)
    }
  }

  const isActive = (path: string) => pathname === path

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 shadow-lg' : 'py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Mountain className="h-8 w-8 text-green-600 flex-shrink-0" />
            <div className="ml-2">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Ascenders Adventure</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Trekking & Mountaineer Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative" ref={suggestionsRef}>
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search treks..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={handleInputFocus}
                  suppressHydrationWarning
                  className="pl-4 pr-10 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 w-56 xl:w-64 text-gray-900 placeholder-gray-500 bg-white"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600 disabled:opacity-50 transition-colors p-1"
                  aria-label="Search"
                >
                  {isSearching ? (
                    <Loader className="h-5 w-5 animate-spin" />
                  ) : (
                    <Search className="h-5 w-5" />
                  )}
                </button>
              </form>

              {/* Search Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border-2 border-gray-300 rounded-lg shadow-xl z-50 mt-2 max-h-64 overflow-y-auto">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-3 hover:bg-green-50 transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-gray-100 last:border-b-0"
                      onClick={() => handleSuggestionClick(suggestion)}
                      type="button"
                    >
                      <div className="flex items-center space-x-3">
                        <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-900 text-sm font-medium">{suggestion}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-6">
              <Link
                href="/"
                className={`font-semibold transition-all duration-200 pb-1 ${
                  isActive('/')
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Home
              </Link>
              <Link
                href="/treks"
                className={`font-semibold transition-all duration-200 pb-1 ${
                  isActive('/treks')
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Treks
              </Link>
              <Link
                href="/about"
                className={`font-semibold transition-all duration-200 pb-1 ${
                  isActive('/about')
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`font-semibold transition-all duration-200 pb-1 ${
                  isActive('/contact')
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className={`font-semibold transition-all duration-200 pb-1 ${
                  isActive('/faq')
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-4 pb-4 space-y-3 bg-white border-t border-gray-200">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-2" aria-label="Search treks">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search treks..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  suppressHydrationWarning
                  className="w-full pl-4 pr-10 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-500 bg-white"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600 disabled:opacity-50 transition-colors p-1"
                  aria-label="Search"
                >
                  {isSearching ? (
                    <Loader className="h-5 w-5 animate-spin" />
                  ) : (
                    <Search className="h-5 w-5" />
                  )}
                </button>
              </div>
            </form>

            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className={`block px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                isActive('/')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link
              href="/treks"
              className={`block px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                isActive('/treks')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              All Treks
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                isActive('/about')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                isActive('/contact')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className={`block px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                isActive('/faq')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}