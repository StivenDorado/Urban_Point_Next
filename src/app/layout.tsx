"use client";
import { Inter } from "next/font/google";
import { AuthProvider } from "../app/context/AuthContext";
import { FavoritesProvider } from "../app/context/FavoritesContext";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-950`}>
        {/* Proveedores de contexto */}
        <AuthProvider>
          <FavoritesProvider>
            {/* Contenido principal */}
            <main className="min-h-screen">
              {/* Capa oscura semitransparente */}
              <div className="fixed inset-0 bg-black/20 custom-backdrop-blur" />
              {children}
            </main>
          </FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
