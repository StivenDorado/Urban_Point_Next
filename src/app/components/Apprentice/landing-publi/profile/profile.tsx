import { Button } from "@/components/ui/button"

export default function LandlordProfile() {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex gap-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
          <div className="text-center">
            <h3 className="font-medium text-sm">David Lossada</h3>
            <p className="text-xs text-gray-500">Superarrendador</p>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold mb-2">David lossada es Superarrendador</h3>
          <p className="text-sm mb-4">
            Los Superarrendadores tienen mucha experiencia, tienen calificaciones excelentes y se destacan en el
            servicio para ofrecerles una hospedaje extraordinario.
          </p>

          <h4 className="font-bold text-sm mb-2">Información sobre el arrendador</h4>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span>Índice de respuesta: 95%</span>
            </div>
            <div className="flex justify-between">
              <span>Responde en menos de una hora</span>
            </div>
          </div>

          <div className="mt-4">
            <Button className="w-full bg-black text-white hover:bg-gray-800">Mensaje al arrendador</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

