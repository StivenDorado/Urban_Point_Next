// src/components/Header.jsx
import React from 'react';
import Link from 'next/link';

import SearchBar from '../barSearch/searchBar';
const Header = () => {
  return (
    <header className="bg-gray-200 justify-between items-center ">
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8"> {/* Ajuste para centrar y limitar el ancho */}
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-gray-800 font-bold text-xl">Logo UrbanPoint</Link>
          <div className="flex space-x-4 ">
            <Link to="/iniciosesion">
              <button className='text-white' variant="outline">Inicia sesión</button>
            </Link>
            <Link to="/registrarse">
              <button className='text-white' variant="outline">Regístrate</button>
            </Link>
          </div>
        </div> 
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
