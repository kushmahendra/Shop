import { ChevronDown, Search, User, ShoppingBag } from 'lucide-react'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import UserMenu from './UserMenu'

const DropdownMenu = ({ items, isVisible }) => {
  if (!isVisible) return null
  
  return (
    <div className="absolute top-full left-0 min-w-[200px] bg-white border border-gray-100 py-2 shadow-sm">
      {items.map((item, index) => (
        <a
          key={index}
          href="#"
          className="block px-6 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-[15px]"
        >
          {item}
        </a>
      ))}
    </div>
  )
}

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  // Close dropdowns on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
        setIsUserMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const menuItems = {
    home: ['Home 1', 'Home 2', 'Home 3', 'Home 4', 'Home 5', 'Home 6'],
    shop: ['Collection List 01', 'Collection List 02', 'Collection List 03', 'Collection List 04', 'Collection List 05'],
    product: ['Product Page', 'Product Grid', 'Product Feature'],
    collections: ['Popular Product'],
    pages: ['Delivery Notice', 'Terms and Conditions'],
    blogs: ['Blog 1', 'Blog 2', 'Blog 3', 'Blog 4']
  }

  return (
    <div className="relative">
      <nav className="py-4 px-6 flex items-center justify-between bg-white border-b border-gray-100">
        <div className="text-2xl font-semibold text-primary">
          Fashion
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          {Object.entries(menuItems).map(([key, items]) => (
            <div 
              key={key}
              className="relative"
              onMouseEnter={() => setActiveDropdown(key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-800 hover:text-gray-600">
                <span className="text-[15px]">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
                <ChevronDown size={14} className="text-gray-400" />
              </button>
              <DropdownMenu 
                items={items} 
                isVisible={activeDropdown === key}
              />
            </div>
          ))}
          <a href="#" className="text-[15px] text-gray-800 hover:text-gray-600">
            About Us
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            className="p-2 hover:bg-gray-50 rounded-full"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={20} className="text-gray-600" />
          </button>
          <div className="relative user-menu-container">
            <button 
              className="p-2 hover:bg-gray-50 rounded-full"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              onMouseEnter={() => setIsUserMenuOpen(true)}
            >
              <User size={20} className="text-gray-600" />
            </button>
            <UserMenu isVisible={isUserMenuOpen} />
          </div>
          <button className="p-2 hover:bg-gray-50 rounded-full relative">
            <ShoppingBag size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </nav>
      
      <SearchBar 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </div>
  )
}

export default Navbar

