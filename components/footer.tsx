import { Mountain, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4 hover:opacity-80 transition-opacity">
              <Mountain className="h-9 w-9 text-green-400" />
              <div className="ml-3">
                <h2 className="text-xl font-bold">Ascenders Adventure</h2>
                <p className="text-gray-400 text-xs">Trekking & Mountaineer Services</p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Discover the majestic mountains of Pakistan with expert guides and premium trekking experiences. 
              Your adventure of a lifetime starts here.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/treks" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  All Treks
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Popular Treks */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Popular Treks</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/treks" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  Fairy Meadows
                </Link>
              </li>
              <li>
                <Link href="/treks" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  K2 Base Camp
                </Link>
              </li>
              <li>
                <Link href="/treks" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  Rush Lake Trek
                </Link>
              </li>
              <li>
                <Link href="/treks" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  Snow Lake
                </Link>
              </li>
              <li>
                <Link href="/treks" className="text-gray-400 hover:text-green-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  Rakaposhi Base Camp
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Office #12, Adventure Plaza</p>
                  <p className="text-gray-400">Islamabad, Pakistan</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <a href="tel:+923001234567" className="text-gray-400 hover:text-green-400 transition-colors">
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@ascendersadventure.com" className="text-gray-400 hover:text-green-400 transition-colors">
                  info@ascendersadventure.com
                </a>
              </li>
            </ul>
            
            {/* Newsletter - Optional */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Newsletter</h4>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-green-500 text-sm"
                />
                <button 
                  type="submit"
                  className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Ascenders Adventure. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-green-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}