// src/components/Header.jsx
"use client"; // Asegúrate de que este archivo sea un Client Component

import React, { useState } from "react";
import Link from "next/link";
import SearchBar from "../barSearch/searchBar";
import FiltersMenu from "../filters/Menu";
import DropdownModal from "../dropmodal/perfil"; // Asegúrate de que la ruta sea correcta

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

          {/* DropdownModal para el menú de usuario */}
          <DropdownModal isLoggedIn={false} /> {/* Cambia isLoggedIn según el estado de autenticación */}
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