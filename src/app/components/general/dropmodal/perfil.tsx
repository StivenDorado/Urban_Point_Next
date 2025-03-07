// src/components/dropmodal/perfil.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, LogOut, Heart, Home, MessageSquare, HelpCircle, User, Menu } from "lucide-react";

interface ModalProps {
  isLoggedIn?: boolean;
}

export default function DropdownModal({ isLoggedIn = false }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Cierra el modal cuando se hace clic fuera de él
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={modalRef}>
      {/* Botón para abrir el modal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-3 rounded-full border border-gray-300 bg-white px-3 py-1.5 shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="text-gray-500">
          <Menu size={18} />
        </div>
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <User size={18} className="text-gray-500" />
        </div>
      </button>

      {/* Modal desplegable */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {isLoggedIn ? <LoggedInView /> : <GuestView />}
        </div>
      )}
    </div>
  );
}

function GuestView() {
  return (
    <div className="py-2 flex flex-col">
      <button className="px-4 py-3 text-left font-medium hover:bg-gray-100 transition-colors">Inicia sesión</button>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors">Regístrate</button>
      <div className="h-px bg-gray-200 my-1"></div>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors">Pon tu espacio en Airbnb</button>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors">Organiza una experiencia</button>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors">Centro de ayuda</button>
    </div>
  );
}

function LoggedInView() {
  return (
    <div className="py-2 flex flex-col">
      <button className="px-4 py-3 text-left font-medium hover:bg-gray-100 transition-colors flex items-center justify-between">
        Mensajes
        <MessageSquare size={18} />
      </button>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center justify-between">
        Notificaciones
        <div className="relative">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
      </button>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors">Viajes</button>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center justify-between">
        Listas de favoritos
        <Heart size={18} />
      </button>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center justify-between">
        Administra los anuncios
        <div className="relative">
          <Home size={18} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
      </button>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors">Organiza una experiencia</button>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors">Cuenta</button>
      <div className="h-px bg-gray-200 my-1"></div>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center justify-between">
        Centro de ayuda
        <HelpCircle size={18} />
      </button>
      <button className="px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center justify-between">
        Cierra la sesión
        <LogOut size={18} />
      </button>
    </div>
  );
}