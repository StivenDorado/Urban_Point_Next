"use client"; // Asegúrate de que este componente sea del lado del cliente

import Link from "next/link";
import { useState } from "react"; // Importa useState para manejar el estado del modal
import PriceOfferModal from "../ofrecer/Modal"; // Asegúrate de que la ruta sea correcta

export default function PrecioReserva() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold">$350.000 COP</div>
        <div className="text-xs text-gray-500">Mensual</div>
      </div>

      <div className="border rounded-lg mb-4">
        <div className="grid grid-cols-2 border-b">
          <div className="p-2 border-r">
            <div className="text-xs text-gray-500">LLEGADA</div>
            <div className="text-sm">12/05/2023</div>
          </div>
          <div className="p-2">
            <div className="text-xs text-gray-500">SALIDA</div>
            <div className="text-sm">12/06/2023</div>
          </div>
        </div>
        <div className="p-2">
          <div className="text-xs text-gray-500">HUÉSPEDES</div>
          <div className="text-sm">2 huéspedes</div>
        </div>
      </div>

      <Link href="/PropertyPage">
        <button className="w-full mb-2 bg-gray-700 hover:bg-gray-800 text-white py-2 rounded">
          RESERVAR
        </button>
      </Link>

      {/* Botón para abrir el modal */}
      <button
        onClick={openModal} // Abre el modal al hacer clic
        className="w-full mb-4 border py-2 rounded"
      >
        OFRECER PRECIO
      </button>

      <div className="text-xs text-center mb-2">Cobro manual</div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>$350.000 COP</span>
          <span>$350.000 COP</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Cuota limpieza</span>
          <span>$50.000 COP</span>
        </div>
        <div className="flex justify-between text-sm border-t pt-2">
          <span>Total del costo</span>
          <span>$400.000 COP</span>
        </div>
      </div>

      {/* Renderiza el modal si está abierto */}
      <PriceOfferModal
        isOpen={isModalOpen} // Controla si el modal está abierto
        onClose={closeModal} // Función para cerrar el modal
        productImage="/placeholder.svg?height=150&width=200" // Ejemplo de imagen
        productPrice={350000} // Precio del producto
        productRating={4.8} // Calificación del producto
        reviewCount={9} // Número de reseñas
        currency="COP" // Moneda
      />
    </div>
  );
}