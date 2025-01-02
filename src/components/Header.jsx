import React from 'react';

function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <a href="/" className="text-2xl font-medium text-[#8B8B6B]">
          Fashion
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/demos" className="text-gray-600 hover:text-gray-900">
            Demos
          </a>
          <a href="/features" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="/support" className="text-gray-600 hover:text-gray-900">
            Support
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

