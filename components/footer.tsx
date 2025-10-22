import { Mountain } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Mountain className="h-8 w-8 text-green-400" />
              <div className="ml-2">
                <h2 className="text-xl font-bold">Ascenders Adventure</h2>
                <p className="text-gray-400 text-sm">Trekking & Mountaineer Services</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Discover the majestic mountains of Pakistan with expert guides and premium trekking experiences. 
              Your adventure of a lifetime starts here.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/treks" className="hover:text-white">All Treks</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Islamabad, Pakistan</li>
              <li>📞 +92 300 1234567</li>
              <li>✉️ info@ascendersadventure.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ascenders Adventure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}