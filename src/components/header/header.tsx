"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUser, FaSignOutAlt, FaBars } from "react-icons/fa";
import "../../../src/globals.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <nav className="bg-zinc-800 bg-opacity-50 backdrop-blur-md border-b border-white/20 shadow-lg px-6 py-4 text-white flex items-center justify-between relative">
        <Link
          href="/profile"
          className="flex items-center text-white font-bold hover:text-cyan-400 transition-colors"
        >
          <FaUser className="mr-2" />
          Perfil
        </Link>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center text-white focus:outline-none"
          >
            <FaBars size={20} />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white/50 text-black rounded shadow-lg z-10">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center hover:text-white px-4 py-2 hover:bg-black/50 rounded"
              >
                <FaSignOutAlt className="mr-2" />
                Cerrar Sesión
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}