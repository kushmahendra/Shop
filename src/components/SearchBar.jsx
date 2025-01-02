import { Search, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const SearchBar = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchHistory, setSearchHistory] = useState([])

  // Sample product data - in a real app, this would come from an API
  const products = [
    { id: 1, name: 'Classic T-Shirt', category: 'Clothing' },
    { id: 2, name: 'Denim Jeans', category: 'Clothing' },
    { id: 3, name: 'Leather Bag', category: 'Accessories' },
    { id: 4, name: 'Running Shoes', category: 'Footwear' },
    { id: 5, name: 'Silver Necklace', category: 'Jewelry' }
  ]

  useEffect(() => {
    if (searchTerm) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchTerm])

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      setSearchHistory(prev => [searchTerm, ...prev.slice(0, 4)])
      // Here you would typically trigger a search or navigation
    }
  }

  const clearSearch = () => {
    setSearchTerm('')
    setSearchResults([])
  }

  const handleClose = () => {
    clearSearch()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-sm border-b border-gray-100 animate-in fade-in slide-in-from-top duration-300 z-50">
      <div className="container mx-auto px-6 py-4">
        <form onSubmit={handleSubmit}>
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full pl-12 pr-10 py-2 text-gray-800 bg-transparent focus:outline-none text-lg"
              autoFocus
            />
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-12 p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={20} className="text-gray-400" />
              </button>
            )}
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>
        </form>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Search Results</h3>
            <div className="space-y-2">
              {searchResults.map(result => (
                <div
                  key={result.id}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">{result.name}</p>
                    <p className="text-xs text-gray-500">{result.category}</p>
                  </div>
                  <Search size={16} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search History */}
        {!searchTerm && searchHistory.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Recent Searches</h3>
            <div className="space-y-2">
              {searchHistory.map((term, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                  onClick={() => setSearchTerm(term)}
                >
                  <p className="text-sm text-gray-800">{term}</p>
                  <Search size={16} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar

