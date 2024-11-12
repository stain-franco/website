// C:\Users\FRANCO\Desktop\WebSite\website\app\Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" legacyBehavior>
                <a className="text-white text-2xl font-semibold hover:text-blue-400 transition duration-300">
                  Logo
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" legacyBehavior>
              <a className="text-white hover:bg-white hover:text-gray-800 hover:scale-105 transition-all duration-300 ease-in-out rounded-lg px-4 py-2">
                Inicio
              </a>
            </Link>
            <Link href="/relaciones" legacyBehavior>
              <a className="text-white hover:bg-white hover:text-gray-800 hover:scale-105 transition-all duration-300 ease-in-out rounded-lg px-4 py-2">
                Relaciones
              </a>
            </Link>
            <Link href="/siclo" legacyBehavior>
              <a className="text-white hover:bg-white hover:text-gray-800 hover:scale-105 transition-all duration-300 ease-in-out rounded-lg px-4 py-2">
                Siclo
              </a>
            </Link>
            <Link href="/conceptosGenerales" legacyBehavior>
              <a className="text-white hover:bg-white hover:text-gray-800 hover:scale-105 transition-all duration-300 ease-in-out rounded-lg px-4 py-2">
                Conceptos generales
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
