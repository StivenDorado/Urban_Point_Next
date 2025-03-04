import React from "react";

const FiltersMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Ocultar si el menú no está abierto

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90%] relative">
        {/* Botón de cierre */}
        <button
          className="absolute top-4 left-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ←
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">Filtros</h2>

        <div className="space-y-8 text-gray-800">
          {/* Tipo de vivienda */}
          <section className="text-center">
            <h3 className="text-lg font-semibold mb-4">Tipo de vivienda</h3>
            <div className="flex justify-center space-x-6">
              {[
                "Apartamento",
                "Casa",
                "Casa de Familia",
                "Estudio",
                "Habitación",
              ].map((tipo) => (
                <button
                  key={tipo}
                  className="flex flex-col items-center text-sm border-2 border-gray-300 rounded-lg p-4 hover:border-gray-500"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                  {tipo}
                </button>
              ))}
            </div>
          </section>

          {/* Servicios */}
          <section className="text-center">
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                "Wifi",
                "Energía",
                "TV",
                "Cocina",
                "Agua",
                "Garaje",
                "Lavadora",
                "Nevera",
                "Gas",
              ].map((servicio) => (
                <button
                  key={servicio}
                  className="flex flex-col items-center text-sm border-2 border-gray-300 rounded-lg p-4 hover:border-gray-500"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                  {servicio}
                </button>
              ))}
            </div>
          </section>

          {/* Filtros adicionales */}
          <section className="text-center">
            <h3 className="text-lg font-semibold mb-4">Otros filtros</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Amoblado",
                "Sin Amoblar",
                "Acepta mascotas",
                "No acepta mascotas",
              ].map((filtro) => (
                <button
                  key={filtro}
                  className="flex flex-col items-center text-sm border-2 border-gray-300 rounded-lg p-4 hover:border-gray-500"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                  {filtro}
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Botón para aplicar filtros */}
        <button
          className="mt-6 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
          onClick={onClose}
        >
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
};

export default FiltersMenu;
