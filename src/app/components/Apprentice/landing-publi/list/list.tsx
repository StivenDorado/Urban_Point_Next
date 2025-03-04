import { Wifi, Droplet, Zap, Bath, ChefHat, Bed, Shirt, Dog } from "lucide-react"

export default function AmenitiesList() {
  const amenities = [
    { icon: <Wifi className="h-4 w-4" />, name: "WiFi" },
    { icon: <Bath className="h-4 w-4" />, name: "Baño" },
    { icon: <Dog className="h-4 w-4" />, name: "Se permite mascota" },
    { icon: <Droplet className="h-4 w-4" />, name: "Agua" },
    { icon: <ChefHat className="h-4 w-4" />, name: "Cocina" },
    { icon: <Bed className="h-4 w-4" />, name: "Cama incluida" },
    { icon: <Zap className="h-4 w-4" />, name: "Energía" },
    { icon: <Shirt className="h-4 w-4" />, name: "Lavandería" },
    { icon: <Wifi className="h-4 w-4" />, name: "Con domiciliario" },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="p-1">{amenity.icon}</div>
          <span className="text-sm">{amenity.name}</span>
        </div>
      ))}
    </div>
  )
}

