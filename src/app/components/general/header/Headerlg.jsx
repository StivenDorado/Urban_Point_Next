// src/components/Header.jsx
"use client"; // Asegúrate de que este archivo sea un Client Component

import React, { useState } from "react";
import Link from "next/link";
import SearchBar from "../barSearch/searchBar";
import FiltersMenu from "../filters/Menu";

const Header = () => {
  const [isFiltersMenuOpen, setIsFiltersMenuOpen] = useState(false);

  const handleFiltersClick = () => {
    setIsFiltersMenuOpen(true);
  };

  const handleCloseFiltersMenu = () => {
    setIsFiltersMenuOpen(false);
  };

  return (
    <header className="bg-gray-200">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-gray-800 font-bold text-xl">
            Logo UrbanPoint
          </Link>

          {/* Botones de inicio de sesión y registro */}
          <div className="flex space-x-4">
            <Link href="/iniciosesion">
              <button className="text-gray-800 hover:text-gray-600">Inicia sesión</button>
            </Link>
            <Link href="/registrarse">
              <button className="text-gray-800 hover:text-gray-600">Regístrate</button>
            </Link>
          </div>
        </div>

        {/* Barra de búsqueda */}
        <SearchBar onFiltersClick={handleFiltersClick} />
      </div>

      {/* Menú de filtros */}
      <FiltersMenu isOpen={isFiltersMenuOpen} onClose={handleCloseFiltersMenu} />
    </header>
  );
};

export default Header;