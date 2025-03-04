import { Button } from "../../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"

export default function ReservationBox() {
  return (
    <div className="bg-gray-100 rounded-lg p-4 sticky top-4">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="font-bold">$200.000 COP / Mensual</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label className="text-xs block mb-1">Llegada</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="17/05/2024" />
          </div>
          <div>
            <label className="text-xs block mb-1">Salida</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="30/05/2024" />
          </div>
        </div>

        <div className="mb-2">
          <label className="text-xs block mb-1">Huéspedes</label>
          <Select defaultValue="1">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 huésped</SelectItem>
              <SelectItem value="2">2 huéspedes</SelectItem>
              <SelectItem value="3">3 huéspedes</SelectItem>
              <SelectItem value="4">4 huéspedes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full bg-gray-500 hover:bg-gray-600 text-white mb-2">RESERVAR</Button>
      <Button variant="outline" className="w-full mb-4">
        OFRECER PRECIO
      </Button>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Precio mensual</span>
          <span>$200.000 COP</span>
        </div>
        <div className="flex justify-between">
          <span>Gastos incluidos</span>
          <span>$150.000 COP</span>
        </div>
        <div className="border-t pt-2 mt-2 flex justify-between font-bold">
          <span>Total del costo</span>
          <span>$350.000 COP</span>
        </div>
      </div>
    </div>
  )
}

