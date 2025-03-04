"use client"; // Asegúrate de que este archivo sea un Client Component

import { useState } from "react";
import Link from "next/link";
import { Star, Clock } from "lucide-react";
import PriceOfferModal from "../components/Apprentice/ofrecer/Modal"; // Ajusta la ruta según tu estructura
import Header from "../components/general/header/Headerlg";

export default function PropertyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* <header className="bg-gray-200 p-4">
        <div className="container mx-auto">
          <div className="shadow-md bg-white rounded-full py-2 px-4 inline-block">
            <span className="font-semibold">Logo UrbanPoint</span>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Property Image and Reservation Buttons */}
          <div className="flex flex-col gap-8">
            {/* Property Image */}
            <div className="rounded-lg overflow-hidden bg-gray-900 aspect-video flex items-center justify-center">
              <div className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
            </div>

            {/* Reservation Buttons */}
            <div className="flex flex-col gap-2">
              <button className="bg-gray-900 text-white py-3 rounded font-medium">RESERVAR</button>
              <button className="bg-gray-400 text-white py-3 rounded font-medium">AGENDA UNA CITA</button>
            </div>
          </div>

          {/* Right Side - Property Details and Offer Price */}
          <div className="flex flex-col gap-8">
            {/* Property Details */}
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 flex items-start gap-4">
                <div className="bg-gray-500 w-20 h-20 rounded"></div>
                <div className="flex-grow">
                  <h2 className="font-bold text-sm">APARTAMENTO EN BELLO HORIZONTE</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      <Star className="w-4 h-4" />
                      <span className="text-sm ml-1">0.0 (0 reseñas)</span>
                    </div>
                    <Clock className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-300 p-4">
                <h3 className="text-sm mb-4">Información del Precio</h3>

                <div className="flex justify-between py-2">
                  <span className="text-sm">Cobro mensual</span>
                  <span className="text-sm">$250.000,00 COP</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-sm">Costo Servicios</span>
                  <span className="text-sm">$10.000,00 COP</span>
                </div>

                <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between">
                  <span className="text-sm font-medium">Total del Costo</span>
                  <span className="text-sm font-medium">$260.000,00 COP</span>
                </div>
              </div>
            </div>

            {/* Offer Price Button */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gray-900 text-white py-3 rounded font-medium"
              >
                OFRECER PRECIO
              </button>
              <div className="text-center mt-2">
                <p className="text-sm">Precio Inicial: $260.000,00 COP</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Asistencia */}
            <div>
              <h3 className="font-medium mb-4">Asistencia</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Centro de ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    SoftPoint
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Antidiscriminación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Opciones de cancelación
                  </Link>
                </li>
              </ul>
            </div>

            {/* Modo anfitrión */}
            <div>
              <h3 className="font-medium mb-4">Modo anfitrión</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Pon tu espacio en Urban Point
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    SafPoint para arrendadores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Recursos para arrendadores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Foro comunitario
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Arrendador con responsabilidad
                  </Link>
                </li>
              </ul>
            </div>

            {/* Urban Point */}
            <div>
              <h3 className="font-medium mb-4">Urban Point</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Sala de prensa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Funciones nuevas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Inversionistas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de oferta de precio */}
      <PriceOfferModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productImage="/placeholder.svg?height=150&width=200"
        productPrice={260000}
        productRating={4.8}
        reviewCount={9}
        currency="COP"
      />
    </div>
  );
}