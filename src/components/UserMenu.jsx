import { useState } from 'react';
import myImage from '../assets/img.jpg';

import { Link } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', flag: '/placeholder.svg?height=20&width=30' },
  { code: 'fr', name: 'French', flag: '/placeholder.svg?height=20&width=30' },
  { code: 'de', name: 'German', flag: '/placeholder.svg?height=20&width=30' },
  { code: 'it', name: 'Italian', flag: '/placeholder.svg?height=20&width=30' },
  { code: 'es', name: 'Spanish', flag: '/placeholder.svg?height=20&width=30' },
  { code: 'ar', name: 'Arabic', flag: '/placeholder.svg?height=20&width=30' }
];

const currencies = [
  { code: 'EUR', symbol: '€' },
  { code: 'USD', symbol: '$' }
];

const UserMenu = ({ isVisible }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  if (!isVisible) return null;

  return (
    <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-100 rounded-md shadow-sm py-2">
      {/* User Links */}
      <div className="py-1">
        <Link to='/signin' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Log In </Link>
        <Link to='/signup' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"> Register</Link>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">My account</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Wishlist (0)</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Compare (0)</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Checkout</a>
      </div>

      <div className="border-t border-gray-100 my-1"></div>

      {/* Language Selection */}
      <div className="px-4 py-2">
        <div className="text-xs font-medium text-gray-500 mb-2">Language:</div>
        <div className="grid grid-cols-3 gap-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`p-1 rounded ${
                selectedLanguage === lang.code ? 'ring-1 ring-gray-300' : ''
              }`}
            >
              <img
                src={lang.flag}
                alt={lang.name}
                width={20}
                height={15}
                className="w-full h-auto"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 my-1"></div>

      {/* Currency Selection */}
      <div className="px-4 py-2">
        <div className="text-xs font-medium text-gray-500 mb-2">Currency:</div>
        <div className="flex gap-2">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => setSelectedCurrency(currency.code)}
              className={`px-2 py-1 text-sm rounded ${
                selectedCurrency === currency.code
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {currency.code}
            </button>
          ))}
        </div>
      </div>

      {/* Example Usage of Imported myImage */}
      <div className="px-4 py-2">
        <img src={myImage} alt="My Image Example" className="w-full rounded-md mt-2" />
      </div>
    </div>
  );
};

export default UserMenu;
