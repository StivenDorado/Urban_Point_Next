"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/general/footer/Footer";
import SearchBar from "../components/general/barSearch/searchBar";
import FiltersMenu from "../components/general/filters/Menu";
import Header from "../components/general/header/Headerlg";
import { Home, Building, BedDouble, BookOpen } from "lucide-react"; // Importa los iconos de Lucide

export default function Landing() {
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos"); // Estado para la categoría seleccionada

  // Función para alternar el estado del menú de filtros
  const toggleFiltersMenu = () => setFiltersOpen(!isFiltersOpen);

  // Categorías disponibles
  const categories = [
    { name: "Todos", icon: <Home className="w-12 h-12" /> },
    { name: "Apartamentos", icon: <Building className="w-12 h-12" /> },
    { name: "Casas", icon: <Home className="w-12 h-12" /> },
    { name: "Estudios", icon: <BookOpen className="w-12 h-12" /> },
    { name: "Habitaciones", icon: <BedDouble className="w-12 h-12" /> },
  ];

  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Barra de búsqueda */}
      <Header />

      {/* Sección de resultados */}
      <section className="p-4 bg-[#275950]">
        {/* Filtros de categorías */}
        <div className="flex justify-between w-full px-8 mb-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex flex-col items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 mx-2 ${
                selectedCategory === category.name
                  ? "bg-[#9BF2EA] text-[#275950]" // Estilo para la categoría seleccionada
                  : "bg-gray-300 text-gray-800 hover:bg-[#9BF2EA] hover:text-[#275950]" // Estilo para las demás
              }`}
            >
              {category.icon} {/* Icono de la categoría */}
              <span className="mt-2">{category.name}</span> {/* Nombre de la categoría */}
            </button>
          ))}
        </div>
      </section>

      {/* Sección de cards */}
      <section className="grid grid-cols-4 gap-20 p-24 bg-white">
        {Array.from({ length: 16 }).map((_, index) => (
          <Link href="/reserva" key={index}>
            <div className="flex flex-col items-center justify-center">
              {/* Contenedor de la imagen */}
              <div className="relative w-80 h-72 rounded-t-lg overflow-hidden">
                {/* Imagen de fondo */}
                <img
                  src="https://a0.muscache.com/im/pictures/canvas/Canvas-1713384244713/original/51167052-ebe9-4a7e-9ff0-009ded0fd4a1.jpeg?im_w=720&im_format=avif"
                  alt="Imagen del alojamiento"
                  className="w-full h-full object-cover"
                />
                {/* Botón de favorito */}
                <button className="bg-transparent absolute top-1 right-2 rounded-lg px-1 py-1">
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </button>
              </div>

              {/* Información de la card */}
              <div className="text-black flex flex-col items-center bg-[#9BF2EA] opacity-50 w-80 h-36 rounded-b-lg">
                <h3 className="text-lg font-semibold">San Eduardo</h3>
                <p className="text-xs text-white text-center">
                  Disponible desde 11-20 sep
                </p>
                <p className="text-lg font-bold text-center">
                  $ 250,000.00 COP / Mes
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Menú de filtros */}
      <FiltersMenu isOpen={isFiltersOpen} onClose={toggleFiltersMenu} />

      {/* Footer */}
      <Footer />
    </div>
  );
}