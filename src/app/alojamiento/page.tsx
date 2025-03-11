"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Header from "../../app/components/general/header/Headerlg";
import Footer from "../../app/components/general/footer/Footer";
import Link from "next/link";

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function AlojamientoForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    costo: "",
    descripcion: "",
  });

  const [position, setPosition] = useState<[number, number]>([4.5709, -74.2973]); // Bogotá, Colombia
  const [mapInitialized, setMapInitialized] = useState(false); // Estado para controlar la inicialización del mapa

  // Allows the user to select a location on the map
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return position === null ? null : <Marker position={position} icon={markerIcon} />;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del alojamiento:", formData);
    console.log("Ubicación seleccionada:", position);
  };

  // Efecto para inicializar el mapa solo una vez
  useEffect(() => {
    if (!mapInitialized) {
      setMapInitialized(true);
    }
  }, [mapInitialized]);

  return (
    <div>
      <Header />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#275950]">Registro de Alojamiento</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#9BF2EA]">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#275950]">Información del Alojamiento</h2>
              <p className="text-[#41BFB3] text-sm">Ingresa los detalles de tu propiedad</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="nombre" className="block font-medium text-[#275950]">Nombre del Alojamiento</label>
                <input 
                  id="nombre" 
                  name="nombre" 
                  value={formData.nombre} 
                  onChange={handleInputChange} 
                  placeholder="Ej: Villa Paraíso" 
                  required 
                  className="w-full px-3 py-2 border border-[#9BF2EA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#41BFB3]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="direccion" className="block font-medium text-[#275950]">Dirección</label>
                <input 
                  id="direccion" 
                  name="direccion" 
                  value={formData.direccion} 
                  onChange={handleInputChange} 
                  placeholder="Ej: Av. Principal #123, Ciudad" 
                  required 
                  className="w-full px-3 py-2 border border-[#9BF2EA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#41BFB3]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="costo" className="block font-medium text-[#275950]">Costo por mes (COP)</label>
                <input 
                  id="costo" 
                  name="costo" 
                  type="number" 
                  value={formData.costo} 
                  onChange={handleInputChange} 
                  placeholder="Ej: 1500" 
                  required 
                  className="w-full px-3 py-2 border border-[#9BF2EA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#41BFB3]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="descripcion" className="block font-medium text-[#275950]">Descripción</label>
                <textarea 
                  id="descripcion" 
                  name="descripcion" 
                  value={formData.descripcion} 
                  onChange={handleInputChange} 
                  placeholder="Describe tu alojamiento..." 
                  rows={4} 
                  className="w-full px-3 py-2 border border-[#9BF2EA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#41BFB3]"
                />
              </div>
              <Link href="/caracteristicas">
                <button 
                  type="submit" 
                  className="w-full bg-[#2A8C82] text-white py-2 px-4 rounded-md hover:bg-[#275950] focus:outline-none focus:ring-2 focus:ring-[#41BFB3] focus:ring-offset-2 transition-colors"
                >
                  Guardar Alojamiento
                </button>
              </Link>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#9BF2EA]">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-[#275950]">Ubicación</h2>
              <p className="text-[#41BFB3] text-sm">Haz clic en el mapa para seleccionar la ubicación</p>
            </div>
            
            <div className="h-[400px]">
              {mapInitialized && ( // Renderiza el mapa solo si está inicializado
                <MapContainer center={position} zoom={6} style={{ width: "100%", height: "100%", minHeight: "400px" }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <LocationMarker />
                </MapContainer>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}